"use client";

import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Great Team",
    description: "Work alongside supportive and professional people.",
  },
  {
    icon: Sparkles,
    title: "Make an Impact",
    description: "Help create cleaner, healthier spaces every day.",
  },
  {
    icon: Briefcase,
    title: "Grow With Us",
    description: "Build your experience and develop your career.",
  },
];

interface CareerInfoProps {
  onExplore: () => void;
}

export default function CareerInfo({ onExplore }: CareerInfoProps) {
  return (
    <div className="relative min-h-[650px] overflow-hidden rounded-l-3xl bg-[#3cb6c6] p-8 sm:p-12 lg:p-14">
      <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-white/10" />
      <div className="absolute -bottom-32 -left-28 h-96 w-96 rounded-full bg-white/10" />
      <div className="absolute right-12 top-24 h-32 w-32 rounded-full border border-white/10" />
      <div className="absolute right-20 top-32 h-20 w-20 rounded-full border border-white/10" />

      <div className="absolute right-8 top-8 grid grid-cols-4 gap-2 opacity-30">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-white" />
        ))}
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <Briefcase className="h-4 w-4 text-white" />
          <span className="text-sm font-semibold text-white">
            Join Our Team
          </span>
        </div>
        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Build your future with us
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Next
            <br />
            Opportunity <span className="text-white/60">Starts Here.</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-white/85 sm:text-lg">
            We are always looking for hardworking, reliable, and motivated
            people to join our growing cleaning team.
          </p>
        </div>

        <button
          type="button"
          onClick={onExplore}
          className="group relative mt-8 flex w-full max-w-sm cursor-pointer items-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 text-left backdrop-blur-md"
        >
          <div
            className="
            absolute left-2 top-2.5 z-10
            flex h-11 w-12 items-center justify-center
            rounded-xl bg-white
            text-[#3cb6c6] shadow-lg
            transition-all duration-700 ease-in-out
            group-hover:left-[calc(100%-3.5rem)]
          "
          >
            <ArrowUpRight className="h-6 w-6" />
          </div>

          <div className="relative ml-16 min-h-[38px]">
            <p className="text-sm font-bold text-white">
              Explore opportunities
            </p>

            <div className="relative h-5 overflow-hidden">
              <span
                className="
                  absolute left-0 top-0
                  text-xs text-white/65
                  transition-all duration-300
                  group-hover:-translate-y-5
                  group-hover:opacity-0
                "
              >
                Take the next step in your career.
              </span>

              <span
                className="
                  absolute left-0 top-5
                  text-xs font-medium text-white
                  opacity-0
                  transition-all duration-300
                  group-hover:top-0
                  group-hover:opacity-100
                "
              >
                Click for more information
              </span>
            </div>
          </div>
        </button>

        <div className="mt-auto space-y-3 pt-12">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.09] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.16]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#3cb6c6] shadow-md">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-bold text-white">
                    {benefit.title}
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-white/65">
                    {benefit.description}
                  </p>
                </div>

                <CheckCircle2 className="h-5 w-5 text-white/40 transition-colors group-hover:text-white" />
              </div>
            );
          })}
        </div>
        <div className="mt-7 border-t border-white/15 pt-6">
          <p className="text-xs leading-5 text-white/60">
            Whether you are experienced in professional cleaning or looking for
            a new opportunity, we value commitment, reliability, and a positive
            attitude.
          </p>
        </div>
      </div>
    </div>
  );
}
