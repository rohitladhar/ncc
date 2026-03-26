"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { sendCareerForm } from "@/app/utils/apiCalls";
import Image from "next/image";
import { useTheme } from "next-themes";
type FormDataType = {
  name: string;
  address: string;
  email: string;
  phone: string;
  comments: string;
};

type ErrorsType = FormDataType;

type TouchedType = {
  [K in keyof FormDataType]: boolean;
};

const CareerModal: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    address: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [showThanks, setShowThanks] = useState<boolean>(false);
  const [message, setMessage] = useState<string[]>([]);
  const [fileError, setFileError] = useState<string>("");

  const [errors, setErrors] = useState<ErrorsType>({
    name: "",
    address: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [touched, setTouched] = useState<TouchedType>({
    name: false,
    address: false,
    email: false,
    phone: false,
    comments: false,
  });

  const validateName = (name: string) => /^[A-Za-z\s]+$/.test(name);

  const validateEmail = (email: string) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  const validatePhone = (phone: string) => /^[0-9]{10,11}$/.test(phone);

  const validateAddress = (address: string) => address.trim() !== "";

  const validateComments = (comments: string) => comments.trim() !== "";

  const validateForm = () => {
    const formErrors: ErrorsType = {
      name: validateName(formData.name)
        ? ""
        : "Name is required and should only contain letters and spaces.",
      email: validateEmail(formData.email)
        ? ""
        : "Please enter a valid email address.",
      phone: validatePhone(formData.phone)
        ? ""
        : "Phone number should be 10-11 digits.",
      address: validateAddress(formData.address) ? "" : "Address is required.",
      comments: validateComments(formData.comments)
        ? ""
        : "Comments cannot be empty.",
    };

    setErrors(formErrors);

    const isValid = Object.values(formErrors).every((error) => error === "");
    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 1 * 1024 * 1024) {
        setFileError("File size should not exceed 1MB.");
        setResumeFile(null);
      } else {
        setFileError("");
        setResumeFile(file);
      }
    }
  };

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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    try {
      const formdata = new FormData();

      formdata.append("name", formData.name);
      formdata.append("address", formData.address);
      formdata.append("email", formData.email);
      formdata.append("phone", formData.phone);
      formdata.append("comments", formData.comments);

      if (resumeFile) {
        formdata.append("resume", resumeFile);
      }

      await sendCareerForm(formdata);

      setFormData({
        name: "",
        address: "",
        email: "",
        phone: "",
        comments: "",
      });

      setTouched({
        name: false,
        address: false,
        email: false,
        phone: false,
        comments: false,
      });

      setErrors({
        name: "",
        address: "",
        email: "",
        phone: "",
        comments: "",
      });

      setFileError("");
      setResumeFile(null);

      setMessage([
        "Thank you for contacting us! We will get back to you soon.",
      ]);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoader(false);
      setShowThanks(true);
    }
  };

  const isButtonDisabled = !isFormValid || loader || !resumeFile;

  return (
    <section className="scroll-mt-12">
      <div className="container pt-10">
        <div className="relative">
          <h2 className="mb-9 text-center dark:text-white  text-primary">
            Career
          </h2>
          <div className="relative border px-6 py-2 rounded-lg border-black/20 dark:border-white/20 dark:text-white  text-primary">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="name" className="pb-3 inline-block text-base">
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Name"
                    className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}{" "}
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="address"
                    className="pb-3 inline-block text-base"
                  >
                    Address
                  </label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Address"
                    className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                  {touched.address && errors.address && (
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  )}{" "}
                </div>
              </div>
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="pb-3 inline-block text-base"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                    className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}{" "}
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="pb-3 inline-block text-base"
                  >
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="number"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Phone Number"
                    className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}{" "}
                </div>
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="pb-3 inline-block text-base"
                >
                  Comments
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Comments"
                  rows={4}
                  className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                />
                {touched.comments && errors.comments && (
                  <p className="text-red-500 text-sm">{errors.comments}</p>
                )}{" "}
              </div>
              <div className="flex items-center justify-start">
                <label
                  htmlFor="file-upload"
                  className="flex items-center gap-2 cursor-pointer p-2 rounded-lg"
                >
                  <Image
                    src={`/images/${theme === "dark" ? "cleaning/file-white.png" : "cleaning/file.png"}`}
                    alt="Upload"
                    width={50}
                    height={50}
                  />
                  <span className="text-sm">
                    Upload CV (Max 1MB) Allowed PNG, Docx, PDF
                  </span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.docx,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              {fileError && <p className="text-red-500 text-sm">{fileError}</p>}{" "}
              {resumeFile && (
                <p className="mt-2 text-sm text-black dark:text-white">
                  Uploaded File: {resumeFile.name}
                </p>
              )}
              <div className="mx-0 my-2.5 w-full">
                <button
                  type="submit"
                  disabled={isButtonDisabled}
                  className={`w-24 py-3 rounded-lg text-white font-medium transition ${isButtonDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-cyan-500"}`}
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
      </div>
    </section>
  );
};

export default CareerModal;
