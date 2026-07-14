'use client';

import React, { useState } from 'react';

export default function MealCommentForm() {
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for submitting your ${rating}-star feedback.`);
    setComment('');
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-50">Leave a Comment</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Simple Star Selection */}
        <div>
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 block mb-1.5 uppercase">Your Score</label>
          <select 
            value={rating} 
            onChange={(e) => setRating(Number(e.target.value))}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
          >
            <option value={5}>5 Stars (Excellent)</option>
            <option value={4}>4 Stars (Good)</option>
            <option value={3}>3 Stars (Average)</option>
            <option value={2}>2 Stars (Poor)</option>
            <option value={1}>1 Star (Unusable)</option>
          </select>
        </div>

        {/* Text Input Block */}
        <div>
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 block mb-1.5 uppercase">Message</label>
          <textarea
            required
            rows={3}
            placeholder="Share your experience regarding food freshness, portions or spice profiles..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs font-medium text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}