"use client";
import { useEffect, useState } from "react";
import { MessageSquare, Quote, Star } from "lucide-react";
import { allClientFeedback } from "@/app/utils/apiCalls";
type FeedbackItem = {
  name?: string | null;
  designation?: string | null;
  rating?: number | null;
  comments?: string | null;
};

const MAX_WORDS = 100;
const MARQUEE_THRESHOLD = 3;

const Feedback = () => {
  const [feedback, setFeedback] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await allClientFeedback();

        const data = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : [];

        setFeedback(data);
      } catch (error) {
        console.error("Error fetching client feedback:", error);
        setFeedback([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  if (loading || !feedback.length) {
    return null;
  }

  const isMarqueeEnabled = feedback.length > MARQUEE_THRESHOLD;

  const limitWords = (text?: string | null) => {
    const fallback =
      "Professional service, excellent communication and consistently high standards.";

    if (!text?.trim()) {
      return fallback;
    }

    const cleanText = text.trim();
    const words = cleanText.split(/\s+/);

    if (words.length <= MAX_WORDS) {
      return cleanText;
    }

    return words.slice(0, MAX_WORDS).join(" ") + "…";
  };

  const getInitials = (name?: string | null) => {
    if (!name?.trim()) {
      return "C";
    }

    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };

  const renderCard = (item: FeedbackItem, index: number, duplicate = false) => {
    const rating = Math.min(Math.max(Number(item.rating) || 0, 0), 5);

    return (
      <div
        key={`${duplicate ? "duplicate" : "original"}-${index}-${item.name || "client"}`}
        className="w-[310px] shrink-0 sm:w-[350px] lg:w-[380px]"
      >
        <article
          className="
            group
            relative
            flex
            h-[500px]
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-7
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#3cb6c6]/30
            hover:shadow-xl
          "
        >
          <span
            aria-hidden="true"
            className="
              absolute
              right-6
              top-4
              text-5xl
              font-black
              tracking-tight
              text-slate-100
              transition-colors
              duration-300
              group-hover:text-[#3cb6c6]/10
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div
            className="
              relative
              z-10
              flex
              items-start
              justify-between
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#3cb6c6]/10
                text-[#3cb6c6]
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <Quote className="h-5 w-5" />
            </div>

            <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className={
                    starIndex < rating
                      ? "h-5 w-5 fill-amber-400 text-amber-400"
                      : "h-5 w-5 text-slate-200"
                  }
                  strokeWidth={1.8}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-7 h-[280px] overflow-hidden">
            <p className="text-sm leading-7 text-slate-600">
              “{limitWords(item.comments)}”
            </p>
          </div>

          <div
            className="
              relative
              z-10
              mt-auto
              flex
              items-center
              gap-3
              pt-7
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-slate-950
                text-xs
                font-bold
                text-white
              "
            >
              {getInitials(item.name)}
            </div>

            <div className="min-w-0">
              <p
                className="
                  truncate
                  text-sm
                  font-bold
                  text-slate-900
                "
              >
                {item.name || "Client"}
              </p>

              {item.designation && (
                <p
                  className="
                    mt-0.5
                    truncate
                    text-xs
                    text-slate-400
                  "
                >
                  {item.designation}
                </p>
              )}
            </div>
          </div>

          <div
            className="
              relative
              z-10
              mt-5
              h-1
              w-8
              rounded-full
              bg-[#3cb6c6]
              transition-all
              duration-300
              group-hover:w-14
            "
          />
        </article>
      </div>
    );
  };

  return (
    <section
      className="
        mt-28
        overflow-hidden
        px-4
        sm:px-6
        lg:mt-36
        lg:px-8
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            flex
            flex-col
            justify-between
            gap-6
            sm:flex-row
            sm:items-end
          "
        >
          <div className="max-w-2xl">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#3cb6c6]/10
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#3cb6c6]
              "
            >
              <MessageSquare className="h-4 w-4" />
              Client Feedback
            </div>

            <h2
              className="
                mt-5
                text-3xl
                font-black
                text-slate-950
                sm:text-4xl
              "
            >
              What our clients say
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              Hear directly from the people and businesses who trust our
              cleaning teams to maintain their spaces.
            </p>
          </div>

          <div
            className="
              hidden
              shrink-0
              rounded-full
              border
              border-slate-200
              bg-white
              px-4
              py-2
              text-xs
              font-bold
              text-slate-500
              shadow-sm
              sm:block
            "
          >
            Client Experiences
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        {isMarqueeEnabled ? (
          <>
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-10
                w-10
                bg-gradient-to-r
                from-white
                via-white/80
                to-transparent
                sm:w-20
                lg:w-28
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                z-10
                w-10
                bg-gradient-to-l
                from-white
                via-white/80
                to-transparent
                sm:w-20
                lg:w-28
              "
            />

            <div
              className={`feedback-marquee ${
                isPaused ? "feedback-marquee-paused" : ""
              }`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="feedback-track">
                {feedback.map((item, index) => renderCard(item, index))}
              </div>

              <div className="feedback-track" aria-hidden="true">
                {feedback.map((item, index) => renderCard(item, index, true))}
              </div>
            </div>
          </>
        ) : (
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
              sm:gap-5
            "
          >
            {feedback.map((item, index) => renderCard(item, index))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Feedback;
