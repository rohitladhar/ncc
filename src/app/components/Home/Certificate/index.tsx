"use client";

import { useEffect, useState } from "react";
import { CertificateType } from "@/app/types/certificate";
import Image from "next/image";
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
        console.log("Error fetching certificate", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="certificate" className="scroll-mt-12">
      <section>
        <div className="container">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-primary">
              Our Accreditations
            </h1>
          </div>

          <div className="overflow-hidden">
            {loading ? (
              <div className="flex gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <ReviewSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="flex w-max gap-6 animate-scroll">
                {[...certificate, ...certificate].map((item, i) => (
                  <div key={i} className="flex-shrink-0">
                    <Image
                      src={getImgPath(item.imgSrc)}
                      alt={item.name}
                      width={300}
                      height={120}
                      className="h-[100px] w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate;