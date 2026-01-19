"use client";

import { useState } from "react";
import { getImgPath } from "@/app/utils/paths";
import Image from "next/image";
import Link from "next/link";
import BasicModal from "../../Layout/Modal/Modal";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <BasicModal open={open} onClose={() => setOpen(false)} flag={false} />

      <div className="container pt-24">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <h1 className="max-w-lg dark:text-white  text-primary">
              PROFESSIONAL CLEANING SERVICES ACROSS THE UK
            </h1>

            <div className="flex gap-5 mt-10">
              <button
                onClick={() => setOpen(true)}
                className="px-12 py-3 font-medium text-white border rounded-lg border-primary bg-primary hover:bg-transparent hover:text-primary duration-300"
              >
                Get a free Quote
              </button>

              <Link href="/#services">
                <button className="px-12 py-3 font-medium text-primary border rounded-lg border-primary hover:bg-primary hover:text-white duration-300">
                  Our Services
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src={getImgPath("/images/cleaning/banner.png")}
              alt="banner"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
