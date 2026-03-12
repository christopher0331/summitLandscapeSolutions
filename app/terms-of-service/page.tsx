import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Summit Landscape Seattle",
  description:
    "Terms of service for using the Summit Landscape Seattle website and requesting services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
      <p className="mt-6 text-slate-600">
        These terms are a placeholder and should be reviewed by legal counsel before launch.
      </p>

      <div className="mt-10 space-y-8 text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Website Use</h2>
          <p className="mt-2">
            By using this site, you agree to provide accurate information and use the content
            for lawful purposes only.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Estimates and Services</h2>
          <p className="mt-2">
            Project estimates are based on the information available at time of inspection and
            may change if scope or site conditions change.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Limitation of Liability</h2>
          <p className="mt-2">
            Summit Landscape Seattle is not liable for indirect or incidental damages related to
            website use.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to hello@summitlandscape.com.
          </p>
        </section>
      </div>
    </div>
  );
}
