"use client";

import { FooterLinkType } from "@/app/types/footerlinks";
import { getDataPath } from "@/app/utils/paths";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Header/Logo";

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(matchMedia.matches);

    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    matchMedia.addEventListener("change", listener);

    return () => matchMedia.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        SetFooterlink(data.FooterLinkData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="shadow-lg dark:shadow-neutral-50/5 dark:bg-darkmode bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff]`">
      <div className="container mx-auto pt-3">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          <div className="flex flex-col items-start gap-6">
            <div className="w-36 sm:w-40 md:w-44">
              <Logo />
            </div>

            <div className="flex gap-4 sm:mt-0">
              <Link href="/" onClick={(e) => e.preventDefault()}>
                <Icon
                  icon={
                    isDark ? "tabler:brand-instagram" : "tabler:brand-instagram"
                  }
                  width={45}
                  height={45}
                  className="text-darkblue dark:text-white bg-darkmode/5 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                />
              </Link>
              <Link href="/" onClick={(e) => e.preventDefault()}>
                <Icon
                  icon={
                    isDark
                      ? "tabler:brand-linkedin-filled"
                      : "tabler:brand-linkedin-filled"
                  }
                  width={45}
                  height={45}
                  className="text-darkblue dark:text-white bg-darkmode/5 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 lg:gap-20">
            {footerlink.map((product, i) => (
              <div key={i} className="flex flex-col min-w-[150px]">
                <p className="text-xl font-semibold mb-4  text-primary dark:text-white">
                  {product.section}
                </p>
                <ul className="flex flex-col gap-2 ">
                  {product.links.map((item, j) => (
                    <li key={j}>
                      <Link
                        href={item.href}
                        onClick={(e) => e.preventDefault()}
                        className=" text-primary dark:text-white hover:text-primary dark:hover:text-primary  text-base font-normal"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 min-w-[250px] cursor-pointer">
            <p className="font-bold text-offwhite text-primary dark:text-white">
              CONTACT US
            </p>
            <div className="flex items-start gap-1">
              <Icon
                icon="tabler:map-pin"
                width={22}
                height={22}
                className="text-primary dark:text-white mt-1"
              />
              <p className="text-base font-normal text-offwhite text-primary dark:text-white">
                Unit 408, Bedford Heights Brickhill Drive, Bedford MK41 7PH
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Icon
                icon="tabler:phone"
                width={22}
                height={22}
                className="text-primary dark:text-white"
              />
              <p className="text-base font-normal text-offwhite text-primary dark:text-white hover:text-primary dark:hover:text-primary">
                +44 1234745377
              </p>
            </div>

            <div className="flex items-start gap-1">
              <Icon
                icon="tabler:mail"
                width={22}
                height={22}
                className="text-primary dark:text-white mt-1"
              />
              <div>
                <p className="text-base font-normal text-offwhite text-primary dark:text-white hover:text-primary dark:hover:text-primary">
                  info@ncccleaning.co.uk <br /> service@ncccleaning.co.uk
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 mt-10 border-t border-darkblue/20 text-center text-sm">
          <p>@2023-2026 All Rights Reserved by NCC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
