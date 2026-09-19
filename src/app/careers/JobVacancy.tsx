"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  MapPin,
  Sparkles,
  X,
} from "lucide-react";

interface Job {
  title: string;
  location: string[];
}

interface JobVacancyProps {
  jobs: Job[];
  open: boolean;
  onClose: () => void;
}

const cleanerResponsibilities = [
  "Sweep and mop floors",
  "Dust surfaces and fixtures",
  "Sanitise touchpoints and work surfaces",
  "Collect and dispose of waste appropriately",
  "Restock cleaning materials, washroom supplies, and kitchen consumables",
  "Ensure washrooms and kitchen areas remain clean, tidy, and hygienic at all times",
  "Report maintenance issues and low stock levels to management",
];

const skillsRequired = [
  "Skills and Attributes",
  "Reliable and dependable",
  "Strong attention to detail",
  "Effective time management skills",
  "Ability to work independently and maintain high cleaning standards throughout the site",
];

export default function JobVacancy({ jobs, open, onClose }: JobVacancyProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSelectedJob(null);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const closeDetails = () => {
    setSelectedJob(null);
  };

  const closeModal = () => {
    setSelectedJob(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="relative overflow-hidden bg-[#3cb6c6] px-6 py-6 sm:px-8">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-white/10" />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                <Briefcase className="h-3.5 w-3.5" />
                Careers
              </div>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                {selectedJob ? selectedJob.title : "Join Our Team"}
              </h2>

              <p className="mt-2 max-w-xl text-sm text-white/75">
                {selectedJob
                  ? "Discover the role and responsibilities."
                  : "Explore our current opportunities and find your next role."}
              </p>
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close job vacancies"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="max-h-[calc(90vh-170px)] overflow-y-auto p-6 sm:p-8">
          {!selectedJob ? (
            <>
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3cb6c6]">
                  Current Opportunities
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Find the right opportunity for you
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Choose a position below to view the role, responsibilities,
                  and available locations.
                </p>
              </div>

              {jobs.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2">
                  {jobs.map((job) => (
                    <button
                      key={job.title}
                      type="button"
                      onClick={() => handleJobClick(job)}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3cb6c6]/40 hover:shadow-xl"
                    >
                      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#3cb6c6]/5 transition-transform duration-500 group-hover:scale-125" />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3cb6c6]/10 text-[#3cb6c6]">
                            <Briefcase className="h-6 w-6" />
                          </div>

                          <ArrowRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#3cb6c6]" />
                        </div>

                        <h3 className="mt-6 text-xl font-bold text-slate-900">
                          {job.title}
                        </h3>

                        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                          <MapPin className="h-4 w-4 text-[#3cb6c6]" />

                          <span>
                            {job.location.length}{" "}
                            {job.location.length === 1
                              ? "Location"
                              : "Locations"}{" "}
                            Available
                          </span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.location.map((location) => (
                            <span
                              key={location}
                              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                            >
                              {location}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 border-t border-slate-100 pt-4">
                          <span className="text-sm font-semibold text-[#3cb6c6]">
                            View Job Details →
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
                  <Briefcase className="mx-auto h-8 w-8 text-slate-300" />

                  <h3 className="mt-3 font-semibold text-slate-900">
                    No vacancies available
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Please check back soon for new opportunities.
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={closeDetails}
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#3cb6c6]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to opportunities
              </button>

              <div className="flex flex-wrap gap-2">
                {selectedJob.location.map((location) => (
                  <span
                    key={location}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#3cb6c6]/10 px-3 py-1.5 text-xs font-semibold text-[#3cb6c6]"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {location}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3cb6c6]/10">
                    <Sparkles className="h-5 w-5 text-[#3cb6c6]" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    Job Description
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  We are looking for reliable, hardworking, and motivated
                  cleaners to join our team. The successful candidate will help
                  maintain clean, hygienic, and welcoming environments for our
                  clients.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-bold text-slate-900">
                  Key Responsibilities
                </h4>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {cleanerResponsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#3cb6c6]" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <h4 className="text-sm font-bold text-slate-900">
                  Skills and Attributes
                </h4>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {skillsRequired.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#3cb6c6]" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
