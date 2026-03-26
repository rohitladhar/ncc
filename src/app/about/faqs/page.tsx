"use client";
import { useState, useEffect } from "react";
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
        if (!res.ok) throw new Error("Failed to fetch");
        const jsonData = await res.json();
        setFAQOne(jsonData.FAQOne ?? []);
        setFAQTwo(jsonData.FAQTwo ?? []);
      } catch (err) {
        console.log("Error fetching FAQs", err);
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
  ) =>
    faqs.map((faq, index) => (
      <div
        key={index}
        className="rounded-xl shadow-sm overflow-hidden mb-4"
      >
        <button
          onClick={() => toggleFn(index)}
          className="w-full flex justify-between items-center p-4 text-left font-medium bg-primary text-white hover:bg-primary-100 transition"
        >
          <span>{faq.question}</span>
          <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
        </button>

        <div
          style={{
            maxHeight: openIndex === index ? "500px" : "0px",
            transition: "max-height 0.3s ease",
            overflow: "hidden",
          }}
          className="px-4"
        >
          <p className="text-gray-600 py-2 dark:text-white">{faq.answer}</p>
        </div>
      </div>
    ));

  const renderSkeleton = (count: number) =>
    Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className="border rounded-xl shadow-sm overflow-hidden mb-4 animate-pulse"
      >
        <div className="h-12 bg-gray-200 w-full mb-2"></div>
        <div className="h-16 bg-gray-100 w-full"></div>
      </div>
    ));

  if (error) return <p className="text-center py-8 text-red-500">{error}</p>;

  return (
    <section className="mt-8 md:mt-12">
      <div className="container mx-auto pt-10">
        <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold mb-4 dark:text-white text-primary text-center">
          Frequently Asked Questions
        </h1>
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {loading
                ? renderSkeleton(3)
                : renderFAQ(FAQOne, openIndexOne, toggleFAQOne)}
            </div>
            <div>
              {loading
                ? renderSkeleton(3)
                : renderFAQ(FAQTwo, openIndexTwo, toggleFAQTwo)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
