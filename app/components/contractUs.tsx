"use client";

import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import React from "react";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  color: string;
  icon: React.ReactNode;
  external?: boolean;
};

const ContactUs = () => {
  const contacts: ContactItem[] = [
    {
      label: "WhatsApp",
      value: "+1 (555) 000-8888",
      href: "https://wa.me/15550008888",
      color: "text-green-600",
      external: true,
      icon: (
        <path d="M20.5 11.9C20.5 16.1 17 19.5 12.5 19.5C11.1 19.5 9.8 19.2 8.7 18.6L4.5 19.5L5.5 15.5C4.8 14.4 4.5 13.1 4.5 11.8C4.5 7.6 8 4.2 12.5 4.2C17 4.2 20.5 7.6 20.5 11.9Z" />
      ),
    },
    {
      label: "Email",
      value: "hello@studio.com",
      href: "mailto:hello@studio.com",
      color: "text-blue-600",
      icon: (
        <>
          <path d="M4 6h16v12H4V6Z" />
          <path d="M4 7l8 6 8-6" />
        </>
      ),
    },
    {
      label: "Facebook",
      value: "Follow updates",
      href: "https://facebook.com",
      color: "text-blue-600",
      external: true,
      icon: (
        <path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1z" />
      ),
    },
    {
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://linkedin.com",
      color: "text-blue-600",
      external: true,
      icon: (
        <path d="M6.5 9h3v10h-3V9zm1.5-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11 9h3v1.5c.5-.9 1.8-1.8 3.5-1.8 3 0 4.5 2 4.5 5.2V19h-3v-5c0-1.5-.5-2.5-2-2.5s-2.5 1-2.5 2.5v5h-3V9z" />
      ),
    },
  ];

  return (
    <section className="relative py-32 bg-white font-sans text-neutral-900 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175  blur-3xl opacity-60 rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* GRID LAYOUT (NEW STRUCTURE) */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE - BRAND STORY */}
          <div className="space-y-10">

            {/* badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 text-xs font-medium w-fit">
              <Sparkles size={14} className="text-blue-600" />
              Premium Digital Studio
            </div>

            {/* headline */}
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              We design and build{" "}
              <span className="text-blue-600">digital products</span> that feel
              effortless
            </h2>

            {/* paragraph */}
            <p className="text-neutral-500 text-lg leading-relaxed max-w-xl">
              A focused team of designers and engineers crafting high-performance,
              conversion-driven web experiences with clarity and precision.
            </p>

            {/* key points */}
            <div className="space-y-6 pt-4">

              <div className="flex gap-4">
                <Target className="text-blue-600 mt-1" size={18} />
                <div>
                  <p className="font-medium">Strategic Design</p>
                  <p className="text-sm text-neutral-500">
                    Every pixel is aligned with business goals and user behavior.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="text-blue-600 mt-1" size={18} />
                <div>
                  <p className="font-medium">Fast Execution</p>
                  <p className="text-sm text-neutral-500">
                    We move quickly without compromising production quality.
                  </p>
                </div>
              </div>

            </div>

            {/* subtle divider */}
            <div className="h-px bg-neutral-200 w-full" />

            <p className="text-sm text-neutral-400">
              Minimal process. Maximum impact. Built for scale.
            </p>

          </div>

          {/* RIGHT SIDE - CONTACT PANEL */}
          <div className="lg:sticky lg:top-24">

            <div className="bg-white border border-neutral-200 rounded-3xl p-10 shadow-sm">

              {/* header */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold">
                  Start a conversation
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  Pick your preferred channel — we respond fast
                </p>
              </div>

              {/* contact list (clean vertical stack instead of grid) */}
              <div className="space-y-3">

                {contacts.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between p-4 rounded-2xl border border-neutral-200 hover:border-blue-200 hover:bg-neutral-50 transition"
                  >

                    <div className="flex items-center gap-4">

                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-neutral-200 ${item.color}`}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {item.icon}
                        </svg>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-widest text-neutral-400">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium">
                          {item.value}
                        </p>
                      </div>

                    </div>

                    <ArrowRight className="text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />

                  </a>
                ))}

              </div>

              {/* footer note */}
              <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-400">
                Usually responds within minutes during business hours.
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;