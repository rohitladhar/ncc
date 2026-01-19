"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
type BasicModalProps = {
  open: boolean;
  onClose: () => void;
  flag?: boolean;
};
export const getImgPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!basePath) {
    return path;
  }

  if (path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path}`;
};

const BasicModal: React.FC<BasicModalProps> = ({ open, onClose, flag }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phnumber: "",
    message: "",
  });

  const [showThanks, setShowThanks] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form
  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phnumber: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    try {
      const response = await fetch("#", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        setShowThanks(true);
        resetForm();
        setTimeout(() => setShowThanks(false), 5000);
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoader(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/80 p-4 transition-colors">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto rounded-xl shadow-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-t-xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {flag === false ? " Get a Free Quote" : "Career"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition"
          >
            ✕
          </button>
        </div>

        <div className="px-5 py-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4 flex-col sm:flex-row">
              <input
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="flex-1 px-4 py-2 rounded-lg border border-black/20 dark:border-white/20 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition"
              />
              <input
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="flex-1 px-4 py-2 rounded-lg border border-black/20 dark:border-white/20 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition"
              />
            </div>

            <div className="flex gap-4 flex-col sm:flex-row">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="flex-1 px-4 py-2 rounded-lg border border-black/20 dark:border-white/20 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition"
              />
              <input
                name="phnumber"
                type="tel"
                value={formData.phnumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="flex-1 px-4 py-2 rounded-lg border border-black/20 dark:border-white/20 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Comments"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-black/20 dark:border-white/20 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition"
            ></textarea>
            {flag === true ? (
              <div className="flex items-center justify-start">
                <label
                  htmlFor="file-upload"
                  className="flex items-center gap-2 cursor-pointer p-2 rounded-lg transition"
                >
                  <Image
                    src={getImgPath(
                      theme === "dark"
                        ? "/images/cleaning/file-white.png"
                        : "/images/cleaning/file.png"
                    )}
                    alt="Upload"
                    width={50}
                    height={50}
                    className="object-contain"
                  />

                  <span className="text-sm dark:text-white text-gray-800">
                    Upload CV (Max 1MB) Allowed PNG, Docx, PDF
                  </span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    console.log(file);
                  }}
                />
              </div>
            ) : (
              ""
            )}
            <button
              type="submit"
              disabled={!isFormValid || loader}
              className={`w-full py-3 rounded-lg text-white font-medium transition ${
                !isFormValid || loader
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500"
              }`}
            >
              {loader ? "Submitting..." : "Submit"}
            </button>
          </form>

          {showThanks && (
            <div className="mt-4 text-center text-white bg-cyan-500 dark:bg-cyan-600 rounded-lg p-2 animate-pulse">
              Thank you! We will get back to you soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
