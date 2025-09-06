"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../../components/navbar";
import FirstCon from "../../components/first-con";
import Video from "../../components/video";
import SecondCon from "../../components/second-con";
import Projects from "../../components/project";
import Services from "../../components/services";
import Blog from "../../components/blog";
import Idea from "../../components/idea";
import Footer from "../../components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Set initial position and transform origin
    gsap.set(dot, {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "center center"
    });

    const handleMouseMove = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    // Show dot on first mouse move
    const handleFirstMove = (e) => {
      gsap.set(dot, { opacity: 1 });
      handleMouseMove(e);
      document.removeEventListener("mousemove", handleFirstMove);
    };

    document.addEventListener("mousemove", handleFirstMove);
    document.addEventListener("mousemove", handleMouseMove);

    // Hide dot when mouse leaves window
    const handleMouseLeave = () => {
      gsap.to(dot, { opacity: 0, duration: 0.2 });
    };

    const handleMouseEnter = () => {
      gsap.to(dot, { opacity: 1, duration: 0.2 });
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Handle .card video hover events - hide main cursor when hovering over project card videos
    const setupCardVideoHover = () => {
      const cardVideos = document.querySelectorAll('.card video');
      
      cardVideos.forEach(video => {
        const handleVideoMouseEnter = () => {
          gsap.to(dot, { opacity: 0, duration: 0.2 });
        };

        const handleVideoMouseLeave = () => {
          gsap.to(dot, { opacity: 1, duration: 0.2 });
        };

        video.addEventListener('mouseenter', handleVideoMouseEnter);
        video.addEventListener('mouseleave', handleVideoMouseLeave);

        // Store cleanup functions on the video element
        video._cleanupCursor = () => {
          video.removeEventListener('mouseenter', handleVideoMouseEnter);
          video.removeEventListener('mouseleave', handleVideoMouseLeave);
        };
      });
    };

    // Setup card video hover with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(setupCardVideoHover, 100);

    // Also setup on any future DOM changes (optional, for dynamic content)
    const observer = new MutationObserver(() => {
      setupCardVideoHover();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener("mousemove", handleFirstMove);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      
      clearTimeout(timeoutId);
      observer.disconnect();

      // Cleanup card video event listeners
      const cardVideos = document.querySelectorAll('.card video');
      cardVideos.forEach(video => {
        if (video._cleanupCursor) {
          video._cleanupCursor();
          delete video._cleanupCursor;
        }
      });
    };
  }, []);

  return (
    <div className="overflow-hidden flex flex-col gap-10 sm:gap-16 bg-white">
      {/* Custom cursor */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-0"
        style={{
          isolation: "isolate",
          left: 0,
          top: 0,
        }}
      />

      {/* Page content */}
      <div className="animate-up overflow-hidden">
        <Navbar />
      </div>
      <div className="animate-up overflow-hidden">
        <FirstCon />
      </div>
      <div className="animate-up overflow-hidden">
        <Video />
      </div>
      <div className="animate-up overflow-hidden">
        <SecondCon />
      </div>
      <div className="animate-up overflow-hidden">
        <Projects />
      </div>
      <div className="animate-up overflow-hidden">
        <Services />
      </div>
      <div className="bg-black rounded-t-[50px] animate-up overflow-hidden">
        <Blog />
        <Idea />
        <Footer />
      </div>
    </div>
  );
}