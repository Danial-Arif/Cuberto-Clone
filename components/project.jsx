"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Projects({ setVideoRefs }) {
  const projects = [
    { title: "Punto Pago", desc: "The First Super-App in Latin America", img: "https://cuberto.com/assets/projects/puntopago/cover.jpg", video: "https://cuberto.com/assets/projects/puntopago/cover.mp4", link: "/projects/puntopago" },
    { title: "DaoWay", desc: "Astrology planner app: plan, achieve, thrive", img: "https://cuberto.com/assets/projects/daoway/cover.jpg", video: "https://cuberto.com/assets/projects/daoway/cover.mp4", link: "/projects/daoway" },
    { title: "Riyadh", desc: "Official website of Riyadh, Saudi Arabia's capital", img: "https://cuberto.com/assets/projects/riyadh/cover.jpg", video: "https://cuberto.com/assets/projects/riyadh/cover.mp4", link: "/projects/riyadh" },
    { title: "Magma", desc: "Creative platform for startups", img: "https://cuberto.com/assets/projects/magma/cover.jpg", video: "https://cuberto.com/assets/projects/magma/cover.mp4", link: "/projects/magma" },
    { title: "Flipaclip", desc: "Animation made easy", img: "https://cuberto.com/assets/projects/flipaclip/cover.jpg", video: "https://cuberto.com/assets/projects/flipaclip/cover.mp4", link: "/projects/flipaclip" },
    { title: "Qvino", desc: "Wine ordering app", img: "https://cuberto.com/assets/projects/qvino/cover.jpg", video: "https://cuberto.com/assets/projects/qvino/cover.mp4", link: "/projects/qvino" },
    { title: "Zelt", desc: "Work platform for teams", img: "https://cuberto.com/assets/projects/zelt/cover.jpg", video: "https://cuberto.com/assets/projects/zelt/cover.mp4", link: "/projects/zelt" },
    { title: "Potion", desc: "Notion website builder", img: "https://cuberto.com/assets/projects/potion/cover.jpg", video: "https://cuberto.com/assets/projects/potion/cover.mp4", link: "/projects/potion" },
    { title: "Cisco", desc: "Tech giant project", img: "https://cuberto.com/assets/projects/cisco/cover.jpg", video: "https://cuberto.com/assets/projects/cisco/cover.mp4", link: "/projects/cisco" },
    { title: "FerrumPipe", desc: "Industrial pipe manufacturer", img: "https://cuberto.com/assets/projects/ferrumpipe/cover.jpg", video: "https://cuberto.com/assets/projects/ferrumpipe/cover.mp4", link: "/projects/ferrumpipe" }
  ];

  const videoRefs = useRef([]);
  const cirRef = useRef(null);

  useEffect(() => {
    const dot = cirRef.current;
    let currentVideo = null;

    // Hide circle initially
    gsap.set(dot, { opacity: 0 });

    const handleMouseMove = (e) => {
      if (!currentVideo) return;

      gsap.to(dot, {
        x: e.clientX - dot.offsetWidth / 2,
        y: e.clientY - dot.offsetHeight / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (video, e) => {
      currentVideo = video;
      
      // Position circle at cursor location immediately
      gsap.set(dot, {
        x: e.clientX - dot.offsetWidth / 2,
        y: e.clientY - dot.offsetHeight / 2,
        opacity: 1,
        scale: 1
      });
    };

    const handleMouseLeave = () => {
      currentVideo = null;
      gsap.to(dot, { opacity: 0, scale: 0 ,duration: 0 });
    };

    // Attach events with stable references
    videoRefs.current.forEach((video) => {
      if (video) {
        video.__enter = (e) => handleMouseEnter(video, e);
        video.__leave = handleMouseLeave;
        video.__move = handleMouseMove;

        video.addEventListener("mouseenter", video.__enter);
        video.addEventListener("mouseleave", video.__leave);
        video.addEventListener("mousemove", video.__move);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.removeEventListener("mouseenter", video.__enter);
          video.removeEventListener("mouseleave", video.__leave);
          video.removeEventListener("mousemove", video.__move);
        }
      });
    };
  }, []);

  return (
    <div className="relative bg-black rounded-t-[50px] flex flex-col gap-16 px-6 sm:px-12 lg:px-40 py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Cursor Circle */}
      

      <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-semibold text-white text-start">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
      <div
        ref={cirRef}
        className="pointer-events-none fixed top-0 left-0 w-20 h-20 bg-white rounded-full flex justify-center items-center z-50"
      >
        <p className="text-xs font-medium text-black">Explore</p>
      </div>
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className="card overflow-hidden group rounded-2xl"
            onMouseEnter={() => videoRefs.current[i]?.play()}
            onMouseLeave={() => {
              if (videoRefs.current[i]) {
                videoRefs.current[i].pause();
                videoRefs.current[i].currentTime = 0;
              }
            }}
          >
            <div
              className={`relative mx-auto overflow-hidden rounded-2xl ${
                i % 3 === 0 ? "aspect-[4/6]" : "aspect-[4/4]"
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={p.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {p.title}{" "}
                <span className="font-normal text-gray-300">– {p.desc}</span>
              </h3>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center">
      <button
          className="flex items-center justify-center relative px-8 py-4 border text-base sm:text-lg border-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          type="button"
          aria-label="Learn more about our services"
        >
          {/* Fill Layer */}
          <span className="absolute inset-0 w-full h-full rounded-full bg-white transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>

          {/* Text Layer */}
          <span className="relative z-10 text-white mix-blend-difference transition-colors duration-300">
            View All Projects
          </span>
        </button>
      </div>
    </div>
  );
}
