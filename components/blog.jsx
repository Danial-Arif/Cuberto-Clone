export default function Blog() {
    return (
      <div className="flex justify-center items-center bg-black rounded-t-[60px] text-white px-4 sm:px-8">
        <div className="h-full w-full sm:w-[80%] flex flex-col gap-20 sm:gap-28 py-16 sm:py-32">
          {/* Title */}
          <h1 className="text-4xl sm:text-7xl font-bold text-start">Blog</h1>
  
          {/* Blog Items */}
          <div className="flex flex-col gap-10">
            {/* Card 1 */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="left flex-1">
                <img
                  className="h-full w-full rounded-3xl object-cover transition-transform duration-700 hover:scale-105"
                  src="https://cuberto.com/assets/uploads/54299d9789b57642a5b0bd39efb37175_03a4f580f1_w1080.webp"
                  alt=""
                />
              </div>
              <div className="right flex-1 flex flex-col justify-center items-start px-2 sm:px-5">
                <a href="/not-found" className="px-2 py-1 text-[12px] uppercase border border-white rounded-3xl inline-block">
                  Design Course
                </a>
                <h1 className="text-2xl sm:text-4xl max-w-[30ch] font-normal mt-2">
                  How to Make UI/UX Website // Frontend development
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-gray-400 mt-2">
                  10/23/2022
                </p>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="left flex-1">
                <img
                  className="h-full w-full rounded-3xl object-cover transition-transform duration-700 hover:scale-105"
                  src="https://cuberto.com/assets/uploads/0dc60d465222db37738a6e2222207dce_0175db0d83_w1080.webp"
                  alt=""
                />
              </div>
              <div className="right flex-1 flex flex-col justify-center items-start px-2 sm:px-5">
                <a href="/not-found" className="px-2 py-1 text-[12px] uppercase border border-white rounded-3xl inline-block">
                  Design Course
                </a>
                <h1 className="text-2xl sm:text-4xl max-w-[25ch] font-normal mt-2">
                  How to Cook an Emotional Site // Web Development
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-gray-400 mt-2">
                  10/21/2022
                </p>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="left flex-1">
                <img
                  className="h-full w-full rounded-3xl object-cover transition-transform duration-700 hover:scale-105"
                  src="https://cuberto.com/assets/uploads/016aefcc0949accfcd0c31034dec17d6_d25cd7a401_w1080.webp"
                  alt=""
                />
              </div>
              <div className="right flex-1 flex flex-col justify-center items-start px-2 sm:px-5">
                <a href="/not-found" className="px-2 py-1 text-[12px] uppercase border border-white rounded-3xl inline-block">
                  Design Course
                </a>
                <h1 className="text-2xl sm:text-4xl max-w-[25ch] font-normal mt-2">
                  Cuberto Mouse Follower
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-gray-400 mt-2">
                  4/11/2022
                </p>
              </div>
            </div>
          </div>
  
          {/* Button */}
          <div className="button flex justify-center items-center">
          <button
    className="relative px-8 py-4 border text-base sm:text-lg border-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-auto"
    type="button"
    aria-label="Learn more about our services"
  >
    {/* Fill Layer */}
    <span className="absolute inset-0 w-full h-full rounded-full bg-white transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>

    {/* Text Layer */}
    <span className="relative z-10 text-white mix-blend-difference transition-colors duration-300">
      View Our Blog
    </span>
  </button>
          </div>
        </div>
      </div>
    );
  }
  