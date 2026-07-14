import React from 'react';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}

export default function LatestInsights() {
  const articles: Article[] = [
    {
      slug: 'mastering-meal-prep-efficiency',
      title: 'Meal Prep Efficiency: Save Time and Reduce Daily Friction',
      excerpt: 'Discover how structuring your meal choices once a week eliminates daily cognitive exhaustion and saves you hours.',
      category: 'Lifestyle',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=400&h=260&q=80',
      date: 'May 14, 2026',
    },
    {
      slug: 'demystifying-macro-counting',
      title: 'Demystifying Macros: How to Target Your Exact Protein Needs',
      excerpt: 'Struggling to hit your nutrient benchmarks? Learn how tailored meal configurations can streamline muscle recovery.',
      category: 'Nutrition',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&h=260&q=80',
      date: 'May 08, 2026',
    },
    {
      slug: 'farm-to-table-sourcing-guide',
      title: 'The Farm-to-Table Standard: Why Fresh Ingredients Matter',
      excerpt: 'How independent local chefs sourcing local farm-fresh ingredients transforms nutritional density and flavor.',
      category: 'Local Food',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&w=400&h=260&q=80',
      date: 'Apr 29, 2026',
    },
  ];

  return (
    <section className="bg-white py-16 transition-colors duration-200 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-16">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
              Nutritional Wisdom
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              Latest insights & resources
            </p>
          </div>
          <a
            href="/blog"
            className="group flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
          >
            <span>Read all articles</span>
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:scale-[1.01] hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >
              <div>
                {/* Blog Card Image Container */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={article.image}
                    alt={article.title}
                  />
                  <span className="absolute bottom-3 left-3 rounded-lg bg-emerald-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white dark:bg-emerald-500">
                    {article.category}
                  </span>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-slate-50 dark:group-hover:text-emerald-500 leading-snug">
                    <a href={`/blog/${article.slug}`}>{article.title}</a>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Action footer */}
              <div className="p-6 pt-0">
                <a
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-500"
                >
                  <span>Read Article</span>
                  <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}