import HowWeProcessQuote from "./HowWeProcessQuote";
import Quote from "./Quote";

export default function Quotes() {
  return (
    <section className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          <div className="lg:flex h-full pt-10">
            <HowWeProcessQuote/>
          </div>
          <div className="w-full h-full pt-10 flex">
            <div className="bg-gradient-to-r from-emerald-50 via-blue-50 to-indigo-100 border border-white/40 shadow-lg rounded-r-2xl p-6 sm:p-8 w-full h-full flex items-center">
              <Quote />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
