'use client';

import React, { useState } from 'react';

// Mock authentication state for demonstration
// Flip this to false to preview the logged-out state seamlessly
const IS_LOGGED_IN_MOCK = true;

interface NavLink {
  label: string;
  href: string;
}

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false);
  const isLoggedIn = IS_LOGGED_IN_MOCK;

  // Placeholder links for a marketplace/meal-prep platform
  const navLinks: NavLink[] = [
    { label: 'Explore Chefs', href: '/chefs' },
    { label: 'Meal Plans', href: '/plans' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Community', href: '/community' },
  ];

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* --- MAIN NAVIGATION BAR --- */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo (Left) */}
            <div className="flex flex-shrink-0 items-center">
              <a 
                href="/" 
                className="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 transition-all focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:text-slate-50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white transition-transform group-hover:scale-105 dark:bg-emerald-500">
                  🍳
                </span>
                <span>
                  Chef<span className="text-emerald-600 dark:text-emerald-500">Share</span>
                </span>
              </a>
            </div>

            {/* Middle Desktop Links (Hidden on Mobile/Tablet) */}
            <nav className="hidden md:flex space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-emerald-500"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Desktop Auth Block (Hidden on Mobile/Tablet) */}
            <div className="hidden md:flex items-center gap-4">
              {isLoggedIn ? (
                /* Authenticated State */
                <div className="relative">
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-1.5 pr-3 transition-all duration-200 hover:scale-[1.01] hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700"
                  >
                    <img
                      className="h-8 w-8 rounded-lg object-cover ring-2 ring-emerald-600/20 dark:ring-emerald-500/20"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="User avatar"
                    />
                    <div className="text-left text-xs">
                      <p className="font-semibold text-slate-900 dark:text-slate-50">Masum</p>
                      <p className="text-slate-500 dark:text-slate-400">Premium Member</p>
                    </div>
                  </button>

                  {/* Absolute Dropdown for Desktop Profile */}
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900">
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
              ) : (
                /* Unauthenticated State */
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
              )}
            </div>

            {/* Hamburger Button (Mobile & Tablet Toggle) */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                type="button"
                className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-50"
                aria-controls="mobile-menu"
                aria-expanded={isSidebarOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* --- RESPONSIVE SIDEBAR MOBILE MENU --- */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-visibility duration-300 ${isSidebarOpen ? 'visible' : 'invisible'}`}
        role="dialog" 
        aria-modal="true"
      >
        {/* Backdrop overlay */}
        <div 
          className={`fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sliding Panel */}
        <div 
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm transform border-l border-slate-200 bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-900 sm:ring-1 sm:ring-slate-900/10 ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Top Header */}
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-slate-50" onClick={handleLinkClick}>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white text-sm dark:bg-emerald-500">
                🍳
              </span>
              <span>Chef<span className="text-emerald-600 dark:text-emerald-500">Share</span></span>
            </a>
            <button
              type="button"
              className="rounded-xl p-2.5 text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              onClick={() => setIsSidebarOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Content Workspace */}
          <div className="mt-8 flex flex-col h-[calc(100%-4rem)] justify-between">
            {/* Nav Links Stack */}
            <div className="space-y-2">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Navigation
              </p>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-emerald-600 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-emerald-500"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Sidebar Identity & Action Block footer */}
            <div className="border-t border-slate-200 pt-6 dark:border-slate-800">
              {isLoggedIn ? (
                /* Mobile Logged-in Meta Card */
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
                    <img
                      className="h-12 w-12 rounded-xl object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                      alt="User profile picture"
                    />
                    <div className="truncate">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-50">Masum</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">masum@example.com</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a 
                      href="/profile" 
                      onClick={handleLinkClick}
                      className="flex justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      Profile
                    </a>
                    <button 
                      className="flex justify-center rounded-xl bg-rose-50 px-4 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-100 dark:bg-rose-950/20 dark:text-rose-400 dark:hover:bg-rose-950/40"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                /* Mobile Logged-out Stack Buttons */
                <div className="flex flex-col gap-3">
                  <a
                    href="/login"
                    onClick={handleLinkClick}
                    className="flex w-full justify-center rounded-xl border border-slate-200 px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    Log in
                  </a>
                  <a
                    href="/register"
                    onClick={handleLinkClick}
                    className="flex w-full justify-center rounded-xl bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:brightness-110 dark:bg-emerald-500"
                  >
                    Join Marketplace
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}