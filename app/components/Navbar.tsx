"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ChevronDown } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/teams" },
    // {
    //   name: "Pages",
    //   href: "/pages",
    //   children: [
    //     { name: "About Us", href: "/about" },
    //     { name: "Team", href: "/teams" },
    //     { name: "FAQ", href: "/pages/faq" },
    //   ],
    // },
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "Web Development", href: "/web-development-service" },
        { name: "Logo Animation", href: "/logo-animation" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brandBlue = "#1a73e8";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black ${
        scrolled ? "shadow-2xl border-b border-white/10 py-1" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-light text-white">Boots</span>
            <span className="text-3xl font-bold" style={{ color: brandBlue }}>
              Land
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group px-3 py-4"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center text-[15px] font-medium text-slate-300 hover:text-white"
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all py-2 border border-slate-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}

                <div
                  className="absolute bottom-3 left-3 right-3 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform"
                  style={{ backgroundColor: brandBlue }}
                />
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
           

            <Link
              href="/buy-now"
              className="text-white px-7 py-2.5 rounded-md font-semibold"
              style={{ backgroundColor: brandBlue }}
            >
              Buy Now
            </Link>
             
             <div>
                {/* add avater  */}
                    <Image
                        src="https://i.pravatar.cc/300"
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="rounded-full border-2 border-white"
                    />
             </div>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="text-slate-300">
              <Search className="w-5 h-5" />
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-black border-t border-white/5 ${
          isOpen ? "max-h-200 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-8 space-y-2">
          {navItems.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between items-center">
                <Link href={item.href} className="px-3 py-4 text-slate-300">
                  {item.name}
                </Link>

                {item.children && (
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name,
                      )
                    }
                    className="p-3 text-slate-400"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.children && activeDropdown === item.name && (
                <div className="pl-6 bg-white/5 rounded-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-3 py-2 text-sm text-slate-400 hover:text-white"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-6">
            <Link
              href="/buy-now"
              className="block text-center text-white px-6 py-4 rounded-md font-bold"
              style={{ backgroundColor: brandBlue }}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
