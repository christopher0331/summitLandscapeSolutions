import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-600">
        The page you requested does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
