"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  MapPin,
  FileText,
  PlayCircle,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      description: "We talk to you to understand your cleaning needs.",
      icon: ClipboardList,
    },
    {
      id: "02",
      title: "Site Visit",
      description:
        "We visit your location to assess the space — completely free.",
      icon: MapPin,
    },
    {
      id: "03",
      title: "Custom Proposal",
      description:
        "We create a tailored plan with clear and transparent pricing.",
      icon: FileText,
    },
    {
      id: "04",
      title: "Execution",
      description:
        "We onboard our team and begin delivering high-quality service.",
      icon: PlayCircle,
    },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
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
      className="relative overflow-hidden bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] py-16 sm:py-20 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#3cb6c6]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#3cb6c6]/10 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-700 sm:mb-16 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3cb6c6]/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#329eac] shadow-sm backdrop-blur">
            <CheckCircle2 className="h-4 w-4" />
            Simple & Transparent
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            How We <span className="text-[#3cb6c6]">Work</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Our structured onboarding process ensures a smooth experience from
            the first conversation through to professional service delivery.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-6 top-6 w-px bg-[#3cb6c6]/25 sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`relative flex items-center transition-all duration-700 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex w-full items-start gap-5 sm:hidden">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3cb6c6] text-white shadow-lg shadow-[#3cb6c6]/20 ring-4 ring-[#e3ffe7]">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>

                    <div className="flex-1 cursor-pointer rounded-2xl border border-white/80 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#3cb6c6]/30 hover:shadow-xl">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-xs font-bold tracking-wider text-[#3cb6c6]">
                          STEP {step.id}
                        </span>

                        <CheckCircle2 className="h-4 w-4 text-[#3cb6c6]" />
                      </div>

                      <h3 className="text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden w-full items-center sm:flex">
                    <div className="w-1/2 pr-12">
                      {index % 2 === 0 ? (
                        <div className="cursor-pointer rounded-3xl border border-white/80 bg-white p-7 text-right shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#3cb6c6]/30 hover:shadow-xl">
                          <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#3cb6c6]">
                            Step {step.id}
                          </div>

                          <h3 className="text-xl font-bold text-slate-900">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        <div className="text-right text-sm font-bold text-[#3cb6c6]/40">
                          {step.id}
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#3cb6c6] text-white shadow-xl shadow-[#3cb6c6]/20 ring-8 ring-[#e3ffe7]">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>

                    <div className="w-1/2 pl-12">
                      {index % 2 !== 0 ? (
                        <div className="cursor-pointer rounded-3xl border border-white/80 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#3cb6c6]/30 hover:shadow-xl">
                          <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#3cb6c6]">
                            Step {step.id}
                          </div>

                          <h3 className="text-xl font-bold text-slate-900">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        <div className="text-sm font-bold text-[#3cb6c6]/40">
                          {step.id}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`mx-auto mt-14 flex max-w-2xl flex-col items-center text-center transition-all duration-700 sm:mt-16 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: "700ms",
          }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3cb6c6]/10 text-[#3cb6c6]">
            <ArrowDown className="h-5 w-5" />
          </div>

          <p className="mt-4 text-sm font-medium text-slate-600">
            From initial consultation to final delivery, we keep the process
            simple, transparent, and professional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
