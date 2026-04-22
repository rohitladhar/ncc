const AreaWeCover = () => {
  return (
    <section className="mt-10 md:mt-10 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={"/images/location/UK.png"}
            alt="Area We Cover"
            className="w-full max-w-[400px] max-h-[600px] md:max-w-[500px] md:max-h-[500px] rounded-lg shadow-lg object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white">
            Area We Cover
          </h1>

          <p className="mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-full md:max-w-[600px] mx-auto md:mx-0">
            NCC Cleaning Services provides professional and reliable corporate
            cleaning solutions across the United Kingdom, with a strong presence
            in London and Bedfordshire. We specialise in delivering exceptional
            cleaning services for offices, commercial spaces, and business
            environments.
          </p>

          <p className="mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-full md:max-w-[600px] mx-auto md:mx-0">
            Our experienced and fully trained team uses industry-leading
            techniques and high-quality products to create safe, clean, and
            productive environments for your staff and clients.
          </p>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-full md:max-w-[600px] mx-auto md:mx-0">
            Whether you require daily office cleaning, deep cleaning, or
            specialised commercial services, we are committed to reliability,
            attention to detail, and complete customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AreaWeCover;
