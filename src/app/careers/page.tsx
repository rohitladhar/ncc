import Career from "./Career";

export default function Careers() {
  return (
    <section className="scroll-mt-12 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 pt-24">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              src="/images/services/cleaner.png"
              alt="Service Image"
              className="w-full max-w-md h-auto rounded-lg shadow-lg hidden md:block"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start space-y-6">
            <Career />
          </div>
        </div>
      </div>
    </section>
  );
}
