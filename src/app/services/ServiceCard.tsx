"use client";
import React, { useEffect, useState } from "react";
import { ServiceCardType } from "../types/service";
import Link from "next/link";

import { getDataPath } from "@/app/utils/paths";

const ServiceCard = () => {
  const [fetchArr, setFetchData] = useState<ServiceCardType>({
    serviceCards: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const jsonData = await res.json();
        setFetchData({
          serviceCards: jsonData.ServiceCards || [],
        });
      } catch (error) {
        console.error("Error fetching service", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="mt-16 md:mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 dark:text-white text-primary text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fetchArr.serviceCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
