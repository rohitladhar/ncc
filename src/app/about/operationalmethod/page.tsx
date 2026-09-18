"use client";

import {
  AlertTriangle,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  MessageSquareText,
  ShieldCheck,
  Users,
} from "lucide-react";

const operationalMethods = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Daily Cleaning Reports",
    description:
      "We use one online platform where every cleaner submits a daily cleaning report. This allows our management team and clients to monitor completed work, identify issues quickly, and maintain consistent service standards.",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "Weekly Feedback",
    description:
      "On a weekly basis, the NCC Cleaning Services supervisor and the client representative review performance and provide feedback. This helps us continuously improve our service and address any concerns promptly.",
  },
  {
    number: "03",
    icon: Users,
    title: "Monthly Toolbox Talks",
    description:
      "Toolbox talks are conducted every month to keep our staff informed, engaged, and focused on safe working practices, service quality, and current operational requirements.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "RIDDOR Reporting",
    description:
      "RIDDOR reporting procedures are maintained where applicable. Any reportable incidents are managed in accordance with relevant workplace health and safety requirements.",
  },
];

const trainingTopics = [
  "Health & Safety",
  "Slip, Trip & Fall Hazard Awareness",
  "Cleaning Techniques & Standards",
  "Manual Handling",
  "COSHH Awareness",
  "PPE & Safe Equipment Use",
  "Fire Safety & Evacuation",
  "Dealing with Emergencies",
  "Infection Prevention & Control",
  "Chemical Safety",
  "Accident & Incident Reporting",
  "Safeguarding Awareness",
];

export default function OperationalMethod() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 mt-8 md:mt-8">
     
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#3cb6c6]/5" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#3cb6c6]/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3cb6c6]/20 bg-[#3cb6c6]/10 px-4 py-2 text-sm font-semibold text-[#3cb6c6]">
            <ShieldCheck className="h-4 w-4" />
            Our Approach
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Operational Method
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Our operational approach is built around transparency, regular
            communication, staff development, and consistent quality control.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {operationalMethods.map((method) => {
            const Icon = method.icon;

            return (
              <div
                key={method.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3cb6c6]/30 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#3cb6c6]/5 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3cb6c6]/10 text-[#3cb6c6]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-sm font-bold text-slate-200">
                      {method.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {method.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {method.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-[#3cb6c6] shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                <Users className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Transparency at Every Level
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
                We focus on maintaining clear and open communication between
                our staff, management team, and clients. Our systems are
                designed to provide visibility of daily activities, performance,
                feedback, and service standards.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Clear communication with clients",
                  "Daily visibility through online reporting",
                  "Regular performance reviews",
                  "Open feedback between staff and clients",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-white"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-white" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3cb6c6]/10 text-[#3cb6c6]">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3cb6c6]">
                    Staff Development
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    Recruitment & Online Training
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Every employee undergoes a DBS check before joining our team.
                We also provide online training to ensure our cleaners
                understand the standards, procedures, and safety requirements
                of their role.
              </p>

              <div className="mt-6">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900">
                  <BookOpenCheck className="h-4 w-4 text-[#3cb6c6]" />
                  Training Topics
                </h4>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {trainingTopics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-start gap-2 rounded-xl bg-white px-3 py-2.5 text-xs font-medium text-slate-600 shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#3cb6c6]" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-amber-100 bg-amber-50 p-5 sm:flex-row sm:items-center">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
            <AlertTriangle className="h-5 w-5" />
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Safety & Compliance
            </h4>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              We promote a strong culture of safety, responsibility, and
              continuous improvement across our cleaning operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

