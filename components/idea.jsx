export default function Idea() {
    return (
      <div className="relative flex justify-center items-center h-[50vh] sm:h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://cuberto.com/assets/footer/ropes.mp4" type="video/mp4" />
        </video>
  
        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white gap-5">
          <h1 className="text-4xl sm:text-8xl font-semilight ">Have <br /> any Idea?</h1>
          <a
    href="/not-found"
    className="relative px-8 py-4 border text-base sm:text-lg border-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-auto inline-block"
    aria-label="Tell us your idea"
  >
    {/* Fill Layer */}
    <span className="absolute inset-0 w-full h-full rounded-full bg-white transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>

    {/* Text Layer */}
    <span className="relative z-10 text-white font-normal text-4xl sm:text-8xl mix-blend-difference transition-colors duration-300">
     Tell Us
    </span>
  </a>

        </div>
      </div>
    );
  }
  