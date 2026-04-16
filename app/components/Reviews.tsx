/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Star,
  CheckCircle,
  User,

  ShieldCheck,
} from "lucide-react";

/**
 * Interface for the Review Data
 */
interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  verified: boolean;
  avatarColor: string;
}

const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Sarah Anderson",
    role: "Product Lead, TechFlow",
    content:
      "The attention to detail is remarkable. We've seen a 40% increase in workflow efficiency since switching. World-class support.",
    rating: 5,
    date: "2d ago",
    verified: true,
    avatarColor: "bg-blue-600",
  },
  {
    id: "2",
    name: "Marcus Sterling",
    role: "Founder, Sterling Co.",
    content:
      "Clean, intuitive, and extremely powerful. It balances simplicity with deep functionality perfectly. A total game changer.",
    rating: 5,
    date: "1w ago",
    verified: true,
    avatarColor: "bg-[#111827]",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Creative Director",
    content:
      "Minimalist aesthetic that performs flawlessly under heavy loads. Highly recommended for professional teams and studios.",
    rating: 5,
    date: "2w ago",
    verified: true,
    avatarColor: "bg-indigo-600",
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Senior Developer",
    content:
      "Integration was seamless. We were up and running in less than 24 hours. The documentation is the best I've seen.",
    rating: 5,
    date: "1m ago",
    verified: true,
    avatarColor: "bg-blue-500",
  },
];

const Reviews: React.FC = () => {
  return (
    <div className="bg-white opacity-100">
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Compact Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-gray-100 pb-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Verified Social Proof
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
              Community <span className="text-blue-600 font-black">400+</span>{" "}
              Reviews
            </h2>
          </div>

          {/* Condensed Global Stats */}
          <div className="flex items-center gap-4 bg-gray-50 px-4 py-3 rounded-2xl border border-gray-100">
            <div className="text-right">
              <div className="text-xl font-black text-[#111827] leading-none">
                4.9/5.0
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mt-1">
                Global Average
              </div>
            </div>
            <div className="flex gap-0.5 border-l border-gray-200 pl-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Compact Grid Layout (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-gray-300 uppercase">
                    {review.date}
                  </span>
                </div>

                <p className="text-gray-700 text-[15px] leading-relaxed mb-6 font-medium">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <div
                  className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-inner`}
                >
                  {review.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-sm text-[#111827] truncate">
                      {review.name}
                    </h4>
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 truncate font-medium">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Footer CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-50 pt-8">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center"
                >
                  <User className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium italic">
              Join <span className="text-[#111827] font-bold">428+</span> others
              who love our platform
            </p>
          </div>

     
        </div>
      </section>
    </div>
  );
};

export default Reviews;
