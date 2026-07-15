import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb'; // Import this if your DB stores IDs as ObjectIds
import { getDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest): Promise<NextResponse> {
  
  try {
    const data =  await request.json();
    const db = await getDatabase();

    const mealsByChef = await db
      .collection('orders').insertOne(data)

    return NextResponse.json(mealsByChef, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown database error';
    console.error('Database fetch error:', errorMessage);

    return NextResponse.json(
      { success: false, error: 'Failed to fetch meals for the specified chef' },
      { status: 500 }
    );
  }
}