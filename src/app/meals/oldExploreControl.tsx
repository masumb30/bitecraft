'use client';

import React, { useTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface ExploreControlsProps {
  currentSearch: string;
  currentDiet: string;
  currentNeighborhood: string;
  currentMaxPrice: number;
  currentSortBy: string;
}

export default function ExploreControls({
  currentSearch,
  currentDiet,
  currentNeighborhood,
  currentMaxPrice,
  currentSortBy,
}: ExploreControlsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  // Helper utility to update URL parameters fluidly without hard page reloads
  const updateSearchParam = (key: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === 'All' || value === '' || (key === 'maxPrice' && Number(value) === 25)) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }

    // Wrap in transition to preserve high-fidelity interface responsiveness
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Search Field Input */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-50">
            Search Meals or Chefs
          </label>
          <input
            type="text"
            value={currentSearch}
            onChange={(e) => updateSearchParam('search', e.target.value)}
            placeholder="Search tacos, burgers, Marcus..."
            className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400 text-sm"
          />
        </div>

        {/* Dietary Tag Select Menu */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-50">
            Dietary Metric
          </label>
          <select
            value={currentDiet}
            onChange={(e) => updateSearchParam('diet', e.target.value)}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm cursor-pointer"
          >
            <option value="All">All Diets</option>
            <option value="Keto">Keto</option>
            <option value="Vegan">Vegan</option>
            <option value="Halal">Halal</option>
            <option value="High-Protein">High-Protein</option>
          </select>
        </div>

        {/* Neighborhood Select Menu */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-50">
            Neighborhood Location
          </label>
          <select
            value={currentNeighborhood}
            onChange={(e) => updateSearchParam('neighborhood', e.target.value)}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm cursor-pointer"
          >
            <option value="All">All Neighborhoods</option>
            <option value="The Heights">The Heights</option>
            <option value="Downtown">Downtown</option>
            <option value="West End">West End</option>
            <option value="Northside">Northside</option>
          </select>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
        
        {/* Maximum Price Slider */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-50">
              Max Price Cap
            </label>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-500">
              ${currentMaxPrice.toFixed(2)}
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            step="0.5"
            value={currentMaxPrice}
            onChange={(e) => updateSearchParam('maxPrice', e.target.value)}
            className="w-full h-2 bg-slate-100 dark:bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-emerald-500"
          />
        </div>

        {/* Sorting Matrix Select Menu */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-50">
            Sort Layout By
          </label>
          <select
            value={currentSortBy}
            onChange={(e) => updateSearchParam('sortBy', e.target.value)}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm cursor-pointer"
          >
            <option value="delivery">Fastest Delivery Target</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated Community Chefs</option>
          </select>
        </div>

      </div>
    </div>
  );
}