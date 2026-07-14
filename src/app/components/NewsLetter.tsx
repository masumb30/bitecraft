'use client'
import React from 'react';


export default function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 transition-colors duration-200 dark:bg-slate-950 sm:py-24">
      {/* Decorative Blur Backdrops */}
      <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
      <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-400/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-12 lg:p-16">
          
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            
            {/* CTA Left Copy */}
            <div className="lg:col-span-7">
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
                Expansion Map 📍
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
                Not in your neighborhood yet?
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
                We are launching certified home chefs weekly across the metro area. Provide your ZIP code below to get priority notifications and a **$20 credit** when we launch near you.
              </p>
            </div>

            {/* CTA Right Input Form */}
            <div className="lg:col-span-5">
              <form 
                action="#" 
                onSubmit={(e) => e.preventDefault()} 
                className="space-y-3"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  {/* Zip Code Input */}
                  <div className="w-full sm:w-1/3">
                    <label htmlFor="zip-code" className="sr-only">ZIP Code</label>
                    <input
                      id="zip-code"
                      type="text"
                      pattern="[0-9]*"
                      maxLength={5}
                      required
                      placeholder="ZIP Code"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:focus:border-emerald-500 dark:focus:bg-slate-900"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="w-full sm:w-2/3">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                      id="email-address"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:focus:border-emerald-500 dark:focus:bg-slate-900"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.01] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500"
                >
                  Notify Me & Claim $20 Credit
                </button>

                <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center sm:text-left">
                  We value your privacy. Unsubscribe at any time. No spam, guaranteed.
                </p>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}