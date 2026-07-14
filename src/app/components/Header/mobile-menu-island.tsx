'use client';

import React, { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}

export default function MobileMenuIsland({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hamburger Toggle Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-50"
      >
        <span className="sr-only">Open main menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Drawer Layer */}
      <div className={`fixed inset-0 z-50 transition-visibility duration-300 bg-green-600 ${isOpen ? 'visible' : 'invisible'}`} role="dialog" aria-modal="true">
        <div className={`fixed inset-0 backdrop-blur-sm bg-purple-600 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />

        <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-slate-200 bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-900  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-slate-50" onClick={() => setIsOpen(false)}>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white text-sm dark:bg-emerald-500">🍳</span>
              <span>Chef<span className="text-emerald-600 dark:text-emerald-500">Share</span></span>
            </a>
            <button type="button" className="rounded-xl p-2.5 text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col h-[calc(100%-4rem)] justify-between">
            <div className=" bg-slate-50 dark:bg-slate-950">
              {/* <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Navigation</p> */}
              {links.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-emerald-600 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-emerald-500">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800">
              {isLoading ? (
                <div className="h-16 w-full rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
              ) : isLoggedIn ? (
                <div className="">
                  <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
                    <img className="h-12 w-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80" alt="Avatar" />
                    <div className="truncate">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-50">Masum</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">masum@example.com</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b-amber-300">
                    <a href="/profile" onClick={() => setIsOpen(false)} className="flex justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800">Profile</a>
                    <button className="flex justify-center rounded-xl bg-rose-50 px-4 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-100 dark:bg-rose-950/20 dark:text-rose-400 dark:hover:bg-rose-950/40">Sign Out</button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <a href="/login" onClick={() => setIsOpen(false)} className="flex w-full justify-center rounded-xl border border-slate-200 px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800">Log in</a>
                  <a href="/register" onClick={() => setIsOpen(false)} className="flex w-full justify-center rounded-xl bg-emerald-600 px-4 py-3 text-base font-semibold text-white dark:bg-emerald-500">Join Marketplace</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}