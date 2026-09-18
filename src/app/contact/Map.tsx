"use client";
import { ArrowUpRight, MapPin } from "lucide-react";

const ADDRESS = "Unit 408, Bedford Heights, Brickhill Drive, Bedford MK41 7PH";

const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS,
)}&output=embed`;

const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS,
)}`;

const Map = () => {
  return (
    <section className="relative overflow-hidden  py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#3cb6c6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3cb6c6]">
            <MapPin className="h-4 w-4" />
            Find Us
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Visit our office
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Find us at Bedford Heights in Bedford. Get directions or contact our
            team to discuss your cleaning requirements.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200">
          <div className="grid lg:grid-cols-[1fr_340px]">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[560px]">
              <iframe
                src={MAP_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="NCC Cleaning Services location"
              />
            </div>

            <div className="flex flex-col justify-center bg-white p-7 sm:p-10 lg:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3cb6c6]/10 text-[#3cb6c6]">
                <MapPin className="h-6 w-6" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#3cb6c6]">
                Our Location
              </p>

              <h3 className="mt-2 text-xl font-black text-slate-950">
                Bedford Office
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">{ADDRESS}</p>

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#3cb6c6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#3cb6c6]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#32a8b7] hover:shadow-xl"
              >
                Get Directions
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
