
import { Film, Play, User, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-playfair font-bold text-gradient">JS</a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#films" className="nav-link">
              <Film className="inline-block w-4 h-4 mr-2" />
              Films
            </a>
            <a href="#showreel" className="nav-link">
              <Play className="inline-block w-4 h-4 mr-2" />
              Showreel
            </a>
            <a href="#about" className="nav-link">
              <User className="inline-block w-4 h-4 mr-2" />
              About
            </a>
            <a href="#contact" className="nav-link">
              <Mail className="inline-block w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
