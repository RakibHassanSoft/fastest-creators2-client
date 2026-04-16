"use client";
import React from "react";
import Image from "next/image";

type TemplateCategory = {
  id: number;
  title: string;
  previews: string[];
};

const categories: TemplateCategory[] = [
  {
    id: 1,
    title: "SaaS Samples",
    previews: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 2,
    title: "Agency Samples",
    previews: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 3,
    title: "Portfolio Samples",
    previews: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 4,
    title: "E-Commerce Samples",
    previews: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=500",
    ],
  },
];

const WebsiteShowcase = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
          Samples <span className="text-blue-600">Showcase</span>
        </h1>
        <p className="text-gray-500 mt-4">
          Clean categories of modern website Samples
        </p>
      </div>

      {/* Rows */}
      <div className="space-y-14">
        {categories.map((category) => (
          <div key={category.id}>
            {/* Title */}
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              {category.title}
            </h2>

            {/* Image Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.previews.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-96 overflow-hidden rounded-xl border border-gray-200 bg-gray-100"
                >
                  <Image
                    src={img}
                    alt={`${category.title} ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default WebsiteShowcase;
