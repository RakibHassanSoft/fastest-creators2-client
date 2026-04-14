"use client";

import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

type LinkItem = {
  label: string;
  href: string;
};

const Footer: React.FC = () => {
  const companyLinks: LinkItem[] = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Work", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const legalLinks: LinkItem[] = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden text-white bg-[#050B1E]">

      {/* soft premium glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-2xl h-2xl bg-blue-600/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-120 h-120 bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-12 gap-12">

          {/* BRAND */}
          <div className="md:col-span-5 space-y-6">

            <h2 className="text-2xl font-semibold tracking-tight">
              YourStudio<span className="text-blue-500">.</span>
            </h2>

            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              We design and build high-performance digital products —
              SaaS platforms, websites, automation tools, and brand systems
              that scale.
            </p>

            {/* CONTACT */}
            <div className="space-y-4 text-sm text-white/80">

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                hello@yourstudio.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                +1 (555) 000-8888
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400" />
                Remote / Worldwide
              </div>

            </div>
          </div>

          {/* LINKS */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/50">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="group flex items-center justify-between text-sm text-white/70 hover:text-white transition"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition text-blue-400"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/50">
              Legal
            </h3>

            <ul className="space-y-3">
              {legalLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/50">
              Let’s Talk
            </h3>

            <p className="text-sm text-white/70">
              Have a project in mind? Let’s build something great.
            </p>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm py-2.5 rounded-lg transition shadow-lg shadow-blue-600/20">
              Get Started
            </button>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} YourStudio. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-white/60">
            <a className="hover:text-white transition" href="#">Twitter</a>
            <a className="hover:text-white transition" href="#">LinkedIn</a>
            <a className="hover:text-white transition" href="#">Instagram</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;