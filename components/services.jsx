"use client";
import { useRef } from "react";

export default function Services() {
  const videoRefs = useRef([]);

  return (
    <div className="bg-white rounded-t-[50px] flex flex-col gap-12 px-6 sm:px-12 lg:px-40 py-16 sm:py-24 lg:py-32">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-semibold text-black text-start">
       Our Services
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left column (Text + AI-enhanced) */}
        <div className="flex flex-col gap-8">
          {/* Text block */}
          <div className="flex items-center justify-center rounded-2xl bg-white p-6 aspect-[4/2] sm:aspect-[4/1]">
            <p className="text-base sm:text-xl lg:text-2xl text-black max-w-md leading-relaxed text-center sm:text-left">
              From motion design to AI-powered products — we design and build
              interfaces for the future.
            </p>
          </div>

          {/* Card 2 (AI-enhanced UX/UI) */}
          <a
            href="/not-found"
            className="block overflow-hidden group"
            onMouseEnter={() => videoRefs.current[1]?.play()}
            onMouseLeave={() => videoRefs.current[1]?.pause()}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/6] sm:aspect-[4/7]">
              <img
                src="https://cuberto.com/assets/services/design/cover@2x.png"
                alt="AI-enhanced UX/UI design"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0"
              />
              <video
                ref={(el) => (videoRefs.current[1] = el)}
                src="https://cuberto.com/assets/services/design/cover.mp4"
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                AI-enhanced UX/UI design
              </h3>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                Interfaces that adapt, predict, and respond intelligently.
              </p>
            </div>
          </a>
        </div>

        {/* Right column (Brand + Dev) */}
        <div className="flex flex-col gap-8">
          {/* Card 1 (Brand Identity) */}
          <a
            href="/not-found"
            className="block overflow-hidden group"
            onMouseEnter={() => videoRefs.current[0]?.play()}
            onMouseLeave={() => videoRefs.current[0]?.pause()}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src="https://cuberto.com/assets/services/branding/cover@2x.png"
                alt="Brand Identity"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0"
              />
              <video
                ref={(el) => (videoRefs.current[0] = el)}
                src="https://cuberto.com/assets/services/branding/cover.mp4"
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Brand Identity
              </h3>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                Strategic design that positions AI products for trust and
                clarity.
              </p>
            </div>
          </a>

          {/* Card 3 (Custom development) */}
          <a
            href="/not-found"
            className="block overflow-hidden group"
            onMouseEnter={() => videoRefs.current[2]?.play()}
            onMouseLeave={() => videoRefs.current[2]?.pause()}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src="https://cuberto.com/assets/services/development/cover@2x.png"
                alt="Custom development"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0"
              />
              <video
                ref={(el) => (videoRefs.current[2] = el)}
                src="https://cuberto.com/assets/services/development/cover.mp4"
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Custom development
              </h3>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                Frontend + backend + AI integrations — built for performance and
                scalability.
              </p>
            </div>
          </a>
        </div>
      </div>
{/* Button Section */}
<div className="flex justify-center mt-8">
  <button
    className="relative px-8 py-4 border text-base sm:text-lg border-black font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-auto"
    type="button"
    aria-label="Learn more about our services"
  >
    {/* Fill Layer */}
    <span className="absolute inset-0 w-full h-full rounded-full bg-black transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>

    {/* Text Layer */}
    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
      View All Services
    </span>
  </button>
</div>

    </div>
  );
}
