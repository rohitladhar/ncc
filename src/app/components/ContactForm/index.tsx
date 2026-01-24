"use client";
import React from "react";
import { useState, useEffect } from "react";
import { sendContactForm } from "../../utils/apiCalls";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [showThanks, setShowThanks] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState<string[]>([]);
  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== "",
    );
    setIsFormValid(isValid);
  }, [formData]);
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    try {
      const response = await sendContactForm(formData);

      if (response.error) {
        let err: string[] = Object.values(
          response.error as Record<string, string[]>,
        ).flat();
        setShowThanks(true);
        setMessage(
          err.length
            ? err
            : ["An unexpected error occurred. Please try again."],
        );
      } else {
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          comments: "",
        });
        setShowThanks(true);
        setMessage([
          "Thank you for contacting us! We will get back to you soon.",
        ]);
        
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setMessage([
        "We are having a problem on our end. Please try again later.",
      ]);
    } finally {
      setLoader(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-12">
      <div className="container">
        <div className="relative">
          <h2 className="mb-9 text-center dark:text-white  text-primary">
            Get in Touch
          </h2>
          <div className="relative border px-6 py-2 rounded-lg border-black/20 dark:border-white/20 dark:text-white  text-primary">
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap w-full m-auto justify-between"
            >
              <div className="sm:flex gap-6 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="name" className="pb-3 inline-block text-base">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="address"
                    className="pb-3 inline-block text-base"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>
              </div>
              <div className="sm:flex gap-6 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="email"
                    className="pb-3 inline-block text-base"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="Phnumber"
                    className="pb-3 inline-block text-base"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="number"
                    name="phone"
                    placeholder="+1234567890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full text-base px-4 py-2.5 rounded-lg border-black/20 dark:border-white/20 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>
              </div>
              <div className="w-full mx-0 my-2.5 flex-1">
                <label htmlFor="message" className="text-base inline-block">
                  Message
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full mt-2 px-5 py-3 rounded-lg border-black/20 dark:border-white/20 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  placeholder="Anything else you wanna communicate"
                ></textarea>
              </div>
              <div className="mx-0 my-2.5 w-full">
                <button
                  type="submit"
                  disabled={!isFormValid || loader}
                  className={`border leading-none px-6 text-lg font-medium py-4 rounded-lg 
                    ${
                      !isFormValid || loader
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer"
                    }`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {showThanks && (
            <div className="text-white bg-primary rounded-full px-4 text-lg mb-4.5 mt-1 absolute flex items-center gap-2">
              {message.length > 0 && (
                <ul>
                  {message.map((msg, index) => (
                    <li key={index}>{msg}</li>
                  ))}
                </ul>
              )}
              <div className="w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
