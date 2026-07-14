import React from 'react';

interface Chef {
  id: string;
  name: string;
  avatar: string;
  rating: string;
  reviewCount: number;
  specialty: string;
  bio: string;
  activeMenuSnippet: string[];
}

export default function FeaturedChefs() {
  const featuredChefs: Chef[] = [
    {
      id: 'sarah-m',
      name: 'Chef Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&h=150&q=80',
      rating: '4.95',
      reviewCount: 142,
      specialty: 'Plant-Based & Anti-Inflammatory',
      bio: 'Former sous chef focusing on organic, gut-friendly nutrition and complex, clean spice profiles.',
      activeMenuSnippet: ['Spiced Chickpea Bowl', 'Roasted Fennel Salad'],
    },
    {
      id: 'marcus-g',
      name: 'Chef Marcus Glass',
      avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&h=150&q=80',
      rating: '4.89',
      reviewCount: 98,
      specialty: 'High-Protein Keto & Fuel Plates',
      bio: 'Ex-athletic nutritionist crafting high-performance, low-carb proteins designed for muscle recovery.',
      activeMenuSnippet: ['Chimichurri Flank Steak', 'Sesame-Crusted Salmon'],
    },
    {
      id: 'ayesha-k',
      name: 'Chef Ayesha Khan',
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&h=150&q=80',
      rating: '4.98',
      reviewCount: 210,
      specialty: 'Artisanal Halal Fusion',
      bio: 'Blending traditional rich South Asian aromatics with light, modern macro-balanced meal formats.',
      activeMenuSnippet: ['Lemon Herb Halal Chicken', 'Saffron Quinoa Pilaf'],
    },
  ];

  return (
    <section className="bg-white py-16 transition-colors duration-200 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
            Meet the Makers
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Featured Chefs of the Week
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Handpicked independent neighborhood chefs preparing personalized, artisanal menus this week.
          </p>
        </div>

        {/* Chefs Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredChefs.map((chef) => (
            <div
              key={chef.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:scale-[1.01] hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700"
            >
              {/* Profile Card Header */}
              <div className="text-center">
                
                {/* Round Profile Avatar Container */}
                <div className="relative mx-auto h-24 w-24">
                  <img
                    className="h-full w-full rounded-full object-cover ring-4 ring-emerald-600/10 transition-transform duration-300 group-hover:scale-105 dark:ring-emerald-500/10"
                    src={chef.avatar}
                    alt={chef.name}
                  />
                  <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm shadow-md dark:bg-amber-400">
                    ⭐
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-slate-50">
                  {chef.name}
                </h3>
                
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-500">
                  {chef.specialty}
                </p>

                <div className="mt-2 flex items-center justify-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-slate-900 dark:text-slate-100">{chef.rating}</span>
                  <span>({chef.reviewCount} orders)</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                  "{chef.bio}"
                </p>
              </div>

              {/* Weekly Mini-Menu Spotlight */}
              <div className="mt-6 border-t border-slate-100 pt-6 dark:border-slate-800/60">
                <p className="text-left text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  On the Menu This Week
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {chef.activeMenuSnippet.map((menuItem) => (
                    <span
                      key={menuItem}
                      className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-100 transition-colors group-hover:bg-emerald-50/50 group-hover:text-emerald-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:group-hover:bg-emerald-950/20 dark:group-hover:text-emerald-400"
                    >
                      {menuItem}
                    </span>
                  ))}
                </div>

                {/* Call-to-Action Link */}
                <a
                  href={`/chefs/${chef.id}`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600/10 py-3 text-sm font-semibold text-emerald-600 transition-all duration-200 hover:bg-emerald-600 hover:text-white dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-slate-950"
                >
                  <span>Order Chef's Menu</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}