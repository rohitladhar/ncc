"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import { NavLinkType } from "@/app/types/navlink";
import { Icon } from "@iconify/react";
import { getDataPath } from "@/app/utils/paths";

const Header: React.FC = () => {
  const [navlink, setNavlink] = useState<NavLinkType[]>([]);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setNavlink(data.NavLinkData);
      } catch (error) {
        console.error("Error fetching service", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarOpen]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNavbarOpen(false);
      }
    };

    if (navbarOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navbarOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full py-1 bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] transition-all ${
          sticky
            ? "shadow-lg dark:shadow-neutral-50/5"
            : "shadow-none"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 font-bold">
          <div className="flex h-[56px] w-[70px] shrink-0 items-center">
            <Logo />
          </div>

          <nav>
            <ul className="hidden xl:flex flex-grow items-center justify-start gap-5 font-bold">
              {navlink.map((item, index) => (
                <HeaderLink key={index} item={item} />
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-1">
              <Icon
                icon="tabler:phone"
                width={22}
                height={22}
                className="text-primary dark:text-white"
              />

              <p className="text-base font-normal text-primary dark:text-white">
                +44 1234745377
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Icon
                icon="tabler:mail"
                width={22}
                height={22}
                className="text-primary dark:text-white"
              />

              <p className="text-base font-normal text-primary dark:text-white">
                info@ncccleaning.co.uk
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/quote"
              className="hidden xl:block rounded-lg border border-primary bg-primary px-4 py-2 text-base font-semibold text-white duration-500 hover:bg-transparent hover:text-primary"
            >
              Get a Free Quote
            </Link>

            <button
              type="button"
              onClick={() => setNavbarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-black/5 xl:hidden"
              aria-label="Open mobile menu"
              aria-expanded={navbarOpen}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-6 bg-darkblue dark:bg-white" />
                <span className="block h-0.5 w-6 bg-darkblue dark:bg-white" />
                <span className="block h-0.5 w-6 bg-darkblue dark:bg-white" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {navbarOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          <button
            type="button"
            aria-label="Close mobile menu"
            className="absolute inset-0 h-full w-full cursor-default bg-black/50"
            onClick={() => setNavbarOpen(false)}
          />

          <div
            ref={mobileMenuRef}
            className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] shadow-2xl"
          >
  
            <div className="flex h-[72px] items-center justify-between border-b border-black/10 px-5">
              <div className="flex h-[56px] w-[70px] shrink-0 items-center">
                <Logo />
              </div>

              <button
                type="button"
                onClick={() => setNavbarOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-black/5"
                aria-label="Close mobile menu"
              >
                <Icon
                  icon="tabler:x"
                  width={28}
                  height={28}
                  className="text-darkblue dark:text-white"
                />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <div className="flex flex-col items-start">
                {navlink.map((item, index) => (
                  <MobileHeaderLink
                    key={index}
                    item={item}
                    setNavbarOpen={setNavbarOpen}
                  />
                ))}
              </div>

              <div className="mt-6 w-full">
                <Link
                  href="/quote"
                  className="block w-full rounded-lg border border-primary bg-primary px-4 py-3 text-center text-base font-semibold text-white duration-500 hover:bg-transparent hover:text-primary"
                  onClick={() => setNavbarOpen(false)}
                >
                  Get a Free Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
