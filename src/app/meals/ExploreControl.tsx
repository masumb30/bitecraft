'use client';

import React, { useState, useTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface ExploreControlsProps {
  currentSearch: string;
  currentDiet: string;
  currentMaxPrice: number;
  currentSortBy: string;
}

export default function ExploreControls({
  currentSearch,
  currentDiet,
  currentMaxPrice,
  currentSortBy,
}: ExploreControlsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  // Local state to hold user input before they hit the submit/filter button
  const [search, setSearch] = useState(currentSearch);
  const [diet, setDiet] = useState(currentDiet);
  const [maxPrice, setMaxPrice] = useState(currentMaxPrice);
  const [sortBy, setSortBy] = useState(currentSortBy);

  // Single source of truth to batch update the URL params on button click
  const handleApplyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Process Search
    if (!search.trim()) params.delete('search');
    else params.set('search', search);

    // Process Diet
    if (diet === 'All' || !diet) params.delete('diet');
    else params.set('diet', diet);

    // Process Max Price (Defaults to 100)
    if (Number(maxPrice) === 25) params.delete('maxPrice');
    else params.set('maxPrice', String(maxPrice));

    // Process Sort By
    if (!sortBy) params.delete('sortBy');
    else params.set('sortBy', sortBy);

    // Batch wrap inside a transition to keep the UI snappy
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
      {/* Dynamic 4-Column Layout for Desktop, Stacked for Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        
        {/* Search Field Input */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Search
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tacos, burgers..."
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400 text-sm"
          />
        </div>

        {/* Dietary Tag Select Menu */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Dietary Metric
          </label>
          <select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm cursor-pointer"
          >
            <option value="All">All Diets</option>
            <option value="Keto">Keto</option>
            <option value="Vegan">Vegan</option>
            <option value="Halal">Halal</option>
            <option value="High-Protein">High-Protein</option>
          </select>
        </div>

        {/* Sorting Matrix Select Menu */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm cursor-pointer"
          >
            <option value="delivery">Fastest Delivery</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Maximum Price Slider */}
        <div className="flex flex-col space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Max Price Cap
            </label>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-500">
              ${Number(maxPrice).toFixed(2)}
            </span>
          </div>
          <div className="h-9 flex items-center">
            <input
              type="range"
              min="1"
              max="500"
              step="0.5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-100 dark:bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-emerald-500"
            />
          </div>
        </div>

      </div>

      {/* Actions Bar */}
      <div className="flex justify-end pt-2 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={handleApplyFilters}
          className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium text-sm rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}