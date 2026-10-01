"use client";

import { useCallback, useEffect, useId, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface InformationProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Information({
  isOpen,
  onClose,
  children,
  title = "Certification information",
}: InformationProps) {
  const titleId = useId();

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener("keydown", handleEsc);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleEsc]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="
              absolute
              inset-0
              cursor-default
              bg-slate-950/70
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              w-full
              max-w-2xl
              max-h-[90vh]
              overflow-hidden
              rounded-[2rem]
              border
              border-white/20
              bg-white
              shadow-[0_30px_100px_rgba(0,0,0,0.3)]
              dark:border-white/10
              dark:bg-slate-950
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-[#3CB6C6]/10
                blur-3xl
              "
            />

            <div className="relative max-h-[90vh] overflow-y-auto">
              <div
                className="
                  sticky
                  top-0
                  z-20
                  flex
                  items-center
                  justify-between
                  border-b
                  border-slate-200/80
                  bg-white/90
                  px-6
                  py-5
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-slate-950/90
                  sm:px-8
                "
              >
                <div>
                  <p
                    className="
                      mb-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#3CB6C6]
                    "
                  >
                    NCC Cleaning
                  </p>

                  <h2
                    id={titleId}
                    className="
                      text-lg
                      font-semibold
                      text-slate-950
                      dark:text-white
                    "
                  >
                    {title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-slate-500
                    transition-all
                    hover:border-slate-300
                    hover:bg-slate-100
                    hover:text-slate-950
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#3CB6C6]/50
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-slate-400
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  <X size={18} strokeWidth={2} />
                </button>
              </div>

              <div className="relative p-6 sm:p-8">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
