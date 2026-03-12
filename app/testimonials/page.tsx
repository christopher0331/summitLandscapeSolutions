import type { Metadata } from "next";

const testimonials = [
  {
    quote:
      "The team transformed our backyard in Ballard and made the whole process simple from start to finish.",
    author: "A. Jensen",
  },
  {
    quote:
      "We hired Summit Landscape for ongoing maintenance at our office in Queen Anne. They are always reliable.",
    author: "C. Patel",
  },
  {
    quote:
      "Excellent communication, fair pricing, and the final result exceeded our expectations.",
    author: "M. Rodriguez",
  },
];

export const metadata: Metadata = {
  title: "Testimonials | Summit Landscape Seattle",
  description:
    "Read client testimonials from landscaping projects completed in Seattle neighborhoods.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Testimonials</h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-600">
        Social proof is one of the strongest conversion tools for local service businesses.
        Replace these with real customer reviews.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700"
          >
            <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 font-semibold text-slate-900">{testimonial.author}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
