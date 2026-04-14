"use client";
import React, { useRef, useState, useEffect } from "react";

const Care = () => {
  const items = [
    {
      title: "C – Cost Certainty",
      description:
        "No surprises. We agree on the total price upfront, and only charge extra if you request additional work.",
    },
    {
      title: "A – Agile Delivery",
      description:
        "We adapt to your schedule, site, and scope—not the other way around. Tailored to fit your operations.",
    },
    {
      title: "R – Reliable Experience",
      description:
        "With over three years of successful contracts across the UK, we bring proven processes that deliver from day one.",
    },
    {
      title: "E – Excellent Staffing",
      description:
        "Every cleaner is trained, vetted, and managed to ensure consistency, familiarity, and high standards.",
    },
  ];

  const delays = [0, 1, 2.0, 3.0];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mt-8 md:mt-12 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6 dark:text-white text-primary text-center">
          C.A.R.E
        </h1>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[18rem] h-72 rounded-full bg-primary flex flex-col justify-center items-center text-center p-4"
              style={{
                animation: visible
                  ? `fadeIn 0.5s ease forwards ${delays[index]}s`
                  : "none",
                opacity: visible ? 1 : 0,
              }}
            >
              <h2 className="text-xl font-bold mb-2 text-white">
                {item.title}
              </h2>
              <p className="text-sm text-white">{item.description}</p>
            </div>
          ))}

          <style jsx>{`
            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: scale(0.5);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
        <p className="mt-5">
          If you are not completely satisfied during the first month, we will
          provide a FULL REFUND—100% guaranteed. Note: Only for the contract
          agreements.
        </p>
      </div>
    </section>
  );
};

export default Care;
