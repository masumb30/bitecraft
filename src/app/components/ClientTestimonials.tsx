import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  personaTag: string;
  avatar: string;
  rating: number;
}

export default function ClientTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "As a software engineer pulling long sprints, cooking healthy food was the first thing I sacrificed. Now, I get incredibly delicious, home-cooked keto meals delivered right to my desk. Saved me easily 10 hours a week.",
      author: "Masum",
      role: "Senior Software Developer",
      personaTag: "Busy Professional",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
    },
    {
      id: 2,
      quote: "Hitting my daily macro goals used to require massive meal-prep sessions every Sunday. Bitecraft lets me source clean, high-protein plates directly from local chefs who list exact protein, carb, and fat counts.",
      author: "David Vance",
      role: "Competitive Powerlifter",
      personaTag: "Gym Goer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
    },
    {
      id: 3,
      quote: "My kids have distinct dietary preferences, and my schedule is packed. Having a trusted neighborhood chef cook fresh, wholesome dinners with local organic ingredients has been an absolute game-changer for our family.",
      author: "Elena Rostova",
      role: "Founder & Parent",
      personaTag: "Family First",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
    },
  ];

  return (
    <section className="bg-slate-50 py-16 transition-colors duration-200 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
            Community Voices
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Trusted by active busy lifestyles
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            See how professionals and fitness enthusiasts save hours each week without compromising on fresh quality.
          </p>
        </div>

        {/* Testimonials Grid (Desktop Grid / Mobile CSS Snap Carousel) */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-[85vw] shrink-0 snap-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:scale-[1.01] hover:shadow-md dark:border-slate-800 dark:bg-slate-900 md:w-auto"
            >
              {/* Card Top: Stars & Persona Badge */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-amber-500 dark:text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                  {t.personaTag}
                </span>
              </div>

              {/* Quote Block */}
              <blockquote className="mt-6">
                <p className="text-sm italic leading-relaxed text-slate-600 dark:text-slate-400">
                  "{t.quote}"
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6 dark:border-slate-800/60">
                <img
                  className="h-10 w-10 rounded-xl object-cover"
                  src={t.avatar}
                  alt={t.author}
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-50">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}