"use client";

import React from "react";

/* ---------------- DATA ---------------- */
const departments = [
  "Product Strategy & Leadership",
  "Full Stack Engineering",
  "Frontend Engineering",
  "Backend Architecture",
  "UI/UX Design System",
  "Motion & Brand Design",
  "Growth & Marketing",
  "Performance Advertising",
  "Content & Video Production",
  "Automation & Scraping Systems",
  "API Integration Engineering",
  "DevOps & Infrastructure",
  "QA & Testing Systems",
  "Client Success & Delivery",
  "Business Development",
];

/* ---------------- PAGE ---------------- */
const TeamPage = () => {
  return (
    <section className="bg-white text-gray-900 py-28 px-6 lg:px-24">

      {/* ================= SECTION 1: HERO ================= */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
          Company Overview
        </p>

        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
          Built like a real{" "}
          <span className="text-blue-600">product engineering company</span>
        </h1>

        <p className="mt-5 text-gray-600 text-lg leading-relaxed">
          We are a structured digital studio focused on scalable SaaS systems,
          automation tools, and high-performance web platforms.
        </p>
      </div>

      {/* ================= SECTION 2: HOW WE WORK ================= */}
      <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-xl font-semibold">How we operate</h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Every project is handled by a dedicated cross-functional team.
            We follow a product-engineering approach where design, development,
            and growth are integrated from day one.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["System-driven", "Scalable", "Execution-focused"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-gray-50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
          <h3 className="text-sm font-semibold text-blue-600">
            Delivery Framework
          </h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>• Agile product development cycle</li>
            <li>• Scalable system architecture</li>
            <li>• Continuous deployment workflow</li>
            <li>• Conversion-driven UI/UX system</li>
            <li>• Performance-first engineering</li>
          </ul>
        </div>
      </div>

      {/* ================= SECTION 3: DEPARTMENTS ================= */}
      <div className="max-w-6xl mx-auto mt-28">

        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            Dedicated Teams & Departments
          </h2>

          <p className="text-gray-600 mt-3">
            Specialized units working together as a single engineering system
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">

          {departments.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-5 bg-white hover:border-blue-300 hover:shadow-md transition"
            >
              <p className="text-sm font-medium text-gray-800">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* ================= SECTION 4: FINAL CTA ================= */}
      <div className="max-w-3xl mx-auto text-center mt-28">

        <h2 className="text-3xl md:text-4xl font-semibold">
          A structured team built for scalable products
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          We don’t work like freelancers — we operate like a product company
          with engineering discipline and execution systems.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="px-7 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition">
            Start Your Project
          </button>
        </div>
      </div>

    </section>
  );
};

export default TeamPage;