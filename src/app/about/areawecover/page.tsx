"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  CheckCircle2,
  Leaf,
  MapPin,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const locations = [
  {
    title: "London",
    description: "Commercial Cleaning Solutions",
    icon: Building2,
  },
  {
    title: "Bedfordshire",
    description: "Commercial Cleaning Solutions",
    icon: MapPin,
  },
  {
    title: "South West England",
    description: "Commercial Cleaning Solutions",
    icon: MapPinned,
  },
];

const AreaWeCover = () => {
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
      {
        threshold: 0.15,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-10 overflow-hidden bg-white py-16 md:mt-10 md:py-24 dark:bg-dark"
    >
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            className={`relative flex justify-center transition-all duration-700 ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative flex w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 dark:border-white/10 dark:bg-darklight dark:shadow-black/10">
              
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[20px] border-[#3cb6c6]/10"
              />

          
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full border-[25px] border-[#3cb6c6]/5"
              />

           
              <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm sm:left-7 sm:top-7 dark:border-white/10 dark:bg-darklight dark:text-white">
                <MapPinned
                  className="h-4 w-4 text-[#3cb6c6]"
                  aria-hidden="true"
                />
                Our Service Areas
              </div>

              <img
                src="/images/location/UK.png"
                alt="Map showing the areas covered by NCC Cleaning Service"
                className="relative z-10 w-full max-w-[400px] object-contain drop-shadow-[0_20px_30px_rgba(60,182,198,0.12)] transition-transform duration-500 hover:scale-[1.03]"
              />

              <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg sm:bottom-7 sm:right-7 dark:border-white/10 dark:bg-darklight dark:text-white">
                <CheckCircle2
                  className="h-4 w-4 text-[#3cb6c6]"
                  aria-hidden="true"
                />

                <span>Professional Service</span>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              visible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{
              transitionDelay: "150ms",
            }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3cb6c6]/20 bg-[#3cb6c6]/5 px-4 py-2 text-sm font-semibold text-[#329eac]">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Where we operate
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
              Areas We <span className="text-[#3cb6c6]">Cover</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-white/60">
              NCC Cleaning Service provides professional and reliable corporate
              cleaning solutions across the UK, with a strong presence in
              London, Bedfordshire, and South West England.
            </p>

            <div className="mt-8 grid w-full grid-cols-1 gap-3">
              {locations.map((location, index) => {
                const Icon = location.icon;

                return (
                  <div
                    key={location.title}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-4
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#3cb6c6]/30
                      hover:shadow-lg
                      hover:shadow-[#3cb6c6]/10
                      dark:border-white/10
                      dark:bg-darklight
                    "
                    style={{
                      transitionDelay: visible
                        ? `${200 + index * 70}ms`
                        : "0ms",
                    }}
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#3cb6c6]/10
                        text-[#3cb6c6]
                        transition-all
                        duration-300
                        group-hover:bg-[#3cb6c6]
                        group-hover:text-white
                        group-hover:shadow-md
                        group-hover:shadow-[#3cb6c6]/20
                      "
                    >
                      <Icon
                        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {location.title}
                      </h3>

                      <p className="mt-0.5 text-sm leading-5 text-slate-500 dark:text-white/40">
                        {location.description}
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#3cb6c6]/5
                        transition-all
                        duration-300
                        group-hover:bg-[#3cb6c6]/10
                      "
                    >
                      <CheckCircle2
                        className="
                          h-5
                          w-5
                          text-[#3cb6c6]/50
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:text-[#3cb6c6]
                        "
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-7 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3cb6c6] text-white shadow-lg shadow-[#3cb6c6]/20">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Professional cleaning solutions
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-white/50">
                    From daily office cleaning and deep cleaning to specialised
                    commercial services, our trained team focuses on
                    reliability, attention to detail, and consistent standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-white/50">
              <ShieldCheck
                className="h-5 w-5 shrink-0 text-[#3cb6c6]"
                aria-hidden="true"
              />

              <span>
                Reliable teams. Consistent standards. Professional care.
              </span>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-700 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-darklight ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{
            transitionDelay: "650ms",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3cb6c6]/10 text-[#3cb6c6]">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </div>

            <div>
              <p className="font-bold text-slate-900 dark:text-white">
                Local knowledge. Professional standards.
              </p>

              <p className="text-xs text-slate-500 dark:text-white/40">
                Serving businesses across our key coverage areas.
              </p>
            </div>
          </div>

          {/* Location badges */}
          <div className="flex flex-wrap gap-2">
            {locations.map((location) => (
              <span
                key={`badge-${location.title}`}
                className="rounded-full bg-[#3cb6c6]/10 px-3 py-1.5 text-xs font-semibold text-[#329eac]"
              >
                {location.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaWeCover;
