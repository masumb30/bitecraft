import { getDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = await getDatabase(); 
    const { id } = await params;

    // 1. Fetch the base meal data
    const meal = await db.collection('meals').findOne({ _id: new ObjectId(id) });
    if (!meal) {
      return NextResponse.json({ error: 'Meal not found' }, { status: 404 });
    }

    // 2. Look up the Chef information
    const chefInfo = await db.collection('user').findOne({ _id: new ObjectId(meal.chefId) });

    // 3. Look up user info for all reviews in parallel using Promise.all
    // const populatedReviews = await Promise.all(
    //   meal.reviews?.map(async (review:any) => {
    //     const userInfo = await db.collection('user').findOne({ _id: new ObjectId(review.userId) });

    //     // Return the review item with the additional userInfo field attached
    //     return {
    //       ...review,
    //       userInfo: userInfo
    //     };
    //   })
    // );

    // 4. Combine everything into your final response object
    const mealDetails = {
      id: meal._id,
      image: meal.image,
      description: meal.description,
      dietaryTag: meal.dietaryTag,
      deliveryDaysFromNow: meal.deliveryDaysFromNow,
      name: meal.title,
      price: meal.price,
      chefId: meal.chefId,
      chefInfo: chefInfo, // Added chef info
      // reviews: populatedReviews // Replaced with our populated array
      reviews: []
    };

    return NextResponse.json(mealDetails, { status: 200 });

  } catch (error) {
    console.error('Error compiling meal details:', error);
    return NextResponse.json(
      { error: 'Failed to compile meal data' },
      { status: 500 }
    );
  }
}