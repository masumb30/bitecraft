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
    const userRole = session.user.role?.toLowerCase() || 'tenant'; 

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

        // Guard Owner Dashboard: Only owners allowed (Admins should go to /dashboard/admin instead of squatting here)
        if (pathname.startsWith("/dashboard/owner") && userRole !== "owner") {
            return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url));
        }

        // Guard Tenant Dashboard: Only tenants allowed
        if (pathname.startsWith("/dashboard/tenant") && userRole !== "tenant") {
            return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    // Target all sub-routes of /dashboard and sub-routes of /properties
    matcher: ["/dashboard/:path*", "/properties/:path+"], 
};