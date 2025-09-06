    export default function Footer() {
        return (
        <div className="bg-black px-6 sm:px-12 py-12">
            {/* First Section */}
            <div className="first flex flex-col sm:flex-row justify-between gap-8 sm:gap-16">
            {/* Left Side */}
            <div className="left flex flex-col sm:flex-row gap-8">
                <div>
                <a href="mailto:Info@cuberto.com" className="inline-block border border-white rounded-full text-white px-3 py-1 mb-2 hover:bg-white hover:text-black transition-colors">
                    Info@cuberto.com
                </a>
                <p className="text-white font-semibold text-sm max-w-[30ch]">
                    <span className="text-gray-400 text-sm font-light uppercase">Main office </span> 901 N Pitt Street Alexandria VA, 22314
                </p>
                </div>
                <div className="gap-4">
                <a href="tel:+13015499309" className="inline-block border border-white rounded-full text-white px-3 py-1 mb-2 hover:bg-white hover:text-black transition-colors">+1 301 549 9309</a>
                <p className="text-white font-semibold text-sm max-w-[30ch]">
                    <span className="text-gray-400 text-sm font-light uppercase">Second office</span> Na Perstyne 342/1, 11000 Prague</p>
                </div>
            </div>
    
            {/* Right Side (Grid with 2 cols, 3 rows) */}
            <div className="right grid grid-cols-2 gap-x-8 gap-y-3">
                <a className="text-white text-[1.2rem]" href="/not-found">
                Services
                </a>
                <a className="text-white text-[1.2rem]" href="/not-found">
                Company
                </a>
                <a className="text-white text-[1.2rem]" href="/not-found">
                Projects
                </a>
                <a className="text-white text-[1.2rem]" href="/not-found">
                Blog
                </a>
                <a className="text-white text-[1.2rem]" href="/not-found">
                Workflow
                </a>
                <a className="text-white text-[1.2rem]" href="/not-found">
                Contact
                </a>
            </div>
            </div>
    
            {/* Divider line */}
            <div className="border-t border-gray-700 my-8"></div>
    
            {/* Second Section */}
            <div className="second flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="left text-center sm:text-left">
                <a className="text-white font-semibold text-sm block mb-1" href="">
                Privacy Policy
                </a>
                <p className="text-gray-500 text-sm font-bold">2025, Cuberto</p>
            </div>
            <div className="right flex flex-wrap justify-center sm:justify-end gap-4">
  <a className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-white/10" href="">
    <img className="h-[24px] w-[24px] invert brightness-0" src="/youtube.png" alt="YouTube" />
  </a>
  <a className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-white/10" href="">
    <img className="h-[24px] w-[24px] invert brightness-0" src="/instagram.png" alt="Instagram" />
  </a>
  <a className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-white/10" href="">
    <img className="h-[24px] w-[24px] invert brightness-0" src="/facebook.png" alt="Facebook" />
  </a>
  <a className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-white/10" href="">
    <img className="h-[24px] w-[24px] invert brightness-0" src="/github.png" alt="GitHub" />
  </a>
  <a className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-white/10" href="">
    <img className="h-[24px] w-[24px] invert brightness-0" src="/ball-of-basketball.png" alt="Basketball" />
  </a></div>

            </div>
        </div>
        );
    }
    