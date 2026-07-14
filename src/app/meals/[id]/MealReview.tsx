import React from 'react';

interface ReviewItem {
  id: string;
  user: string;
  rating: number;
  date: string;
  text: string;
}

export default function MealReviews() {
  const mockReviews: ReviewItem[] = [
    { id: 'r1', user: 'Jason D.', rating: 5, date: '2 weeks ago', text: 'Incredibly flavor dense. Steak cuts were tender and seasoned perfectly. Easily hits my protein metrics.' },
    { id: 'r2', user: 'Maria K.', rating: 4, date: '3 weeks ago', text: 'Extremely fresh and cleanly packed. A tiny bit heavy on garlic for me, but overall fantastic value.' }
  ];

  return (
    <div className="rounded-2xl border mt-2 border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-50">Verified Buyer Reviews</h3>
      
      <div className="divide-y divide-slate-100 dark:divide-slate-800/60 space-y-4">
        {mockReviews.map((review) => (
          <div key={review.id} className="pt-4 first:pt-0 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900 dark:text-slate-100">{review.user}</span>
              <span className="text-slate-400">{review.date}</span>
            </div>
            
            <div className="text-amber-500 text-xs">
              {Array.from({ length: review.rating }).map((_, i) => <span key={i}>★</span>)}
            </div>
            
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}