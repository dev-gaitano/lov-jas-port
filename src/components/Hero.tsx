
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-film-crew-in-a-movie-production-34123-large.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fadeIn">
          Jasmijn Schrofer
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 opacity-0 animate-fadeIn" style={{animationDelay: "0.3s"}}>
          Film Director
        </p>
        <a
          href="#films"
          className="inline-block px-8 py-3 bg-gold/10 hover:bg-gold/20 border border-gold/50 rounded-lg text-gold transition-all duration-300 opacity-0 animate-fadeIn"
          style={{animationDelay: "0.6s"}}
        >
          Explore My Work
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-foreground/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
