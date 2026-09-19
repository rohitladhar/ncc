import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Professionals",
    description: "Reliable, experienced cleaning specialists.",
  },
  {
    icon: Sparkles,
    title: "Tailored Solutions",
    description: "Cleaning plans built around your needs.",
  },
  {
    icon: Clock3,
    title: "Flexible Service",
    description: "Schedules that work around your business.",
  },
];

export default function ContactIntro() {
  return (
    <div className="relative min-h-[650px] overflow-hidden rounded-l-3xl bg-[#3cb6c6] p-8 sm:p-12 lg:p-14">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10" />
      <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-white/10" />
      <div className="absolute right-16 top-32 h-40 w-40 rounded-full border border-white/10" />
      <div className="absolute right-24 top-40 h-24 w-24 rounded-full border border-white/10" />
      <div className="absolute right-10 top-10 grid grid-cols-4 gap-2 opacity-30">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-white" />
        ))}
      </div>

      <div className="relative z-10 flex min-h-[600px] flex-col">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            <span className="text-sm font-semibold text-white">
              Get In Touch
            </span>
          </div>

          <div className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md sm:flex">
            <Star className="h-3.5 w-3.5 fill-white" />
            Professional Cleaning
          </div>
        </div>

        <div className="mt-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
            Clean spaces. Better environments.
          </p>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Make Your
            <br />
            Space <span className="text-white/60">Cleaner.</span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Tell us what you need and our team will create a professional
            cleaning solution designed around your space, schedule, and
            requirements.
          </p>
        </div>

        <div>
          <a
            href="/quote"
            className="group inline-flex w-fit items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-2 pr-5 backdrop-blur-md transition-all duration-300 hover:bg-white/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#3cb6c6] shadow-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Request a free quote
              </p>
              <p className="text-xs text-white/65">
                No obligation. No pressure.
              </p>
            </div>
          </a>
        </div>

        <div className="mt-auto pt-12">
          <div className="grid gap-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.09] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.16]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#3cb6c6] shadow-md">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-white">
                        {benefit.title}
                      </p>

                      <span className="hidden text-[10px] font-medium uppercase tracking-wider text-white/35 sm:block">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-0.5 text-xs leading-5 text-white/65">
                      {benefit.description}
                    </p>
                  </div>

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-white/40 transition-colors group-hover:text-white" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <p className="text-xs leading-5 text-white/60">
              From offices and commercial buildings to healthcare, education,
              and care facilities — dependable cleaning tailored to your
              environment.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-[#3cb6c6] bg-white/90" />
              <div className="h-8 w-8 rounded-full border-2 border-[#3cb6c6] bg-white/70" />
              <div className="h-8 w-8 rounded-full border-2 border-[#3cb6c6] bg-white/50" />
            </div>

            <div>
              <p className="text-xs font-bold text-white">
                Professional service
              </p>
              <p className="text-[10px] text-white/55">
                Built around your requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
