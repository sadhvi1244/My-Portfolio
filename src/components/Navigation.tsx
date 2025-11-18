import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Approximate navbar height
      const offsetTop = element.offsetTop - navHeight - 20; // Additional padding
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
      w-[92%] md:w-[80%] lg:w-[75%] 
      px-6 py-3 rounded-2xl flex items-center justify-between
      transition-all duration-300
      ${
        isScrolled
          ? "bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.05)]"
          : "bg-white/5 backdrop-blur-xl border border-white/10"
      }`}
    >
      {/* Logo */}
      <button
        onClick={() => scrollToSection("home")}
        className="text-xl font-extrabold text-white tracking-wider hover:opacity-80 transition "
      >
        SK
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="relative text-sm font-medium text-white/80 hover:text-white transition group"
          >
            {link.name}

            {/* Hover underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Search Icon (desktop only) */}
      <button
        className="hidden md:flex items-center justify-center h-9 w-9 rounded-full 
        bg-white/5 border border-white/10 backdrop-blur-lg
        hover:bg-white/10 transition shadow-[0_0_15px_rgba(255,255,255,0.1)]"
      >
        <Search size={18} className="text-white/80" />
      </button>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </Button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-full mt-3 left-0 right-0 
        bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 
        p-4 md:hidden animate-[slideDown_0.3s_ease]"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left py-3 px-3 text-white/80 hover:text-white 
              hover:bg-white/10 rounded-lg transition"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
