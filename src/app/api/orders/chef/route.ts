import { auth } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    console.log('hitting route')
    const db = await getDatabase();

    const { searchParams } = new URL(request.url);
    const chefId = searchParams.get("chefId");
    // Fetch orders from database using userId...
    const orders = await db.collection('orders').find({ chefId }).toArray();

    return NextResponse.json(orders, { status: 200 });
}