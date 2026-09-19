"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  X,
} from "lucide-react";

import { CertificateType } from "@/app/types/certificate";
import { getDataPath, getImgPath } from "@/app/utils/paths";

const Certificate = () => {
  const [certificate, setCertificate] = useState<CertificateType[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));

        if (!res.ok) {
          throw new Error("Failed to fetch certificate data");
        }

        const data = await res.json();

        setCertificate(
          Array.isArray(data?.CertificationData) ? data.CertificationData : [],
        );
      } catch (error) {
        console.error("Error fetching certificate:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const closePreview = () => {
    setActiveImage(null);
  };

  const showPrevious = () => {
    if (activeImage === null || certificate.length === 0) return;

    setActiveImage(
      activeImage === 0 ? certificate.length - 1 : activeImage - 1,
    );
  };

  const showNext = () => {
    if (activeImage === null || certificate.length === 0) return;

    setActiveImage(
      activeImage === certificate.length - 1 ? 0 : activeImage + 1,
    );
  };

  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePreview();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <section
        id="certificate"
        className="scroll-mt-20 overflow-hidden py-16 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto">
          
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3cb6c6]/20 bg-[#3cb6c6]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#329eac]">
              <ShieldCheck className="h-4 w-4" />
              Trusted Standards
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-primary dark:text-white sm:text-5xl">
              Our Accreditations
            </h2>

            <p className="mt-4 text-sm leading-7 text-primary/55 dark:text-white/55 sm:text-base">
              Our accreditations reflect our commitment to professional
              standards, quality, and reliable service.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 p-6 sm:p-8 lg:p-10">
        
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#3cb6c6]/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl"
            />

            <div className="relative z-10 mb-7 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#3cb6c6] shadow-sm">
                  <Award className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold text-primary dark:text-white">
                    Professional Accreditation
                  </h3>

                  <p className="text-xs text-primary/50 dark:text-white/50">
                    Quality you can trust
                  </p>
                </div>
              </div>

              {!loading && certificate.length > 0 && (
                <div className="hidden items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-semibold text-primary/60 sm:flex">
                  <BadgeCheck className="h-4 w-4 text-[#3cb6c6]" />
                  {certificate.length}{" "}
                  {certificate.length === 1
                    ? "Accreditation"
                    : "Accreditations"}
                </div>
              )}
            </div>

           
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8">
              {loading ? (
                <div className="flex gap-6 overflow-hidden">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-28 w-48 shrink-0 animate-pulse rounded-xl bg-primary/10"
                    />
                  ))}
                </div>
              ) : certificate.length > 0 ? (
                <div className="flex w-max gap-8 animate-scroll">
                  {[...certificate, ...certificate].map((item, index) => {
                    const originalIndex = index % certificate.length;

                    return (
                      <button
                        key={`${item.name}-${index}`}
                        type="button"
                        onClick={() => setActiveImage(originalIndex)}
                        className="group flex h-32 w-52 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-primary/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3cb6c6]/30 hover:shadow-lg hover:shadow-[#3cb6c6]/10 focus:outline-none focus:ring-2 focus:ring-[#3cb6c6]"
                      >
                        <Image
                          src={getImgPath(item.imgSrc)}
                          alt={item.name}
                          width={300}
                          height={120}
                          className="h-[90px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Award className="mb-3 h-8 w-8 text-[#3cb6c6]" />

                  <h3 className="font-bold text-primary dark:text-white">
                    No accreditations available
                  </h3>

                  <p className="mt-1 text-sm text-primary/50">
                    Please check back later.
                  </p>
                </div>
              )}
            </div>

      
            {!loading && certificate.length > 0 && (
              <div className="relative z-10 mt-5 flex items-center justify-center gap-2 text-xs font-medium text-primary/50">
                <BadgeCheck className="h-4 w-4 text-[#3cb6c6]" />
                Click an accreditation to view it
              </div>
            )}
          </div>
        </div>
      </section>

      {activeImage !== null && certificate[activeImage] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={closePreview}
        >
        
          <button
            type="button"
            onClick={closePreview}
            aria-label="Close preview"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#3cb6c6]"
          >
            <X className="h-5 w-5" />
          </button>

        
          {certificate.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous accreditation"
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#3cb6c6]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={getImgPath(certificate[activeImage].imgSrc)}
              alt={certificate[activeImage].name}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>

         
          {certificate.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next accreditation"
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#3cb6c6]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
            {activeImage + 1} / {certificate.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Certificate;
