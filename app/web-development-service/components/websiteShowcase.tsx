"use client";
import React from "react";
import Image from "next/image";


/**
 * Interface for the Template Data
 */
// Data structure with dummy image URLs representing actual website layouts
const categories: TemplateCategory[] = [
  {
    id: 1,
    title: "Saa3 Templates",
    previews: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 2,
    title: "Agency Templates",
    previews: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 3,
    title: "Agency Templates",
    previews: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 4,
    title: "E-Commerce Templates",
    previews: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 5,
    title: "E-Commerce Templates",
    previews: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 6,
    title: "Travel Templates",
    previews: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 7,
    title: "Portfolio Templates",
    previews: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 8,
    title: "Portfolio Templates",
    previews: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=500",
    ],
  },
  {
    id: 9,
    title: "LMS Templates",
    previews: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=500",
    ],
  },
];
interface TemplateCategory {
  id: number;
  title: string;
  // Arrays represent the left and right preview images for each card
  previews: string[];
}

const WebsiteShowcase: React.FC = () => {
  return (
    <div className=" max-w-6xl mx-auto  py-16 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Header Section */}

     <div className="flex justify-center mb-5 mt-4">

      <div className="text-center   max-w-3xl">
        
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
          SOLUTIONS FOR ALL YOUR NEEDS <br className="hidden md:block" />
          <span className="text-blue-600"> Template Showcase</span>
        </h1>
      </div>
     </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center">
            {/* Category Label */}
            <h3 className="text-lg font-bold text-blue-600  mb-6">
              {category.title}
            </h3>

            {/* Image Preview Container - Using grid-cols-2 to match your layout */}
            <div className="w-full grid grid-cols-2  bg-white p-1 rounded-sm  border border-gray-100 transition-transform duration-300 cursor-pointer">
              {category.previews.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-4/8 overflow-hidden  bg-gray-100 "
                >
                  <Image
                    src={img}
                    alt={`${category.title} preview ${idx + 1}`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/400x800?text=Image+Error";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-20 flex justify-center">
        <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-3 px-10 rounded-md shadow-lg transition-colors duration-200 text-lg">
          Browse Templates
        </button>
      </div>
    </div>
  );
};

export default WebsiteShowcase;
