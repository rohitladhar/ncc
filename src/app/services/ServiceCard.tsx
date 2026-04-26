"use client";
import React, { useEffect, useState } from "react";
import { ServiceCardType } from "../types/service";
import Link from "next/link";
import Image from "next/image";
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

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 dark:text-white text-primary text-center">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fetchArr.serviceCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary transition">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {fetchArr.serviceCards.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
            No services available
          </p>
        )}
      </div>
    </section>
  );
};

export default ServiceCard;