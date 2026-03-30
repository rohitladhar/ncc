import React from "react";

export default function HealthSafetyPolicy() {
  return (
    <section className="flex items-center justify-center mt-8 md:mt-12 min-h-screen ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-primary dark:text-white">
          Health and Safety Policy
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 space-y-6">
            <p className="text-gray-600 dark:text-white">
              As an employer and contractor, NCC Cleaning Services accepts full
              responsibility for providing and maintaining a safe and healthy
              environment for all employees and others affected by its
              activities.
            </p>

            <p className="text-gray-600 dark:text-white">
              Our Health and Safety Policy outlines the important steps we take
              to create a safe and healthy workplace. Here are the key points we
              focus on:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-white">
              <li>
                We ensure that using, storing, and handling any materials is
                safe and does not pose health risks.
              </li>
              <li>
                We provide the necessary information, training, and support to
                help everyone stay safe at work.
              </li>
              <li>
                We maintain our work environment to keep it safe and healthy as
                much as possible.
              </li>
              <li>
                We supply the right training, safety gear, and protective
                clothing to keep our employees safe and healthy.
              </li>
            </ul>

            <p className="text-gray-600 dark:text-white">
              To uphold our cleaning health and safety standards, we need
              everyone’s cooperation. Each employee is responsible for their own
              safety, as well as the safety of their coworkers and anyone else
              affected by their work.
            </p>

            <p className="text-gray-600 dark:text-white">
              If any employee ignores or repeatedly violates these safety rules,
              disciplinary action will be taken, regardless of their position in
              the company.
            </p>

            <div className="pt-4 text-center">
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primary transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}