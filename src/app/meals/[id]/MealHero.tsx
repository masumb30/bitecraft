import React from 'react';
import { Meal } from '../types';

interface MealHeroProps {
  meal: Meal;
}

export default function MealHero({ meal }: MealHeroProps) {
  // Mock detailed macros for premium nutritional depth
  const macros = { protein: '38g', carbs: '12g', fat: '32g', calories: '490 kcal' };

  return (
    <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      {/* Structural Image Framing */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950">
        <img
          className="h-full w-full object-cover"
          src={meal.image}
          alt={meal.title}
        />
        <span className="absolute top-4 left-4 rounded-lg bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white dark:bg-emerald-500">
          {meal.dietaryTag}
        </span>
      </div>

      {/* Header and Branding Attribution */}
      <div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span>Prepared by <span className="font-semibold text-slate-900 dark:text-slate-200">{meal.chefName}</span></span>
          <span>•</span>
          <span>📍 {meal.neighborhood}</span>
        </div>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          {meal.title}
        </h1>
      </div>

      {/* Macro-Nutrient Profile Bar */}
      <div className="grid grid-cols-4 gap-2 rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-950/60">
        {Object.entries(macros).map(([key, val]) => (
          <div key={key}>
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">{key}</span>
            <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">{val}</span>
          </div>
        ))}
      </div>

      {/* Narrative Section */}
      <div className="space-y-4 border-t border-slate-100 pt-6 dark:border-slate-800/60">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-50">Chef's Description</h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {meal.description} Crafted fresh using raw, sustainably sourced local ingredients. We avoid heavy oils or refined sugars entirely, prioritizing raw clean energy profiles.
        </p>
      </div>
    </div>
  );
}