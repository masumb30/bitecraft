import { NextResponse } from "next/server";
import { headers } from "next/headers";
import type { NextRequest } from 'next/server';
import { auth } from "./lib/auth"; // Ensure this path points to your server auth instance

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const session = await auth.api.getSession({
        headers: await headers()
    });

    // 1. Authentication Check: If no session, bounce to login
    if (!session || !session.user) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('callbackUrl', pathname + request.nextUrl.search);
        return NextResponse.redirect(loginUrl);
    }

    // Ensure we have a clean lowercase string for role comparison
    const userRole = session.user.role?.toLowerCase() || 'user'; 

    // 2. Fix for the Login Redirect Preference Loop:
    // If a user just logged in and lands on a generic dashboard path or an explicit wrong-role path,
    // intercept and route them to their actual home layout context.
    if (pathname === "/dashboard" || pathname === "/dashboard/") {
        return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url));
    }

    // 3. Authorization Check: Role-based routing protection
    if (pathname.startsWith("/dashboard")) {
        
        // Guard Admin Dashboard: ONLY admins allowed
        if (pathname.startsWith("/dashboard/admin") && userRole !== "admin") {
            return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url));
        }

        // Guard chef Dashboard: Only chefs allowed (Admins should go to /dashboard/admin instead of squatting here)
        if (pathname.startsWith("/dashboard/chef") && userRole !== "chef") {
            return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url));
        }

        // Guard user Dashboard: Only users allowed
        if (pathname.startsWith("/dashboard/user") && userRole !== "user") {
            return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url));
        }
    }

    return NextResponse.next();
}

// export const config = {
//     // Target all sub-routes of /dashboard and sub-routes of /properties
//     matcher: ["/dashboard/:path*"], 
// };

export const config = {
  matcher: [
    '/dashboard',
    '/dashboard/((?!_next/static|_next/image|favicon.ico).*)*',
  ],
}