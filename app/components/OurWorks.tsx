"use client";

import React from "react";

/* ---------------- DATA ---------------- */

const steps = [
  {
    n: "01",
    title: "Understand Problem",
    points: "Business model • User pain • Goal clarity",
    result: "We define what actually needs to be solved",
  },
  {
    n: "02",
    title: "System Planning",
    points: "UI flow • Backend • Features • Logic",
    result: "We convert idea into structured system",
  },
  {
    n: "03",
    title: "UI Strategy",
    points: "User behavior • Conversion • Simplicity",
    result: "We design for clarity & action",
  },
  {
    n: "04",
    title: "Development",
    points: "Scalable code • Performance • Best practices",
    result: "We build production-ready product",
  },
  {
    n: "05",
    title: "Testing",
    points: "Speed • Mobile • UX flow • Bug-free",
    result: "We ensure smooth real-world usage",
  },
  {
    n: "06",
    title: "Launch & Growth",
    points: "Optimization • Scaling • Support",
    result: "We help improve performance after launch",
  },
];

/* ---------------- COMPONENT ---------------- */

const OurWorks = () => {
  return (
    <section className="w-full bg-white text-black py-20 px-6 lg:px-20">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-blue-600 font-medium">
          Our Process
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mt-3">
          From idea → system → product
        </h2>

        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Clear, structured workflow focused on solving real business problems.
        </p>

      </div>

      {/* COMPACT TIMELINE */}
      <div className="max-w-4xl mx-auto mt-14 space-y-4">

        {steps.map((s, i) => (
          <div
            key={i}
            className="flex gap-5 p-4 rounded-xl border border-gray-200 bg-white hover:border-blue-300 transition"
          >

            {/* NUMBER */}
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
              {s.n}
            </div>

            {/* CONTENT */}
            <div className="flex-1">

              {/* TOP ROW */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">

                <h3 className="text-sm md:text-base font-semibold">
                  {s.title}
                </h3>

                <span className="text-xs text-gray-500">
                  {s.points}
                </span>

              </div>

              {/* RESULT */}
              <p className="text-xs md:text-sm text-blue-600 mt-1 font-medium">
                {s.result}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* FINAL LINE */}
      <div className="max-w-2xl mx-auto text-center mt-12">

        <p className="text-xs md:text-sm text-gray-500">
          We don’t just execute tasks — we structure solutions that scale.
        </p>

      </div>

    </section>
  );
};

export default OurWorks;