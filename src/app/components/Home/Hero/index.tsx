"use client";

import { getImgPath } from "@/app/utils/paths";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Hero = () => {
  const slides = [
    {
      image: "/images/slider/slider-1.png",
      title: "PROFESSIONAL CLEANING SERVICES ACROSS THE UK",
      points: [
        "Fully insured and thoroughly vetted cleaning professionals",
        "Flexible service plans",
        "Cleaning services available outside standard hours, including weekends",
      ],
    },
    {
      image: "/images/slider/slider-2.png",
      title: "RELIABLE CLEANING SERVICES FOR YOUR HOME AND BUSINESS",
      points: [
        "Fully insured and thoroughly vetted cleaning professionals",
        "Flexible cleaning packages to suit your needs",
        "Available during evenings and weekends",
      ],
    },
    {
      image: "/images/slider/slider-3.png",
      title: "A CLEANER SPACE, A BETTER EXPERIENCE",
      points: [
        "Professional and experienced cleaning teams",
        "Tailored cleaning solutions",
        "High-quality service you can rely on",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          EffectFade,
        ]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        slidesPerView={1}
        loop={true}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[600px] pt-28 pb-20 flex items-center overflow-hidden">

              <div className="absolute inset-0 z-0">
                <Image
                  src={getImgPath(slide.image)}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/75 to-transparent" />
              </div>


              <div className="container relative z-10 pt-10">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-6">

                    <h2 className="max-w-lg text-primary dark:text-white leading-tight">
                      {slide.title}
                    </h2>

                    <ul className="space-y-3">
                      {slide.points.map((text, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 rounded-lg transition hover:bg-gray-50/70 dark:hover:bg-gray-800/70"
                        >
                          <span className="flex shrink-0 items-center justify-center w-5 h-5 mt-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                            ✓
                          </span>

                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {text}
                          </span>
                        </li>
                      ))}
                    </ul>

                   
                    <div className="pt-4 flex flex-wrap gap-4">
                      <Link href="/quote">
                        <button
                          type="button"
                          className="px-10 py-3 font-medium text-white border rounded-lg border-primary bg-primary hover:bg-transparent hover:text-primary duration-300"
                        >
                          Get a free Quote
                        </button>
                      </Link>

                      <a
                        href="/eBrochure.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="button"
                          className="px-10 py-3 font-medium text-white border rounded-lg border-primary bg-primary hover:bg-transparent hover:text-primary duration-300"
                        >
                          E Brochure
                        </button>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-swiper {
          width: 100%;
        }

        /* Small Previous / Next Buttons */
        .hero-swiper .swiper-button-prev,
        .hero-swiper .swiper-button-next {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: #3cb6c6;
          transition: all 0.3s ease;
        }

        /* Smaller arrow icon */
        .hero-swiper .swiper-button-prev::after,
        .hero-swiper .swiper-button-next::after {
          font-size: 11px;
          font-weight: 700;
        }

        .hero-swiper .swiper-button-prev:hover,
        .hero-swiper .swiper-button-next:hover {
          background: #3cb6c6;
          color: white;
        }

        /* Position */
        .hero-swiper .swiper-button-prev {
          left: 15px;
        }

        .hero-swiper .swiper-button-next {
          right: 15px;
        }

        /* Small dots */
        .hero-swiper .swiper-pagination {
          bottom: 15px;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: #ffffff;
          opacity: 0.6;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: #3cb6c6;
          opacity: 1;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero-swiper .swiper-button-prev,
          .hero-swiper .swiper-button-next {
            width: 24px;
            height: 24px;
          }

          .hero-swiper .swiper-button-prev::after,
          .hero-swiper .swiper-button-next::after {
            font-size: 9px;
          }

          .hero-swiper .swiper-button-prev {
            left: 8px;
          }

          .hero-swiper .swiper-button-next {
            right: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
