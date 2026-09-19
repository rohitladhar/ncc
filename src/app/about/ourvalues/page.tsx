"use client";

import React, { useEffect, useRef, useState } from "react";
import { Activity, Handshake, Building2, Leaf } from "lucide-react";

const pillars = [
  {
    title: "Operational Stability",
    description:
      "We guarantee service continuity through comprehensive holiday and sickness coverage, ensuring your operations never skip a beat.",
    icon: Activity,
    gradient: "from-[#e3ffe7] to-[#d9f7e8]",
  },
  {
    title: "Transparent Partnerships",
    description:
      "No hidden costs. We agree on pricing upfront, and additional charges only occur when you request extra services.",
    icon: Handshake,
    gradient: "from-[#e3fdf4] to-[#d9e7ff]",
  },
  {
    title: "Asset Integrity",
    description:
      "We protect your property with data-driven maintenance logs, BICS-compliant deep cleaning, and proactive hazard identification to preserve asset value.",
    icon: Building2,
    gradient: "from-[#e3f9ff] to-[#d9e7ff]",
  },
  {
    title: "Sustainable Stewardship",
    description:
      "We help protect the environment by using smart stain-protection techniques and by ensuring our supply chain is sustainable. This way, we take care of both your space and the planet.",
    icon: Leaf,
    gradient: "from-[#e3ffe7] to-[#d9e7ff]",
  },
];

const OurValues = () => {
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
      className="relative mt-8 overflow-hidden py-16 md:py-24"
    >
      <div className="container relative mx-auto max-w-7xl px-4 ">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3cb6c6]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#329eac] shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#3cb6c6]" />
            What we stand for
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Our <span className="text-[#3cb6c6]">Values</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            The principles that shape how we work, serve our clients, and
            deliver consistent results every day.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 justify-items-center gap-20 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className={`
                  group
                  relative
                  flex
                  h-[280px]
                  w-[280px]
                  items-center
                  justify-center
                  opacity-0
                  transition-[opacity,transform]
                  duration-700
                  ease-out
                  sm:h-[300px]
                  sm:w-[300px]

                  ${
                    visible
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-8 scale-75 opacity-0"
                  }

                  hover:z-30
                  hover:scale-[1.12]
                `}
                style={{
                  transitionDelay: visible ? `${index * 150}ms` : "0ms",
                }}
              >
                <div
                  className={`
                    absolute
                    inset-0
                    rotate-45
                    rounded-[28px]
                    border
                    border-white/80
                    bg-gradient-to-br
                    ${pillar.gradient}
                    shadow-lg
                    shadow-[#3cb6c6]/10
                    transition-all
                    duration-300
                    ease-out
                    group-hover:shadow-2xl
                    group-hover:shadow-[#3cb6c6]/25
                  `}
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[12px]
                    rotate-45
                    rounded-[22px]
                    border
                    border-white/70
                    transition-colors
                    duration-300
                    group-hover:border-[#3cb6c6]/25
                  "
                />

                <div className="relative z-10 flex w-[215px] flex-col items-center text-center">
                  <div
                    className="
                      mb-4
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#3cb6c6]
                      text-white
                      shadow-lg
                      shadow-[#3cb6c6]/25
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:shadow-[#3cb6c6]/40
                    "
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  
                  <h3 className="text-lg font-bold leading-tight text-slate-900">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-sm">
                    {pillar.description}
                  </p>
                </div>

                <div
                  className="
                    absolute
                    -right-2
                    -top-2
                    z-20
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-[#e3ffe7]
                    bg-[#3cb6c6]
                    text-xs
                    font-bold
                    text-white
                    shadow-md
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {pillar.title.charAt(0)}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`
            mx-auto
            mt-16
            max-w-3xl
            text-center
            transition-all
            duration-700
            ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
          style={{
            transitionDelay: visible ? "750ms" : "0ms",
          }}
        >
          <p className="text-sm leading-6 text-slate-500 sm:text-base">
            From operational reliability to environmental responsibility, every
            decision we make is guided by these principles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
