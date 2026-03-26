"use client";

import { useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkType } from "@/app/types/navlink";
import { motion, AnimatePresence } from "framer-motion";

type MobileHeaderLinkProps = {
  item: NavLinkType;
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({
  item,
  setNavbarOpen,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(true);
    }

  };

  return (
    <>
      <div className="w-full">
        <Link
          href={item.href || "#"}
          onClick={handleClick}
          className={`flex items-center justify-between w-full py-3 text-darkblue dark:text-white ${
            item.href === path ? "!text-primary" : ""
          }`}
        >
          {item.label}
          {item.submenu && <span className="text-lg">›</span>}
        </Link>
      </div>

      <AnimatePresence>
        {submenuOpen && item.submenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 w-screen h-screen bg-white dark:bg-gray-900 z-[999] p-4 overflow-y-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setSubmenuOpen(false)}
                className="text-lg font-bold text-darkblue dark:text-white"
              >
                ←
              </button>
              <span className="font-semibold text-lg text-darkblue dark:text-white">
                {item.label}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {item.submenu.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  onClick={() => setNavbarOpen(false)}
                  className="py-3 text-darkblue dark:text-gray-100 dark:bg-gray-900 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeaderLink;
