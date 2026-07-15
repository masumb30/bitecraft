'use client'
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-400">
        <ToastContainer autoClose={1500} style={{zIndex: 1000}} />
      
      {/* SECTION 1: MISSION & HERO */}
      <section className="px-4 py-12 text-center md:py-20 max-w-7xl mx-auto">
        <span className="text-sm font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-500">
          Our Story
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-50">
          Revolutionizing How Communities <br />
          <span className="text-emerald-600 dark:text-emerald-500">Eat and Thrive.</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          BiteCraft was born out of a simple observation: modern commercial meal deliveries often lack soul, while incredibly talented local chefs struggle to find an efficient, compliant path to market their culinary genius. We set out to change that by constructing the ultimate bridge.
        </p>
      </section>

      {/* SECTION 2: VALUES GRID */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Value 1 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-200 hover:scale-[1.01] dark:bg-slate-900 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-500 flex items-center justify-center font-bold mb-4">
              🧑‍🍳
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
              Empowering Culinary Micro-Businesses
            </h3>
            <p className="text-sm leading-relaxed">
              We provide independent chefs with the digital tools, automated order infrastructure, and operational scaling compliance to run sustainable local businesses.
            </p>
          </div>

          {/* Value 2 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-200 hover:scale-[1.01] dark:bg-slate-900 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 flex items-center justify-center font-bold mb-4">
              🌱
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
              Uncompromised Freshness
            </h3>
            <p className="text-sm leading-relaxed">
              No ultra-processed assembly lines, frozen transit routes, or deep preservatives. Just fresh ingredients prepared intentionally by people in your own zip code.
            </p>
          </div>

          {/* Value 3 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-200 hover:scale-[1.01] dark:bg-slate-900 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-500 flex items-center justify-center font-bold mb-4">
              🤝
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
              Deep Radical Transparency
            </h3>
            <p className="text-sm leading-relaxed">
              From exact macro breakdowns and transparent allergen declarations to direct message integrations with your chef—you always know exactly who is crafting your fuel.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: IMPACT SNAPSHOT */}
      <section className="px-4 py-12 md:py-20 bg-white border-y border-slate-200 dark:bg-slate-900 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">Our Growing Footprint</h2>
          <p className="max-w-xl mx-auto mb-12 text-sm sm:text-base">
            By connecting local talent with neighborhood food enthusiasts, we keep economic growth close to home.
          </p>
          
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto">
            <div className="p-4">
              <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-500">120+</p>
              <p className="text-xs font-semibold uppercase tracking-wider mt-1 text-slate-400">Verified Chefs</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-extrabold text-amber-500 dark:text-amber-400">45k+</p>
              <p className="text-xs font-semibold uppercase tracking-wider mt-1 text-slate-400">Meals Served</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-500">98%</p>
              <p className="text-xs font-semibold uppercase tracking-wider mt-1 text-slate-400">Positive Reviews</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-extrabold text-amber-500 dark:text-amber-400">$2.4M</p>
              <p className="text-xs font-semibold uppercase tracking-wider mt-1 text-slate-400">Paid to Local Chefs</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT & DISCOVERY */}
      <section className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Left Column: Direct Inquiries */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-emerald-600 uppercase dark:text-emerald-500">Get in Touch</span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-1">Connect with BiteCraft</h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              Have burning questions about our health guidelines, custom operations support, enterprise marketplace setups, or media inquiries? We are fully available to chat.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl dark:bg-slate-900 dark:border-slate-800">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">General Support</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-50">hello@bitecraft.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl dark:bg-slate-900 dark:border-slate-800">
                <span className="text-xl">🏛️</span>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">Headquarters Address</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-50">100 Culinary Arts Blvd, Suite 400, Austin, TX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Contact Card UI */}
          <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-2xl dark:bg-slate-900 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Drop Us a Message</h3>
            
            <form className="space-y-4" onSubmit={(e)=> {
              e.preventDefault();
              toast.success('Message sent! We will get back to you shortly.');
            }}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-50 dark:focus:ring-offset-slate-900 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-50 dark:focus:ring-offset-slate-900 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Message</label>
                <textarea 
                  placeholder="Tell us how we can help..." 
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-50 dark:focus:ring-offset-slate-900 transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-200 hover:brightness-110 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 dark:focus:ring-offset-slate-900"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}