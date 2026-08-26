"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useNewsletter } from "../../context/NewsletterContext";
import { sendMarketingEmail } from "../../utils/apiCalls";

export default function NewsletterPopup() {
  const { isVisible, hideNewsletter } = useNewsletter();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isVisible) {
    return null;
  }

  const handleClose = () => {
    hideNewsletter();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || isSubmitting) return;

    try {
      setIsSubmitting(true);
      setMessage("");

      const response = await sendMarketingEmail(email.trim());

      setSuccess(response.success);
      setMessage(response.message);

      if (response.success) {
        setTimeout(() => {
          hideNewsletter();
        }, 3500);
      }
    } catch (error) {
      setSuccess(false);
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/30 p-4 sm:items-center">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl dark:bg-darkmode">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close newsletter popup"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white"
        >
          <Icon icon="tabler:x" width={20} height={20} />
        </button>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Icon
              icon="tabler:mail"
              width={28}
              height={28}
              className="text-primary"
            />
          </div>

          <h2 className="mt-5 pr-10 text-2xl font-bold text-gray-900 dark:text-white">
            Subscribe to Our Newsletter
          </h2>

          <p className="mt-2 leading-6 text-gray-600 dark:text-gray-300">
            Stay up to date with the latest news, cleaning tips, updates and
            offers from NCC Cleaning Service.
          </p>

          {message && (
            <div
              className={`mt-6 flex items-center gap-2 rounded-lg p-4 ${
                success
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              <Icon
                icon={
                  success
                    ? "tabler:circle-check"
                    : "tabler:alert-circle"
                }
                width={22}
                height={22}
              />

              <span>{message}</span>
            </div>
          )}

          {!success && (
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                  className="min-h-[50px] flex-1 rounded-lg border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-darkmode dark:text-white"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[50px] rounded-lg bg-primary px-6 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </form>
          )}

          <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
            By subscribing, you agree to receive newsletters from NCC Cleaning
            Service. You can unsubscribe at any time.{" "}
            <a href="/privacy-policy" className="text-primary underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
