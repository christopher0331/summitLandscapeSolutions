import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Summit Landscape Seattle",
  description:
    "Privacy policy for Summit Landscape Seattle website visitors and prospective customers.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
      <p className="mt-6 text-slate-600">
        This template explains how Summit Landscape Seattle may collect, use, and store
        information submitted through this website.
      </p>

      <div className="mt-10 space-y-8 text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Information We Collect</h2>
          <p className="mt-2">
            We may collect your name, phone number, email address, and project details when
            you request a quote or contact us.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">How We Use Information</h2>
          <p className="mt-2">
            Information is used to respond to inquiries, provide estimates, and improve our
            services. We do not sell personal data.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Data Retention</h2>
          <p className="mt-2">
            We keep submitted information only as long as needed for business and legal
            purposes.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            For privacy questions, contact us at jamarrhenaifesh@summitlandscapesolutions.co.
          </p>
        </section>
      </div>
    </div>
  );
}
