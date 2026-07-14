import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

import { MealDB, PopulatedMeal } from '@/app/types/type';
import { ObjectId } from 'mongodb';

export async function GET(): Promise<NextResponse> {
  try {
    const db = await getDatabase(); 
    
    // Use an aggregation pipeline to join the 'meals' collection with the 'chefs' collection
    const populatedMeals = await db.collection('meals').aggregate<PopulatedMeal>([
      {
        // 1. Join with the chefs collection
        $lookup: {
          from: 'chefs',
          localField: 'chefId',
          foreignField: '_id',
          as: 'chefDetails'
        }
      },
      {
        // 2. Deconstruct the array returned by $lookup into a single object
        $unwind: '$chefDetails'
      },
      {
        // 3. Project the final structure to perfectly match the PopulatedMeal interface
        $project: {
          _id: 0, // Exclude the raw ObjectId
          id: { $toString: '$_id' }, // Convert the database _id into a string "id"
          title: 1,
          description: 1,
          price: 1,
          rating: 1,
          dietaryTag: 1,
          deliveryDaysFromNow: 1,
          image: 1,
          createdAt: 1,
          // Shape the nested chef object expected by your frontend
          chef: {
            id: { $toString: '$chefDetails._id' },
            name: '$chefDetails.name',
            avatar: '$chefDetails.avatar',
            neighborhood: '$chefDetails.neighborhood'
          }
        }
      }
    ]).toArray();
    
    return NextResponse.json({ success: true, data: populatedMeals }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown database error';
    console.error('Database fetch error:', errorMessage);
    
    return NextResponse.json(
      { success: false, error: 'Database error' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const db = await getDatabase();
    const body = await request.json();

    // 1. Extract and validate incoming payload properties
    const { 
      chefId, 
      title, 
      description, 
      price, 
      dietaryTag, 
      deliveryDaysFromNow, 
      image 
    } = body;

    if (!chefId || !title || !price || !dietaryTag) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Format the payload to strictly align with MealDB interface constraints
    const newMeal: MealDB = {
      // Convert the string representation of ID coming from the client into a MongoDB ObjectId
      chefId: new ObjectId(chefId as string), 
      title: title as string,
      description: (description || '') as string,
      price: Number(price),
      rating: 5, // Default initial aggregate score for newly uploaded plates
      dietaryTag: dietaryTag as 'Keto' | 'Vegan' | 'Halal' | 'High-Protein',
      deliveryDaysFromNow: Number(deliveryDaysFromNow || 0),
      image: (image || '') as string,
      createdAt: new Date() // Stamped processing timestamp
    };

    // 3. Write data safely to the database
    const result = await db.collection<MealDB>('meals').insertOne(newMeal);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Meal created successfully', 
        insertedId: result.insertedId.toString() 
      },
      { status: 201 }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown database execution error';
    console.error('Database write error:', errorMessage);

    return NextResponse.json(
      { success: false, error: 'Failed to create meal data' },
      { status: 500 }
    );
  }
}