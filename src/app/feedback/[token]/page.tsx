import FeedbackForm from "./FeedbackForm";
export default function Feedback() {
  return (
    <section className="scroll-mt-16 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-10">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </section>
  );
}
