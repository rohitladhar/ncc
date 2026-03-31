export default function AreasWeCover() {
  const areas = [
    {
      name: "London",
      description: "Serving all areas of London with fast and professional solutions.",
      image: "/images/location/london.jpg",
    },
    {
      name: "Luton",
      description: "Reliable services across Luton, covering residential and commercial needs.",
      image: "/images/location/luton.jpg",
    },
    {
      name: "Bedford",
      description: "Trusted services throughout Bedford and surrounding neighbourhoods.",
      image: "/images/location/bedford.jpg",
    },
    {
      name: "Clacton On Sea",
      description: "Quality services available across Clacton-on-Sea and coastal areas.",
      image: "/images/location/clacton_on_sea.jpg",
    },
  ];

  return (
    <section className="mt-8 md:mt-12 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary dark:text-white">
          Areas We Cover
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-10">
          We proudly provide our services across multiple locations, ensuring quality,
          reliability, and customer satisfaction wherever you are.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={area.image}
                alt={area.name}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}