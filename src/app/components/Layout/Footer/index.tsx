"use client";

import { FooterLinkType } from "@/app/types/footerlinks";
import { getDataPath } from "@/app/utils/paths";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Header/Logo";

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([]);
  const [footerAboutData, setFooterAboutData] = useState<FooterLinkType[]>([]);
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

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();

        SetFooterlink(data.FooterLinkData);
        setFooterAboutData(data.FooterLinkAboutData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="shadow-lg dark:shadow-neutral-50/5 dark:bg-darkmode bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff]">
      <div className="container mx-auto pt-3">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Logo & Social Links */}
          <div className="flex flex-col items-start gap-6">
            <div className="w-36 sm:w-40 md:w-44">
              <Logo />
            </div>

            <div className="flex gap-4 sm:mt-0">
              <Link
                href="https://www.instagram.com/ncccleaningservices"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="tabler:brand-instagram"
                  width={45}
                  height={45}
                  className="text-darkblue dark:text-white bg-darkmode/5 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                />
              </Link>

              <Link
                href="https://uk.linkedin.com/company/ncc-cleaning-service-ltd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="tabler:brand-linkedin-filled"
                  width={45}
                  height={45}
                  className="text-darkblue dark:text-white bg-darkmode/5 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                />
              </Link>

              <Link
                href="https://www.youtube.com/@NcccleaningservicesUK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="tabler:brand-youtube-filled"
                  width={45}
                  height={45}
                  className="text-darkblue dark:text-white bg-darkmode/5 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                />
              </Link>

              <Link
                href="https://x.com/ncccleaninng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="tabler:brand-x-filled"
                  width={45}
                  height={45}
                  className="text-darkblue dark:text-white bg-darkmode/5 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-10 lg:gap-20">
            {footerlink.map((product, i) => (
              <div key={i} className="flex flex-col min-w-[150px]">
                <p className="text-xl font-semibold mb-4 text-primary dark:text-white">
                  {product.section}
                </p>

                <ul className="flex flex-col gap-2">
                  {product.links.map((item, j) => (
                    <li key={j}>
                      <Link
                        href={item.href}
                        className="text-primary dark:text-white hover:text-primary dark:hover:text-primary text-base font-normal"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* About Links */}
          <div className="flex flex-wrap gap-10 lg:gap-20">
            {footerAboutData.map((product, i) => (
              <div key={i} className="flex flex-col min-w-[150px]">
                <p className="text-xl font-semibold mb-4 text-primary dark:text-white">
                  {product.section}
                </p>

                <ul className="flex flex-col gap-2">
                  {product.links.map((item, j) => (
                    <li key={j}>
                      <Link
                        href={item.href}
                        className="text-primary dark:text-white hover:text-primary dark:hover:text-primary text-base font-normal"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-2.5 min-w-[250px] cursor-pointer">
            <p className="font-bold text-offwhite text-primary dark:text-white">
              CONTACT US
            </p>

            {/* Address */}
            <div className="flex items-start">
              <Icon
                icon="tabler:map-pin"
                width={22}
                height={22}
                className="text-primary dark:text-white mt-1"
              />

              <span className="text-base font-normal text-offwhite text-primary dark:text-white">
                Unit 408, Bedford Heights Brickhill Drive,
                <br />
                Bedford MK41 7PH
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <Icon
                icon="tabler:phone"
                width={22}
                height={22}
                className="text-primary dark:text-white"
              />

              <span className="text-base font-normal text-offwhite text-primary dark:text-white hover:text-primary dark:hover:text-primary">
                +44 1234745377
              </span>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <Icon
                icon="tabler:mail"
                width={22}
                height={22}
                className="text-primary dark:text-white mt-1"
              />

              <div>
                <span className="text-base font-normal text-offwhite text-primary dark:text-white hover:text-primary dark:hover:text-primary">
                  info@ncccleaning.co.uk
                </span>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-start">
              <Icon
                icon="tabler:shield-lock"
                width={22}
                height={22}
                className="text-primary dark:text-white mt-1"
              />

              <div>
                <span className="text-base font-normal text-offwhite text-primary dark:text-white hover:text-primary dark:hover:text-primary">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </span>
              </div>
            </div>

            {/* Cookie Policy */}
            <div className="flex items-start">
              <Icon
                icon="tabler:cookie"
                width={22}
                height={22}
                className="text-primary dark:text-white mt-1"
              />

              <div>
                <span className="text-base font-normal text-offwhite text-primary dark:text-white hover:text-primary dark:hover:text-primary">
                  <Link href="/cookie-policy">Cookie Policy</Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 mt-10 border-t border-darkblue/20 text-center text-sm">
          <p className="font-bold text-offwhite text-primary dark:text-white">
            <span className="text-xl">&copy;</span> 2023-2026 All Rights
            Reserved by NCC
          </p>

          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-primary dark:text-white">
            {" "}
            <span className="inline-block text-lg transition-transform duration-300 hover:scale-125 hover:-rotate-12">
              {" "}
              ✨{" "}
            </span>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              {" "}
              Crafted & Developed by{" "}
            </span>{" "}
            <Link
              href="https://rohit-kumar.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
            >
              {" "}
              Rohit Kumar{" "}
            </Link>{" "}
            <span className="inline-block text-lg transition-transform duration-300 hover:scale-125 hover:rotate-12">
              {" "}
              🚀{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
