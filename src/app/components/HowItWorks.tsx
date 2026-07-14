import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: '01',
      title: 'Choose Your Plan',
      description: 'Select a flexible subscription or order à la carte. Customize your weekly macro targets and dietary preferences.',
      icon: '📅',
    },
    {
      number: '02',
      title: 'Chefs Cook Fresh',
      description: 'Your chosen neighborhood chef hand-picks organic ingredients and prepares your meals in a certified kitchen.',
      icon: '🍳',
    },
    {
      number: '03',
      title: 'Delivered to Your Door',
      description: 'Meals arrive chilled in eco-friendly insulated bags. Simply heat for 3 minutes, eat, and repeat.',
      icon: '🚚',
    },
  ];

  return (
    <section className="bg-slate-50 py-16 transition-colors duration-200 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
            The Process
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Healthy eating, made beautifully simple
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            We bridge the gap between busy schedules and gourmet nutrition in three seamless steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Desktop Connecting Line (Hidden on Mobile) */}
          <div className="absolute top-1/2 left-[15%] right-[15%] hidden h-0.5 -translate-y-8 bg-gradient-to-r from-emerald-600/20 via-amber-500/20 to-emerald-600/20 dark:from-emerald-500/10 dark:via-amber-400/10 dark:to-emerald-500/10 md:block" />

          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="group relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-200 hover:scale-[1.01] hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Step Number Badge */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white transition-colors dark:bg-amber-400 dark:text-slate-950">
                Step {step.number}
              </span>

              {/* Icon Container */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl transition-transform duration-300 group-hover:rotate-6 dark:bg-emerald-950/40">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-slate-50">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {step.description}
              </p>

              {/* Subtle accent corner border */}
              <div className="absolute bottom-0 right-0 h-4 w-4 rounded-br-2xl border-b-2 border-r-2 border-transparent transition-all duration-200 group-hover:border-emerald-600 dark:group-hover:border-emerald-500" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}