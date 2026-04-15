"use client";
import { getImgPath } from "@/app/utils/paths";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20 lg:py-20">
      <div className="container pt-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="max-w-lg text-primary dark:text-white leading-tight">
              PROFESSIONAL CLEANING SERVICES ACROSS THE UK
            </h2>

            <ul className="space-y-3">
              {[
                "Fully insured and thoroughly vetted cleaning professionals",
                "Flexible service plans",
                "Cleaning services available outside standard hours, including weekends",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3  rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <span className="flex items-center justify-center w-5 h-5 mt-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex gap-x-4 justify-center sm:justify-start">
              <Link href="/quote">
                <button className="px-10 py-3 font-medium text-white border rounded-lg border-primary bg-primary hover:bg-transparent hover:text-primary duration-300">
                  Get a free Quote
                </button>
              </Link>
              <a
                href="/eBrochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-10 py-3 font-medium text-white border rounded-lg border-primary bg-primary hover:bg-transparent hover:text-primary duration-300">
                  E Brochure
                </button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[300px] md:h-[400px] lg:h-[520px]">
            <Image
              src={getImgPath("/images/cleaning/banner.png")}
              alt="banner"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
