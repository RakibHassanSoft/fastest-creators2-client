"use client";
import {
  ShieldCheck,
  Zap,
  Target,
  Briefcase,
  CheckCircle,
} from "lucide-react";

/* =========================
   TYPE DEFINITIONS
========================= */
type Work = {
  id: number;
  title: string;
  experience: string;
  challenge: string;
  solution: string;
  icon: React.ReactNode;
};

/* =========================
   CARD COMPONENT
========================= */
const WorkCard = ({ work, index }: { work: Work; index: number }) => {
  const isOdd = (index + 1) % 2 !== 0;

  return (
    <div
      className="sticky top-[15vh] w-full h-80"
      style={{ zIndex: index + 1 }}
    >
      <div className="w-full h-full bg-white border-gray-100 overflow-hidden flex flex-col md:flex-row group ">
        
        {/* Left Side */}
        <div
          className={`w-full md:w-1/3 p-10 flex flex-col justify-between text-white relative transition-colors duration-500 ${
            isOdd
              ? "bg-linear-to-br from-black to-white"
              : "bg-linear-to-br from-blue-600 to-white"
          }`}
        >
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

          <div className="relative z-10">
            <div
              className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xl ${
                isOdd ? "text-black" : "text-blue-600"
              }`}
            >
              {work.icon}
            </div>

            <span
              className={`${
                isOdd ? "text-gray-400" : "text-blue-100"
              } uppercase tracking-widest text-2xl font-black opacity-80`}
            >
              Project 0{index + 1}
            </span>

            <h3 className="text-2xl  mt-2 leading-tight">
              {work.title}
            </h3>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 p-8 md:p-12 bg-white flex flex-col justify-center space-y-8 relative">
          <div className="absolute inset-0 bg-white -z-10" />

          <div className="space-y-2">
            <h4
              className={`${
                isOdd ? "text-gray-400" : "text-blue-600"
              } font-bold text-xs uppercase tracking-wider`}
            >
              The Experience
            </h4>
            <p className="text-black text-xl font-medium leading-relaxed">
              {work.experience}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <h4 className="text-gray-400 font-bold text-[10px] uppercase mb-2">
                Challenge
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {work.challenge}
              </p>
            </div>

            <div
              className={`p-5 rounded-2xl border ${
                isOdd
                  ? "bg-gray-100/50 border-gray-200"
                  : "bg-blue-50/50 border-blue-100"
              }`}
            >
              <h4
                className={`font-bold text-[10px] uppercase mb-2 ${
                  isOdd ? "text-black" : "text-blue-600"
                }`}
              >
                Our Solution
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
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