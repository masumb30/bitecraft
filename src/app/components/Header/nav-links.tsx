import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

export default function NavLinks({ links }: { links: NavLink[] }) {
  return (
    <nav className="hidden md:flex space-x-1 lg:space-x-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-emerald-500"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}