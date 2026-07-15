'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

export default function BuyerDashboard() {
  const {data} = authClient.useSession();
  const user = data?.user;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-slate-950 dark:text-slate-400 transition-colors duration-200">
      
      

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        
        {/* WELCOME BANNER */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-950 dark:to-slate-900 p-6 md:p-8 text-white shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
            What are you craving, {user?.name}? 👋
          </h1>
          <p className="text-emerald-100 dark:text-slate-400 max-w-xl text-sm md:text-base">
            Discover fresh, premium, home-cooked meal preps curated by top local chefs in your community.
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <BuyerMetricCard title="Active Deliveries" value="1 Order" subtitle="Arriving by 6:30 PM" />
          <BuyerMetricCard title="Total Orders Placed" value="24 Preps" subtitle="Saved 12+ hours cooking" />
          <BuyerMetricCard title="Favorite Kitchens" value="5 Chefs" subtitle="2 active near you" />
          <BuyerMetricCard title="Wallet Balance" value="$35.00" subtitle="Credits available" />
        </div>

        {/* BOTTOM LAYOUT SECTION */}
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* ORDERS COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">Your Recent Orders</h2>
                <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors duration-200">
                  Track all
                </button>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <BuyerOrderRow chef="Chef Giovanni" dish="Wood-Fired Lasagna Bolognese" status="In Transit" statusColor="text-amber-500" date="Today, 6:00 PM" price="$28.00" />
                <BuyerOrderRow chef="Auntie Kitchen" dish="Authentic Thai Green Curry" status="Completed" statusColor="text-emerald-600 dark:text-emerald-400" date="Oct 24, 2026" price="$22.50" />
              </div>
            </div>
          </div>

          {/* DISCOVERY SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4">Trending Near You</h2>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-center group cursor-pointer">
                  <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 flex items-center justify-center text-xl">🌮</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 text-sm">Elena’s Street Tacos</h4>
                    <p className="text-xs text-slate-500">0.8 miles away • 4.9 ★</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center group cursor-pointer">
                  <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 flex items-center justify-center text-xl">🥗</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 text-sm">Green Garden Preps</h4>
                    <p className="text-xs text-slate-500">2.3 miles away • 4.8 ★</p>
                  </div>
                </div>
                <button className="w-full mt-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.01] focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                  Browse Local Kitchens
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function BuyerMetricCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</p>
      <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 block mt-2">{value}</span>
      <p className="text-xs mt-1 text-slate-500">{subtitle}</p>
    </div>
  );
}

function BuyerOrderRow({ chef, dish, status, statusColor, date, price }: { chef: string; dish: string; status: string; statusColor: string; date: string; price: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-2">
      <div>
        <h3 className="font-semibold text-slate-900 dark:text-slate-50 text-sm">{dish}</h3>
        <p className="text-xs text-slate-500 mt-0.5">Kitchen: {chef} • {date}</p>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-4">
        <span className="font-bold text-slate-900 dark:text-slate-50">{price}</span>
        <span className={`text-xs font-bold ${statusColor}`}>{status}</span>
      </div>
    </div>
  );
}