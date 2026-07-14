import React from 'react';

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: string;
}

export default function PlatformStatistics() {
  const stats: StatItem[] = [
    {
      value: '50+',
      label: 'Local Home Chefs',
      description: 'Vetted, certified independent culinary artisans in your neighborhood.',
      icon: '👨‍🍳',
    },
    {
      value: '12,000+',
      label: 'Meals Delivered',
      description: 'Freshly prepared, macro-tracked, and delivered safely straight to your door.',
      icon: '📦',
    },
    {
      value: '4.9 / 5',
      label: 'Average Rating',
      description: 'Outstanding community satisfaction across thousands of weekly plates.',
      icon: '⭐',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 transition-colors duration-200 dark:bg-slate-950 sm:py-20">
      {/* Decorative Background Accent */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-emerald-500/[0.02] blur-3xl dark:bg-emerald-500/[0.01]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-12">
          
          {/* Subtle Grid Split */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 md:divide-x md:divide-slate-200 md:dark:divide-slate-800">
            {stats.map((stat, idx) => (
              <div 
                key={stat.label} 
                className={`flex flex-col items-center text-center md:items-start md:text-left ${
                  idx > 0 ? 'md:pl-8' : ''
                }`}
              >
                {/* Metric Icon & Title Badge */}
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-xl dark:bg-slate-950">
                    {stat.icon}
                  </span>
                  <span className="text-sm font-bold tracking-wide text-emerald-600 dark:text-emerald-500">
                    {stat.label}
                  </span>
                </div>

                {/* Big Metric Number */}
                <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
                  {stat.value}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}