"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock3,
  Headphones,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { SpecializeType } from "@/app/types/specialize";
import { getDataPath } from "@/app/utils/paths";

const iconList = [ShieldCheck, Award, CheckCircle2, Clock3, Headphones, Star];

const SpecializeSkeleton = () => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 6 }, (_, index) => (
      <div
        key={`skeleton-${index}`}
        aria-hidden="true"
        className="animate-pulse rounded-[1.75rem] border border-primary/10 bg-secondary p-6 sm:p-7 dark:bg-darklight"
      >
        <div className="mb-7 h-12 w-12 rounded-2xl bg-primary/10" />
        <div className="mb-3 h-5 w-36 rounded bg-primary/10" />
        <div className="space-y-2">
          <div className="h-3.5 w-full rounded bg-primary/10" />
          <div className="h-3.5 w-5/6 rounded bg-primary/10" />
          <div className="h-3.5 w-2/3 rounded bg-primary/10" />
        </div>
      </div>
    ))}
  </div>
);

const Specialize = () => {
  const [specializations, setSpecializations] = useState<SpecializeType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchSpecializations = async () => {
      try {
        const response = await fetch(getDataPath("/data.json"), {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch specialization data: ${response.status}`,
          );
        }

        const data = await response.json();

        const items = Array.isArray(data?.SpecializeData)
          ? data.SpecializeData
          : [];

        setSpecializations(items);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Error fetching specialization data:", error);
          setSpecializations([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchSpecializations();

    return () => controller.abort();
  }, []);

  return (
    <section
      id="specialize"
      aria-labelledby="specialize-heading"
      className="relative overflow-hidden scroll-mt-20 bg-white py-20 dark:bg-dark sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-48 -top-48 h-[36rem] w-[36rem] rounded-full bg-primary/[0.08] blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-[34rem] w-[34rem] rounded-full bg-primary/[0.05] blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="container relative z-10">
        <header className="mb-14 grid gap-8 lg:mb-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.04] px-4 py-2">
              <Sparkles
                className="h-3.5 w-3.5 text-primary"
                aria-hidden="true"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary sm:text-xs">
                Why choose NCC
              </span>
            </div>

            <h2
              id="specialize-heading"
              className="max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-primary sm:text-5xl lg:text-7xl"
            >
              Excellence,
              <span className="block text-primary/60 dark:text-white/25">
                thoughtfully delivered.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-primary/70 dark:text-white/60 sm:text-lg">
              Experience dependable service built around quality,
              professionalism, and attention to every detail.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-primary dark:text-white">
              <span className="h-px w-10 bg-primary" />
              <span>Our commitment to quality</span>
            </div>
          </div>
        </header>

        <div className="mb-6 overflow-hidden rounded-[2rem] border border-primary/10 bg-primary text-white shadow-[0_30px_100px_rgba(0,0,0,0.12)]">
          <div className="relative p-7 sm:p-9 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-64 w-64 translate-x-1/4 -translate-y-1/4 rounded-full bg-white/[0.08] blur-2xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </div>

                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
                  The NCC difference
                </p>

                <h3 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  Professional standards.
                  <span className="block text-white/55">
                    Personal attention.
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold">Trusted service</p>
                  <p className="text-xs text-white/50">
                    Built around reliability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading && <SpecializeSkeleton />}

        {!loading && specializations.length > 0 && (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
              {specializations.map((item, index) => {
                const Icon = iconList[index % iconList.length];

                const isFeatured = index === 0;
                const isWide = index === 3 || index === 5;

                return (
                  <article
                    key={`${item.title}-${index}`}
                    className={[
                      "group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6",
                      "transition-all duration-500 ease-out",
                      "hover:-translate-y-1",
                      "hover:border-[#3cb6c6]/30",
                      "hover:shadow-[0_24px_60px_rgba(60,182,198,0.15)]",
                      isFeatured
                        ? "lg:col-span-7 lg:min-h-[310px] lg:p-9"
                        : isWide
                          ? "lg:col-span-7"
                          : "lg:col-span-5",
                    ].join(" ")}
                  >
                    <div
                      aria-hidden="true"
                      className="
                          pointer-events-none
                          absolute
                          inset-0
                          z-0
                          bg-gradient-to-br
                          from-[#e3ffe7]
                          via-[#e8fff0]
                          to-[#d9f7e8]
                          opacity-0
                          transition-opacity
                          duration-700
                          ease-out
                          group-hover:opacity-100
                        "
                    />

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        z-0
                        h-52
                        w-52
                        rounded-full
                        bg-[#3cb6c6]/10
                        blur-3xl
                        opacity-0
                        transition-all
                        duration-700
                        ease-out
                        group-hover:scale-125
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-auto flex items-start justify-between gap-5">
                        <div
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#3cb6c6]/10
                            text-[#3cb6c6]
                            ring-1
                            ring-[#3cb6c6]/10
                            transition-all
                            duration-500
                            group-hover:bg-[#3cb6c6]
                            group-hover:text-white
                            group-hover:ring-[#3cb6c6]
                            group-hover:shadow-lg
                            group-hover:shadow-[#3cb6c6]/20
                          "
                        >
                          <Icon
                            className="
                                h-5
                                w-5
                                transition-transform
                                duration-500
                                group-hover:scale-110
                              "
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </div>

                        <span
                          className="
                            text-xs
                            font-bold
                            tabular-nums
                            text-slate-300
                            transition-colors
                            duration-500
                            group-hover:text-[#3cb6c6]
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-12">
                        <div className="mb-3 flex items-center gap-2">
                          {isFeatured && (
                            <span
                              className="
                              rounded-full
                              bg-[#3cb6c6]
                              px-2.5
                              py-1
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.16em]
                              text-white
                            "
                            >
                              Featured
                            </span>
                          )}
                        </div>

                        <div className="flex items-end justify-between gap-5">
                          <div>
                            <h3
                              className={[
                                "font-bold tracking-tight text-slate-900",
                                "transition-colors duration-500",
                                isFeatured ? "text-2xl sm:text-3xl" : "text-xl",
                              ].join(" ")}
                            >
                              {item.title}
                            </h3>

                            <p
                              className="
                                mt-3
                                max-w-2xl
                                text-sm
                                leading-7
                                text-slate-500
                                transition-colors
                                duration-500
                                group-hover:text-slate-600
                              "
                            >
                              {item.desc}
                            </p>
                          </div>

                          <div
                            className="
                                hidden
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-200
                                bg-white/70
                                text-slate-400
                                backdrop-blur-sm
                                transition-all
                                duration-500
                                sm:flex
                                group-hover:border-[#3cb6c6]
                                group-hover:bg-[#3cb6c6]
                                group-hover:text-white
                              "
                          >
                            <ArrowUpRight
                              className="
                                h-4
                                w-4
                                transition-transform
                                duration-500
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                              "
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col gap-4 rounded-[1.5rem] border border-primary/10 bg-primary px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10  text-white">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="text-md font-medium  text-white">
                  Quality, reliability and professionalism at every step.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold  text-white ">
                <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                <span>NCC Standard</span>
              </div>
            </div>
          </>
        )}

        {!loading && specializations.length === 0 && (
          <div className="rounded-[2rem] border border-primary/10 bg-secondary px-6 py-20 text-center dark:bg-darklight">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 className="mb-2 text-lg font-bold text-primary dark:text-white">
              No information available
            </h3>

            <p className="mx-auto max-w-md text-sm leading-6 text-primary/50 dark:text-white/50">
              Specialization information is currently unavailable. Please check
              back later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specialize;
