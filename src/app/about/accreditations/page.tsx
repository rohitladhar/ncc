"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

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

  const renderList = (items?: string[]) => {
    if (!items?.length) return null;

    return (
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="
              flex
              items-start
              gap-2.5
              text-sm
              leading-relaxed
              text-slate-600
              dark:text-slate-300
            "
          >
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-[#3CB6C6]"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        dark:bg-slate-950
        sm:py-32
      "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-[#3CB6C6]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-emerald-400/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-slate-200
            to-transparent
            dark:via-white/10
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white/80
              px-4
              py-2
              shadow-sm
              backdrop-blur
              dark:border-white/10
              dark:bg-white/5
            "
          >
            <ShieldCheck size={15} className="text-[#3CB6C6]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-slate-600
                dark:text-slate-300
              "
            >
              Trusted & Accredited
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-semibold
              tracking-tight
              text-slate-950
              sm:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            Standards you can
            <span
              className="
                ml-2
                bg-gradient-to-r
                from-[#3CB6C6]
                via-[#3CB6C6]
                to-emerald-500
                bg-clip-text
                text-transparent
              "
            >
              trust.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              dark:text-slate-400
            "
          >
            Our accreditations and ISO standards demonstrate our commitment to
            quality, safety, environmental responsibility and continuous
            improvement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="
            mx-auto
            mt-14
            grid
            max-w-3xl
            grid-cols-3
            divide-x
            divide-slate-200
            rounded-2xl
            border
            border-slate-200
            bg-white/70
            py-5
            shadow-sm
            backdrop-blur
            dark:divide-white/10
            dark:border-white/10
            dark:bg-white/[0.03]
          "
        >
          <div className="text-center">
            <p className="text-2xl font-semibold text-slate-950 dark:text-white">
              {companyData.accreditations.length}
            </p>

            <p
              className="
                mt-1
                text-[10px]
                font-semibold
                uppercase
                tracking-widest
                text-slate-500
              "
            >
              Accreditations
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-slate-950 dark:text-white">
              {companyData.iso_standards.length}
            </p>

            <p
              className="
                mt-1
                text-[10px]
                font-semibold
                uppercase
                tracking-widest
                text-slate-500
              "
            >
              ISO Standards
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-slate-950 dark:text-white">
              100%
            </p>

            <p
              className="
                mt-1
                text-[10px]
                font-semibold
                uppercase
                tracking-widest
                text-slate-500
              "
            >
              Commitment
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cardItems.map((item, index) => {
            const isISO = item.type === "iso";

            return (
              <motion.button
                type="button"
                key={item.data.name}
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.06, 0.3),
                }}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  text-left
                  shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                  transition-shadow
                  hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#3CB6C6]/50
                  dark:border-white/10
                  dark:bg-white/[0.035]
                  dark:shadow-none
                  dark:hover:bg-white/[0.055]
                "
              >
                {/* Top accent */}
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#3CB6C6]/60
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[11px]
                      font-bold
                      tracking-[0.2em]
                      text-slate-400
                      dark:text-slate-600
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      ${
                        isISO
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-[#3CB6C6]/10 text-[#3CB6C6]"
                      }
                    `}
                  >
                    {isISO ? <Award size={11} /> : <ShieldCheck size={11} />}

                    {isISO ? "ISO" : "Accreditation"}
                  </span>
                </div>

                <div
                  className="
                    relative
                    mt-8
                    flex
                    h-36
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-50
                    p-5
                    dark:bg-white/[0.025]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#3CB6C6]/[0.03]
                      to-emerald-500/[0.03]
                    "
                  />

                  <Image
                    src={item.data.image}
                    alt={`${item.data.name} certification`}
                    width={220}
                    height={140}
                    className="
                      relative
                      h-28
                      w-auto
                      object-contain
                      opacity-90
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:opacity-100
                    "
                  />
                </div>

                <div className="mt-6">
                  <h3
                    className="
                      text-xl
                      font-semibold
                      tracking-tight
                      text-slate-950
                      dark:text-white
                    "
                  >
                    {item.data.name}
                  </h3>

                  {"category" in item.data && item.data.category && (
                    <p
                      className="
                        mt-1
                        text-xs
                        font-medium
                        text-[#3CB6C6]
                      "
                    >
                      {item.data.category}
                    </p>
                  )}

                  {"provider" in item.data && item.data.provider && (
                    <p
                      className="
                        mt-1
                        text-xs
                        text-slate-500
                        dark:text-slate-500
                      "
                    >
                      {item.data.provider}
                    </p>
                  )}

                  <p
                    className="
                      mt-4
                      line-clamp-3
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {item.data.description}
                  </p>
                </div>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-100
                    pt-5
                    dark:border-white/10
                  "
                >
                  <span
                    className="
                      text-xs
                      font-semibold
                      text-slate-500
                      transition-colors
                      group-hover:text-[#3CB6C6]
                      dark:text-slate-500
                      dark:group-hover:text-[#3CB6C6]
                    "
                  >
                    Explore certification
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      text-slate-500
                      transition-all
                      group-hover:border-[#3CB6C6]
                      group-hover:bg-[#3CB6C6]
                      group-hover:text-white
                      dark:border-white/10
                    "
                  >
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mx-auto
            mt-16
            flex
            max-w-3xl
            flex-col
            items-center
            gap-3
            text-center
            sm:flex-row
            sm:justify-center
          "
        >
          <Sparkles size={16} className="text-emerald-500" />

          <p
            className="
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400
            "
          >
            Our certifications reflect an ongoing commitment to professional
            standards, responsible practices and continuous improvement.
          </p>
        </motion.div>
      </div>

      <Information
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.data.name}
      >
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-7"
          >
            <div
              className="
                flex
                min-h-44
                items-center
                justify-center
                rounded-2xl
                bg-slate-50
                p-6
                dark:bg-white/[0.03]
              "
            >
              <Image
                src={selectedItem.data.image}
                alt={`${selectedItem.data.name} certification`}
                width={300}
                height={180}
                className="h-36 w-auto object-contain"
              />
            </div>

            <div>
              <h3
                className="
                  text-xl
                  font-semibold
                  text-slate-950
                  dark:text-white
                "
              >
                About this certification
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {selectedItem.data.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {"category" in selectedItem.data &&
                selectedItem.data.category && (
                  <div
                    className="
                      rounded-xl
                      bg-slate-50
                      p-4
                      dark:bg-white/[0.03]
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-widest
                        text-slate-400
                      "
                    >
                      Category
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-medium
                        text-slate-900
                        dark:text-white
                      "
                    >
                      {selectedItem.data.category}
                    </p>
                  </div>
                )}

              {"provider" in selectedItem.data &&
                selectedItem.data.provider && (
                  <div
                    className="
                      rounded-xl
                      bg-slate-50
                      p-4
                      dark:bg-white/[0.03]
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-widest
                        text-slate-400
                      "
                    >
                      Provider
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-medium
                        text-slate-900
                        dark:text-white
                      "
                    >
                      {selectedItem.data.provider}
                    </p>
                  </div>
                )}

              {"introduced" in selectedItem.data &&
                selectedItem.data.introduced && (
                  <div
                    className="
                      rounded-xl
                      bg-slate-50
                      p-4
                      dark:bg-white/[0.03]
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-widest
                        text-slate-400
                      "
                    >
                      Introduced
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-medium
                        text-slate-900
                        dark:text-white
                      "
                    >
                      {selectedItem.data.introduced}
                    </p>
                  </div>
                )}

              {"type" in selectedItem.data && selectedItem.data.type && (
                <div
                  className="
                      rounded-xl
                      bg-slate-50
                      p-4
                      dark:bg-white/[0.03]
                    "
                >
                  <p
                    className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-widest
                        text-slate-400
                      "
                  >
                    Membership
                  </p>

                  <p
                    className="
                        mt-1
                        text-sm
                        font-medium
                        text-slate-900
                        dark:text-white
                      "
                  >
                    {selectedItem.data.type}
                  </p>
                </div>
              )}
            </div>

            {"importance" in selectedItem.data &&
              selectedItem.data.importance && (
                <div>
                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-slate-950
                      dark:text-white
                    "
                  >
                    Why it matters
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {selectedItem.data.importance}
                  </p>
                </div>
              )}

            {"benefits" in selectedItem.data &&
              renderList(selectedItem.data.benefits)}

            {"purpose" in selectedItem.data &&
              renderList(selectedItem.data.purpose)}

            {"mission" in selectedItem.data &&
              renderList(selectedItem.data.mission)}

            {"principles" in selectedItem.data &&
              renderList(selectedItem.data.principles)}

            {"history" in selectedItem.data && selectedItem.data.history && (
              <div>
                <h3
                  className="
                      text-sm
                      font-semibold
                      text-slate-950
                      dark:text-white
                    "
                >
                  History
                </h3>

                <p
                  className="
                      mt-2
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                >
                  {selectedItem.data.history}
                </p>
              </div>
            )}

            {"company_statement" in selectedItem.data &&
              selectedItem.data.company_statement && (
                <div
                  className="
                    rounded-2xl
                    border
                    border-[#3CB6C6]/10
                    bg-[#3CB6C6]/[0.04]
                    p-5
                    dark:bg-[#3CB6C6]/[0.06]
                  "
                >
                  <div className="flex gap-3">
                    <ShieldCheck
                      size={18}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#3CB6C6]
                      "
                    />

                    <div>
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-[#3CB6C6]
                        "
                      >
                        NCC Cleaning commitment
                      </p>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {selectedItem.data.company_statement}
                      </p>
                    </div>
                  </div>
                </div>
              )}
          </motion.div>
        )}
      </Information>
    </section>
  );
}
