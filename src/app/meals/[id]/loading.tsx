export default function MealDetailsSkeleton() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8 animate-pulse">
      
      {/* Back Button Skeleton */}
      <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded-lg" />

      {/* Hero Header Area */}
      <div className="space-y-4">
        {/* Meal Title */}
        <div className="h-9 w-2/3 bg-slate-200 dark:bg-slate-700 rounded-xl" />
        
        {/* Price & Tags */}
        <div className="flex gap-3">
          <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded-md" />
          <div className="h-5 w-24 bg-slate-200 dark:bg-slate-700 rounded-md" />
        </div>
      </div>

      {/* Chef Profile Card Box */}
      <div className="flex items-center gap-4 p-4 border border-slate-100 dark:border-slate-800 rounded-2xl">
        {/* Chef Avatar */}
        <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full shrink-0" />
        {/* Chef Name & Rating */}
        <div className="space-y-2 flex-1">
          <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded-md" />
          <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded-md" />
        </div>
      </div>

      {/* Reviews Section Skeleton */}
      <div className="space-y-4">
        <div className="h-6 w-36 bg-slate-200 dark:bg-slate-700 rounded-lg mb-6" />
        
        {/* Review Items (Renders 2 fake reviews) */}
        {[1, 2].map((i) => (
          <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl space-y-3">
            <div className="flex justify-between items-center">
              {/* Reviewer User Info */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full" />
                <div className="h-3 w-24 bg-slate-200 dark:bg-slate-700 rounded-md" />
              </div>
              {/* Rating */}
              <div className="h-3 w-12 bg-slate-200 dark:bg-slate-700 rounded-md" />
            </div>
            {/* Review Comment Text */}
            <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-md" />
            <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-md" />
          </div>
        ))}
      </div>

    </div>
  );
}