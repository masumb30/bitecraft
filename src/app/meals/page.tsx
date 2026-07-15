import React from 'react';
import { Meal } from './types';
import MealCard from './MealCard';
import ExploreControls from './ExploreControl';

interface PageProps {
  searchParams: Promise<{
    search?: string;
    diet?: string;
    neighborhood?: string;
    maxPrice?: string;
    sortBy?: string;
  }>;
}

// Absolute base URL provider helper for NextJS server-side fetching
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'https://bitecraft-wleh.onrender.com';
};

export default async function ExplorePage({ searchParams }: PageProps) {
  // Await searchParams as required in recent Next.js App Router versions
  const resolvedParams = await searchParams;
  
  const searchQuery = resolvedParams.search || '';
  const selectedDiet = resolvedParams.diet || 'All';
  const selectedNeighborhood = resolvedParams.neighborhood || 'All';
  const maxPrice = resolvedParams.maxPrice ? Number(resolvedParams.maxPrice) : 100;
  const sortBy = resolvedParams.sortBy || 'delivery';

  let rawMeals: Meal[] = [];
  
  try {
    // Fetch direct from your API route with standard caching controls
    const response = await fetch(`https://bitecraft-wleh.onrender.com/api/meals`, {
      next: { revalidate: 0 }, // Adjust caching time strategy as needed (0 for live testing)
    });
  
    if (response.ok) {
      rawMeals = await response.json();
    }
  } catch (error) {
    console.error("Failed to retrieve marketplace collections from server:", error);
  }

  // --- SERVER-SIDE RUNTIME FILTER ENGINE ---
  const filteredMeals = rawMeals
    .filter((meal) => {
      const matchesSearch =
        (meal as any).title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDiet = selectedDiet === 'All' || meal.dietaryTag === selectedDiet;
      const matchesLocation = selectedNeighborhood === 'All' || meal.neighborhood === selectedNeighborhood;
      const matchesPrice = meal.price <= maxPrice;

      return matchesSearch && matchesDiet && matchesLocation && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.deliveryDaysFromNow - b.deliveryDaysFromNow;
    });

  return (
    <main className="min-h-screen bg-slate-50 transition-colors duration-200 dark:bg-slate-950 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Segment */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Explore Marketplace Menus
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Discover artisanal culinary creations matching your lifestyle metrics. Order customized boxes prepared locally and fresh.
          </p>
        </div>

        {/* Separated Filters Controller passing current states for UI sync */}
        <ExploreControls
          currentSearch={searchQuery}
          currentDiet={selectedDiet}
          currentMaxPrice={maxPrice}
          currentSortBy={sortBy}
        />

        {/* --- GRID INTERFACE TARGET LAYER --- */}
        {filteredMeals.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
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