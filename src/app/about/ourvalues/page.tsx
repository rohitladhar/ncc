import React from "react";

const pillars = [
  {
    title: "Operational Stability",
    description:
      "We guarantee service continuity through comprehensive holiday and sickness coverage, ensuring your operations never skip a beat.",
    color: "bg-red-500",
  },
  {
    title: "Transparent Partnerships",
    description:
      "No hidden costs. We agree on pricing upfront, and additional charges only occur when you request extra services.",
    color: "bg-green-500",
  },
  {
    title: "Asset Integrity",
    description:
      "We protect your property with data-driven maintenance logs, BISCs-compliant deep cleaning, and proactive hazard identification to preserve asset value.",
    color: "bg-blue-500",
  },
  {
    title: "Sustainable Stewardship",
    description:
      "We help protect the environment by using smart stain-protection techniques and by ensuring our supply chain is sustainable. This way, we take care of both your space and the planet.",
    color: "bg-yellow-500",
  },
];

const OurValues = () => {
  return (
    <section className="mt-8 md:mt-12 h-screen">
      <div className="container mx-auto pt-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 dark:text-white text-primary text-center">
          Our Values
        </h1>
      <div className=" py-12 flex justify-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar, index) => (
          <div key={index} className="flex justify-center">
            <div className="relative">
              <div
                className={`w-72 h-72 ${pillar.color} transform rotate-45 shadow-lg flex items-center justify-center`}
              >
                <div className="transform -rotate-45 text-center text-white px-2">
                  <h3 className="font-bold">{pillar.title}</h3>
                  <p className="text-sm mt-1 text-white">{pillar.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
    
  );
};

export default OurValues;