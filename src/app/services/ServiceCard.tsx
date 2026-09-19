"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { ServiceCardType } from "../types/service";
import { getDataPath } from "@/app/utils/paths";

const serviceDescriptions = [
  "Professional cleaning tailored to home office environments, creating a fresh, organised, and productive workspace.",

  "Specialist cleaning focused on hygiene, safety, and consistent standards for healthcare and care environments.",

  "Reliable office cleaning that maintains a professional, welcoming environment for your team, clients, and visitors.",

  "Comprehensive commercial cleaning designed to keep busy buildings clean, presentable, and ready for everyday operations.",

  "Safe, reliable cleaning solutions for educational environments, supporting clean, healthy, and welcoming spaces for students and staff.",

  "Thorough deep cleaning that targets hard-to-reach areas, built-up dirt, and high-use spaces for a noticeably fresher environment.",
];

const ServiceCard = () => {
  const [fetchArr, setFetchData] = useState<ServiceCardType>({
    serviceCards: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(getDataPath("/data.json"), {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch services: ${response.status}`);
        }

        const data = await response.json();

        setFetchData({
          serviceCards: Array.isArray(data?.ServiceCards)
            ? data.ServiceCards
            : [],
        });
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Error fetching services:", error);

          setFetchData({
            serviceCards: [],
          });
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 dark:bg-dark sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-[#3cb6c6]/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-[#3cb6c6]/5
          blur-3xl
        "
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#3cb6c6]/20
              bg-[#3cb6c6]/5
              px-4
              py-2
            "
          >
            <Sparkles className="h-4 w-4 text-[#3cb6c6]" aria-hidden="true" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#329eac]">
              What we offer
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-extrabold
              tracking-tight
              text-primary
              sm:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            Our <span className="text-[#3cb6c6]">Services</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-500
              sm:text-lg
              dark:text-slate-400
            "
          >
            Professional cleaning solutions designed to keep your workplace
            clean, healthy, welcoming, and ready for business.
          </p>
        </div>

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  dark:border-white/10
                  dark:bg-darklight
                "
              >
                <div className="h-56 animate-pulse bg-slate-100 dark:bg-white/5" />

                <div className="space-y-4 p-6">
                  <div className="h-6 w-2/3 animate-pulse rounded bg-slate-100 dark:bg-white/5" />

                  <div className="h-3 w-full animate-pulse rounded bg-slate-100 dark:bg-white/5" />

                  <div className="h-3 w-5/6 animate-pulse rounded bg-slate-100 dark:bg-white/5" />

                  <div className="h-1 w-10 animate-pulse rounded bg-slate-100 dark:bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && fetchArr.serviceCards.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fetchArr.serviceCards.map((card, index) => (
              <Link
                key={`${card.title}-${index}`}
                href={card.href}
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-2
                  hover:border-[#3cb6c6]/30
                  hover:shadow-[0_25px_70px_rgba(60,182,198,0.16)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#3cb6c6]
                  dark:border-white/10
                  dark:bg-darklight
                "
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/20
                      text-xs
                      font-bold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      absolute
                      bottom-5
                      left-5
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-white/80
                    "
                  >
                    NCC Cleaning Services
                  </span>

                  <div
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-slate-900
                      shadow-lg
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:bg-[#3cb6c6]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </div>
                </div>

                <div
                  className="
                    relative
                    overflow-hidden
                    bg-white
                    p-6
                    transition-colors
                    duration-700
                    ease-in-out
                    group-hover:bg-gradient-to-br
                    group-hover:from-[#e3ffe7]
                    group-hover:to-[#d9f7e8]
                    sm:p-7
                    dark:bg-darklight
                    dark:group-hover:from-[#e3ffe7]
                    dark:group-hover:to-[#d9f7e8]
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-[#3cb6c6]/10
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className="
                          text-xl
                          font-bold
                          tracking-tight
                          text-slate-900
                          transition-colors
                          duration-500
                          group-hover:text-slate-950
                          dark:text-white
                          dark:group-hover:text-slate-950
                        "
                      >
                        {card.title}
                      </h3>

                      <span
                        className="
                          mt-2
                          h-2
                          w-2
                          shrink-0
                          rounded-full
                          bg-[#3cb6c6]/30
                          transition-all
                          duration-500
                          group-hover:scale-150
                          group-hover:bg-[#3cb6c6]
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-slate-500
                        transition-colors
                        duration-500
                        group-hover:text-slate-700
                        dark:text-slate-400
                        dark:group-hover:text-slate-700
                      "
                    >
                      {serviceDescriptions[index] ??
                        "Professional cleaning solutions delivered with consistency, attention to detail, and reliable service."}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div
                        className="
                          h-1
                          w-10
                          rounded-full
                          bg-[#3cb6c6]
                          transition-all
                          duration-500
                          group-hover:w-20
                        "
                      />

                      <span
                        className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-[#329eac]
                          opacity-0
                          transition-all
                          duration-500
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      >
                        Explore
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && fetchArr.serviceCards.length === 0 && (
          <div
            className="
              rounded-[2rem]
              border
              border-slate-200
              bg-slate-50
              px-6
              py-20
              text-center
              dark:border-white/10
              dark:bg-darklight
            "
          >
            <div
              className="
                mx-auto
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#3cb6c6]/10
                text-[#3cb6c6]
              "
            >
              <Sparkles className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No services available
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              Our service information is currently unavailable. Please check
              back later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceCard;
