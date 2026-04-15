"use client";
import { useState } from "react";
import Information from "./Information";

type Accreditation = {
  name: string;
  type?: string;
  provider?: string;
  description: string;
  importance?: string;
  mission?: string[];
  principles?: string[];
  history?: string;
  benefits?: string[];
  company_statement: string;
};

type ISOStandard = {
  name: string;
  category: string;
  introduced?: number;
  description: string;
  benefits?: string[];
  purpose?: string[];
};

type AccreditationItem = {
  company: string;
  description: string;
  commitment: {
    summary: string;
    key_achievement: string;
  };
  accreditations: Accreditation[];
  iso_standards: ISOStandard[];
};

type CardItem = {
  type: "accreditation" | "iso";
  data: Accreditation | ISOStandard;
};

export default function Accreditations() {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);

  const companyData: AccreditationItem = {
    company: "NCC Cleaning",
    description:
      "At NCC Cleaning, we believe that our partnerships improve the quality of our services. We are dedicated to providing excellent service while caring for the environment, as evidenced by our certifications and memberships.",
    commitment: {
      summary:
        "Our commitment to maintaining certifications demonstrates reliability and dedication to delivering top-notch service.",
      key_achievement:
        "ISO certification, highlighting continuous improvement and quality assurance.",
    },
    accreditations: [
      {
        name: "SafeContractor",
        provider: "Alcumus SafeContractor",
        description:
          "A respected certification program recognising contractors who meet high standards for health and safety management.",
        importance: "Ensures organisations work with reliable partners.",
        company_statement:
          "We have earned SafeContractor accreditation, reinforcing our commitment to a safe and healthy environment for employees and stakeholders.",
      },
      {
        name: "BICSc",
        type: "Corporate Membership",
        description:
          "The largest independent professional and educational body in the cleaning industry with over 5,000 members.",
        mission: [
          "Raise standards of education in the cleaning industry",
          "Build awareness through professional standards and training",
        ],
        principles: [
          "Protecting the operative",
          "Providing a clean and safe environment",
          "Preserving assets",
          "Promoting sustainability",
          "Producing best practice",
        ],
        history:
          "Formed in 1961 to raise the profile of the cleaning industry and establish educational standards.",
        company_statement:
          "NCC Cleaning Services adopts new standards and methodologies early to benefit clients and business.",
      },
      {
        name: "SSIP",
        description:
          "A UK accreditation that simplifies health and safety checks for businesses.",
        benefits: [
          "Reduces need for multiple assessments",
          "Recognised by the Health and Safety Executive (HSE)",
          "Improves efficiency in procurement processes",
        ],
        company_statement:
          "We are proud members of SSIP, ensuring streamlined and recognised safety compliance.",
      },
    ],
    iso_standards: [
      {
        name: "ISO 14001",
        category: "Environmental Management",
        introduced: 1996,
        description: "An internationally recognised standard for managing environmental impact.",
        benefits: [
          "Reduce environmental impact",
          "Lower risk of pollution",
          "Improve operational efficiency",
          "Ensure legal compliance",
          "Support sustainable growth",
        ],
      },
      {
        name: "ISO 9001",
        category: "Quality Management",
        description: "A widely recognised standard used by over a million organisations worldwide.",
        purpose: [
          "Meet legal and regulatory requirements",
          "Ensure high-quality service delivery",
          "Improve customer satisfaction",
        ],
      },
      {
        name: "ISO 45001",
        category: "Health & Safety Management",
        introduced: 2018,
        description: "A standard designed to create safer and healthier workplaces.",
        benefits: [
          "Identify and manage health and safety risks",
          "Reduce workplace accidents",
          "Ensure compliance with safety laws",
          "Improve efficiency and effectiveness",
        ],
      },
    ],
  };

  const cardItems: CardItem[] = [
    ...companyData.accreditations.map((acc) => ({ type: "accreditation" as const, data: acc })),
    ...companyData.iso_standards.map((iso) => ({ type: "iso" as const, data: iso })),
  ];

  return (
    <section className="mt-12 md:mt-12 py-12 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 dark:text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary dark:text-white">
          Our Accreditations & ISO Standards
        </h1>

        <p className="text-center max-w-2xl mx-auto mb-10 dark:text-white">
          At NCC Cleaning, our certifications and ISO standards reflect our
          commitment to quality, safety, and environmental responsibility.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {cardItems.map((item) => (
            <div
              key={item.data.name}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer rounded-2xl border p-6 shadow-sm hover:shadow-md transition h-full flex flex-col dark:text-white"
            >
              <span className="inline-block text-xs font-medium bg-primary text-white px-3 py-1 rounded-full w-fit mb-2 dark:text-white">
                {item.type === "accreditation" ? "Accreditation" : "ISO"}
              </span>
              <h2 className="text-xl font-semibold dark:text-white">
                {item.data.name}
              </h2>
              <p className="mt-2 flex-grow dark:text-white">
                {"description" in item.data ? item.data.description : ""}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Information
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <div className="space-y-4 dark:text-white">
            <h2 className="text-2xl font-bold dark:text-white">{selectedItem.data.name}</h2>
            {"category" in selectedItem.data && (
              <p className="dark:text-white">
                <strong>Category:</strong> {selectedItem.data.category}
              </p>
            )}
            {"introduced" in selectedItem.data && selectedItem.data.introduced && (
              <p className="dark:text-white">
                <strong>Introduced:</strong> {selectedItem.data.introduced}
              </p>
            )}
            {"provider" in selectedItem.data && selectedItem.data.provider && (
              <p className="dark:text-white">
                <strong>Provider:</strong> {selectedItem.data.provider}
              </p>
            )}
            <p className="dark:text-white">{selectedItem.data.description}</p>

            {"importance" in selectedItem.data && selectedItem.data.importance && (
              <p className="dark:text-white">
                <strong>Importance:</strong> {selectedItem.data.importance}
              </p>
            )}

            {"company_statement" in selectedItem.data && (
              <p className="italic dark:text-white">{selectedItem.data.company_statement}</p>
            )}

            {"benefits" in selectedItem.data && selectedItem.data.benefits && (
              <ul className="list-disc ml-5 mt-1 dark:text-white">
                {selectedItem.data.benefits.map((b, i) => (
                  <li key={i} className="dark:text-white">{b}</li>
                ))}
              </ul>
            )}

            {"purpose" in selectedItem.data && selectedItem.data.purpose && (
              <ul className="list-disc ml-5 mt-1 dark:text-white">
                {selectedItem.data.purpose.map((p, i) => (
                  <li key={i} className="dark:text-white">{p}</li>
                ))}
              </ul>
            )}

            {"mission" in selectedItem.data && selectedItem.data.mission && (
              <ul className="list-disc ml-5 mt-1 dark:text-white">
                {selectedItem.data.mission.map((m, i) => (
                  <li key={i} className="dark:text-white">{m}</li>
                ))}
              </ul>
            )}

            {"principles" in selectedItem.data && selectedItem.data.principles && (
              <ul className="list-disc ml-5 mt-1 dark:text-white">
                {selectedItem.data.principles.map((p, i) => (
                  <li key={i} className="dark:text-white">{p}</li>
                ))}
              </ul>
            )}

            {"history" in selectedItem.data && selectedItem.data.history && (
              <p className="dark:text-white">
                <strong>History:</strong> {selectedItem.data.history}
              </p>
            )}
          </div>
        )}
      </Information>
    </section>
  );
}