import React from 'react';

type MetricCardProps = {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

type OrderRowProps = {
  id: string;
  name: string;
  user: string;
  status: string;
  time: string;
  price: string;
}

export default function ChefDashboard({ user = { name: 'Marcus' } }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-slate-950 dark:text-slate-400 transition-colors duration-200">
      
      

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        
        {/* WELCOME BANNER */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-950 dark:to-slate-900 p-6 md:p-8 text-white shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
            Welcome back, Chef {user.name}! 👨‍🍳
          </h1>
          <p className="text-emerald-100 dark:text-slate-400 max-w-xl text-sm md:text-base">
            Your kitchen is currently open. You have new orders waiting to be prepped today.
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ChefMetricCard title="Today's Revenue" value="$428.50" change="+12.3%" isPositive={true} />
          <ChefMetricCard title="Active Orders" value="7 Orders" />
          <ChefMetricCard title="Average Rating" value="4.95 ★" />
          <ChefMetricCard title="Menu Items" value="12 Dishes" />
        </div>

        {/* BOTTOM LAYOUT SECTION */}
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* ORDERS COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">Incoming Active Orders</h2>
                <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors duration-200">
                  View all
                </button>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <ChefOrderRow id="#1042" name="Organic Basil Pesto Pasta" user="Sarah K." status="Prep Mode" time="Pickup 5:00 PM" price="$24.00" />
                <ChefOrderRow id="#1041" name="Slow-Braised Beef Barbacoa Bowl" user="Alex M." status="Pending" time="Pickup 5:30 PM" price="$38.50" />
                <ChefOrderRow id="#1039" name="Artisanal Sourdough & Hummus" user="Elena R." status="Ready" time="Pickup 4:15 PM" price="$14.00" />
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4">Kitchen Control</h2>
              <div className="space-y-3">
                <ChefActionButton label="Add New Menu Item" icon="➕" variant="primary" />
                <ChefActionButton label="Update Kitchen Hours" icon="🕒" variant="secondary" />
                <ChefActionButton label="Payout to Bank" icon="🏦" variant="secondary" />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function ChefMetricCard({ title, value, change, isPositive }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</p>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">{value}</span>
        {change && <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{change}</span>}
      </div>
    </div>
  );
}

function ChefOrderRow({ id, name, user, status, time, price }: OrderRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-2">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono font-bold text-slate-400">{id}</span>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50 text-sm">{name}</h3>
        </div>
        <p className="text-xs text-slate-500 mt-0.5">Customer: {user} • {time}</p>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-4">
        <span className="font-bold text-slate-900 dark:text-slate-50">{price}</span>
        <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold ${
          status === 'Ready' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400'
        }`}>{status}</span>
      </div>
    </div>
  );
}

function ChefActionButton({ label, icon, variant }: { label: string; icon: string; variant: 'primary' | 'secondary' }) {
  const isPrimary = variant === 'primary';
  return (
    <button className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.01] focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
      isPrimary ? 'bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-sm' : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50'
    }`}>
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}