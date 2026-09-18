"use client";

import { useState } from "react";

import CareerInfo from "./CareerInfo";
import Career from "./Career";
import JobVacancy from "./JobVacancy";

interface Job {
  title: string;
  location: string[];
}

export default function Careers() {
  const [showJobs, setShowJobs] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);

  const handleExplore = async () => {
    try {
      const res = await fetch("/data.json");

      if (!res.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const data = await res.json();

      setJobs(data.Job ?? []);
      setShowJobs(true);
    } catch (error) {
      console.error("Error fetching jobs:", error);

      // Still open the modal even if the request fails
      setShowJobs(true);
    }
  };

  return (
    <>
      <section className="scroll-mt-16 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
            {/* Career Information */}
            <div className="pt-10 lg:flex lg:h-full">
              <CareerInfo onExplore={handleExplore} />
            </div>

            {/* Career Form */}
            <div className="flex h-full w-full pt-10">
              <div className="flex h-full w-full items-center rounded-r-2xl border border-white/40 bg-gradient-to-r from-emerald-50 via-blue-50 to-indigo-100 p-6 shadow-lg sm:p-8">
                <Career />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Vacancy Modal */}
      <JobVacancy
        jobs={jobs}
        open={showJobs}
        onClose={() => setShowJobs(false)}
      />
    </>
  );
}
