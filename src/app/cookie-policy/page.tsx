import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Cookie,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | NCC Cleaning Service Ltd",
  description:
    "Cookie Policy explaining how NCC Cleaning Service Ltd uses cookies and similar technologies.",
};

const sections = [
  { number: "01", title: "What are cookies?" },
  { number: "02", title: "Does NCC use cookies?" },
  { number: "03", title: "Information submitted through our forms" },
  { number: "04", title: "Hosting and database" },
  { number: "05", title: "Changes to this Cookie Policy" },
  { number: "06", title: "Contact us" },
];

export default function CookiePolicyPage() {
  return (
    <main className="bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300">
      <section className="border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid min-h-[500px] items-end gap-14 py-20 sm:py-24 lg:grid-cols-[1fr_320px] lg:py-28">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#3cb6c6]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#319aa8] dark:text-[#3cb6c6]">
                  NCC Cleaning Service Ltd
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[76px] lg:leading-[0.98] dark:text-white">
                Cookie
                <br />
                Policy
                <span className="text-[#3cb6c6]">.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg dark:text-slate-400">
                Information about how NCC Cleaning Service Ltd uses cookies and
                similar technologies on this website.
              </p>
            </div>

            <div className="border-l border-slate-200 pl-7 dark:border-white/10">
              <Cookie
                size={22}
                strokeWidth={1.6}
                className="mb-7 text-[#3cb6c6]"
              />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Document
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  Cookie Policy
                </p>
              </div>

              <div className="mt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Last updated
                </p>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  1 August 2026
                </p>
              </div>

              <div className="mt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Current status
                </p>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  No cookies currently used
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 lg:hidden dark:border-white/10">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 sm:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-800 dark:text-slate-200">
              Table of contents
            </span>

            <ChevronDown
              size={18}
              className="text-[#3cb6c6] transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div className="border-t border-slate-200 px-5 py-5 dark:border-white/10 sm:px-8">
            <div className="grid sm:grid-cols-2">
              {sections.map((section) => (
                <a
                  key={section.number}
                  href={`#section-${section.number}`}
                  className="group flex gap-4 border-b border-slate-100 py-3.5 text-sm transition-colors hover:text-[#319aa8] dark:border-white/5 dark:hover:text-[#3cb6c6]"
                >
                  <span className="text-[10px] font-bold text-[#3cb6c6]">
                    {section.number}
                  </span>

                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </details>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[230px_minmax(0,780px)] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Contents
              </p>

              <nav className="border-l border-slate-200 dark:border-white/10">
                {sections.map((section) => (
                  <a
                    key={section.number}
                    href={`#section-${section.number}`}
                    className="group flex gap-3 border-l border-transparent py-2.5 pl-4 text-xs leading-5 text-slate-500 transition-all hover:border-[#3cb6c6] hover:text-[#319aa8] dark:text-slate-500 dark:hover:border-[#3cb6c6] dark:hover:text-[#3cb6c6]"
                  >
                    <span className="shrink-0 font-semibold text-slate-300 transition-colors group-hover:text-[#3cb6c6] dark:text-slate-600">
                      {section.number}
                    </span>

                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article>
            <div className="mb-16 border-l-2 border-[#3cb6c6] pl-6 sm:pl-8">
              <p className="max-w-3xl text-lg font-medium leading-8 tracking-[-0.01em] text-slate-800 sm:text-xl dark:text-slate-200">
                NCC Cleaning Service Ltd does not currently use cookies on this
                website for functionality, analytics, advertising, marketing or
                tracking purposes.
              </p>
            </div>

            <PolicySection
              id="section-01"
              number="01"
              title="What are cookies?"
            >
              <p>
                Cookies are small text files that websites may store on your
                device when you visit them. They can be used for website
                functionality, remembering preferences, analytics, advertising,
                marketing and other purposes.
              </p>

              <div className="mt-8 border-y border-slate-200 py-6 dark:border-white/10">
                <div className="flex gap-4">
                  <Cookie
                    size={21}
                    strokeWidth={1.6}
                    className="mt-1 shrink-0 text-[#3cb6c6]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      About cookies
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      Cookies can serve different purposes, including
                      functionality, preferences, analytics, advertising and
                      tracking.
                    </p>
                  </div>
                </div>
              </div>
            </PolicySection>

            <PolicySection
              id="section-02"
              number="02"
              title="Does NCC use cookies?"
            >
              <p>
                NCC Cleaning Service Ltd does not currently use cookies on this
                website.
              </p>

              <p>
                We do not currently use cookies for website functionality,
                analytics, advertising, marketing or tracking purposes.
              </p>

              <div className="my-8 border-y border-slate-200 py-6 dark:border-white/10">
                <div className="flex gap-4">
                  <ShieldCheck
                    size={21}
                    strokeWidth={1.6}
                    className="mt-1 shrink-0 text-[#3cb6c6]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Current cookie status
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      No cookies are currently used by NCC for analytics,
                      advertising, marketing, tracking or website functionality.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Because we do not currently use cookies that require user
                consent, we do not currently operate a cookie consent banner on
                our website.
              </p>
            </PolicySection>

            <PolicySection
              id="section-03"
              number="03"
              title="Information submitted through our forms"
            >
              <p>
                Information that you voluntarily submit through our career and
                quote forms is processed by NCC for the purposes described in
                our Privacy Policy.
              </p>

              <p>
                Information submitted through these forms is stored in our
                database and is not stored in cookies on your device.
              </p>

              <div className="my-8 divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
                <InfoRow
                  title="Career forms"
                  text="Information submitted through career applications is processed for recruitment and related purposes."
                />

                <InfoRow
                  title="Quote forms"
                  text="Information submitted through quote requests is used to respond to enquiries and prepare requested services or quotations."
                />

                <InfoRow
                  title="Newsletter"
                  text="Newsletter subscription information is used for the marketing communications described in our Privacy Policy."
                />
              </div>

              <p>
                Further information about how personal information submitted
                through our forms is collected, used, stored and protected can
                be found in our Privacy Policy.
              </p>
            </PolicySection>

            <PolicySection
              id="section-04"
              number="04"
              title="Hosting and database"
            >
              <p>
                Our website and database are hosted using GoDaddy
                infrastructure. GoDaddy provides hosting and technical
                infrastructure services to NCC.
              </p>

              <p>
                The use of GoDaddy for hosting and database infrastructure does
                not mean that NCC uses cookies for advertising, analytics or
                tracking purposes.
              </p>

              <div className="mt-8 border-y border-slate-200 py-6 dark:border-white/10">
                <div className="flex gap-4">
                  <Check
                    size={20}
                    strokeWidth={2}
                    className="mt-1 shrink-0 text-[#3cb6c6]"
                  />

                  <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                    Hosting infrastructure and the use of cookies are separate
                    matters. Our current use of hosting services does not mean
                    that NCC uses cookies for tracking or advertising.
                  </p>
                </div>
              </div>
            </PolicySection>

            <PolicySection
              id="section-05"
              number="05"
              title="Changes to this Cookie Policy"
            >
              <p>
                We may update this Cookie Policy if our website, technology or
                use of cookies changes.
              </p>

              <p>
                Any updated version will be published on this page with a
                revised update date.
              </p>
            </PolicySection>

            <PolicySection id="section-06" number="06" title="Contact us">
              <p>
                If you have any questions about this Cookie Policy, please
                contact us using the details below.
              </p>

              <div className="mt-8 border-y border-slate-200 dark:border-white/10">
                <div className="border-b border-slate-200 py-6 dark:border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3cb6c6]">
                    NCC Cleaning Service Ltd
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-slate-900 dark:text-white">
                    Cookie policy enquiries
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2">
                  <a
                    href="mailto:info@ncccleaning.co.uk"
                    className="group flex items-start gap-4 border-b border-slate-200 py-6 transition-colors hover:text-[#319aa8] dark:border-white/10 dark:hover:text-[#3cb6c6] sm:border-b-0 sm:border-r sm:pr-8"
                  >
                    <Mail
                      size={19}
                      strokeWidth={1.7}
                      className="mt-0.5 shrink-0 text-[#3cb6c6]"
                    />

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Email
                      </p>

                      <p className="mt-2 break-all text-sm font-medium text-slate-700 dark:text-slate-200">
                        info@ncccleaning.co.uk
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="ml-auto shrink-0 text-slate-300 transition-colors group-hover:text-[#3cb6c6]"
                    />
                  </a>

                  <div className="flex items-start gap-4 py-6 sm:pl-8">
                    <MapPin
                      size={19}
                      strokeWidth={1.7}
                      className="mt-0.5 shrink-0 text-[#3cb6c6]"
                    />

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Address
                      </p>

                      <p className="mt-2 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">
                        Unit 408, Bedford Heights,
                        <br />
                        Brickhill Drive,
                        <br />
                        Bedford MK41 7PH
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </PolicySection>

            <div className="mt-16 flex items-start gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
              <Check
                size={17}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-[#3cb6c6]"
              />

              <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
                This Cookie Policy was last updated on 1 August 2026.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-8 border-b border-slate-200 py-14 first:pt-0 dark:border-white/10 sm:py-16"
    >
      <div className="grid gap-6 sm:grid-cols-[70px_1fr] sm:gap-8">
        <div>
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#3cb6c6]">
            {number}
          </span>

          <div className="mt-4 hidden h-px w-8 bg-[#3cb6c6]/50 sm:block" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-[30px] sm:leading-tight dark:text-white">
            {title}
          </h2>

          <div className="mt-7 space-y-5 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ title, text }: { title: string; text: string }) {
  return (
    <div className="grid gap-3 py-6 sm:grid-cols-[190px_1fr] sm:gap-10">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
        {text}
      </p>
    </div>
  );
}
