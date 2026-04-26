import React, { useEffect, useState } from "react";
import { ServiceProps, FetchDataType } from "../types/service";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import { getDataPath } from "@/app/utils/paths";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Service: React.FC<ServiceProps> = ({ data }) => {
  const [fetchArr, setFetchData] = useState<FetchDataType>({
    cleaningIcons: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const jsonData = await res.json();
        setFetchData({
          cleaningIcons: jsonData.CleaningIcons || [],
        });
      } catch (error) {
        console.error("Error fetching service", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 25000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-16 md:mt-12">
      <div className="container mx-auto pt-10 px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <Image
              src={data?.imgSrcOne || "/placeholder-image.png"}
              alt="Service Image"
              width={700}
              height={500}
              className="w-full max-w-[700px] h-auto md:h-[500px] rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 dark:text-white text-primary">
              {data?.title || "Explore Our Services."}
            </h1>

            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {data?.paragraph ||
                "Discover the wide range of services we offer to help your business grow."}
            </p>

            <Link
              href={data?.buttonLink || "/contact"}
              className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition inline-block"
            >
              {data?.buttonText || "Get in Contact"}
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-16 md:mt-32">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={data?.imgSrcTwo || "/placeholder-image.png"}
              alt="Service Image"
              width={500}
              height={500}
              className="max-h-[500px] rounded-lg shadow-lg object-contain"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 dark:text-white text-primary">
              Benefits of Cleaning
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {data?.benefits ||
                "Discover the wide range of services we offer to help your business grow."}
            </p>
          </div>
        </div>

        <div className="my-16 px-2 md:px-6">
          <h2 className="text-3xl font-bold mb-12 dark:text-white text-primary text-center">
            Tasks to be performed
          </h2>

          {data?.content?.tasks?.length > 0 ? (
            <div className="relative w-full overflow-hidden">
              <Slider {...settings}>
                {data?.content.tasks.map((task: string, index: number) => (
                  <div key={index} className="px-3 py-4 h-full">
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition flex items-center gap-4 h-[160px]">
                      <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                        <Icon
                          icon={
                            fetchArr.cleaningIcons.find(
                              (item) => item.id === index + 1,
                            )?.icon || "mdi:broom"
                          }
                          width={28}
                          height={28}
                        />
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {task}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-6 text-center">
              No tasks available
            </p>
          )}
        </div>
        <ServiceCard />
      </div>
    </section>
  );
};

export default Service;
