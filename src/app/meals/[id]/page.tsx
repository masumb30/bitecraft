import React from 'react';
import { notFound } from 'next/navigation';
import { Meal } from '../types';
import MealHero from './MealHero';
import MealReviews from './MealReview';
import MealSidebarOrder from './MealSidebarOrder';
import MealCommentForm from './MealCommentForm';



// // Reference Dummy Set for Server Parsing Lookup
// const DATA_SOURCE: Meal[] = [
//     { id: '1', title: 'Chimichurri Flank Steak', chefName: 'Marcus Glass', description: 'Tender wood-fired flank steak slices crowned with raw garlic-herb chimichurri sauce. Served with loaded cauliflower mash.', price: 18.50, rating: 4.89, dietaryTag: 'Keto', neighborhood: 'The Heights', deliveryDaysFromNow: 1, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
// ];

// interface PageProps {
//     params: { id: string };
// }

export default async function MealDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const data = await fetch(`http://localhost:3000/api/meals/${id}`, {
        next: { revalidate: 0 }, // Adjust caching time strategy as needed (0 for live testing)
    });
    const mealData: Meal = await data.json();
    console.log('meal details: ', mealData)

    if (!mealData) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 transition-colors duration-200 dark:bg-slate-950 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Standard Breadcrumb Back Navigation link Link */}
                <a
                    href="/meals"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-6 group"
                >
                    <span>←</span> <span className="group-hover:underline">Back to Marketplace Marketplace</span>
                </a>

                {/* Layout Grid Division split */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">

                    {/* Main Column Side (Details & Review Feed logs) */}
                    <div className="lg:col-span-8 space-y-6">
                        <MealHero meal={mealData} />
                    </div>

                    {/* Sticky Ordering Side Deck */}
                    <div className="lg:col-span-4">

                        <MealSidebarOrder meal={mealData} timesSold={482} />
                    </div>

                </div>

                <div className="mt-2">

                    <MealCommentForm />
                    <MealReviews />
                </div>

            </div>
        </main>
    );
}