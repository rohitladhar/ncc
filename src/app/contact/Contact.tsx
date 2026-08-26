"use client";
const contactDetails = [
  {
    title: "Company",
    content: ["NCC Cleaning Service LTD"],
  },
  {
    title: "Address",
    content: [
      "Unit 408, Bedford Heights",
      "Brickhill Drive",
      "Bedford MK41 7PH",
    ],
  },
  {
    title: "Phone",
    content: ["+44 1234745377"],
    link: "tel:+441234745377",
  },
];

const emailContacts = [
  {
    role: "Managing Director",
    email: "info@ncccleaning.co.uk",
  },
  {
    role: "General Manager",
    email: "service@ncccleaning.co.uk",
  },
  {
    role: "Sales Manager",
    email: "sales@ncccleaning.co.uk",
  },
];

const openingHours = [
  "Monday: 9 to 5 PM",
  "Tuesday: 9 to 5 PM",
  "Wednesday: 9 to 5 PM",
  "Thursday: 9 to 5 PM",
  "Friday: 9 to 5 PM",
  "Saturday: Closed",
  "Sunday: Closed",
];

const ContactInfo = () => {
  return (
    <section
      aria-labelledby="contact-title"
      className="mx-auto max-w-4xl py-12 text-primary dark:text-white"
    >
      <h1
        id="contact-title"
        className="mb-12 text-center text-6xl font-bold tracking-tight"
      >
        Contact Us
      </h1>

      <div className="divide-y divide-black/10 dark:divide-white/10">
        {contactDetails.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 py-8 md:flex-row md:gap-12"
          >
            <h2 className="w-full text-2xl font-semibold md:w-64">
              {item.title}
            </h2>

            <div>
              {item.title === "Company" ? (
                <p className="text-xl font-bold tracking-tight transition-colors hover:text-primary">
                  NCC Cleaning Service LTD
                </p>
              ) : (
                <div className="text-xl leading-8">
                  {item.content.map((line) =>
                    item.link ? (
                      <a
                        key={line}
                        href={item.link}
                        className="transition-colors hover:text-primary"
                      >
                        {line}
                      </a>
                    ) : (
                      <p
                        key={line}
                        className="transition-colors hover:text-primary"
                      >
                        {line}
                      </p>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-3 py-8 md:flex-row md:gap-12">
          <h2 className="w-full text-2xl font-semibold md:w-64">
            Email
          </h2>

          <div className="space-y-5 text-xl">
            {emailContacts.map((contact) => (
              <div key={contact.email}>
                <p className="font-semibold">{contact.role}</p>

                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 py-8 md:flex-row md:gap-12">
          <h2 className="w-full text-2xl font-semibold md:w-64">
            Opening Hours
          </h2>

          <div className="space-y-2 text-xl">
            {openingHours.map((hours) => (
              <p
                key={hours}
                className="transition-colors hover:text-primary"
              >
                {hours}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;