export default function Video() {
    return (
      <div className="h-[50vh] w-full px-6 my-8 sm:h-screen md:px-16 lg:px-32">
        <video
          className="w-full h-full object-cover rounded-2xl"
          src="https://cuberto.com/assets/showreel/short.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    );
  }
  