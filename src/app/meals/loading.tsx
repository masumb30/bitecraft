import React from 'react';
import { MealCardSkeleton } from './MealCard';

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="h-8 w-64 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
          <div className="h-4 w-96 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse mt-3" />
        </div>
        
        {/* Matches original container space shell layout */}
        <div className="h-32 w-full bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <MealCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}