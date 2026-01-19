"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { PortfolioType } from "@/app/types/portfolio";
import PortfolioSkeleton from "../../Skeleton/Portfolio";
import { getDataPath, getImgPath } from "@/app/utils/paths";

const Project = () => {
  const [portfolio, setPortfolio] = useState<PortfolioType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPortfolio(data.PortfolioData);
      } catch (error) {
        console.error("Error fetching service", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="portfolio" className="scroll-mt-12">
      <section className="bg-secondary dark:bg-darklight overflow-hidden">
        <div className="container relative">
          <div className="mb-4">
            <h2 className="text-center text-primary dark:text-white">
              Our Portfolio
            </h2>
          </div>
          <div className="md:max-w-45 mx-auto mb-8">
            <p className="text-xl font-normal text-center leading-8 text-primary dark:text-white">
              Professional Cleaning Services Delivering Spotless Spaces,
              Comfort, Hygiene, and Peace
            </p>
          </div>
          {/* slider */}
          <div className="relative z-20">
            <Slider {...settings}>
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <PortfolioSkeleton key={i} />
                  ))
                : portfolio.map((item, i) => (
                    <div key={i}>
                      <div className="p-5 bg-white dark:bg-lightdarkblue m-3 rounded-lg">
                        <div className="w-full mb-4">
                          <Image
                            src={getImgPath(item.coverImg)}
                            alt={item.coverImg}
                            width={234}
                            height={236}
                            className="w-full rounded-lg"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <Image
                            src={getImgPath("/images/logo/logo.svg")}
                            alt={"logo"}
                            width={31}
                            height={31}
                          />
                          <p className="text-base font-medium text-darkblue dark:text-white">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
            </Slider>
          </div>
          {/* floating images */}
          <div className="absolute top-28 -left-9 dark:opacity-5">
            <Image
              src={getImgPath("/images/banner/pattern1.svg")}
              alt="ptrn1"
              width={141}
              height={141}
            />
          </div>
          <div className="absolute -bottom-7 -right-7 dark:opacity-5 z-10">
            <Image
              src={getImgPath("/images/banner/pattern2.svg")}
              alt="ptrn1"
              width={141}
              height={141}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
