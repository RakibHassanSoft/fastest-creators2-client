"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, PhoneCall } from "lucide-react";

const FounderIntro = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // ✅ TOP INFO OBJECT (clean & reusable)
  const topInfo = {
    phone: "+88 01XXXXXXXXX",
    email: "contact@youragency.com",
    cta: {
      label: "Get a Quote",
      href: "/contact",
    },
  };

  // ✅ AGENCY-RELEVANT FAQ
  const faqs = [
    {
      question: "What services does your agency provide?",
      answer:
        "We provide web development, mobile app development, logo design, logo animation, video editing, and digital marketing solutions for startups and businesses.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "It depends on complexity. Websites usually take 5–14 days, apps take 2–6 weeks, and branding or animation projects take 3–10 days on average.",
    },
    {
      question: "Do you provide custom design or templates?",
      answer:
        "All our work is fully custom. We design everything from scratch based on your brand identity and business goals.",
    },
    {
      question: "Can I request revisions after delivery?",
      answer:
        "Yes. We offer revision rounds depending on the package to ensure the final output matches your expectations.",
    },
  ];

  const founders = [
    {
      name: "Sarah Jenkins",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Marcus Chen",
      role: "CTO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mt-12 mx-auto px-4 py-20 font-sans bg-white">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-6">

        <div className="max-w-lg">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 leading-tight">
            Everything about our agency services
          </h2>
        </div>

        {/* CONTACT CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-5">

          <div className="flex items-center gap-3 text-slate-700">
            <div className="p-2 bg-slate-100 rounded-full">
              <PhoneCall size={20} className="text-blue-600" />
            </div>
            <span className="font-semibold text-sm">
              {topInfo.phone}
            </span>
          </div>

          <a
            href={topInfo.cta.href}
            className="bg-linear-to-r from-blue-600 to-blue-400 text-white px-7 py-3 rounded-full font-bold shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
          >
            {topInfo.cta.label}
          </a>

        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* FOUNDERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {founders.map((founder, idx) => (
            <div key={idx} className="flex flex-col gap-3">

              <div className="relative group aspect-4/5 rounded-3xl overflow-hidden border border-slate-200 shadow-md">

                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              <div className="px-1">
                <h4 className="text-lg font-bold text-slate-900">
                  {founder.name}
                </h4>
                <p className="text-blue-600 font-medium text-sm">
                  {founder.role}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* FAQ */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-blue-500 shadow-xl bg-white"
                    : "border-slate-200 hover:border-blue-200 bg-white"
                }`}
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center p-5 text-left"
                >

                  <div
                    className={`mr-4 p-2 rounded-full transition ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-900 text-white hover:bg-blue-600"
                    }`}
                  >
                    {isOpen ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </div>

                  <span className="text-base md:text-lg font-semibold text-slate-800">
                    {faq.question}
                  </span>

                </button>

                <div
                  className={`px-6 pb-5 transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FounderIntro;