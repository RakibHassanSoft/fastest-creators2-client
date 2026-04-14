"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, PhoneCall } from "lucide-react";

const FounderIntro = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Which cryptocurrency is offered here?",
      answer:
        "We offer a wide range of digital assets including Bitcoin (BTC), Ethereum (ETH), and various stablecoins. Our platform is constantly updated with emerging tokens that meet our strict security and liquidity standards.",
    },
    {
      question: "Are cryptocurrency apps safe?",
      answer:
        "Security is our top priority. We use industry-leading encryption, multi-factor authentication (MFA), and cold storage solutions to ensure your digital assets and personal information remain protected at all times.",
    },
    {
      question: "What is the daily limit for crypto app?",
      answer:
        "The daily transaction limit depends on your account verification level. Standard accounts typically start with a $5,000 daily limit, which can be increased to $50,000 or more upon completing enhanced KYC procedures.",
    },
    {
      question: "What apps are needed for cryptocurrency?",
      answer:
        "You only need our primary mobile app or web dashboard to manage your portfolio. For added security, we recommend using a dedicated authenticator app like Google Authenticator or Authy.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const founders = [
    {
      name: "Sarah Jenkins",
      role: "CEO & Co-Founder",
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

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans bg-white">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div className="max-w-lg">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
            Frequently Asked Questions.
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 leading-tight">
            If you want to know anything, inquire us
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-3 text-slate-700">
            <div className="p-2 bg-slate-100 rounded-full">
              <PhoneCall size={20} className="text-blue-600" />
            </div>
            <span className="font-semibold text-sm">
              Phone No. +88(9800) 6802
            </span>
          </div>
          <button className="bg-linear-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
            Get in Touch
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Founder Images (Non-overlapping Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {founders.map((founder, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="relative group aspect-4/5 rounded-4xl overflow-hidden border-2 border-slate-100 shadow-lg">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Visual accent */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="px-2">
                <h4 className="text-xl font-bold text-slate-900 leading-tight">
                  {founder.name}
                </h4>
                <p className="text-blue-600 font-medium text-sm">
                  {founder.role}
                </p>
              </div>
            </div>
          ))}

          {/* Optional: Decorative element to fill space if needed */}
          <div className="col-span-full mt-4 p-6 bg-blue-50 rounded-4xl border border-blue-100 hidden sm:block">
            <p className="text-blue-800 text-sm font-medium italic">
              `Building the future of decentralized finance, one block at a
              time.`
            </p>
          </div>
        </div>

        {/* Right: FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group transition-all duration-300 border-2 rounded-4xl overflow-hidden ${
                openIndex === index
                  ? "border-blue-500 bg-white shadow-xl shadow-blue-50"
                  : "border-slate-100 bg-white hover:border-blue-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center p-4 md:p-6 text-left"
              >
                <div
                  className={`mr-4 p-3 rounded-full transition-colors duration-300 ${
                    openIndex === index
                      ? "bg-blue-600 text-white"
                      : "bg-slate-900 text-white group-hover:bg-blue-600"
                  }`}
                >
                  {openIndex === index ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </div>
                <span
                  className={`text-lg font-bold transition-colors ${
                    openIndex === index ? "text-slate-900" : "text-slate-700"
                  }`}
                >
                  {faq.question}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 md:pl-22 md:pr-12">
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderIntro;
