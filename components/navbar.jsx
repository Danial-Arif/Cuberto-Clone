"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // scrolling down → hide navbar
      } else {
        setShow(true); // scrolling up → show navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center h-16 px-6 sm:px-12 lg:px-32">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-2xl font-bold">Cuberto</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {["Services", "Projects", "Company", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="/not-found"
              className="relative overflow-hidden h-6 group"
            >
              {/* Top text (slides out) */}
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {item}
              </span>
              {/* Bottom text (slides in) */}
              <span className="block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
                {item}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white border-t border-gray-200">
          {["Services", "Projects", "Company", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="/not-found"
              className="relative overflow-hidden h-6 group"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {item}
              </span>
              <span className="block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
                {item}
              </span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
