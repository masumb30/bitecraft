import React from 'react';
import { notFound } from 'next/navigation';
import { Meal } from '../types';
import MealHero from './MealHero';
import MealReviews from './MealReview';
import MealSidebarOrder from './MealSidebarOrder';
import MealCommentForm from './MealCommentForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';


export default async function MealDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const userData = await auth.api.getSession({
        headers: await headers()
    });
    const user = await userData?.user;
    const { id } = await params;
    const data = await fetch(`https://bitecraft-wleh.onrender.com/api/meals/${id}`, {
        next: { revalidate: 0 }, // Adjust caching time strategy as needed (0 for live testing)
    });
    const mealData: Meal = await data.json();

    console.log('Fetched Meal Data:', mealData);

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
                    {/* only render if user role is 'user' */}

                    {
                        user?.role === 'user' ?

                            <div className="lg:col-span-4">

                                <MealSidebarOrder meal={mealData} timesSold={482} />
                            </div>
                            :
                            <div className="lg:col-span-4 flex items-center justify-center bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-6 rounded-lg">
                                <p>Orders are for users only, log in as user</p>
                            </div>
                    }

                </div>

                <div className="mt-2">

                    <MealCommentForm />
                    <MealReviews />
                </div>

            </div>
        </main>
    );
}