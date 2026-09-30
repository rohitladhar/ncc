"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";

import { getDataPath } from "@/app/utils/paths";
import { FAQstype } from "@/app/types/about";

export default function FAQs() {
  const [FAQOne, setFAQOne] = useState<FAQstype[]>([]);
  const [FAQTwo, setFAQTwo] = useState<FAQstype[]>([]);

  const [openIndexOne, setOpenIndexOne] = useState<number | null>(null);
  const [openIndexTwo, setOpenIndexTwo] = useState<number | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));

        if (!res.ok) {
          throw new Error("Failed to fetch FAQ data");
        }

        const jsonData = await res.json();

        setFAQOne(jsonData.FAQOne ?? []);
        setFAQTwo(jsonData.FAQTwo ?? []);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError("Failed to load FAQs");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleFAQOne = (index: number) => {
    setOpenIndexOne((prev) => (prev === index ? null : index));
  };

  const toggleFAQTwo = (index: number) => {
    setOpenIndexTwo((prev) => (prev === index ? null : index));
  };

  const renderFAQ = (
    faqs: FAQstype[],
    openIndex: number | null,
    toggleFn: (index: number) => void,
  ) => {
    if (!faqs.length) {
      return (
        <div
          className="
            rounded-2xl
            border border-dashed
            border-slate-200
            p-8
            text-center
            dark:border-white/10
          "
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No questions available at the moment.
          </p>
        </div>
      );
    }

    return faqs.map((faq, index) => {
      const isOpen = openIndex === index;

      return (
        <motion.div
          key={`${faq.question}-${index}`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.35,
            delay: index * 0.05,
          }}
          className={`
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            transition-all
            duration-300
            ${
              isOpen
                ? "border-blue-500/30 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] dark:border-blue-400/20 dark:bg-white/[0.06]"
                : "border-slate-200/80 bg-white/70 hover:border-slate-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-white/20"
            }
          `}
        >
          
          <motion.div
            initial={false}
            animate={{
              scaleY: isOpen ? 1 : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.25 }}
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-1
              origin-top
              bg-gradient-to-b
              from-blue-500
              to-emerald-400
            "
          />

          <button
            type="button"
            onClick={() => toggleFn(index)}
            aria-expanded={isOpen}
            aria-controls={`faq-answer-${index}`}
            className="
              flex
              w-full
              items-center
              justify-between
              gap-5
              p-5
              text-left
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-inset
              focus-visible:ring-blue-500/50
              sm:p-6
            "
          >
            <span className="flex items-start gap-4">
             
              <span
                className={`
                  mt-0.5
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-[10px]
                  font-bold
                  transition-all
                  ${
                    isOpen
                      ? "bg-[#3cb6c6] text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-white/10 dark:text-slate-400 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400"
                  }
                `}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={`
                  pt-0.5
                  text-sm
                  font-semibold
                  leading-6
                  transition-colors
                  sm:text-[15px]
                  ${
                    isOpen
                      ? "text-[#3cb6c6] dark:text-blue-400"
                      : "text-slate-800 dark:text-slate-200"
                  }
                `}
              >
                {faq.question}
              </span>
            </span>

        
            <span
              className={`
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300
                ${
                  isOpen
                    ? "rotate-180 bg-[#3cb6c6] text-white"
                    : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400"
                }
              `}
            >
              <ChevronDown size={16} />
            </span>
          </button>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                id={`faq-answer-${index}`}
                role="region"
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="px-5 pb-6 pl-16 pr-5 sm:px-6 sm:pb-6 sm:pl-[4.75rem]">
                  <div className="border-t border-slate-100 pt-5 dark:border-white/10">
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    });
  };

  const renderSkeleton = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className="
          mb-4
          overflow-hidden
          rounded-2xl
          border
          border-slate-200/70
          bg-white
          p-5
          dark:border-white/10
          dark:bg-white/[0.025]
        "
      >
        <div className="flex items-center gap-4">
          <div className="h-7 w-7 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />

          <div className="h-4 flex-1 animate-pulse rounded bg-slate-200 dark:bg-white/10" />

          <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />
        </div>
      </div>
    ));
  };

  if (error) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-xl px-5 text-center">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 dark:border-red-500/20 dark:bg-red-500/5">
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        dark:bg-slate-950
        sm:py-32
      "
    >
     
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-10
            h-96
            w-96
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-10
            h-96
            w-96
            rounded-full
            bg-emerald-400/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-slate-200
            to-transparent
            dark:via-white/10
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white/80
              px-4
              py-2
              shadow-sm
              backdrop-blur
              dark:border-white/10
              dark:bg-white/5
            "
          >
            <MessageCircleQuestion
              size={15}
              className="text-blue-600 dark:text-blue-400"
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-slate-600
                dark:text-slate-300
              "
            >
              Need to know?
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-semibold
              tracking-tight
              text-slate-950
              sm:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            Frequently asked
            <span
              className="
                ml-2
                bg-gradient-to-r
                from-blue-600
                via-indigo-500
                to-emerald-500
                bg-clip-text
                text-transparent
              "
            >
              questions.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              dark:text-slate-400
            "
          >
            Find clear answers to some of the most common questions about NCC
            Cleaning, our services and the way we work.
          </p>
        </motion.div>

       
        <div className="mx-auto mt-16 max-w-6xl">
          {loading ? (
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div>{renderSkeleton(3)}</div>
              <div>{renderSkeleton(3)}</div>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
             
              <div className="space-y-4">
                {renderFAQ(FAQOne, openIndexOne, toggleFAQOne)}
              </div>

            
              <div className="space-y-4">
                {renderFAQ(FAQTwo, openIndexTwo, toggleFAQTwo)}
              </div>
            </div>
          )}
        </div>

       
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="
              mx-auto
              mt-14
              flex
              max-w-4xl
              flex-col
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-slate-50/70
              px-6
              py-6
              text-center
              dark:border-white/10
              dark:bg-white/[0.025]
              sm:flex-row
              sm:text-left
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-500/10
                text-blue-600
                dark:text-blue-400
              "
            >
              <HelpCircle size={21} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Still have a question?
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Our team is always happy to provide more information about our
                services and standards.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
