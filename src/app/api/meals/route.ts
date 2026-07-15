import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

import { MealDB, PopulatedMeal } from '@/app/types/type';
import { ObjectId } from 'mongodb';




export async function GET(request: NextRequest): Promise<NextResponse> {
  
  try {
    const db = await getDatabase();

    const all = await db.collection('meals').find({}).toArray();
    

    // Extract query parameters from the request URL
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const diet = searchParams.get('diet') || 'All';
    const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : null;
    const sortBy = searchParams.get('sortBy') || 'delivery';

    // 1. Core structural aggregation steps: Join and flatten the Chef document
    const pipeline: any[] = [
      {
        $lookup: {
          from: 'user',
          localField: 'chefId',
          foreignField: '_id',
          as: 'chefDetails'
        }
      },
      {
        $unwind: '$chefDetails'
      }
    ];

    // 2. Dynamically build the $match filters matrix based on incoming URL parameters
    const matchStage: any = {};

    // Filter by Dietary Metric Tag if a specific one is selected
    if (diet !== 'All') {
      matchStage.dietaryTag = diet;
    }

    // Filter by Maximum Price Cap boundary if passed
    if (maxPrice !== null) {
      matchStage.price = { $lte: maxPrice };
    }

    // Full-Text Search Match across Meal Titles only
    if (search.trim() !== '') {
      matchStage.title = { $regex: search, $options: 'i' };
    }

    // Push the constructed $match criteria stage into the operational pipeline
    pipeline.push({ $match: matchStage });

    // 3. Dynamically inject the database engine sorting parameters
    let sortStage: any = {};
    if (sortBy === 'price-low') {
      sortStage = { price: 1 };
    } else if (sortBy === 'price-high') {
      sortStage = { price: -1 };
    } else if (sortBy === 'rating') {
      sortStage = { rating: -1 };
    } else {
      // Default: 'delivery' sorting index helper
      sortStage = { deliveryDaysFromNow: 1 };
    }
    pipeline.push({ $sort: sortStage });

    // 4. Project final UI shape matching your operational frontend model contracts
    pipeline.push({
      $project: {
        _id: 0,
        id: { $toString: '$_id' },
        title: 1,
        description: 1,
        price: 1,
        rating: 1,
        dietaryTag: 1,
        deliveryDaysFromNow: 1,
        image: 1,
        createdAt: 1,
        chef: {
          id: { $toString: '$chefDetails._id' },
          name: '$chefDetails.name',
          avatar: '$chefDetails.avatar',
        }
      }
    });

    

    // Execute the unified pipeline query
    const populatedMeals = await db
      .collection('meals')
      .aggregate<PopulatedMeal>(pipeline)
      .toArray();

    return NextResponse.json(populatedMeals, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown database error';
    console.error('Database fetch error during aggregation:', errorMessage);

    return NextResponse.json(
      { success: false, error: 'Database pipeline aggregation failed' },
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
      chefId: new ObjectId(chefId as string) || new ObjectId(),
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