"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  User,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Upload,
  FileText,
} from "lucide-react";
import { sendCareerForm } from "@/app/utils/apiCalls";
import { FormDataType, ErrorsType, TouchedType } from "../types/specialize";

const CareerModal: React.FC = () => {
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

    if (!file) return;

    if (file.size > 1 * 1024 * 1024) {
      setFileError("File size should not exceed 1MB.");
      setResumeFile(null);
      return;
    }

    setFileError("");
    setResumeFile(file);
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
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    setShowThanks(false);

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

      setMessage([
        "An error occurred while submitting the form. Please try again later.",
      ]);
    } finally {
      setLoader(false);
      setShowThanks(true);
    }
  };

  const isButtonDisabled = !isFormValid || loader || !resumeFile;

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-white py-3 pl-11 pr-4 text-primary shadow-sm transition-all placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500";

  return (
    <div className="relative">
      <div className="mb-8 text-center">
        <h1 className="text-primary dark:text-white">Career</h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
          Interested in joining our team? Fill out the form below and upload
          your CV to apply.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-tl-3xl rounded-tr-3xl border border-black/10 bg-white p-5 text-primary shadow-lg dark:border-white/10 dark:bg-darklight sm:p-8 lg:p-10">
        <form
          onSubmit={handleSubmit}
          className="grid w-full grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 flex items-center gap-2 text-sm font-medium sm:text-base"
            >
              <User className="h-5 w-5 text-cyan-500" />
              Name
            </label>

            <div className="relative">
              <User className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            {touched.name && errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 flex items-center gap-2 text-sm font-medium sm:text-base"
            >
              <Mail className="h-5 w-5 text-cyan-500" />
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email address"
                className={inputClass}
              />
            </div>

            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 flex items-center gap-2 text-sm font-medium sm:text-base"
            >
              <Phone className="h-5 w-5 text-cyan-500" />
              Phone
            </label>

            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your phone number"
                className={inputClass}
              />
            </div>

            {touched.phone && errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="address"
              className="mb-2 flex items-center gap-2 text-sm font-medium sm:text-base"
            >
              <MapPin className="h-5 w-5 text-cyan-500" />
              Address
            </label>

            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your address"
                className={inputClass}
              />
            </div>

            {touched.address && errors.address && (
              <p className="mt-1 text-sm text-red-500">{errors.address}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="comments"
              className="mb-2 flex items-center gap-2 text-sm font-medium sm:text-base"
            >
              <MessageSquare className="h-5 w-5 text-cyan-500" />
              Additional
            </label>

            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-4 h-5 w-5 text-gray-400" />

              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us why you would like to join our team..."
                rows={5}
                className={`${inputClass} resize-none pl-11`}
              />
            </div>

            {touched.comments && errors.comments && (
              <p className="mt-1 text-sm text-red-500">{errors.comments}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="file-upload"
              className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-6 text-center transition-all hover:border-cyan-400 hover:bg-cyan-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/5"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                <Upload className="h-6 w-6" />
              </div>

              <span className="text-sm font-semibold text-primary dark:text-white sm:text-base">
                Upload your CV
              </span>

              <span className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                PDF, DOCX, JPG, JPEG or PNG · Maximum 1MB
              </span>

              <span className="mt-3 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition-colors group-hover:bg-cyan-600">
                Choose File
              </span>
            </label>

            <input
              id="file-upload"
              type="file"
              accept=".pdf,.docx,.jpg,.jpeg,.png"
              className="hidden"
              onChange={handleFileChange}
            />

            {fileError && (
              <p className="mt-2 text-sm text-red-500">{fileError}</p>
            )}

            {resumeFile && (
              <div className="mt-3 flex items-center gap-3 rounded-xl border border-cyan-200 bg-cyan-50 p-3 dark:border-cyan-500/20 dark:bg-cyan-500/5">
                <FileText className="h-5 w-5 shrink-0 text-cyan-500" />

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-primary dark:text-white">
                    {resumeFile.name}
                  </p>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    CV uploaded successfully
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full rounded-xl py-3.5 font-semibold text-white transition-all duration-300 sm:w-auto sm:min-w-[200px] ${
                isButtonDisabled
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20"
              }`}
            >
              {loader ? "Submitting..." : "Submit "}
            </button>

            {!resumeFile && !fileError && (
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Please upload your CV before submitting.
              </p>
            )}
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

export default CareerModal;
