"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/teams" },
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "Web Development", href: "/web-development-service" },
        { name: "Logo Animation", href: "/logo-animation" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-black/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-light text-white tracking-wide">
              Boots
            </span>
            <span className="text-2xl font-semibold text-blue-300">
              Land
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition"
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="w-4 h-4 opacity-60" />
                  )}
                </Link>

                {/* underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-10 left-0 w-52 rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-xl overflow-hidden transition-all ${
                      activeDropdown === item.name
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4">

            <Link
              href="/buy-now"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition shadow-md"
            >
              Order Now
            </Link>

            
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-black/90 backdrop-blur-xl border-t border-white/10 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4 space-y-3">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="block text-white/70 hover:text-white py-2 text-sm"
              >
                {item.name}
              </Link>

              {item.children && (
                <div className="pl-4 border-l border-white/10 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block text-sm text-white/50 hover:text-white"
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
            className="block text-center mt-4 px-4 py-3 rounded-full bg-blue-600 text-white font-semibold"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;