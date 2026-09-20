"use client";
import { getImgPath } from "@/app/utils/paths";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[600px] pt-28 pb-20 flex items-center overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={getImgPath(slide.image)}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />
              </div>
              {/* Content */}
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
      {/* Custom Lucide Navigation */}
      <button
        type="button"
        className="hero-prev absolute left-4 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} strokeWidth={2.5} />
      </button>
      <button
        type="button"
        className="hero-next absolute right-4 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
        aria-label="Next slide"
      >
        <ChevronRight size={16} strokeWidth={2.5} />
      </button>
      <style jsx global>{`
        .hero-swiper {
          width: 100%;
        } /* * IMPORTANT: * Every slide uses the same height and the image fills * the exact same area using object-cover. */
        .hero-swiper .swiper-slide {
          height: 600px;
        }
        .hero-swiper .swiper-slide > div {
          height: 600px;
          min-height: 600px;
        } /* Pagination */
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
        } /* Mobile */
        @media (max-width: 768px) {
          .hero-swiper .swiper-slide {
            height: 600px;
          }
          .hero-swiper .swiper-slide > div {
            height: 600px;
            min-height: 600px;
          }
          .hero-prev,
          .hero-next {
            width: 28px;
            height: 28px;
          }
          .hero-prev {
            left: 8px;
          }
          .hero-next {
            right: 8px;
          }
        }
      `}</style>
    </section>
  );
};
export default Hero;
