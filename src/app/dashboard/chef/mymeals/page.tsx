import React from 'react';
import ExploreControls from '@/app/meals/ExploreControl';
import MealCard, { MealCardSkeleton } from '@/app/meals/MealCard';
import { Meal } from '@/app/meals/types';
import { authClient } from '@/lib/auth-client';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';




interface PageProps {
  searchParams: Promise<{
    search?: string;
    diet?: string;
    neighborhood?: string;
    maxPrice?: string;
    sortBy?: string;
  }>;
}



export default async function ExplorePage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;


  let rawMeals: Meal[] = [];
  
  try {
    const chefId = await auth.api.getSession({
        headers: await headers()
    });


    const response = await fetch(`http://localhost:3000/api/mealsbychef?chefId=${chefId?.user.id}`, {
      next: { revalidate: 0 }, // Adjust caching time strategy as needed (0 for live testing)
    });
  
    if (response.ok) {
      rawMeals = await response.json();
    }
  } catch (error) {
    console.error("Failed to retrieve marketplace collections from server:", error);
  }


  return (
    <main className="min-h-screen bg-slate-50 transition-colors duration-200 dark:bg-slate-950 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Segment */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            My Menu
          </h1>
         
        </div>

       

        {/* --- GRID INTERFACE TARGET LAYER --- */}
        {rawMeals.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {rawMeals.map((meal) => (
              <MealCard key={(meal as any)._id} meal={meal} />
            ))}
          </div>
        ) : (
          /* Empty Output Fallback Layer */
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
            <span className="text-3xl block mb-3">🍽️</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-50">No meals found</h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
              Try modifying your price slider, text entries or choosing another neighborhood filter setup.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}