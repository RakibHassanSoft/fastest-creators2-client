"use client"
import React, { useState } from "react";
import {
  Smartphone,
  Layers,
  Rocket,
  Code2,
  ShieldCheck,
  Gauge,
  Star,
  ChevronDown,
  ArrowRight,
  Zap,
  Globe,
  Award,
  CheckCircle2
} from "lucide-react";

/* ---------------- PREMIUM HERO (WHITE) ---------------- */

const Hero = () => {
  return (
    <section className="relative bg-white pt-28 md:pt-36 pb-20 overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:38px_38px] opacity-20" />
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-100 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">
            <Zap size={14} />
            Flutter App Development Studio
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-slate-900 leading-tight tracking-tight">
            Build <span className="text-blue-600">high-performance</span>
            <br />
            mobile applications
          </h1>

          <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
            We design and develop production-ready Flutter apps with scalable architecture,
            clean UI systems, and enterprise-level performance.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight size={18} />
            </button>

            <button className="border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition">
              View Work
            </button>
          </div>

          {/* small trust line */}
          <p className="mt-6 text-sm text-slate-400">
            Trusted by startups and product teams worldwide
          </p>

        </div>

        {/* RIGHT VISUAL BLOCK (THIS MAKES IT A REAL HERO) */}
        <div className="relative">

          {/* Main card */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6">

            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-slate-400">Live App Preview</span>
            </div>

            {/* fake app UI */}
            <div className="space-y-4">

              <div className="h-4 bg-slate-100 rounded w-3/4" />
              <div className="h-4 bg-slate-100 rounded w-1/2" />

              <div className="h-40 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
                <Smartphone className="text-blue-600" size={40} />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="h-10 bg-slate-100 rounded" />
                <div className="h-10 bg-slate-100 rounded" />
                <div className="h-10 bg-slate-100 rounded" />
              </div>

            </div>
          </div>

          {/* floating badges */}
          <div className="absolute -top-6 -left-6 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-md text-xs font-medium">
            ⚡ 60FPS Performance
          </div>

          <div className="absolute bottom-[-20px] right-[-10px] bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-md text-xs font-medium">
            🚀 Production Ready
          </div>

        </div>

      </div>
    </section>
  );
};
/* ---------------- SERVICES (Bento Grid with Images) ---------------- */

const services = [
  {
    title: "Full-Stack Flutter",
    desc: "Unified cross-platform engineering for iOS, Android, and Web from a single, robust codebase.",
    icon: Smartphone,
    size: "lg",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Signature UX",
    desc: "Bespoke interface design that prioritizes cognitive ease.",
    icon: Layers,
    size: "sm",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "60FPS Core",
    desc: "Optimization at the Skia engine level for buttery-smooth feel.",
    icon: Gauge,
    size: "sm",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Cloud Logic",
    desc: "Seamless integration with Firebase and AWS microservices.",
    icon: Code2,
    size: "sm",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Vault Security",
    desc: "Advanced encryption and biometric authentication for mission-critical data protection.",
    icon: ShieldCheck,
    size: "lg",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Market Ready",
    desc: "Strategic App Store optimization and managed deployment.",
    icon: Rocket,
    size: "sm",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  },
];

const Services = () => {
  return (
    <section className="bg-slate-50 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
            Our Development Pillars
          </h2>
          <p className="text-slate-500 mt-6 text-xl max-w-2xl mx-auto">
            Combining aesthetic excellence with surgical technical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 ${
                s.size === "lg" ? "md:col-span-2" : ""
              }`}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={s.img} 
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-600 shadow-lg">
                  <s.icon size={24} />
                </div>
              </div>

              <div className="p-10 -mt-12 relative bg-white rounded-t-[2.5rem]">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg">
                  {s.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs">
                  Read Specifications <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- PROCESS ---------------- */

const steps = [
  { title: "Discovery", desc: "Technical feasibility mapping." },
  { title: "Architecture", desc: "Setting Clean Architecture foundations." },
  { title: "Build", desc: "Agile sprints with bi-weekly updates." },
  { title: "Scale", desc: "Stress-testing and deployment." },
];

const Process = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full -mr-20 -mt-20" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
                The Precision Path <br />
                to Excellence
              </h2>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white text-sm font-bold group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{s.title}</h4>
                      <p className="text-slate-400 font-light">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-white/10 rounded w-1/2 animate-pulse" />
                <div className="h-24 bg-blue-600/20 rounded w-full border border-blue-500/30 flex items-center justify-center">
                   <Code2 className="text-blue-400" size={32} />
                </div>
                <div className="h-4 bg-white/10 rounded w-5/6 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FAQ ---------------- */

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "Why Flutter for Enterprise?", a: "Consistency across platforms, high performance rendering, and 40% faster time-to-market compared to native siloed development." },
    { q: "Technical Stack?", a: "We utilize Riverpod for state management, Clean Architecture for domain separation, and GitHub Actions for CI/CD automation." },
    { q: "Post-Launch?", a: "White-glove maintenance including 24/7 monitoring and prioritized feature updates." }
  ];

  return (
    <section className="bg-slate-50 py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 tracking-tight">Intelligence Hub</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left"
              >
                <span className="text-xl font-bold text-slate-900">{f.q}</span>
                <ChevronDown className={`transition-transform duration-500 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`transition-all duration-500 ease-in-out ${open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="p-8 pt-0 text-slate-500 text-lg leading-relaxed border-t border-slate-50 italic">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- MAIN PAGE ---------------- */

const AppDevelopment = () => {
  return (
    <div className="antialiased selection:bg-blue-600 selection:text-white bg-white">
      <Hero />
      <Services />
      <Process />
      
      {/* Testimonial Bar */}
      <section className="py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          {[1,2,3].map(i => (
            <div key={i} className="space-y-4">
              <div className="flex gap-1 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-blue-600 text-blue-600" />)}
              </div>
              <p className="text-slate-600 font-medium italic">"The most professional Flutter implementation we've ever integrated into our ecosystem."</p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full bg-slate-200" />
                <div>
                  <div className="font-bold text-slate-900">Executive {i}</div>
                  <div className="text-xs text-blue-600 font-bold uppercase">Fortune 500</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ />

      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12 tracking-tighter">Ready for the Evolution?</h2>
          <button className="bg-blue-600 text-white px-12 py-6 rounded-full font-bold hover:scale-105 transition-all shadow-2xl shadow-blue-200 text-xl">
            Request Consultation
          </button>
          <div className="mt-20 text-slate-400 text-sm font-bold uppercase tracking-[0.4em]">
            Elite Flutter Studios &copy; {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppDevelopment;