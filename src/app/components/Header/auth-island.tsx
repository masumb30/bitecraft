'use client';

import React, { useState, useEffect } from 'react';

export default function AuthIsland() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Simulating an auth check delay (Replace this with your real useSession/useAuth hook later)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoggedIn(true); // Default to true per request
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // --- LOADING SKELETON STATE ---
  if (isLoading) {
    return (
      <div className="flex items-center gap-3 animate-pulse">
        <div className="h-9 w-24 rounded-xl bg-slate-200 dark:bg-slate-800" />
        <div className="h-9 w-9 rounded-xl bg-slate-200 dark:bg-slate-800" />
      </div>
    );
  }

  // --- LOGGED IN STATE ---
  if (isLoggedIn) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-1.5 pr-3 transition-all duration-200 hover:scale-[1.01] hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700"
        >
          <img
            className="h-8 w-8 rounded-lg object-cover ring-2 ring-emerald-600/20 dark:ring-emerald-500/20"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
            alt="User avatar"
          />
          <div className="text-left text-xs hidden sm:block">
            <p className="font-semibold text-slate-900 dark:text-slate-50">Masum</p>
            <p className="text-slate-500 dark:text-slate-400">Premium Member</p>
          </div>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-2xl border border-slate-200 bg-white p-2 shadow-xl z-50 dark:border-slate-800 dark:bg-slate-900">
            <div className="px-3 py-2 text-xs border-b border-slate-100 dark:border-slate-800 mb-1">
              <p className="text-slate-400">Signed in as</p>
              <p className="font-medium text-slate-900 dark:text-slate-50 truncate">masum@example.com</p>
            </div>
            <a href="/profile" className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-emerald-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-emerald-500">Your Profile</a>
            <a href="/orders" className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-emerald-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-emerald-500">Active Orders</a>
            <hr className="my-1 border-slate-100 dark:border-slate-800" />
            <button className="w-full text-left rounded-xl px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/30">
              Sign Out
            </button>
          </div>
        )}
      </div>
    );
  }

  // --- LOGGED OUT STATE ---
  return (
    <>
      <a
        href="/login"
        className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-slate-400 dark:hover:text-slate-50"
      >
        Log in
      </a>
      <a
        href="/register"
        className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.01] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500"
      >
        Join Marketplace
      </a>
    </>
  );
}