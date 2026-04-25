"use client";
import React, {
  useState,
  useEffect,
  ChangeEvent,
  FocusEvent,
  FormEvent,
} from "react";
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

  return (
    <div className="relative">
      <h1 className="mb-9 text-center dark:text-white text-primary">
        Quote
      </h1>

      <div className="relative border px-6 py-2 rounded-lg border-black/20 dark:border-white/20 dark:text-white text-primary">
        <form onSubmit={handleSubmit} className="flex flex-wrap w-full m-auto justify-between">

          <div className="w-full">
            <label className="pb-3 inline-block text-base">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              className="w-full px-4 py-2.5 rounded-lg border border-black/20 dark:border-white/20 focus:border-primary focus:outline-none"
            />
            {touched.name &&
              formData.name &&
              !validateName(formData.name) && (
                <span className="text-red-500 text-sm">
                  Name can only contain alphabets
                </span>
              )}
          </div>

          <div className="w-full">
            <label className="pb-3 inline-block text-base">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Address"
              className="w-full px-4 py-2.5 rounded-lg border border-black/20 dark:border-white/20 focus:border-primary focus:outline-none"
            />
            {touched.address && formData.address === "" && (
              <span className="text-red-500 text-sm">
                Address cannot be empty
              </span>
            )}
          </div>


          <div className="w-full">
            <label className="pb-3 inline-block text-base">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              className="w-full px-4 py-2.5 rounded-lg border border-black/20 dark:border-white/20 focus:border-primary focus:outline-none"
            />
            {touched.email &&
              formData.email &&
              !validateEmail(formData.email) && (
                <span className="text-red-500 text-sm">
                  Invalid email format
                </span>
              )}
          </div>

          <div className="w-full">
            <label className="pb-3 inline-block text-base">Phone</label>
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Phone Number"
              className="w-full px-4 py-2.5 rounded-lg border border-black/20 dark:border-white/20 focus:border-primary focus:outline-none"
            />
            {touched.phone &&
              formData.phone &&
              !validatePhone(formData.phone) && (
                <span className="text-red-500 text-sm">
                  Phone must be 10 or 11 digits
                </span>
              )}
          </div>

          <div className="w-full">
            <label className="pb-3 inline-block text-base">Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Comments"
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg border border-black/20 dark:border-white/20 focus:border-primary focus:outline-none"
            />
            {touched.comments && formData.comments === "" && (
              <span className="text-red-500 text-sm">
                Comments cannot be empty
              </span>
            )}
          </div>

          <div className="mx-0 my-2.5 w-full">
            <button
              type="submit"
              disabled={!isFormValid || loader}
              className={`w-full py-3 rounded-lg text-white font-medium ${
                !isFormValid || loader
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-cyan-500"
              }`}
            >
              {loader ? "Submitting..." : "Submit"}
            </button>
          </div>

          {showThanks && (
            <div className="mt-4 text-center text-white bg-cyan-500 rounded-lg p-2">
              {message.map((msg, index) => (
                <p key={index}>{msg}</p>
              ))}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Quote;