import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | NCC Cleaning Service Ltd",
  description:
    "Privacy Policy explaining how NCC Cleaning Service Ltd collects, uses and protects personal information.",
};

const sections = [
  { number: "01", title: "Who we are" },
  { number: "02", title: "Information we collect" },
  { number: "03", title: "How we use your information" },
  { number: "04", title: "Lawful basis for processing" },
  { number: "05", title: "CVs and job applications" },
  { number: "06", title: "How we store and share your information" },
  { number: "07", title: "How we protect your information" },
  { number: "08", title: "How long we keep your information" },
  { number: "09", title: "Your data protection rights" },
  { number: "10", title: "Marketing and promotional emails" },
  { number: "11", title: "Children" },
  { number: "12", title: "Complaints" },
  { number: "13", title: "Changes to this Privacy Policy" },
  { number: "14", title: "Contact us" },
];

export default function PrivacyPolicyPage() {
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
                Privacy
                <br />
                Policy
                <span className="text-[#3cb6c6]">.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg dark:text-slate-400">
                We are committed to protecting your privacy and handling your
                personal information responsibly, transparently and securely.
              </p>
            </div>

            <div className="border-l border-slate-200 pl-7 dark:border-white/10">
              <FileText
                size={22}
                strokeWidth={1.6}
                className="mb-7 text-[#3cb6c6]"
              />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Document
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  Privacy Policy
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
                  Company
                </p>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  NCC Cleaning Service Ltd
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
                This Privacy Policy explains how NCC Cleaning Service Ltd
                collects, uses, stores and protects personal information
                provided through our website and services.
              </p>
            </div>

            <PolicySection
              id="section-01"
              number="01"
              title="Who we are"
            >
              <p>
                NCC Cleaning Service Ltd is a commercial cleaning business
                operating in the United Kingdom. In this Privacy Policy,
                &quot;NCC&quot;, &quot;we&quot;, &quot;us&quot; and
                &quot;our&quot; refer to NCC Cleaning Service Ltd.
              </p>

              <p>
                If you have any questions about this Privacy Policy or how we
                handle your personal information, you can contact us using the
                details provided at the end of this policy.
              </p>
            </PolicySection>

            <PolicySection
              id="section-02"
              number="02"
              title="Information we collect"
            >
              <p>
                We collect personal information that you voluntarily provide
                through our website, primarily through our career, quote and
                newsletter forms.
              </p>

              <div className="my-8 divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
                <InfoRow
                  title="Career applications"
                  text="If you apply for a position through our careers form, we may collect your name, contact details, CV or resume and other information that you choose to provide as part of your application."
                />

                <InfoRow
                  title="Quote requests"
                  text="If you request a quote, we may collect your name, contact details, property or service requirements and other information that you choose to submit."
                />

                <InfoRow
                  title="Newsletter subscriptions"
                  text="If you subscribe to our email newsletter, we collect the email address that you provide to us."
                />
              </div>

              <p>
                Your newsletter email address may be used for newsletters,
                company updates, promotional communications, special offers,
                cleaning-related information and other marketing emails.
              </p>

              <p>
                You can unsubscribe from our marketing emails at any time by
                using the unsubscribe option provided in our emails.
              </p>
            </PolicySection>

            <PolicySection
              id="section-03"
              number="03"
              title="How we use your information"
            >
              <p>
                We use the personal information you provide for the following
                purposes:
              </p>

              <PolicyList
                items={[
                  "To respond to your enquiries.",
                  "To prepare and provide requested quotes.",
                  "To process and consider job applications.",
                  "To communicate with you about your enquiry, quote or job application.",
                  "To provide and manage our cleaning services.",
                  "To send newsletters, promotional communications and marketing emails where you have subscribed.",
                  "To maintain the security of our website and systems.",
                  "To comply with applicable legal requirements.",
                ]}
              />

              <p className="font-medium text-slate-800 dark:text-slate-200">
                We do not sell or rent your personal information.
              </p>
            </PolicySection>

            <PolicySection
              id="section-04"
              number="04"
              title="Lawful basis for processing"
            >
              <p>
                We process your personal information where necessary to respond
                to your request, provide our services, consider your job
                application, comply with legal obligations, or pursue our
                legitimate business interests where permitted by law.
              </p>

              <p>
                Where you voluntarily subscribe to our email newsletter, we may
                process your email address to send newsletters, promotional
                communications and marketing emails based on your consent.
              </p>

              <p>
                You can withdraw your consent to receive marketing emails at
                any time by using the unsubscribe option provided in our emails.
              </p>

              <p>
                We will only process your personal information where we have a
                lawful basis to do so under applicable UK data protection law.
              </p>
            </PolicySection>

            <PolicySection
              id="section-05"
              number="05"
              title="CVs and job applications"
            >
              <p>
                Information submitted as part of a job application, including
                your CV and supporting information, will be used for recruitment
                and related purposes.
              </p>

              <p>
                We will retain job application information for a maximum of 6
                months after the recruitment process has ended. After this
                period, the information will be securely deleted unless we are
                required or permitted by law to retain it for longer.
              </p>
            </PolicySection>

            <PolicySection
              id="section-06"
              number="06"
              title="How we store and share your information"
            >
              <p>
                Personal information submitted through our website forms,
                including career applications, quote requests and newsletter
                subscriptions, is stored in our database and used by NCC for the
                purposes described in this Privacy Policy.
              </p>

              <p>
                Our website and database infrastructure are hosted using
                services provided by GoDaddy. GoDaddy may process or store
                personal information on our behalf as part of providing hosting
                and technical infrastructure services.
              </p>

              <p>
                We do not sell, rent or share your personal information with
                third parties for their own marketing purposes. We may disclose
                information where necessary to operate our website, provide our
                services, protect our systems or comply with a legal
                obligation.
              </p>
            </PolicySection>

            <PolicySection
              id="section-07"
              number="07"
              title="How we protect your information"
            >
              <p>
                We take reasonable technical and organisational measures to
                protect your personal information against unauthorised access,
                alteration, disclosure or destruction.
              </p>

              <p>
                However, no method of transmitting or storing information
                electronically can be guaranteed to be completely secure.
              </p>

              <div className="mt-8 border-y border-slate-200 py-6 dark:border-white/10">
                <div className="flex gap-4">
                  <ShieldCheck
                    size={21}
                    strokeWidth={1.6}
                    className="mt-1 shrink-0 text-[#3cb6c6]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Security commitment
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      We maintain reasonable technical and organisational
                      safeguards designed to protect the personal information
                      held by NCC.
                    </p>
                  </div>
                </div>
              </div>
            </PolicySection>

            <PolicySection
              id="section-08"
              number="08"
              title="How long we keep your information"
            >
              <p>
                We retain personal information only for as long as it is
                reasonably necessary for the purpose for which it was collected
                and to meet applicable legal, accounting or reporting
                requirements.
              </p>

              <div className="my-8 divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
                <RetentionRow
                  title="Job applications"
                  text="Career application information is retained for a maximum of 6 months after the recruitment process has ended."
                />

                <RetentionRow
                  title="Quote enquiries"
                  text="Quote information may be retained for as long as reasonably necessary to respond to your enquiry, provide services and meet applicable requirements."
                />

                <RetentionRow
                  title="Newsletter subscriptions"
                  text="Your email address is retained while you remain subscribed. If you unsubscribe, we stop using it for marketing purposes."
                />
              </div>

              <p>
                We may retain limited information necessary to record your
                unsubscribe request and ensure that we do not send you further
                marketing communications.
              </p>
            </PolicySection>

            <PolicySection
              id="section-09"
              number="09"
              title="Your data protection rights"
            >
              <p>
                Depending on the circumstances, you may have rights under UK
                data protection law, including the right to:
              </p>

              <PolicyList
                items={[
                  "Request access to your personal information.",
                  "Request correction of inaccurate information.",
                  "Request deletion of your personal information.",
                  "Request restriction of processing.",
                  "Object to certain processing.",
                  "Request transfer of certain information.",
                  "Withdraw consent where processing is based on consent.",
                ]}
              />

              <p>
                To exercise your rights, please contact us using the details
                provided below.
              </p>
            </PolicySection>

            <PolicySection
              id="section-10"
              number="10"
              title="Marketing and promotional emails"
            >
              <p>
                If you subscribe to our newsletter, we may use the email
                address you provide to send newsletters, promotional messages,
                special offers, company updates and other marketing
                communications from NCC Cleaning Service.
              </p>

              <p>
                We will only send marketing emails where we have an appropriate
                lawful basis to do so under applicable UK data protection and
                electronic marketing laws.
              </p>

              <p>
                Each marketing email will include a clear option to unsubscribe.
                You can unsubscribe at any time, and we will respect your
                request to stop receiving marketing communications.
              </p>

              <p>
                We do not sell or provide your newsletter email address to other
                businesses for their own marketing purposes.
              </p>
            </PolicySection>

            <PolicySection
              id="section-11"
              number="11"
              title="Children"
            >
              <p>
                Our website is not intended to knowingly collect personal
                information from children. If you believe that a child has
                provided us with personal information, please contact us so that
                we can take appropriate action.
              </p>
            </PolicySection>

            <PolicySection
              id="section-12"
              number="12"
              title="Complaints"
            >
              <p>
                If you have concerns about how we handle your personal
                information, we encourage you to contact us first so that we can
                try to resolve your concern.
              </p>

              <p>
                You also have the right to complain to the UK Information
                Commissioner&apos;s Office (ICO) if you believe your personal
                information has not been handled in accordance with applicable
                data protection law.
              </p>
            </PolicySection>

            <PolicySection
              id="section-13"
              number="13"
              title="Changes to this Privacy Policy"
            >
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes to our website, services, legal requirements or how we
                process personal information. Any updated version will be
                published on this page with a revised update date.
              </p>
            </PolicySection>

            <PolicySection
              id="section-14"
              number="14"
              title="Contact us"
            >
              <p>
                If you have any questions about this Privacy Policy or wish to
                exercise your data protection rights, please contact us using
                the details below.
              </p>

              <div className="mt-8 border-y border-slate-200 dark:border-white/10">
                <div className="border-b border-slate-200 py-6 dark:border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3cb6c6]">
                    NCC Cleaning Service Ltd
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-slate-900 dark:text-white">
                    Privacy enquiries
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
                This Privacy Policy was last updated on 1 August 2026.
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

function InfoRow({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
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

function RetentionRow({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-3 py-6 sm:grid-cols-[190px_1fr] sm:gap-10">
      <div className="flex items-start gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3cb6c6]" />

        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
        {text}
      </p>
    </div>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="my-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3cb6c6]" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}