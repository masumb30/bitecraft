import React from 'react';
import { notFound } from 'next/navigation';
import { Meal } from '../types';
import MealHero from './MealHero';
import MealReviews from './MealReview';
import MealSidebarOrder from './MealSidebarOrder';
import MealCommentForm from './MealCommentForm';



// Reference Dummy Set for Server Parsing Lookup
const DATA_SOURCE: Meal[] = [
    { id: '1', title: 'Chimichurri Flank Steak', chefName: 'Marcus Glass', description: 'Tender wood-fired flank steak slices crowned with raw garlic-herb chimichurri sauce. Served with loaded cauliflower mash.', price: 18.50, rating: 4.89, dietaryTag: 'Keto', neighborhood: 'The Heights', deliveryDaysFromNow: 1, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
];

interface PageProps {
    params: { id: string };
}

export default function MealDetailPage() {
    // Find specific structural asset match
    const selectedMeal = DATA_SOURCE[0];

    // Return standard next clean 404 block if dynamic lookup misses
    if (!selectedMeal) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 transition-colors duration-200 dark:bg-slate-950 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Standard Breadcrumb Back Navigation link Link */}
                <a
                    href="/explore"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-6 group"
                >
                    <span>←</span> <span className="group-hover:underline">Back to Marketplace Marketplace</span>
                </a>

                {/* Layout Grid Division split */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">

                    {/* Main Column Side (Details & Review Feed logs) */}
                    <div className="lg:col-span-8 space-y-6">
                        <MealHero meal={selectedMeal} />
                    </div>

                    {/* Sticky Ordering Side Deck */}
                    <div className="lg:col-span-4">

                        <MealSidebarOrder meal={selectedMeal} timesSold={482} />
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