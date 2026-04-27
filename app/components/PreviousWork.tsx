/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  ShieldCheck,
  Zap,
  Target,
  Briefcase,
  CheckCircle,
} from "lucide-react";


/* =========================
   CARD COMPONENT
========================= */
const WorkCard = ({ work, index }: { work: any; index: number }) => {
  const isOdd = (index + 1) % 2 !== 0;

  return (
    <div
      className="sticky top-[15vh] w-full h-80"
      style={{ zIndex: index + 1 }}
    >
      <div className="w-full h-full bg-white border border-gray-200 overflow-hidden flex flex-col md:flex-row group shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl">

        {/* LEFT PANEL */}
        <div
          className={`w-full md:w-1/3 p-8 flex flex-col justify-between relative ${
            isOdd ? "bg-gray-950 text-white" : "bg-blue-600 text-white"
          }`}
        >
          {/* subtle overlay */}
          <div className="absolute inset-0 opacity-10 bg-linear-to-br from-white/10 to-transparent" />

          <div className="relative z-10 space-y-6">

            {/* ICON */}
            <div className="w-12 h-12 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
              {work.icon}
            </div>

            {/* PROJECT ID */}
            <div className="text-xs tracking-[0.3em] uppercase opacity-70">
              Project 0{index + 1}
            </div>

            {/* TITLE */}
            <h3 className="text-xl md:text-2xl font-semibold leading-snug">
              {work.title}
            </h3>

            {/* TAGLINE (optional feeling line) */}
            <p className="text-xs opacity-70 leading-relaxed">
              Case study overview & execution breakdown
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-2/3 p-6 md:p-10 bg-white flex flex-col justify-center gap-6">

          {/* EXPERIENCE */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
              Overview
            </h4>
            <p className="text-gray-900 text-base md:text-lg leading-relaxed font-medium">
              {work.experience}
            </p>
          </div>

          {/* GRID SECTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* CHALLENGE */}
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Challenge
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {work.challenge}
              </p>
            </div>

            {/* SOLUTION */}
            <div
              className={`p-5 rounded-xl border transition ${
                isOdd
                  ? "bg-blue-50 border-blue-100"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Solution
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {work.solution}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
/* =========================
   MAIN COMPONENT
========================= */
const PreviousWork = () => {
  const works = [
    {
      id: 1,
      title: "FinTech Dashboard Overhaul",
      experience:
        "High-security financial management platform for global users.",
      challenge:
        "Complex data visualization and slow transaction processing times.",
      solution:
        "Optimized React architecture with real-time WebSocket integration for instant updates.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "E-Commerce Scaling",
      experience: "Multi-vendor marketplace handling 50k+ daily active users.",
      challenge: "Database bottlenecks during peak seasonal traffic spikes.",
      solution:
        "Implemented edge caching and serverless infrastructure to ensure zero downtime.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "HealthTech AI Integration",
      experience: "Patient monitoring system using predictive analytics.",
      challenge:
        "Inaccurate diagnostic predictions and poor mobile responsiveness.",
      solution:
        "Refined AI model training sets and built a fluid, touch-first mobile interface.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "SaaS Enterprise Portal",
      experience:
        "Internal management tool for a Fortune 500 logistics company.",
      challenge: "Fragmented user workflows across multiple legacy systems.",
      solution:
        "Unified API layer and a consistent Design System for streamlined productivity.",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      id: 5,
      title: "Creative Agency Portfolio",
      experience:
        "High-end visual showcase for award-winning photographers.",
      challenge: "Large image assets causing slow initial page loads.",
      solution:
        "Next-gen image optimization and lazy-loading with glassmorphism UI.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            We turn ideas into{" "}
            <span className="text-blue-600">high-performing</span> digital
            products
          </h2>

          <p className="mt-5 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Design, engineering, and strategy combined into a clean system that
            grows your business faster.
          </p>
        </div>

        {/* Cards */}
        <div className="relative space-y-[4vh]">
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>

      </section>
    </div>
  );
};

export default PreviousWork;