import React from 'react';

interface Category {
  id: string;
  name: string;
  tagline: string;
  mealsAvailable: string;
  emoji: string;
  accentBg: string;
  textColor: string;
}

export default function DietaryCategories() {
  const categories: Category[] = [
    {
      id: 'keto',
      name: 'Keto-Friendly',
      tagline: 'High fat, low carb essentials',
      mealsAvailable: '240+ meals',
      emoji: '🥑',
      accentBg: 'bg-emerald-50 dark:bg-emerald-950/20',
      textColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 'vegan',
      name: '100% Vegan',
      tagline: 'Pure, plant-powered fuel',
      mealsAvailable: '180+ meals',
      emoji: '🌱',
      accentBg: 'bg-emerald-50 dark:bg-emerald-950/20',
      textColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 'halal',
      name: 'Certified Halal',
      tagline: 'Ethically sourced, clean proteins',
      mealsAvailable: '115+ meals',
      emoji: '🥩',
      accentBg: 'bg-amber-50 dark:bg-amber-950/20',
      textColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      id: 'high-protein',
      name: 'High-Protein',
      tagline: 'Designed for muscle recovery',
      mealsAvailable: '310+ meals',
      emoji: '💪',
      accentBg: 'bg-amber-50 dark:bg-amber-950/20',
      textColor: 'text-amber-600 dark:text-amber-400',
    },
  ];

  return (
    <section className="bg-white py-16 transition-colors duration-200 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Layout Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
              Dietary Lifestyles
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              Tailored to your specific goals
            </p>
          </div>
          <p className="max-w-md text-base text-slate-600 dark:text-slate-400">
            No matter your eating protocol, our local chefs craft custom plates that ensure you never have to sacrifice flavor for fitness.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/menu?category=${category.id}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:scale-[1.01] hover:border-emerald-600/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/20"
            >
              {/* Card Top: Emoji & Badge */}
              <div>
                <div className="flex items-center justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${category.accentBg}`}>
                    {category.emoji}
                  </span>
                  <span className={`text-xs font-semibold ${category.textColor}`}>
                    {category.mealsAvailable}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-slate-50 dark:group-hover:text-emerald-500">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {category.tagline}
                </p>
              </div>

              {/* Card Bottom: Interactive Footer Button */}
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-50">
                <span>Explore Menu</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Subtle background gradient hover accent */}
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:from-emerald-500 dark:to-amber-400" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}