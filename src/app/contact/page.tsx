
import ContactIntro from "./ContactInfo";
import Contact from "./Contact";
import Map from "./Map";

export default function Quotes() {
  return (
    <section className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
          <div className="h-full pt-10 lg:flex">
            <ContactIntro />
          </div>

          <div className="flex h-full w-full pt-10">
            <div className="flex h-full w-full items-center rounded-r-2xl border border-white/40 bg-gradient-to-r from-emerald-50 via-blue-50 to-indigo-100 p-6 shadow-lg sm:p-8">
              <Contact />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Map />
        </div>
      </div>
    </section>
  );
}

