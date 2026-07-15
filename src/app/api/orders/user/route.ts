import { auth } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    console.log('hitting route')
    const db = await getDatabase();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
console.log('userId:', userId);
    // Fetch orders from database using userId...
    const orders = await db.collection('orders').find({ userId }).toArray();

    return NextResponse.json(orders, { status: 200 });
}