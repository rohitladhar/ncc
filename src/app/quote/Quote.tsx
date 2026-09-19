"use client";

import React, {
  useState,
  useEffect,
  ChangeEvent,
  FocusEvent,
  FormEvent,
} from "react";
import { User, MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { sendQuoteForm } from "@/app/utils/apiCalls";

type FormData = {
  name: string;
  address: string;
  email: string;
  phone: string;
  comments: string;
};

type Touched = {
  name: boolean;
  address: boolean;
  email: boolean;
  phone: boolean;
  comments: boolean;
};

type ApiResponse = {
  error?: Record<string, string[]>;
};

const Quote: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [loader, setLoader] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [showThanks, setShowThanks] = useState<boolean>(false);
  const [message, setMessage] = useState<string[]>([]);

  const [touched, setTouched] = useState<Touched>({
    name: false,
    address: false,
    email: false,
    phone: false,
    comments: false,
  });

  useEffect(() => {
    const isValid =
      validateName(formData.name) &&
      validateEmail(formData.email) &&
      validatePhone(formData.phone) &&
      validateAddress(formData.address) &&
      validateComments(formData.comments);

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const validateName = (name: string) => /^[A-Za-z\s]+$/.test(name);

  const validateEmail = (email: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const validatePhone = (phone: string) => /^[0-9]{10,11}$/.test(phone);

  const validateAddress = (address: string) => address.trim() !== "";

  const validateComments = (comments: string) => comments.trim() !== "";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoader(true);
    setShowThanks(false);

    try {
      const response: ApiResponse = await sendQuoteForm(formData);

      if (response.error) {
        const err = Object.values(response.error).flat();

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

        setMessage([
          "Thank you for contacting us! We will get back to you soon.",
        ]);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      setMessage(["An error occurred. Please try again later."]);
    } finally {
      setLoader(false);
      setShowThanks(true);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-white py-3 pl-11 pr-4 text-primary shadow-sm transition-all placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500";

  return (
    <div className="relative">
      <div className="mb-8 text-center">
        <h1 className="text-primary dark:text-white">Get a Quote</h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
          Tell us a little about your cleaning requirements and our team will
          get back to you shortly.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-tl-3xl rounded-tr-3xl border border-black/10 bg-white p-5 text-primary shadow-lg dark:border-white/10 dark:bg-darklight sm:p-8 lg:p-10">
        <form
          onSubmit={handleSubmit}
          className="grid w-full grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2"
        >
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium sm:text-base">
              <User className="h-5 w-5 text-cyan-500" />
              Name
            </label>

            <div className="relative">
              <User className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            {touched.name && formData.name && !validateName(formData.name) && (
              <span className="mt-1 block text-sm text-red-500">
                Name can only contain alphabets
              </span>
            )}
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium sm:text-base">
              <Mail className="h-5 w-5 text-cyan-500" />
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email address"
                className={inputClass}
              />
            </div>

            {touched.email &&
              formData.email &&
              !validateEmail(formData.email) && (
                <span className="mt-1 block text-sm text-red-500">
                  Invalid email format
                </span>
              )}
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium sm:text-base">
              <Phone className="h-5 w-5 text-cyan-500" />
              Phone
            </label>

            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your phone number"
                className={inputClass}
              />
            </div>

            {touched.phone &&
              formData.phone &&
              !validatePhone(formData.phone) && (
                <span className="mt-1 block text-sm text-red-500">
                  Phone must be 10 or 11 digits
                </span>
              )}
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium sm:text-base">
              <MapPin className="h-5 w-5 text-cyan-500" />
              Address
            </label>

            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Cleaning address"
                className={inputClass}
              />
            </div>

            {touched.address && formData.address === "" && (
              <span className="mt-1 block text-sm text-red-500">
                Address cannot be empty
              </span>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 flex items-center gap-2 text-sm font-medium sm:text-base">
              <MessageSquare className="h-5 w-5 text-cyan-500" />
              Description of Cleaning Requirements
            </label>

            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-4 h-5 w-5 text-gray-400" />

              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about your cleaning requirements..."
                rows={5}
                className={`${inputClass} resize-none pl-11`}
              />
            </div>

            {touched.comments && formData.comments === "" && (
              <span className="mt-1 block text-sm text-red-500">
                Comments cannot be empty
              </span>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={!isFormValid || loader}
              className={`w-full rounded-xl py-3.5 font-semibold text-white transition-all duration-300 sm:w-auto sm:min-w-[200px] ${
                !isFormValid || loader
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20"
              }`}
            >
              {loader ? "Submitting..." : "Request a Quote"}
            </button>
          </div>

          {showThanks && (
            <div className="md:col-span-2">
              <div className="rounded-xl bg-cyan-500 p-4 text-center text-sm font-medium text-white">
                {message.map((msg, index) => (
                  <p key={index}>{msg}</p>
                ))}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Quote;
