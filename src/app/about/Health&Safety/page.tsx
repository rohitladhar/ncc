"use client";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  HardHat,
  HeartPulse,
  ShieldCheck,
  Users,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const BRAND = "#3cb6c6";
const BRAND_DARK = "#319aa8";

const safetyPoints = [
  {
    icon: ShieldCheck,
    title: "Safe Handling",
    description:
      "We ensure that using, storing, and handling any materials is safe and does not pose health risks.",
  },
  {
    icon: Users,
    title: "Training & Support",
    description:
      "We provide the necessary information, training, and support to help everyone stay safe at work.",
  },
  {
    icon: HeartPulse,
    title: "Healthy Workplace",
    description:
      "We maintain our work environment to keep it safe and healthy as much as possible.",
  },
  {
    icon: HardHat,
    title: "Protective Equipment",
    description:
      "We supply the right training, safety gear, and protective clothing to keep our employees safe and healthy.",
  },
];

export default function HealthSafetyPolicy() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-slate-950 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#3cb6c6]/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -right-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#3cb6c6]/5
            blur-[130px]
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
            via-[#3cb6c6]/30
            to-transparent
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
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
              border-[#3cb6c6]/20
              bg-[#3cb6c6]/5
              px-4
              py-2
              shadow-sm
              backdrop-blur
            "
          >
            <ShieldCheck
              size={16}
              className="text-[#3cb6c6]"
              strokeWidth={2.2}
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#319aa8]
                dark:text-[#3cb6c6]
              "
            >
              Our Commitment
            </span>
          </div>

          <h1
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
            Health & Safety
            <span
              className="
                ml-2
                bg-gradient-to-r
                from-[#3cb6c6]
                to-[#319aa8]
                bg-clip-text
                text-transparent
              "
            >
              Policy
            </span>
          </h1>

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
            At NCC Cleaning Service, protecting our employees, clients and
            everyone affected by our work is a fundamental part of how we
            operate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-14
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-slate-200/80
            bg-white/90
            shadow-[0_20px_70px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-white/[0.035]
            dark:shadow-none
          "
        >
          <div
            className="
              relative
              overflow-hidden
              border-b
              border-slate-100
              px-6
              py-8
              sm:px-10
              sm:py-10
              dark:border-white/10
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-32
                h-64
                w-64
                rounded-full
                bg-[#3cb6c6]/10
                blur-[80px]
              "
            />

            <div className="relative flex items-start gap-5">
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#3cb6c6]/10
                  text-[#3cb6c6]
                "
              >
                <ShieldCheck size={28} strokeWidth={1.8} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#3cb6c6]
                  "
                >
                  NCC Cleaning Service
                </p>

                <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
                  Creating a safe and healthy working environment
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                  As an employer and contractor, NCC Cleaning Service accepts
                  full responsibility for providing and maintaining a safe and
                  healthy environment for all employees and others affected by
                  its activities.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div
              className="
                rounded-2xl
                border
                border-[#3cb6c6]/10
                bg-[#3cb6c6]/[0.035]
                p-5
                sm:p-6
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    mt-0.5
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#3cb6c6]/10
                    text-[#3cb6c6]
                  "
                >
                  <HeartPulse size={18} />
                </div>

                <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Our Health and Safety Policy outlines the important steps we
                  take to create a safe and healthy workplace. Here are the key
                  areas we focus on:
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-6">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#3cb6c6]
                  "
                >
                  Our Standards
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  Our health & safety priorities
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {safetyPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <motion.div
                      key={point.title}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.07,
                      }}
                      className="
                        group
                        rounded-2xl
                        border
                        border-slate-200/80
                        bg-white
                        p-5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#3cb6c6]/30
                        hover:shadow-[0_15px_40px_rgba(60,182,198,0.08)]
                        dark:border-white/10
                        dark:bg-white/[0.025]
                        dark:hover:border-[#3cb6c6]/20
                      "
                    >
                      <div className="flex gap-4">
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#3cb6c6]/10
                            text-[#3cb6c6]
                            transition-transform
                            duration-300
                            group-hover:scale-105
                          "
                        >
                          <Icon size={21} strokeWidth={1.9} />
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white">
                            {point.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div
              className="
                mt-10
                rounded-2xl
                border
                border-slate-200/80
                bg-slate-50/70
                p-6
                dark:border-white/10
                dark:bg-white/[0.025]
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#3cb6c6]/10
                    text-[#3cb6c6]
                  "
                >
                  <Users size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Everyone has a responsibility
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    To uphold our cleaning health and safety standards, we need
                    everyone&apos;s cooperation. Each employee is responsible
                    for their own safety, as well as the safety of their
                    coworkers and anyone else affected by their work.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                mt-5
                rounded-2xl
                border
                border-amber-200/70
                bg-amber-50/60
                p-5
                dark:border-amber-500/20
                dark:bg-amber-500/[0.05]
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-amber-500/10
                    text-amber-600
                    dark:text-amber-400
                  "
                >
                  <AlertTriangle size={19} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Safety compliance
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    If any employee ignores or repeatedly violates these safety
                    rules, disciplinary action will be taken, regardless of
                    their position in the company.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              border-t
              border-slate-100
              bg-slate-50/70
              px-6
              py-8
              dark:border-white/10
              dark:bg-white/[0.02]
              sm:px-10
            "
          >
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Have questions about our safety standards?
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Our team is happy to provide further information.
                </p>
              </div>

              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#3cb6c6]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_25px_rgba(60,182,198,0.22)]
                  transition-all
                  duration-300
                  hover:bg-[#319aa8]
                  hover:shadow-[0_14px_30px_rgba(60,182,198,0.28)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#3cb6c6]/50
                  focus-visible:ring-offset-2
                  dark:focus-visible:ring-offset-slate-950
                "
              >
                Get in Touch
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            mx-auto
            mt-8
            flex
            max-w-5xl
            items-center
            justify-center
            gap-2
            text-center
          "
        >
          <CheckCircle2 size={15} className="text-[#3cb6c6]" />

          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Safety is an essential part of the way we deliver our services.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
