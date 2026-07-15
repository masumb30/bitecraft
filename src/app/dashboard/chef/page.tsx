import { OrderInterface } from '@/app/types/type';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
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

export default async function ChefDashboard() {
  const session = await auth.api.getSession({
      headers: await headers()
    });
    const user = session?.user;
  
    const orders = await fetch(`https://bitecraft-wleh.onrender.com/api/orders/chef?chefId=${user?.id}`, {
      next: { revalidate: 0 }, // Adjust caching time strategy as needed (0 for live testing)
    });
    const ordersData = await orders.json();
  
  
  
    console.log('Fetched Orders Data:', ordersData);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-slate-950 dark:text-slate-400 transition-colors duration-200">
      
      

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        
        {/* WELCOME BANNER */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-950 dark:to-slate-900 p-6 md:p-8 text-white shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
            Welcome back, Chef {user?.name}! 👨‍🍳
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

              {
                              ordersData.length > 0 ? (
                                ordersData.map((order: OrderInterface) => (
                                  <div key={(order as any)._id} className="p-4 bg-white border border-slate-200 rounded-2xl dark:bg-slate-900 dark:border-slate-800 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition-all duration-200 hover:scale-[1.01]">
                                    <div className="flex gap-3 items-start sm:items-center w-full sm:w-auto">
                                      <img
                                        src={order.mealImage}
                                        alt={order.title}
                                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover flex-shrink-0"
                                      />
                                      <div className="space-y-1 min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                          <h3 className="font-bold text-slate-900 dark:text-slate-50 text-sm sm:text-base truncate max-w-[220px] sm:max-w-md">
                                            {order.title}
                                          </h3>
                                          <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 capitalize">
                                            {order.status}
                                          </span>
                                        </div>
                                        <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5 truncate">
                                          <img src={order.chefAvatar} alt="" className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800" />
                                          Kitchen: <span className="font-medium text-slate-600 dark:text-slate-400">{order.chefName}</span>
                                        </p>
                                        <p className="text-xs text-slate-500 line-clamp-1 sm:line-clamp-2 pr-2 hidden sm:block">
                                          {order.mealDescription}
                                        </p>
                                        <p className="text-[10px] text-slate-400">
                                          Ordered: {new Date(order.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                      </div>
                                    </div>
              
                                    <div className="flex sm:flex-col justify-between sm:justify-center items-center sm:items-end w-full sm:w-auto pt-3 sm:pt-0 border-t border-slate-100 dark:border-slate-800 sm:border-t-0 font-semibold text-slate-900 dark:text-slate-50 text-sm sm:text-base gap-1 flex-shrink-0">
                                      <span className="text-xs text-slate-400 font-normal sm:hidden">Total Price</span>
                                      <div className="text-right">
                                        <div>${order.totalPrice.toFixed(2)}</div>
                                        <div className="text-[10px] text-slate-400 font-normal mt-0.5">Qty: {order.quantity} (${order.priceSnap} each)</div>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
                              <span className="text-3xl block mb-3">🍽️</span>
                              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-50">No orders found</h3>
                              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                                Try modifying your price slider, text entries or choosing another neighborhood filter setup.
                              </p>
                            </div>
                              )
                            }
            </div>
          </div>

          {/* QUICK ACTIONS SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4">Kitchen Control</h2>
              <div className="space-y-3">
                <ChefActionButton label="Add New Menu Item" icon="➕" variant="primary" link="/dashboard/chef/addmeal" />
                <ChefActionButton label="My Meals" icon="🕒" variant="secondary" link="/dashboard/chef/mymeals" />
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

function ChefActionButton({ label, icon, variant, link = "#"}: { label: string; icon: string; variant: 'primary' | 'secondary', link?: string }) {
  const isPrimary = variant === 'primary';
  return (
    <a href={`${link}`} className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.01] focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
      isPrimary ? 'bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-sm' : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50'
    }`}>
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}