"use client";
import { useState } from "react";
import Information from "./Information";
import { AccreditationItem, CardItem } from "../../types/accreditation";

export default function Accreditations() {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);

  const companyData: AccreditationItem = {
    company: "NCC Cleaning",
    description:
      "At NCC Cleaning, we believe that our partnerships improve the quality of our services.",
    commitment: {
      summary:
        "Our commitment to maintaining certifications demonstrates reliability and dedication.",
      key_achievement:
        "ISO certification, highlighting continuous improvement.",
    },
    accreditations: [
      {
        name: "SafeContractor",
        provider: "Alcumus SafeContractor",
        image: "/images/certificate/SafePQQ.png",
        description:
          "A respected certification recognising high standards for health and safety.",
        importance: "Ensures organisations work with reliable partners.",
        company_statement:
          "We have earned SafeContractor accreditation, reinforcing our commitment.",
      },
      {
        name: "BICSc",
        type: "Corporate Membership",
        image: "/images/certificate/BICSc.png",
        description:
          "The largest independent professional body in the cleaning industry.",
        mission: [
          "Raise standards of education",
          "Build awareness through training",
        ],
        principles: [
          "Protecting the operative",
          "Providing a clean environment",
          "Promoting sustainability",
        ],
        history: "Formed in 1961 to raise industry standards.",
        company_statement:
          "NCC Cleaning adopts new standards early to benefit clients.",
      },
      {
        name: "SSIP",
        image: "/images/certificate/ssip.jpeg",
        description: "A UK accreditation simplifying health and safety checks.",
        benefits: [
          "Reduces multiple assessments",
          "Recognised by HSE",
          "Improves efficiency",
        ],
        company_statement:
          "We ensure streamlined and recognised safety compliance.",
      },
      {
        name: "CHAS",
        image: "/images/certificate/CHAS.png",
        description:
          "A leading UK accreditation for health and safety compliance.",
        benefits: [
          "Demonstrates compliance",
          "Enhances credibility",
          "Simplifies tendering",
        ],
        company_statement: "We maintain high standards of health and safety.",
      },
      {
        name: "Cyber Essentials",
        image: "/images/certificate/cyber.png",
        description: "A UK certification protecting against cyber threats.",
        benefits: [
          "Protects against attacks",
          "Shows cybersecurity commitment",
        ],
        company_statement: "We ensure strong protection against cyber threats.",
      },
    ],
    iso_standards: [
      {
        name: "ISO 14001",
        image: "/images/certificate/ISO14001.png",
        category: "Environmental Management",
        introduced: 1996,
        description: "Standard for managing environmental impact.",
        benefits: ["Reduce environmental impact", "Improve efficiency"],
      },
      {
        name: "ISO 9001",
        image: "/images/certificate/ISO9001.png",
        category: "Quality Management",
        description: "Widely recognised quality management standard.",
        purpose: ["Ensure high-quality service", "Improve satisfaction"],
      },
      {
        name: "ISO 45001",
        category: "Health & Safety",
        image: "/images/certificate/ISO45001.png",
        introduced: 2018,
        description: "Creates safer workplaces.",
        benefits: ["Reduce accidents", "Ensure compliance"],
      },
    ],
  };

  const cardItems: CardItem[] = [
    ...companyData.accreditations.map((acc) => ({
      type: "accreditation" as const,
      data: acc,
    })),
    ...companyData.iso_standards.map((iso) => ({
      type: "iso" as const,
      data: iso,
    })),
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-primary mt-7">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#d2ffdd] to-[#7ea9ff] bg-clip-text text-transparent mb-4">
          Our Accreditations & ISO Standards
        </h1>

        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
          Our certifications reflect our commitment to quality, safety, and
          environmental responsibility.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {cardItems.map((item) => (
            <div
              key={item.data.name}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl border border-gray-200 dark:border-white/10 
              bg-white/70 dark:bg-white/5 backdrop-blur-md 
              p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 
              transition-all duration-300 flex flex-col"
            >
              <span
                className="inline-block text-xs font-semibold tracking-wide 
              bg-primary/10 text-primary px-3 py-1 rounded-full mb-3"
              >
                {item.type === "accreditation" ? "Accreditation" : "ISO"}
              </span>

              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.data.name}
                </h2>

                <img
                  src={item.data.image}
                  alt={item.data.name}
                  className="h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                {"description" in item.data ? item.data.description : ""}
              </p>

              <span className="mt-4 text-xs text-primary opacity-0 group-hover:opacity-100 transition">
                Click to learn more →
              </span>
            </div>
          ))}
        </div>
      </div>

      <Information
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{selectedItem.data.name}</h2>

            {"category" in selectedItem.data && (
              <p>
                <strong>Category:</strong> {selectedItem.data.category}
              </p>
            )}

            {"introduced" in selectedItem.data &&
              selectedItem.data.introduced && (
                <p>
                  <strong>Introduced:</strong> {selectedItem.data.introduced}
                </p>
              )}

            {"provider" in selectedItem.data && selectedItem.data.provider && (
              <p>
                <strong>Provider:</strong> {selectedItem.data.provider}
              </p>
            )}

            <p>{selectedItem.data.description}</p>

            {"importance" in selectedItem.data &&
              selectedItem.data.importance && (
                <p>
                  <strong>Importance:</strong> {selectedItem.data.importance}
                </p>
              )}

            {"company_statement" in selectedItem.data && (
              <p className="italic">{selectedItem.data.company_statement}</p>
            )}

            {(() => {
              const renderList = (items?: string[]) => {
                if (!Array.isArray(items) || items.length === 0) return null;
                return (
                  <ul className="list-disc ml-5 space-y-1">
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              };

              return (
                <>
                  {"benefits" in selectedItem.data &&
                    renderList(selectedItem.data.benefits)}

                  {"purpose" in selectedItem.data &&
                    renderList(selectedItem.data.purpose)}

                  {"mission" in selectedItem.data &&
                    renderList(selectedItem.data.mission)}

                  {"principles" in selectedItem.data &&
                    renderList(selectedItem.data.principles)}
                </>
              );
            })()}

            {"history" in selectedItem.data && selectedItem.data.history && (
              <p>
                <strong>History:</strong> {selectedItem.data.history}
              </p>
            )}
          </div>
        )}
      </Information>
    </section>
  );
}
