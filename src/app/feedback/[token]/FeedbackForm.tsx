"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  CheckCircle2,
  Loader2,
  MessageSquare,
  Send,
  Star,
  X,
} from "lucide-react";

import {
  getFeedbackToken,
  updateFeedbackToken,
} from "@/app/utils/apiCalls";

export default function FeedbackPage() {
  const params = useParams<{ token: string }>();
  const token = params?.token;

  const [loading, setLoading] = useState(true);
  const [validToken, setValidToken] = useState(false);

  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setValidToken(false);
      setMessage("This feedback link is invalid or expired.");
      return;
    }

    const verifyToken = async () => {
      setLoading(true);

      try {
        const response = await getFeedbackToken(token);

        /*
         * API should return:
         *
         * {
         *   success: true,
         *   data: {...}
         * }
         */

        if (response?.success === false) {
          setValidToken(false);
          setMessage(
            response?.message ||
              "This feedback link is invalid or expired."
          );
          return;
        }

        setValidToken(true);
        setMessage("");
      } catch (error: any) {
        /*
         * Do NOT throw the error.
         *
         * Invalid / expired / used links are expected
         * states for this page, so simply display the
         * message to the user.
         */
        setValidToken(false);

        setMessage(
          error?.data?.message ||
            error?.message ||
            "This feedback link is invalid or expired."
        );
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!rating) {
      setMessage("Please select a rating.");
      return;
    }

    if (!token) {
      setMessage("This feedback link is invalid or expired.");
      return;
    }

    try {
      setSubmitting(true);
      setMessage("");

      const response = await updateFeedbackToken(token, {
        rating,
        comments,
      });

      /*
       * If Laravel returns success:false,
       * display the message instead of throwing.
       */
      if (response?.success === false) {
        setMessage(
          response?.message ||
            "Unable to submit your feedback."
        );
        return;
      }

      setSubmitted(true);
    } catch (error: any) {
      /*
       * Expected API responses such as:
       *
       * 404 Invalid feedback link
       * 410 Already used
       * 410 Expired
       *
       * are displayed normally.
       */
      setMessage(
        error?.data?.message ||
          error?.message ||
          "Unable to submit your feedback. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /*
   * Loading state
   */
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50">
            <Loader2 className="h-7 w-7 animate-spin text-cyan-600" />
          </div>

          <h2 className="text-lg font-semibold text-slate-900">
            Checking feedback link
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Please wait a moment...
          </p>
        </div>
      </main>
    );
  }

  /*
   * Successfully submitted
   */
  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
        <div className="w-full max-w-md rounded-3xl bg-white px-6 py-10 text-center shadow-lg shadow-slate-200/60 sm:px-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 className="h-11 w-11 text-emerald-500" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Thank You!
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">
            Your feedback has been submitted successfully.
            We really appreciate you taking the time to share
            your experience with us.
          </p>
        </div>
      </main>
    );
  }

  /*
   * Invalid / expired / used token
   *
   * This is NOT treated as a technical error.
   * We simply show the message.
   */
  if (!validToken) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
        <div className="w-full max-w-md rounded-3xl bg-white px-6 py-10 text-center shadow-lg shadow-slate-200/60 sm:px-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-50">
            <X className="h-10 w-10 text-amber-500" />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-slate-900">
            Feedback Link Unavailable
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {message ||
              "This feedback link is invalid or expired."}
          </p>
        </div>
      </main>
    );
  }

  /*
   * Valid feedback form
   */
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/20">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We Value Your Feedback
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Your experience matters to us. Please take a moment
            to tell us how we did.
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/70">
          <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Share Your Experience
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your feedback helps us continue improving our
              service.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 px-6 py-7 sm:px-8 sm:py-9"
          >
            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-slate-800">
                How would you rate your experience?
              </label>

              <p className="mt-1 text-sm text-slate-500">
                Select a rating from 1 to 5 stars.
              </p>

              <div className="mt-5 flex items-center gap-2 sm:gap-3">
                {[1, 2, 3, 4, 5].map((star) => {
                  const active = star <= rating;

                  return (
                    <button
                      key={star}
                      type="button"
                      onClick={() => {
                        setRating(star);
                        setMessage("");
                      }}
                      className={`group flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-200 ${
                        active
                          ? "border-yellow-200 bg-yellow-50"
                          : "border-slate-200 bg-white hover:border-yellow-200 hover:bg-yellow-50"
                      }`}
                      aria-label={`Rate ${star} out of 5`}
                      aria-pressed={active}
                    >
                      <Star
                        className={`h-7 w-7 transition-transform group-hover:scale-110 ${
                          active
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {rating > 0 && (
                <p className="mt-3 text-sm font-medium text-slate-600">
                  {rating === 1 && "Very poor"}
                  {rating === 2 && "Poor"}
                  {rating === 3 && "Average"}
                  {rating === 4 && "Good"}
                  {rating === 5 && "Excellent"}
                </p>
              )}
            </div>

            {/* Comments */}
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-semibold text-slate-800"
              >
                Additional comments
              </label>

              <p className="mt-1 text-sm text-slate-500">
                Tell us more about your experience.
              </p>

              <div className="mt-4">
                <textarea
                  id="comments"
                  name="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={6}
                  maxLength={5000}
                  placeholder="Please share your feedback..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />

                <div className="mt-2 flex justify-end">
                  <span className="text-xs text-slate-400">
                    {comments.length}/5000
                  </span>
                </div>
              </div>
            </div>

            {/* Message */}
            {message && (
              <div className="flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-4 text-sm text-red-700">
                <X className="mt-0.5 h-5 w-5 shrink-0" />

                <p>{message}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600 hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Submit Feedback
                </>
              )}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Thank you for helping us improve our service.
        </p>
      </div>
    </main>
  );
}