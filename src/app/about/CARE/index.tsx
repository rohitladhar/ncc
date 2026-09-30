"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BadgePoundSterling,
  CalendarCheck,
  ArrowUpRight,
  ShieldCheck,
  UsersRound,
  Check,
  Sparkles,
} from "lucide-react";

const Care = () => {
  const items = [
    {
      letter: "C",
      title: "Cost Certainty",
      description:
        "No surprises. We agree on the total price upfront, and only charge extra if you request additional work.",
      icon: BadgePoundSterling,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
    },
    {
      letter: "A",
      title: "Agile Delivery",
      description:
        "We adapt to your schedule, site, and scope—not the other way around. Tailored to fit your operations.",
      icon: CalendarCheck,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
    },
    {
      letter: "R",
      title: "Reliable Experience",
      description:
        "With over three years of successful contracts across the UK, we bring proven processes that deliver from day one.",
      icon: ShieldCheck,
      color: "bg-violet-500",
      lightColor: "bg-violet-50",
    },
    {
      letter: "E",
      title: "Excellent Staffing",
      description:
        "Every cleaner is trained, vetted, and managed to ensure consistency, familiarity, and high standards.",
      icon: UsersRound,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
    },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-16 md:py-24"
    >
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Why choose us
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              C.A.R.E
            </span>{" "}
            Promise
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We put reliability, flexibility, transparency, and quality at the
            heart of everything we do.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.letter}
                className={`group relative transition-all duration-700 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl">
                  <div className="absolute right-5 top-4 select-none text-7xl font-black text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                    {item.letter}
                  </div>

                  <div
                    className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>

                  <h3 className="relative mb-3 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="relative text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <div
                    className={`mt-6 h-1 w-12 rounded-full ${item.color} transition-all duration-300 group-hover:w-full`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-8 transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: "650ms",
          }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#3cb6c6]/20 bg-white shadow-xl">
            {/* Soft brand gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] opacity-70" />

            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#3cb6c6]/10" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#3cb6c6]/5" />

            <div className="relative flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
              {/* Left */}
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3cb6c6] text-white shadow-md shadow-[#3cb6c6]/20">
                    <ShieldCheck className="h-6 w-6" strokeWidth={2} />
                  </div>

                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#329eac]">
                    Our Guarantee
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  Your satisfaction is{" "}
                  <span className="text-[#3cb6c6]">our priority.</span>
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  If you are not completely satisfied during your first month,
                  we will provide a full refund — 100% guaranteed.
                </p>
              </div>

              {/* Right */}
              <div className="shrink-0 lg:min-w-[280px]">
                <div className="rounded-2xl border border-[#3cb6c6]/20 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3cb6c6] text-white shadow-md shadow-[#3cb6c6]/20">
                      <Check className="h-5 w-5" strokeWidth={2.5} />
                    </div>

                    <div>
                      <p className="text-lg font-bold text-slate-900">
                        100% Refund
                      </p>

                      <p className="text-xs text-slate-500">
                        Contract agreements only
                      </p>
                    </div>
                  </div>

                  <div className="my-5 h-px bg-[#3cb6c6]/15" />

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Satisfaction</span>

                    <span className="font-semibold text-[#329eac]">
                      Guaranteed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 text-center sm:flex-row sm:text-left transition-all duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: "800ms",
          }}
        >
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            A professional cleaning partner should give you confidence, not
            another thing to manage.
          </p>

          <button className="group inline-flex items-center gap-2 font-semibold text-slate-900 transition-colors hover:text-emerald-600">
            Discover our approach
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Care;
