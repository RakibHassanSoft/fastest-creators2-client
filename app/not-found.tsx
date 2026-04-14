"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 relative">

      {/* soft glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-50 blur-3xl rounded-full opacity-60" />
      </div>

      <div className="text-center max-w-md relative">

        <h1 className="text-7xl font-semibold text-blue-600 tracking-tight">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-black">
          Page not found
        </h2>

        <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">

          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            <Home size={16} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-300 text-sm font-medium text-black hover:bg-neutral-50 transition"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>

        </div>

        <p className="mt-10 text-xs text-neutral-400">
          Error code: NOT_FOUND
        </p>

      </div>
    </section>
  );
}