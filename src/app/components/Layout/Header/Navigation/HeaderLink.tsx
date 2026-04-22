"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkType } from "@/app/types/navlink";
import { motion, AnimatePresence } from "framer-motion";
const HeaderLink: React.FC<{ item: NavLinkType }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleMouseEnter = () => {
    if (item.submenu) setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href={item.href || "#"}
        onClick={(e) => {
          if (item.submenu) e.preventDefault();
        }}
        className={`text-base  flex items-center gap-1 font-normal text-darkblue font-bold hover:text-primary ${
          item.href === path ? "!text-primary font-bold" : ""
        }`}
      >
        <span className="font-bold">{item.label}</span>

        {item.submenu && (
          <svg
            className={`transition-transform duration-300  ${
              submenuOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      <AnimatePresence>
        {submenuOpen && item.submenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 top-[80px] w-screen bg-white dark:bg-white/10 shadow-lg py-6 z-50 backdrop-blur-md"
          >
            <ul className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 h-[200px]">
              {item.submenu.map((subItem, index) => (
                <li key={index}>
                  <Link
                    href={subItem.href}
                    className="block px-4 py-2 rounded-md text-darkblue dark:text-white hover:bg-neutral-100  dark:hover:bg-darkmode/20 hover:text-primary transition"
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default HeaderLink;
