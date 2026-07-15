import React from 'react';
import { Meal } from './types';

interface MealCardProps {
  meal: Meal;
}

export default function MealCard({ meal }: MealCardProps) {
  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:scale-[1.01] hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      
      {/* Top Half Canvas */}
      <div>
        {/* Uniform Aspect Box */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={meal.image}
            alt={meal.title}
            loading="lazy"
          />
          {/* Floating Lifestyle Badge */}
          <span className="absolute top-3 left-3 rounded-lg bg-emerald-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white dark:bg-emerald-500">
            {meal.dietaryTag}
          </span>
        </div>

        {/* Info Padding Block */}
        <div className="p-5">
          <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
            {
              meal?.chef?.name ? <span className="font-medium truncate max-w-[120px]">By {meal.chef.name}</span> : <span className="font-medium truncate max-w-[120px]"></span>
            }
            <span className="flex items-center gap-0.5 text-amber-500 dark:text-amber-400">
              ★ <span className="font-semibold text-slate-700 dark:text-slate-300">{meal.rating}</span>
            </span>
          </div>

          <h3 className="mt-2 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-slate-50 dark:group-hover:text-emerald-500 line-clamp-1">
            {meal.title}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
            {meal.description}
          </p>
        </div>
      </div>

      {/* Dynamic Metadata Anchor Block */}
      <div className="p-5 pt-0">
        <div className="mb-4 border-t border-slate-100 pt-4 dark:border-slate-800/60">
          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span className="truncate">📍 {meal.neighborhood}</span>
            <span className="font-medium text-amber-600 dark:text-amber-400">
              🚚 Delivers in {meal.deliveryDaysFromNow} {meal.deliveryDaysFromNow === 1 ? 'day' : 'days'}
            </span>
          </div>
        </div>

        {/* Pricing + Action Interface */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="text-xs text-slate-400 block">Per plate</span>
            <span className="text-lg font-extrabold text-slate-900 dark:text-slate-50">
              ${meal.price.toFixed(2)}
            </span>
          </div>
          
          <a
            href={`/meals/${meal.id}`}
            className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500"
          >
            View Details
          </a>
        </div>
      </div>

    </div>
  );
}

// --- AIRTIGHT SKELETON LOADER BLUEPRINT ---
export function MealCardSkeleton() {
  return (
    <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white animate-pulse dark:border-slate-800 dark:bg-slate-900">
      <div>
        <div className="aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800" />
        <div className="p-5 space-y-3">
          <div className="flex justify-between">
            <div className="h-3 w-20 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-3 w-8 rounded bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="space-y-1.5">
            <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-3 w-5/6 rounded bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </div>
      <div className="p-5 pt-0 space-y-4">
        <div className="border-t border-slate-100 pt-4 dark:border-slate-800/60 flex justify-between">
          <div className="h-3 w-16 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-3 w-24 rounded bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="h-2 w-8 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-5 w-14 rounded bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="h-9 w-24 rounded-xl bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
}