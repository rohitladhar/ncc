import React, { useState, useEffect } from "react";
import { sendCareerForm } from "@/app/utils/apiCalls";
import Image from "next/image";
import { useTheme } from "next-themes";

const CareerModal = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [message, setMessage] = useState([]);
  const [fileError, setFileError] = useState(""); // To store file validation error

  // Error states for individual fields and track if they have been touched
  const [errors, setErrors] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    address: false,
    email: false,
    phone: false,
    comments: false,
  });

  // Validate each field individually
  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validateEmail = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10,11}$/.test(phone);
  const validateAddress = (address) => address.trim() !== "";
  const validateComments = (comments) => comments.trim() !== "";

  // Handle form validation and set error messages
  const validateForm = () => {
    let formErrors = {};
    formErrors.name = validateName(formData.name)
      ? ""
      : "Name is required and should only contain letters and spaces.";
    formErrors.email = validateEmail(formData.email)
      ? ""
      : "Please enter a valid email address.";
    formErrors.phone = validatePhone(formData.phone)
      ? ""
      : "Phone number should be 10-11 digits.";
    formErrors.address = validateAddress(formData.address)
      ? ""
      : "Address is required.";
    formErrors.comments = validateComments(formData.comments)
      ? ""
      : "Comments cannot be empty.";

    setErrors(formErrors);

    const isValid = Object.values(formErrors).every((error) => error === "");
    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm();
  }, [formData]);
  const handleFileChange = (e) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const formdata = new FormData();
      formdata.append("name", formData.name);
      formdata.append("address", formData.address);
      formdata.append("email", formData.email);
      formdata.append("phone", formData.phone);
      formdata.append("comments", formData.comments);
      formdata.append("resume", resumeFile || new Blob());
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex-1">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name"
            className="w-full px-4 py-2 rounded-lg"
          />
          {touched.name && errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}{" "}
        </div>

        <div className="flex-1">
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Address"
            className="w-full px-4 py-2 rounded-lg"
          />
          {touched.address && errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}{" "}
        </div>
      </div>
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex-1">
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg"
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}{" "}
        </div>

        <div className="flex-1">
          <input
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Phone Number"
            className="w-full px-4 py-2 rounded-lg"
          />
          {touched.phone && errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}{" "}
        </div>
      </div>
      <div>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Comments"
          rows={4}
          className="w-full px-4 py-3 rounded-lg"
        />
        {touched.comments && errors.comments && (
          <p className="text-red-500 text-sm">{errors.comments}</p>
        )}{" "}
        {/* Error message for comments */}
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
      <button
        type="submit"
        disabled={isButtonDisabled}
        className={`w-full py-3 rounded-lg text-white font-medium transition ${isButtonDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-cyan-500"}`}
      >
        {loader ? "Submitting..." : "Submit"}
      </button>
      {showThanks && (
        <div className="mt-4 text-center text-white bg-cyan-500 rounded-lg p-2">
          {message.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      )}
    </form>
  );
};

export default CareerModal;
