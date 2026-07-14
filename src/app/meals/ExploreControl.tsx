'use client';

import React from 'react';

interface ExploreControlsProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedDiet: string;
  setSelectedDiet: (val: string) => void;
  selectedNeighborhood: string;
  setSelectedNeighborhood: (val: string) => void;
  maxPrice: number;
  setMaxPrice: (val: number) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
}

export default function ExploreControls({
  searchQuery, setSearchQuery,
  selectedDiet, setSelectedDiet,
  selectedNeighborhood, setSelectedNeighborhood,
  maxPrice, setMaxPrice,
  sortBy, setSortBy
}: ExploreControlsProps) {
  
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
        
        {/* Search Field */}
        <div className="lg:col-span-3">
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 block mb-2 uppercase tracking-wide">Search Menus</label>
          <input
            type="text"
            placeholder="Search meal or chef..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/10 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
          />
        </div>

        {/* Dietary Drops */}
        <div className="lg:col-span-2">
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 block mb-2 uppercase tracking-wide">Diet Protocol</label>
          <select
            value={selectedDiet}
            onChange={(e) => setSelectedDiet(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
          >
            <option value="All">All Diets</option>
            <option value="Keto">Keto</option>
            <option value="Vegan">Vegan</option>
            <option value="Halal">Halal</option>
            <option value="High-Protein">High-Protein</option>
          </select>
        </div>

        {/* Location Drop */}
        <div className="lg:col-span-2">
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 block mb-2 uppercase tracking-wide">Neighborhood</label>
          <select
            value={selectedNeighborhood}
            onChange={(e) => setSelectedNeighborhood(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
          >
            <option value="All">All Regions</option>
            <option value="Downtown">Downtown</option>
            <option value="The Heights">The Heights</option>
            <option value="Northside">Northside</option>
            <option value="West End">West End</option>
          </select>
        </div>

        {/* Price slider */}
        <div className="lg:col-span-3 px-1">
          <div className="flex justify-between text-xs font-bold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wide">
            <span>Max Price</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">${maxPrice}</span>
          </div>
          <input
            type="range"
            min={10}
            max={30}
            step={1}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-emerald-600 dark:accent-emerald-500"
          />
        </div>

        {/* Sorting Index */}
        <div className="lg:col-span-2">
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 block mb-2 uppercase tracking-wide">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
          >
            <option value="delivery">Soonest Delivery</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>

      </div>
    </div>
  );
}