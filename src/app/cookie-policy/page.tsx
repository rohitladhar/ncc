import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | NCC",
  description:
    "Cookie Policy explaining how NCC Cleaning Service Ltd uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-6 lg:px-8 lg:py-24 mt-8 md:mt-8">
        <div className="mb-12">
          <h1 className="text-5xl mt-5 font-bold tracking-tight text-gray-900 dark:text-white text-primary">
            Cookie Policy
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: 1 August 2026
          </p>
        </div>

        <div className="space-y-5 text-gray-700">
          
          <div>
            <h2 className="mb-2 mt-5 text-2xl font-semibold text-primary dark:text-white">
              1. What are cookies?
            </h2>

            <p className="leading-6">
              Cookies are small text files that websites may store on your
              device when you visit them. They can be used for website
              functionality, remembering preferences, analytics, advertising,
              marketing and other purposes.
            </p>
          </div>

     
          <div>
            <h2 className="mb-2 mt-5 text-2xl font-semibold text-primary dark:text-white">
              2. Does NCC use cookies?
            </h2>

            <p className="leading-6">
              NCC Cleaning Service Ltd does not currently use cookies on this
              website. We do not use cookies for website functionality,
              analytics, advertising, marketing or tracking purposes.
            </p>

            <p className="mt-2 leading-6">
              We therefore do not currently operate a cookie consent banner on
              our website.
            </p>
          </div>

   
          <div>
            <h2 className="mb-2 mt-5 text-2xl font-semibold text-primary dark:text-white">
              3. Information submitted through our forms
            </h2>

            <p className="leading-6">
              Information that you voluntarily submit through our career and
              quote forms is processed by NCC for the purposes described in our
              Privacy Policy.
            </p>

            <p className="mt-2 leading-6">
              Information submitted through these forms is stored in our
              database and is not stored in cookies on your device.
            </p>
          </div>

        
          <div>
            <h2 className="mb-2 mt-5 text-2xl font-semibold text-primary dark:text-white">
              4. Hosting and database
            </h2>

            <p className="leading-6">
              Our website and database are hosted using GoDaddy
              infrastructure. GoDaddy provides hosting and technical
              infrastructure services to NCC.
            </p>

            <p className="mt-2 leading-6">
              The use of GoDaddy for hosting and database infrastructure does
              not mean that NCC uses cookies for advertising, analytics or
              tracking purposes.
            </p>
          </div>

       
          <div>
            <h2 className="mb-2 mt-5 text-2xl font-semibold text-primary dark:text-white">
              5. Changes to this Cookie Policy
            </h2>

            <p className="leading-6">
              We may update this Cookie Policy if our website, technology or
              use of cookies changes. Any updated version will be published on
              this page with a revised update date.
            </p>
          </div>

    
          <div>
            <h2 className="mb-2 mt-5 text-2xl font-semibold text-primary dark:text-white">
              6. Contact us
            </h2>

            <p className="leading-6">
              If you have any questions about this Cookie Policy, please
              contact us using the details below.
            </p>

            <div className="mt-3 rounded-lg bg-gray-50 p-4">
              <p>
                <strong>Company:</strong> NCC Cleaning Service Ltd
              </p>

              <p className="mt-1">
                <strong>Email:</strong> info@ncccleaning.co.uk
              </p>

              <p className="mt-1">
                <strong>Address:</strong> Unit 408, Bedford Heights Brickhill
                Drive, Bedford MK41 7PH
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
