import React from "react";

const HowWeWork = () => {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      description: "We talk to you to understand your cleaning needs.",
    },
    {
      id: "02",
      title: "Site Visit",
      description:
        "We visit your location to assess the space — completely free.",
    },
    {
      id: "03",
      title: "Custom Proposal",
      description:
        "We create a tailored plan with clear and transparent pricing.",
    },
    {
      id: "04",
      title: "Execution",
      description:
        "We onboard our team and begin delivering high-quality service.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-primary dark:text-white mb-4">
          How We Work
        </h1>

        <p className="text-center max-w-xl md:max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10 md:mb-12 text-sm sm:text-base">
          Our structured onboarding ensures a smooth experience from day one.
        </p>

        {/* ================= MOBILE STEPPER ================= */}
        <div className="md:hidden relative pl-6">
          {/* vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Dot */}
                <div className="absolute -left-[2px] top-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                  {step.id}
                </div>

                {/* Content */}
                <div className="pl-8">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP TIMELINE (UNCHANGED) ================= */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <div className="w-1/2 p-4">
                  <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;