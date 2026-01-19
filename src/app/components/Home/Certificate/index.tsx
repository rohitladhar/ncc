"use client";

import { useEffect, useState } from "react";
import { CertificateType } from "@/app/types/certificate";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSkeleton from "../../Skeleton/Review";
import { getDataPath, getImgPath } from "@/app/utils/paths";

const Certificate = () => {
  const [certificate, setCertificate] = useState<CertificateType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCertificate(data.CertificationData);
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
    slidesToShow: 3,
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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="certificate" className="scroll-mt-12">
      <section className="bg-secondary dark:bg-darklight">
        <div className="container">
          <div className="mb-10 text-center">
            <div className="relative inline-block group">
              <h2 className="cursor-pointer  text-primary dark:text-white">
                Certificate
              </h2>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
                <div className="relative px-3 py-2 text-xs text-white dark:text-primary  bg-primary dark:bg-white rounded-md shadow-lg">
                  Certificate No:503862025
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-primary dark:bg-white  rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          <Slider {...settings}>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <ReviewSkeleton key={i} />
                ))
              : certificate.map((item, i) => (
                  <div key={i}>
                    <div className="m-3 p-6 bg-white dark:bg-lightdarkblue">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="relative">
                          <Image
                            src={getImgPath(item.imgSrc)}
                            alt={item.name}
                            width={480}
                            height={480}
                          />
                        </div>
                      </div>
                      <div>
                        <h6 className="dark:text-white  text-primary">
                          {item.name}
                        </h6>
                      </div>
                      <div>
                        <p className="text-base font-normal dark:text-white  text-primary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Certificate;
