export default function SecondCon() {
  return (
    <div className="second-con h-full sm:h-[70vh] flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 md:px-32">
      {/* Video Section */}
      <div className="flex-1 h-full">
        <video
          className="w-full h-full object-cover"
          src="https://cuberto.com/assets/home/summary/2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center items-start gap-4 text-gray-700 max-w-xl">
        <p>
          Since 2010, we have been helping our clients find exceptional
          solutions for their businesses, creating memorable websites and
          digital products.
        </p>
        <p>
          Cuberto doesn't do cookie-cutter solutions — we build products
          exactly as they were during the design phase, with no shortcuts
          or simplifications.
        </p>
        <button
          className="flex items-center justify-center relative px-8 py-4 border text-base sm:text-lg border-black font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          type="button"
          aria-label="Learn more about our services"
        >
          {/* Fill Layer */}
          <span className="absolute inset-0 w-full h-full rounded-full bg-black transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>

          {/* Text Layer */}
          <span className="relative z-10 text-white mix-blend-difference transition-colors duration-300">
            What we do
          </span>
        </button>
      </div>
    </div>
  );
}