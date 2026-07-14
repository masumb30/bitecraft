import React from 'react';
import NavLinks from './nav-links';
import AuthIsland from './auth-island';
import MobileMenuIsland from './mobile-menu-island';


// Standard static definitions render immediately on the server
const NAV_LINKS = [
  { label: 'Explore Chefs', href: '/chefs' },
  { label: 'Meal Plans', href: '/plans' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Community', href: '/community' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Structure (Server Rendered) */}
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

          {/* Middle Navigation (Server Rendered Link Island) */}
          <NavLinks links={NAV_LINKS} />

          {/* Desktop Right Identity Block (Client Island with Loading Skeleton) */}
          <div className="hidden md:flex items-center gap-4 min-w-[120px] justify-end">
            <AuthIsland />
          </div>

          {/* Mobile Menu Control Block (Client Island) */}
          <div className="flex md:hidden">
            <MobileMenuIsland links={NAV_LINKS} />
          </div>

        </div>
      </div>
    </header>
  );
}