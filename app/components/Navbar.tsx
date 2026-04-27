"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "Web Development", href: "/web-development-service" },
        { name: "Logo Animation", href: "/logo-animation" },
        { name: "Apify Development", href: "/apify-development" },
        { name: "Digital Marketing", href: "/digital-marketing" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Team", href: "/teams" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOCK BODY SCROLL WHEN MENU OPEN
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled
          ? "bg-blue-950/95 backdrop-blur-xl shadow-lg"
          : "bg-blue-900/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-10">

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-light text-white">Boots</span>
              <span className="text-xl font-bold text-blue-300">Land</span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-6">

              {navItems.map((item) => (
                <div key={item.name} className="relative group">

                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition"
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="w-4 h-4 opacity-70" />
                    )}
                  </Link>

                  <span className="absolute left-0 -bottom-1 h-0.2 w-0 bg-blue-400 group-hover:w-full transition-all duration-300" />

                  {/* DROPDOWN */}
                  {item.children && (
                    <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                      <div className="absolute -top-3 left-0 w-56 h-3" />

                      <div className="w-56 rounded-xl border border-white/10 bg-blue-900/95 backdrop-blur-xl shadow-2xl overflow-hidden">

                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
                          >
                            {child.name}
                          </Link>
                        ))}

                      </div>
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <Link
              href="/buy-now"
              className="px-6 py-2 rounded-full text-sm font-semibold text-blue-950 bg-white hover:bg-blue-100 transition shadow-md"
            >
              Order Now
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          {/* BACKDROP */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* PANEL */}
          <div
            className="absolute top-0 right-0 w-full max-h-[85vh] bg-blue-950 border-b border-white/10 shadow-2xl animate-slideDown"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <span className="text-white font-semibold text-sm">Menu</span>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            {/* LINKS */}
            <div className="px-5 py-4 space-y-4 overflow-y-auto max-h-[70vh]">

              {navItems.map((item) => (
                <div key={item.name} className="space-y-1">

                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white/80 hover:text-white py-2 text-sm transition"
                  >
                    {item.name}
                  </Link>

                  {item.children && (
                    <div className="pl-4 border-l border-white/10 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-white/60 hover:text-white transition"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              ))}

              <Link
                href="/buy-now"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-6 px-4 py-3 rounded-full bg-white text-blue-950 font-semibold hover:scale-[1.02] transition"
              >
                Order Now
              </Link>

            </div>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;