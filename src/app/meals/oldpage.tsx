'use client';

import React, { useState, useEffect } from 'react';
import { Meal } from './types';
import MealCard, { MealCardSkeleton } from './MealCard';
import ExploreControls from './oldExploreControl';



// --- 10 PREMIUM DUMMY MEAL DATA SETS ---
const MOCK_MEALS: Meal[] = [
  { id: '1', title: 'Chimichurri Flank Steak', chefName: 'Marcus Glass', description: 'Tender wood-fired flank steak slices crowned with raw garlic-herb chimichurri sauce. Served with loaded cauliflower mash.', price: 18.50, rating: 4.89, dietaryTag: 'Keto', neighborhood: 'The Heights', deliveryDaysFromNow: 1, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
  { id: '2', title: 'Spiced Chickpea Nourish Bowl', chefName: 'Sarah Mitchell', description: 'Warm oven-roasted organic chickpeas, shaved purple cabbage, maple-tahini massage kale, and hand-squeezed lime cream.', price: 14.20, rating: 4.95, dietaryTag: 'Vegan', neighborhood: 'Downtown', deliveryDaysFromNow: 2, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
  { id: '3', title: 'Lemon Herb Halal Chicken', chefName: 'Ayesha Khan', description: 'Ethically sourced premium split breasts marinated over 24 hours in fresh zest, rosemary infusions, and extra virgin olive oil.', price: 16.00, rating: 4.98, dietaryTag: 'Halal', neighborhood: 'West End', deliveryDaysFromNow: 1, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80' },
  { id: '4', title: 'Sesame Crusted Salmon Plate', chefName: 'Marcus Glass', description: 'Wild-caught Atlantic salmon fillet flashed with black sesame clusters. Bound alongside garlic-sautéed bok choy greens.', price: 21.00, rating: 4.92, dietaryTag: 'High-Protein', neighborhood: 'The Heights', deliveryDaysFromNow: 3, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80' },
  { id: '5', title: 'Avocado Pesto Zucchini Noodles', chefName: 'Sarah Mitchell', description: 'Ribbon-cut zucchini spiralized fresh, tossed in cold-pressed walnut avocado basil pesto sauce and cherry vine tomatoes.', price: 13.50, rating: 4.78, dietaryTag: 'Vegan', neighborhood: 'Downtown', deliveryDaysFromNow: 1, image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=400&q=80' },
  { id: '6', title: 'Smoked Brisket & Asparagus Medley', chefName: 'Tomás Rivera', description: 'Low-and-slow oak-smoked beef brisket cuts paired with charred asparagus spears and standard rich grass-fed herb butter.', price: 19.80, rating: 4.85, dietaryTag: 'Keto', neighborhood: 'Northside', deliveryDaysFromNow: 2, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80' },
  { id: '7', title: 'Moroccan Lamb Tagine Bowl', chefName: 'Ayesha Khan', description: 'Slow-braised halal lamb shoulder steeped in ginger-turmeric reductions, dried apricots, and dynamic whole grain fluffy quinoa.', price: 22.50, rating: 4.99, dietaryTag: 'Halal', neighborhood: 'West End', deliveryDaysFromNow: 2, image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=400&q=80' },
  { id: '8', title: 'Garlic Butter Turkey Macro-Bowls', chefName: 'Tomás Rivera', description: 'Lean ground turkey sautéed with minced garlic cloves and red pepper flakes over fiber-dense riced vegetable medleys.', price: 15.00, rating: 4.69, dietaryTag: 'High-Protein', neighborhood: 'Northside', deliveryDaysFromNow: 1, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80' },
  { id: '9', title: 'Almond Crust Artisan Quiche Slice', chefName: 'Sarah Mitchell', description: 'Baked pasture-raised egg custard whipped with wild mushrooms, baby spinach leaves, and nested in a nutty almond meal crust.', price: 12.90, rating: 4.81, dietaryTag: 'Keto', neighborhood: 'Downtown', deliveryDaysFromNow: 3, image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=400&q=80' },
  { id: '10', title: 'Sweet Potato Chickpea Coconut Curry', chefName: 'Ayesha Khan', description: 'Simmered cubed sweet potatoes and loaded garbanzos inside a velvet spiced lemongrass-ginger coconut milk broth.', price: 14.80, rating: 4.90, dietaryTag: 'Vegan', neighborhood: 'West End', deliveryDaysFromNow: 1, image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=80' },
];

export default function ExplorePage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Filtering States Matrix
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDiet, setSelectedDiet] = useState<string>('All');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(25);
  const [sortBy, setSortBy] = useState<string>('delivery');

  // Simulate structural data fetch on initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  // --- COMPREHENSIVE RUNTIME FILTER ENGINE ---
  const filteredMeals = MOCK_MEALS.filter((meal) => {
    const matchesSearch = 
      meal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meal.chefName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiet = selectedDiet === 'All' || meal.dietaryTag === selectedDiet;
    const matchesLocation = selectedNeighborhood === 'All' || meal.neighborhood === selectedNeighborhood;
    const matchesPrice = meal.price <= maxPrice;

    return matchesSearch && matchesDiet && matchesLocation && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.deliveryDaysFromNow - b.deliveryDaysFromNow; // default 'delivery'
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

        {/* Separated Filters Controller (Client Side Interactivity Block) */}
        <ExploreControls
          searchQuery={searchQuery} setSearchQuery={setSearchQuery}
          selectedDiet={selectedDiet} setSelectedDiet={setSelectedDiet}
          selectedNeighborhood={selectedNeighborhood} setSelectedNeighborhood={setSelectedNeighborhood}
          maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          sortBy={sortBy} setSortBy={setSortBy}
        />

        {/* --- GRID INTERFACE TARGET LAYER --- */}
        {isLoading ? (
          /* Render Skeleton Blueprints Mock Grid during data loading simulation */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <MealCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredMeals.length > 0 ? (
          /* Main Functional Card Output matching 4 items per row layout constraints */
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