import React from "react";

const Arrow = () => (
  <div className="flex flex-col items-center">
    <div className="w-1 h-8 bg-gray-400"></div>
    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
  </div>
);

const HowWeWork = () => {
  const steps = [
    { id: 1, label: "We talk to you to understand what you need." },
    {
      id: 2,
      label: "We visit your location to assess the cleaning space for free.",
    },
    {
      id: 3,
      label: "We create a customised proposal for you with clear pricing.",
    },
    {
      id: 4,
      label:
        "We set everything up and brought our team on board to start the work.",
    },
  ];

  return (
    <section className="mt-8 md:mt-8">
      <div className="container mx-auto pt-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 dark:text-white text-primary text-center">
          How We Work
        </h1>

        <div className="flex flex-col items-center justify-center">
          <p className="dark:text-white text-center max-w-2xl pb-12">
            Clients value predictable, structured onboarding. Our Cleaning
            Process - This will help the client know what processes can be
            added. We have a simple onboarding process to help us work together
            smoothly and consistently provide great service. Here’s how it
            works:
          </p>
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="px-6 py-3 bg-primary text-white rounded-2xl shadow-lg">
                {step.label}
              </div>

              {index < steps.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
