import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb'; // Import this if your DB stores IDs as ObjectIds
import { getDatabase } from '@/lib/mongodb';

export async function GET(request: NextRequest): Promise<NextResponse> {
  
  try {
    const db = await getDatabase();

    // 1. Extract the specific chefId from the URL parameters
    const { searchParams } = new URL(request.url);
    const chefId = searchParams.get('chefId');

    if (!chefId) {
      return NextResponse.json(
        { success: false, error: 'Missing required query parameter: chefId' },
        { status: 400 }
      );
    }

    // 2. Fetch meals matching the chefId directly
    // Note: If your database stores chefId as a String instead of an ObjectId,
    // change `new ObjectId(chefId)` to just `chefId`
    const mealsByChef = await db
      .collection('meals')
      .find({ chefId: new ObjectId(chefId) })
      .toArray();

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