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
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
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
    <div id="certificate" className="scroll-mt-12">
      <section>
        <div className="container">
          <div className="mb-10 text-center">
            <div className="relative inline-block group">
              <h3 className="cursor-pointer  text-primary dark:text-white">
                Our Accreditations
              </h3>
            </div>
          </div>

          <Slider {...settings}>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <ReviewSkeleton key={i} />
                ))
              : certificate.map((item, i) => (
                  <div key={i}>
                    <div className="mx-0.5 p-6 bg-white dark:bg-darklight">
                      <div className="flex items-center mb-5">
                        <div className="relative">
                          <Image
                            src={getImgPath(item.imgSrc)}
                            alt={item.name}
                            width={400}
                            height={150}
                            className="max-h-[120px] max-w-[320px] object-contain"
                          />
                        </div>
                      </div>
                      {/* <div>
                        <h6 className="dark:text-white  text-primary">
                          {item.name}
                        </h6>
                      </div> */}
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
