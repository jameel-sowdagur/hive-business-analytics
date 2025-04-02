
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <svg width="220" height="60" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform scale-110">
            {/* Hexagons forming honeycomb pattern */}
            <g transform="translate(10, 10) scale(0.8)">
              <polygon points="15,0 30,8.66 30,26 15,34.66 0,26 0,8.66" fill="#f2c94c" stroke="#e6b32e" strokeWidth="1"/>
              <polygon points="35,0 50,8.66 50,26 35,34.66 20,26 20,8.66" fill="#f2c94c" stroke="#e6b32e" strokeWidth="1"/>
              <polygon points="25,17.32 40,25.98 40,43.32 25,52 10,43.32 10,25.98" fill="#f2c94c" stroke="#e6b32e" strokeWidth="1"/>
             
              {/* Charts/graphs inside hexagons */}
              <g transform="translate(7, 13) scale(0.5)">
                <rect x="0" y="0" width="3" height="15" fill="#4d3e5a"/>
                <rect x="5" y="4" width="3" height="11" fill="#4d3e5a"/>
                <rect x="10" y="2" width="3" height="13" fill="#4d3e5a"/>
                <rect x="15" y="7" width="3" height="8" fill="#4d3e5a"/>
              </g>
             
              <g transform="translate(27, 13) scale(0.5)">
                <path d="M0,15 L5,10 L10,12 L15,5 L20,8" stroke="#4d3e5a" strokeWidth="2" fill="none"/>
              </g>
             
              <g transform="translate(17, 30) scale(0.5)">
                <circle cx="10" cy="10" r="10" fill="#4d3e5a"/>
                <path d="M10,10 L10,0" stroke="#f2c94c" strokeWidth="2"/>
                <path d="M10,10 L17,13" stroke="#f2c94c" strokeWidth="2"/>
              </g>
            </g>
           
            {/* Text */}
            <g transform="translate(65, 25)">
              <text fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" fill="#4d3e5a">HIVE</text>
              <text transform="translate(50, 0)" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" fill="#f2c94c">DATA</text>
            </g>
            <text x="65" y="40" fontFamily="Arial, sans-serif" fontSize="10" fill="#4d3e5a">ANALYTICS</text>
          </svg>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-hive-gray hover:text-hive-amber transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-hive-gray"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-hive-gray hover:text-hive-amber transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
