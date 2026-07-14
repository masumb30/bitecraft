import React from 'react';
import FramerWrapper from './framer-wrapper';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 transition-colors duration-200 dark:bg-slate-950 sm:py-16 lg:py-24">
      {/* Background Decorative Amber/Green Blurs */}
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
      <div className="absolute top-1/2 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-400/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Text Block */}
          <div className="flex flex-col space-y-6 text-center lg:col-span-7 lg:text-left">
            
            {/* Tagline Badge */}
            <FramerWrapper delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                Connecting Local Kitchens to Your Table
              </div>
            </FramerWrapper>

            {/* Main Headline */}
            <FramerWrapper delay={0.2}>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl md:text-6xl lg:leading-[1.1]">
                Premium meal prep, <br className="hidden sm:inline" />
                crafted by <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent dark:from-emerald-500 dark:to-emerald-400">Local Chefs</span>.
              </h1>
            </FramerWrapper>

            {/* Value Proposition Subtext */}
            <FramerWrapper delay={0.3}>
              <p className="mx-auto max-w-xl text-base text-slate-600 dark:text-slate-400 sm:text-lg lg:mx-0">
                Skip the factory-made subscriptions. Enjoy personalized, nutrient-dense culinary masterpieces tailored to your lifestyle, prepared fresh by certified independent neighborhood chefs.
              </p>
            </FramerWrapper>

            {/* Action Callouts (CTA) */}
            <FramerWrapper delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="/chefs"
                  className="w-full rounded-xl bg-emerald-600 px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-emerald-600/10 transition-all duration-200 hover:scale-[1.01] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 sm:w-auto"
                >
                  Explore Local Chefs
                </a>
                <a
                  href="/plans"
                  className="w-full rounded-xl border border-slate-200 bg-white px-8 py-4 text-center text-base font-semibold text-slate-900 transition-all duration-200 hover:scale-[1.01] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800 sm:w-auto"
                >
                  View Meal Plans
                </a>
              </div>
            </FramerWrapper>

            {/* Mini Trust Stats Block */}
            <FramerWrapper delay={0.5}>
              <div className="mt-4 grid grid-cols-3 gap-4 border-t border-slate-200/60 pt-6 text-center dark:border-slate-800/60 lg:text-left">
                <div>
                  <p className="text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-2xl">45+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Artisan Chefs</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-2xl">12k+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Meals Served</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-2xl">4.9★</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Community Rating</p>
                </div>
              </div>
            </FramerWrapper>

          </div>

          {/* Right Image/Graphic Interactive Block */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <FramerWrapper delay={0.3} yOffset={40}>
              <div className="relative rounded-2xl bg-white p-4 shadow-2xl dark:bg-slate-900">
                <img
                  className="aspect-[4/3] w-full rounded-xl object-cover lg:aspect-[1/1]"
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Professional local chef preparing healthy meal prep options"
                />

                {/* Overlapping Amber Floating Badges for Context Accent */}
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl transition-transform duration-200 hover:scale-105 dark:border-slate-800 dark:bg-slate-900 sm:flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg text-white">
                    ✨
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-50">100% Organic</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Locally sourced ingredients</p>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl transition-transform duration-200 hover:scale-105 dark:border-slate-800 dark:bg-slate-900 sm:flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-50">Chef of the Week</p>
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-500 font-medium">Chef Sarah M.</p>
                  </div>
                  <img
                    className="h-10 w-10 rounded-xl object-cover"
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=80&h=80&q=80"
                    alt="Chef portrait"
                  />
                </div>

              </div>
            </FramerWrapper>
          </div>

        </div>
      </div>
    </section>
  );
}