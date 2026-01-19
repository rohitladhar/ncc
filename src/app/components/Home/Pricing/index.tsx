"use client";

import { PlanType } from "@/app/types/plan";
import { getDataPath } from "@/app/utils/paths";
import { Icon } from "@iconify/react";
import { SetStateAction, useEffect, useState } from "react";
import PricingSkeleton from "../../Skeleton/Pricing";

const Pricing = () => {
  const [plan, setPlan] = useState<PlanType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPlan(data.ServiceData);
      } catch (error) {
        console.error("Error fetching service", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<"one" | "two">(
    "one"
  );

  const handleCategoryChange = (category: SetStateAction<"one" | "two">) => {
    setSelectedCategory(category);
  };

  return (
    <section id="services" className="scroll-mt-12">
      <div className="container">
        <div className="text-center">
          <h2 className="dark:text-white text-primary">Our Services</h2>
          <p className="text-lg font-normal max-w-lg mx-auto my-6 dark:text-white  text-primary">
            Explore Our Services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <PricingSkeleton key={i} />
              ))
            : plan.map((item, i) => (
                <div key={i}>
                  <div className="bg-white dark:bg-darkmode rounded-lg shadow-lg dark:shadow-neutral-50/10 border border-black/10 dark:border-white/10 px-7 py-10 h-full">
                    <div className="flex flex-col gap-6 border-b border-black/10 dark:border-white/10 pb-6">
                      <p className="text-2xl font-bold dark:text-white  text-primary">
                        {selectedCategory === "one"
                          ? item.slide.one
                          : item.slide.two}
                      </p>

                      <p className="text-base font-normal dark:text-white  text-primary">
                        {selectedCategory === "one"
                          ? item.desc.one
                          : item.desc.two}
                      </p>
                    </div>
                    {/* options */}
                    <div>
                      <ul className="flex flex-col gap-6 my-6 dark:text-white  text-primary">
                        {(selectedCategory === "one"
                          ? item.option.one
                          : item.option.two
                        ).map((feat, i) => (
                          <li key={i}>
                            <div className="flex items-center gap-3">
                              <div className="p-1 rounded-full bg-primary/10 dark:text-white  text-primary">
                                <Icon
                                  icon="material-symbols:check-rounded"
                                  width={19}
                                  height={19}
                                />
                              </div>
                              <p className="text-base font-normal dark:text-white  text-primary">
                                {feat}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <div className="mt-4 ">
          <div className="flex justify-center">
            <div className="bg-secondary dark:bg-darklight flex p-2 rounded-lg">
              <button
                className={`text-xl font-medium cursor-pointer py-2 px-8 sm:py-4 sm:px-16 ${
                  selectedCategory === "one"
                    ? "text-cyan-500 bg-white dark:bg-darkmode rounded-lg shadow dark:shadow-neutral-50/20"
                    : "text-black dark:text-white"
                }`}
                onClick={() => handleCategoryChange("one")}
              >
                Previous
              </button>
              <button
                className={`text-xl font-medium cursor-pointer py-2 px-8 sm:py-4 sm:px-16 ${
                  selectedCategory === "two"
                    ? "text-cyan-500 bg-white dark:bg-darkmode dark rounded-lg shadow dark:shadow-neutral-50/20"
                    : "text-black dark:text-white"
                }`}
                onClick={() => handleCategoryChange("two")}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
