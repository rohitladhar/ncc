import React, { useState, useEffect } from "react";
import { sendQuoteForm } from "@/app/utils/apiCalls";

const QuoteModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [loader, setLoader] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [message, setMessage] = useState([]);
  const [touched, setTouched] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10,11}$/.test(phone);
  const validateAddress = (address) => address.trim() !== "";
  const validateComments = (comments) => comments.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const response = await sendQuoteForm(formData);

      if (response.error) {
        let err = Object.values(response.error).flat();
        setMessage(err.length ? err : ["An unexpected error occurred. Please try again."]);
      } else {
        setFormData({ name: "", email: "", phone: "", address: "", comments: "" });
        setMessage(["Thank you for contacting us! We will get back to you soon."]);
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
          {touched.name && formData.name && !validateName(formData.name) && (
            <span className="text-red-500 text-sm">Name can only contain alphabets</span>
          )}
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
          {touched.address && formData.address === "" && (
            <span className="text-red-500 text-sm">Address cannot be empty</span>
          )}
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
          {touched.email && formData.email && !validateEmail(formData.email) && (
            <span className="text-red-500 text-sm">Invalid email format</span>
          )}
        </div>

        <div className="flex-1">
          <input
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Phone Number"
            className="w-full px-4 py-2 rounded-lg"
          />
          {touched.phone && formData.phone && !validatePhone(formData.phone) && (
            <span className="text-red-500 text-sm">Phone must be 10 or 11 digits</span>
          )}
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
        ></textarea>
        {touched.comments && formData.comments === "" && (
          <span className="text-red-500 text-sm">Comments cannot be empty</span>
        )}
      </div>

      <button
        type="submit"
        disabled={!isFormValid || loader}
        className={`w-full py-3 rounded-lg text-white font-medium transition ${
          !isFormValid || loader
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-cyan-500"
        }`}
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

export default QuoteModal;
