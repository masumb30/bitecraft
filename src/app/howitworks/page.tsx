import React from 'react';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-400">
      
      {/* SECTION 1: HERO / CHOOSE YOUR PATH */}
      <section className="px-4 py-12 text-center md:py-20 max-w-7xl mx-auto">
        <span className="text-sm font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-500">
          Welcome to BiteCraft
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-50">
          Your Culinary Community, <br />
          <span className="text-emerald-600 dark:text-emerald-500">Crafted Locally.</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Whether you are a food lover looking for healthy, chef-prepared meal plans or a local culinary artist ready to monetize your kitchen, BiteCraft bridges the gap.
        </p>
      </section>

      {/* SECTION 2: THE STEP-BY-STEP PROCESS */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
            How It Works for Foodies
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Three simple steps to fresh, premium local meals.
          </p>
        </div>

        {/* 3-Step Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Step 1 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-200 hover:scale-[1.01] dark:bg-slate-900 dark:border-slate-800 flex flex-col items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-500 font-bold text-lg mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              Discover Local Chefs
            </h3>
            <p className="text-sm leading-relaxed">
              Browse curated profiles of certified local culinary talents. Explore their unique cooking styles, specialties, and real community reviews.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-200 hover:scale-[1.01] dark:bg-slate-900 dark:border-slate-800 flex flex-col items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 font-bold text-lg mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              Pick Your Custom Plan
            </h3>
            <p className="text-sm leading-relaxed">
              Select tailored weekly meal plans or order specific dynamic dishes. Filter easily by dietary needs, macro targets, or specific allergens.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-200 hover:scale-[1.01] dark:bg-slate-900 dark:border-slate-800 flex flex-col items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-500 font-bold text-lg mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              Fresh Delivery or Pickup
            </h3>
            <p className="text-sm leading-relaxed">
              Receive your premium crafted meals right at your doorstep or arrange a local pickup location. Enjoy top-tier, ready-to-eat gastronomy.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE CHEF HUB (SIDE-BY-SIDE INCENTIVE) */}
      <section className="px-4 py-12 md:py-20 bg-white border-y border-slate-200 dark:bg-slate-900 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400">
              For Culinary Creators
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
              Are you a talented local chef? Cook on your own terms.
            </h2>
            <p className="text-base sm:text-lg">
              BiteCraft provides you with the modern digital infrastructure, secure payment processing, and community marketing layers needed to turn your passion into a thriving Micro-business.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
                Complete menu control and absolute pricing freedom
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
                Flexible, automated scheduling for batch cooking orders
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
                Direct interaction and relationship building with local foodies
              </li>
            </ul>

            <div className="pt-2">
              <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-200 hover:brightness-110 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 dark:focus:ring-offset-slate-900">
                Apply as a BiteCraft Chef
              </button>
            </div>
          </div>

          {/* Visual Container Placeholder Mockup */}
          <div className="relative p-8 bg-slate-50 border border-slate-200 rounded-2xl dark:bg-slate-950 dark:border-slate-800 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="font-bold text-slate-900 dark:text-slate-50">Chef Dashboard Preview</span>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md dark:bg-emerald-950/50 dark:text-emerald-400 font-medium">Live Market</span>
            </div>
            <div className="h-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-400">Weekly Payout Progress</p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 mt-1">$1,420.50</p>
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin-slow"></div>
            </div>
            <div className="h-32 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-2">
              <p className="text-xs text-slate-400">Active Meal Plan Subscriptions</p>
              <div className="flex justify-between text-sm text-slate-900 dark:text-slate-50 font-medium">
                <span>Keto Lean Prep x14 Users</span>
                <span className="text-emerald-600 dark:text-emerald-500">Active</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[82%]"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: COMMUNITY FAQ & TRUST */}
      <section className="px-4 py-12 md:py-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Everything you need to know about the BiteCraft community standards.
          </p>
        </div>

        <div className="space-y-4">
          
          <div className="p-6 bg-white border border-slate-200 rounded-2xl dark:bg-slate-900 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">
              How are kitchen hygiene and kitchen certifications verified?
            </h4>
            <p className="text-sm leading-relaxed">
              Every single chef onboarded to BiteCraft undergoes strict validation. They are mandatory holders of local food safety handling certifications, and local health regulation requirements are verified before any storefront goes active.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl dark:bg-slate-900 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">
              Can I pause or dynamically change my meal plan subscription?
            </h4>
            <p className="text-sm leading-relaxed">
              Yes! Through your foodie profile dashboard, you can swap dishes, pause delivery weeks, or adjust your macro configurations up to 48 hours before the scheduled prep day begins.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}