"use client";

import React from "react";

/* ---------------- ICON ---------------- */

const SparklesIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 2l1.5 6L19 10l-5.5 2L12 18l-1.5-6L5 10l5.5-2L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

/* ---------------- TEAM ---------------- */

const team = [
  {
    name: "Rakib Hassan",
    role: "Founder & Full Stack Developer",
    desc: "Leads architecture, system design, and product development.",
  },
  {
    name: "UI Designer",
    role: "UI/UX Designer",
    desc: "Crafts clean, conversion-driven and modern interfaces.",
  },
  {
    name: "Marketing Lead",
    role: "Digital Growth Strategist",
    desc: "Handles SEO, ads, funnels and acquisition systems.",
  },
  {
    name: "Video Editor",
    role: "Creative Media Specialist",
    desc: "Produces high-impact video ads and brand content.",
  },
  {
    name: "Automation Engineer",
    role: "Apify & Systems Developer",
    desc: "Builds scraping, automation and workflow systems.",
  },
  {
    name: "Brand Designer",
    role: "Visual Identity Designer",
    desc: "Creates logos, animations and full brand systems.",
  },
];

/* ---------------- PAGE ---------------- */

const TeamPage: React.FC = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-white via-blue-50/30 to-white text-black py-28 px-6 lg:px-24 overflow-hidden">

      {/* soft glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-160 h-160 bg-blue-200/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-120 h-120 bg-blue-100/40 blur-[120px] rounded-full" />
      </div>

      {/* HERO */}
      <div className="relative max-w-4xl mx-auto text-center">

        <p className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
          <SparklesIcon className="text-blue-600" />
          Meet Our Team
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
          The minds behind our{" "}
          <span className="text-blue-600">digital products</span>
        </h1>

        <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
          A multidisciplinary team of engineers, designers and marketers
          building scalable, high-performance digital experiences.
        </p>
      </div>

      {/* CULTURE */}
      <div className="relative max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Our Culture
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            We focus on performance, clarity, and long-term scalability.
            Every product is designed with attention to detail, clean code,
            and conversion-focused UX principles.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["Remote Team", "Fast Execution", "Quality First"].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-full shadow-sm hover:border-blue-300 transition"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-blue-600">
            What We Focus On
          </h3>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li>✔ Scalable system architecture</li>
            <li>✔ High-performance web apps</li>
            <li>✔ Conversion-focused UI/UX</li>
            <li>✔ Automation & integrations</li>
            <li>✔ Brand identity systems</li>
          </ul>
        </div>
      </div>

      {/* TEAM GRID */}
      <div className="relative max-w-6xl mx-auto mt-28">

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Meet the Team
          </h2>
          <p className="text-gray-600 mt-3">
            Specialists across engineering, design, and growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {team.map((member, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >

              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-blue-50 rounded-2xl blur-xl" />

              <div className="relative">

                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  {member.name.charAt(0)}
                </div>

                <h3 className="text-lg font-semibold mt-4 group-hover:text-blue-600 transition">
                  {member.name}
                </h3>

                <p className="text-sm text-blue-600 mt-1">
                  {member.role}
                </p>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {member.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="relative max-w-4xl mx-auto text-center mt-28">

        <h2 className="text-3xl md:text-4xl font-semibold">
          Build with a team that thinks like product engineers
        </h2>

        <p className="text-gray-600 mt-4 leading-relaxed">
          We don’t just build websites — we design scalable digital systems
          that grow with your business.
        </p>

      </div>

    </section>
  );
};

export default TeamPage;