'use client';

import React, { useState } from 'react';
import { Meal } from '../types';
import { authClient } from '@/lib/auth-client';
import { OrderInterface } from '@/app/types/type';
import { toast, ToastContainer } from 'react-toastify';

interface MealSidebarOrderProps {
  meal: Meal;
  timesSold?: number;
}

export default function MealSidebarOrder({ meal, timesSold = 428 }: MealSidebarOrderProps) {
  const [portions, setPortions] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const totalCost = meal.price * portions;
  
  const handlePlaceOrder = async () => {
    setIsLoading(true);
    try {
      const session = await authClient.getSession();
      const user = session?.data?.user;

      console.log('user: ', user);
      console.log('place order clicked: ', meal);

      // Construct the object matching OrderInterface
      const orderData: OrderInterface = {
        userId: user?.id || '', 
        userName: user?.name || '',
        userAvatar: user?.image || '',
        mealId: meal.id, 
        mealImage: meal.image,
        mealDescription: meal.description,
        title: meal.name,
        quantity: portions,
        priceSnap: meal.price,
        totalPrice: totalCost,
        status: 'pending',
        deliveryAddress: '',
        createdAt: new Date(),
        chefId: meal.chefId || '',     
        chefName: meal.chefInfo.name || '', 
        chefAvatar: meal.chefInfo.image || '' 
      };

      console.log('Order Payload Created:', orderData);

      // Simple fetch request
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        toast.error('Failed to place the order.');
        return;
      }

      toast.success('Order placed successfully! 🎉');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer autoClose={1500} style={{zIndex: 1000}} />
    <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900 space-y-6">
      
      {/* Popularity Metrics */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1">🔥 <span className="text-slate-900 dark:text-slate-100">{timesSold} times ordered</span></span>
        <span className="flex items-center gap-0.5 text-amber-500">★ <span className="text-slate-900 dark:text-slate-100">{meal.rating}</span></span>
      </div>

      {/* Pricing Header */}
      <div>
        <span className="text-xs text-slate-400 block">Single Portion</span>
        <div className="flex items-baseline gap-1">
          {/* <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-50">${meal.price.toFixed(2)}</span> */}
        </div>
      </div>

      {/* Quantity Adjustments */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wide">Select Plates</label>
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-950">
          <button
            onClick={() => setPortions(Math.max(1, portions - 1))}
            disabled={isLoading}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white font-bold shadow-sm transition-colors hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50 disabled:opacity-55"
          >
            -
          </button>
          <span className="text-sm font-extrabold text-slate-900 dark:text-slate-50">{portions}</span>
          <button
            onClick={() => setPortions(portions + 1)}
            disabled={isLoading}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white font-bold shadow-sm transition-colors hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50 disabled:opacity-55"
          >
            +
          </button>
        </div>
      </div>

      {/* Summary Row */}
      <div className="border-t border-slate-100 pt-4 dark:border-slate-800/60 flex justify-between items-center">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Calculation</span>
        <span className="text-xl font-extrabold text-slate-900 dark:text-slate-50">${totalCost.toFixed(2)}</span>
      </div>

      {/* Action CTA */}
      <button
        onClick={handlePlaceOrder}
        disabled={isLoading}
        className="w-full cursor-pointer rounded-xl bg-emerald-600 py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:brightness-110 dark:bg-emerald-500 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isLoading ? 'Placing Order...' : 'Place an Order'}
      </button>

      {/* Fulfillment Promises */}
      <div className="text-[11px] text-slate-400 dark:text-slate-500 space-y-2">
        <p className="flex items-center gap-1.5">⏰ Order within 4 hours for delivery in {meal.deliveryDaysFromNow} days.</p>
        <p className="flex items-center gap-1.5">🛡️ Local health department certified kitchen workspace.</p>
      </div>

    </div>

    </>
  );
}