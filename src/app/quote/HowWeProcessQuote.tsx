"use client";

import {
  MessageCircle,
  MapPin,
  FileText,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Consultation",
    description: "We talk to you to understand your cleaning needs.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Site Visit",
    description:
      "We visit your location to assess the space — completely free.",
    icon: MapPin,
  },
  {
    step: "03",
    title: "Custom Proposal",
    description:
      "We create a tailored plan with clear and transparent pricing.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Execution",
    description:
      "We onboard our team and begin delivering high-quality service.",
    icon: Sparkles,
  },
];

export default function HowWeProcessQuote() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-[0.2em]"
            style={{ color: "#3cb6c6" }}
          >
            Simple & Transparent
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How We Process Your Quote
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From understanding your needs to delivering exceptional service, our
            process is simple and straightforward.
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-16 hidden h-[2px] lg:block"
            style={{ backgroundColor: "#3cb6c6", opacity: 0.25 }}
          />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-[8px] border-white shadow-lg"
                      style={{
                        backgroundColor: "#3cb6c6",
                        boxShadow: "0 10px 30px rgba(60, 182, 198, 0.25)",
                      }}
                    >
                      <Icon
                        className="h-10 w-10 text-white"
                        strokeWidth={1.7}
                      />

                      <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                        {item.step}
                      </span>
                    </div>

                    <div className="mt-7">
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="mt-7 flex justify-center lg:hidden">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: "rgba(60, 182, 198, 0.1)",
                          color: "#3cb6c6",
                        }}
                      >
                        <ArrowRight className="h-5 w-5 rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
