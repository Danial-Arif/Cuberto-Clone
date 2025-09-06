"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function NotFound() {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const messageRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const number = numberRef.current;
    const message = messageRef.current;
    const buttons = buttonsRef.current;

    if (!container) return;

    // Set initial states
    gsap.set(number, { opacity: 0, scale: 0.8 });
    gsap.set([message, buttons], { opacity: 0, y: 30 });

    // Animate elements in sequence
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(number, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    })
    .to(message, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .to(buttons, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.2");

    // Add hover animations for buttons
    const buttonElements = buttons?.querySelectorAll('button, a');
    buttonElements?.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { 
          scale: 1.05,
          duration: 0.3, 
          ease: "power2.out" 
        });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { 
          scale: 1,
          duration: 0.3, 
          ease: "power2.out" 
        });
      });
    });

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center overflow-hidden">
      <div ref={containerRef} className="text-center max-w-2xl mx-auto px-6">
        {/* 404 Number */}
        <div ref={numberRef} className="relative mb-12">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-light text-gray-900 leading-none tracking-tight">
            4
            <span className="inline-block text-blue-500 font-normal">
              0
            </span>
            4
          </h1>
          <div className="absolute -top-4 -right-4 w-24 h-24 border border-gray-200 rounded-full opacity-30"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-blue-200 rounded-full opacity-40"></div>
        </div>

        {/* Error Message */}
        <div ref={messageRef} className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-6 tracking-wide">
            Page Not Found
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/">
            <button className="group px-10 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                Go Home
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </span>
            </button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group px-10 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
