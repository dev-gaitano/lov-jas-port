const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
        >
          <source
            src="https://customer-f2t2k1l80a7h8r15.cloudflarestream.com/1e250fd990852516ffb8ca7dbb5391e2/manifest/video.m3u8"
            type="application/x-mpegurl"
          />
          <source
            src="https://customer-f2t2k1l80a7h8r15.cloudflarestream.com/1e250fd990852516ffb8ca7dbb5391e2/downloads/default.mp4"
            type="video/mp4"
          />
        </video> */}
        <img
          src="./assets/Jasmijn Unmask-photography.png"
          alt=""
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
        />
      </div>

      {/* Overlay with enhanced gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-background/70 to-background"></div> */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-gold/5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black/50 via-transparent to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn text-white">
          Jasmijn Schrofer
        </h1>
        <p
          className="text-xl md:text-2xl text-white/80 mb-8 animate-fadeIn"
          style={{ animationDelay: "0.3s" }}
        >
          Film Director
        </p>
        <p
          className="max-w-2xl mx-auto text-lg text-white/70 mb-8 animate-fadeIn"
          style={{ animationDelay: "0.45s" }}
        >
          Crafting compelling narratives through the lens of cinema
        </p>
        <a
          href="#films"
          className="inline-block px-8 py-3 bg-gold/10 hover:bg-gold/20 border border-gold/50 rounded-lg text-gold transition-all duration-300 animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        >
          Explore My Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
