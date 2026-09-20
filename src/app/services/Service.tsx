"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { ServiceProps, FetchDataType } from "../types/service";
import { getDataPath } from "@/app/utils/paths";
import ServiceCard from "./ServiceCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FALLBACK_IMAGE = "/placeholder-image.png";

const Service: React.FC<ServiceProps> = ({ data }) => {
  const [fetchArr, setFetchData] = useState<FetchDataType>({
    cleaningIcons: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));

        if (!res.ok) {
          throw new Error("Failed to fetch cleaning data");
        }

        const jsonData = await res.json();

        setFetchData({
          cleaningIcons: jsonData.CleaningIcons || [],
        });
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 18000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imageOne =
    typeof data?.imgSrcOne === "string" && data.imgSrcOne.trim().length > 0
      ? data.imgSrcOne
      : FALLBACK_IMAGE;

  const imageTwo =
    typeof data?.imgSrcTwo === "string" && data.imgSrcTwo.trim().length > 0
      ? data.imgSrcTwo
      : FALLBACK_IMAGE;

  const benefits =
    typeof data?.benefits === "string"
      ? data.benefits
          .split(".")
          .map((item: string) => item.trim())
          .filter(Boolean)
      : [];

  const tasks = Array.isArray(data?.content?.tasks)
    ? data.content.tasks
    : [];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28 mt-8 md:mt-8">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#3cb6c6]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 top-[45%] h-96 w-96 rounded-full bg-[#3cb6c6]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3cb6c6]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#3cb6c6] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Professional Cleaning
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {data?.title || "Professional Cleaning Services"}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              {data?.paragraph ||
                "Reliable, professional cleaning solutions designed to create cleaner, healthier and more welcoming environments."}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  text: "Professional & Reliable",
                },
                {
                  icon: Clock3,
                  text: "Flexible Service",
                },
                {
                  icon: Users,
                  text: "Trained Cleaners",
                },
                {
                  icon: CheckCircle2,
                  text: "Quality Focused",
                },
              ].map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#3cb6c6]/10 text-[#3cb6c6]">
                      <ItemIcon className="h-4 w-4" />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link
              href={data?.buttonLink || "/contact"}
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#3cb6c6] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#3cb6c6]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#32a8b7] hover:shadow-xl"
            >
              {data?.buttonText || "Get in Contact"}

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-slate-200">
              <div className="relative overflow-hidden rounded-[2rem]">
                <Image
                  src={imageOne}
                  alt={data?.title || "Professional cleaning service"}
                  width={700}
                  height={600}
                  priority
                  loading="eager"
                  className="h-[380px] w-full object-cover sm:h-[500px] lg:h-[560px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-md">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      Cleaning Standard
                    </p>

                    <p className="mt-1 text-base font-bold text-white">
                      Clean. Safe. Professional.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#3cb6c6]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 lg:mt-36">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200 lg:grid-cols-2">
            <div className="relative min-h-[600px]">
              <Image
                src={imageTwo}
                alt="Benefits of professional cleaning"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3cb6c6]">
                  Why It Matters
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  A cleaner workplace,
                  <br />
                  a better environment.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#3cb6c6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3cb6c6]">
                <Sparkles className="h-4 w-4" />
                Benefits
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                More than just
                <span className="text-[#3cb6c6]"> cleaning.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                A professionally maintained environment can help create a
                healthier, safer and more welcoming space for your employees,
                customers and visitors.
              </p>

              {benefits.length > 0 ? (
                <div className="mt-8 space-y-3">
                  {benefits.map((benefit: string, index: number) => (
                    <div
                      key={`${benefit}-${index}`}
                      className="group flex items-start gap-4 rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:border-[#3cb6c6]/20 hover:bg-[#3cb6c6]/5"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3cb6c6]/10 text-[#3cb6c6]">
                        <Check className="h-4 w-4" />
                      </div>

                      <p className="text-sm leading-6 text-slate-600">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Professional cleaning helps maintain a clean, safe and
                    welcoming environment.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-28 lg:mt-36">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#3cb6c6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3cb6c6]">
                <Sparkles className="h-4 w-4" />
                What We Do
              </div>

              <h2 className="mt-5 text-3xl font-black text-slate-950 sm:text-4xl">
                Tasks to be performed
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                Our cleaning teams follow structured procedures to ensure
                every area receives the attention it deserves.
              </p>
            </div>

            <div className="hidden shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 shadow-sm sm:block">
              Professional Standards
            </div>
          </div>

          {tasks.length > 0 ? (
            <div className="relative mt-10">
              <Slider {...settings}>
                {tasks.map((task: string, index: number) => {
                  const icon =
                    fetchArr.cleaningIcons.find(
                      (item) => item.id === index + 1,
                    )?.icon || "mdi:broom";

                  return (
                    <div
                      key={`${task}-${index}`}
                      className="px-2 py-4"
                    >
                      <div className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3cb6c6]/30 hover:shadow-xl">
                        <span className="absolute right-5 top-5 text-5xl font-black text-slate-100">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3cb6c6]/10 text-[#3cb6c6] transition-transform duration-300 group-hover:scale-110">
                          <Icon
                            icon={icon}
                            width={26}
                            height={26}
                          />
                        </div>

                        <p className="relative z-10 mt-auto pt-8 text-sm font-semibold leading-6 text-slate-700">
                          {task}
                        </p>

                        <div className="mt-5 h-1 w-8 rounded-full bg-[#3cb6c6] transition-all duration-300 group-hover:w-14" />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <p className="text-sm text-slate-500">
                No cleaning tasks available.
              </p>
            </div>
          )}
        </div>

        <div className="mt-28 lg:mt-36">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Service;

