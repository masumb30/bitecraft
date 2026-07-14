import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: 'Explore Chefs', href: '/chefs' },
      { label: 'Weekly Meal Plans', href: '/plans' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing Calculator', href: '/pricing' },
    ],
    forChefs: [
      { label: 'Apply to Cook', href: '/apply-chef' },
      { label: 'Kitchen Requirements', href: '/kitchen-safety' },
      { label: 'Chef Dashboard Login', href: '/chef-portal' },
      { label: 'Success Stories', href: '/chef-stories' },
    ],
    resources: [
      { label: 'Nutritional Insights', href: '/blog' },
      { label: 'Help Center', href: '/support' },
      { label: 'Contact Support', href: '/contact' },
      { label: 'Affiliate Program', href: '/affiliates' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refunds' },
      { label: 'FDA Disclosure', href: '/fda' },
    ],
  };

  return (
    <footer className="border-t border-slate-200 bg-white transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Main Links Structure Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-12">
          
          {/* Column 1: Brand Pitch & Socials */}
          <div className="space-y-6 lg:col-span-2">
            <a 
              href="/" 
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white dark:bg-emerald-500">
                🍳
              </span>
              <span>
                Bite<span className="text-emerald-600 dark:text-emerald-500">craft</span>
              </span>
            </a>
            
            <p className="max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Personalized, nutrient-dense culinary masterpieces crafted with love by neighborhood independent chefs. Skip the factory prep.
            </p>

            {/* Premium Interactive Social Media Badges */}
            <div className="flex gap-3">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all duration-200 hover:scale-[1.03] hover:border-emerald-600 hover:text-emerald-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:text-emerald-500"
                  aria-label={`Visit Bitecraft on ${social}`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-50">
              Platform
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Chef Partnership Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-50">
              For Chefs
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerLinks.forChefs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-50">
              Resources
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lower Legal & Bottom Bar */}
        <div className="mt-12 border-t border-slate-100 pt-8 dark:border-slate-800/60">
          <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
            
            {/* Copyright Statement */}
            <p className="text-xs text-slate-500 dark:text-slate-400">
              &copy; {currentYear} Bitecraft Inc. All rights reserved. Made for premium wellness.
            </p>

            {/* Inline Legal links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-500"
                >
                  {link.label}
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}