"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Layout, 
  Code2, 
  ShieldCheck, 
  Rocket,
  ArrowRight,
  Plus
} from 'lucide-react';

const steps = [
  {
    n: "01",
    title: "Discovery & Strategy",
    icon: <Search className="w-5 h-5" />,
    points: ["Business model audit", "User pain-point mapping", "Goal alignment"],
    result: "Project Blueprint",
    description: "We dive deep into your business logic to define what actually needs to be solved before a single line of code is written.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    n: "02",
    title: "System Architecture",
    icon: <Layout className="w-5 h-5" />,
    points: ["Scalable backend design", "Data flow mapping", "Feature prioritization"],
    result: "Technical Roadmap",
    description: "Converting abstract ideas into a structured system designed for scale, security, and long-term maintainability.",
    color: "from-indigo-600 to-purple-500"
  },
  {
    n: "03",
    title: "UI/UX Strategy",
    icon: <Layout className="w-5 h-5" />,
    points: ["Behavioral analysis", "Conversion optimization", "Visual identity"],
    result: "High-Fidelity Prototypes",
    description: "Designing interfaces that aren't just 'pretty' but are engineered for clarity, reducing friction for the end-user.",
    color: "from-purple-600 to-pink-500"
  },
  {
    n: "04",
    title: "Agile Development",
    icon: <Code2 className="w-5 h-5" />,
    points: ["Clean code architecture", "Performance tuning", "Continuous integration"],
    result: "Production-Ready Code",
    description: "Our engineers build using modern stacks (React, Node, Cloud Native) ensuring the product is fast, stable, and modular.",
    color: "from-orange-600 to-yellow-500"
  },
  {
    n: "05",
    title: "Quality Assurance",
    icon: <ShieldCheck className="w-5 h-5" />,
    points: ["Edge-case testing", "Cross-device validation", "Security auditing"],
    result: "Stable Release Candidate",
    description: "Rigorous testing phases ensure that real-world usage is smooth and the system handles stress without failure.",
    color: "from-emerald-600 to-teal-500"
  },
  {
    n: "06",
    title: "Deployment & Scale",
    icon: <Rocket className="w-5 h-5" />,
    points: ["Cloud optimization", "Growth monitoring", "Iterative support"],
    result: "Live Growth System",
    description: "Launch is just the beginning. We help you monitor performance, scale resources, and iterate based on real user data.",
    color: "from-blue-700 to-indigo-700"
  },
];

const OurWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full bg-white text-slate-900 py-24 px-6 lg:px-24 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-blue-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-purple-100/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-blue-600"></span>
            <p className="text-blue-600 font-bold tracking-widest text-sm uppercase">
              Our Methodology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-slate-900">
              From business logic <br />
              <span className="text-transparent bg-clip-text bg-blue-600 ">
                to high-growth product
              </span>
            </h2>
            <p className="text-slate-500 text-lg max-w-md pb-2">
              We don&apos;t just build features. We engineer structured solutions that solve 
              actual business friction and enable long-term scaling.
            </p>
          </div>
        </div>

        {/* INTERACTIVE WORKFLOW GRID */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation (The 'Timeline') */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`group relative cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${
                  activeStep === idx 
                  ? 'bg-slate-50 border-slate-200 shadow-sm' 
                  : 'bg-transparent border-transparent hover:border-slate-100 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`text-2xl font-black transition-colors duration-300 ${
                    activeStep === idx ? 'text-blue-600' : 'text-slate-200 group-hover:text-slate-300'
                  }`}>
                    {step.n}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold transition-all ${
                      activeStep === idx ? 'text-slate-900 translate-x-1' : 'text-slate-400'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  {activeStep === idx && (
                    <ArrowRight className="w-5 h-5 text-blue-600 animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Content View (The 'Display') */}
          <div className="lg:col-span-7 relative">
            <div className="sticky top-12 p-px bg-linear-to-br from-slate-200 to-transparent rounded-3xl">
              <div className="bg-white rounded-[23px] p-8 md:p-12 min-h-125 flex flex-col justify-between shadow-xl shadow-slate-200/50">
                
                <div>
                  {/* Icon & Label */}
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${steps[activeStep].color} flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/20`}>
                    {steps[activeStep].icon}
                  </div>

                  <h4 className="text-3xl font-bold mb-6 text-slate-900">
                    {steps[activeStep].title}
                  </h4>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {steps[activeStep].description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Focus Areas</p>
                      <ul className="space-y-3">
                        {steps[activeStep].points.map((p, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-700">
                            <Plus className="w-3 h-3 text-blue-600" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2">Phase Output</p>
                      <p className="text-xl font-semibold text-slate-900">
                        {steps[activeStep].result}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                   </div>
                   <p className="text-sm text-slate-400 italic">
                     Systematic execution for predictable growth.
                   </p>
                </div>

              </div>
            </div>
          </div>

        </div>



      </div>
    </section>
  );
};

export default OurWorks;