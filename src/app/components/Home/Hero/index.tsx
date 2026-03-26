"use client";

import { useState } from "react";
import { getImgPath } from "@/app/utils/paths";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className="container pt-24">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <h1 className="max-w-lg dark:text-white  text-primary">
              PROFESSIONAL CLEANING SERVICES ACROSS THE UK
            </h1>

            <div className="flex gap-5 mt-10">
              

              <Link href="/quote">
               <button
                onClick={() => setOpen(true)}
                className="px-12 py-3 font-medium text-white border rounded-lg border-primary bg-primary hover:bg-transparent hover:text-primary duration-300"
              >
                Get a free Quote
              </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[350px] md:h-[450px] lg:h-[600px]">
            <Image
              src={getImgPath("/images/cleaning/wallpaper.png")}
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
