'use client'
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`flex z-50 justify-between px-8 py-5 text-xl fixed w-screen transition-colors duration-300 ${
        scrolled ? 'bg-[#002e57]' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/" className="text-white font-bold">MKRS</a>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Links for larger screens */}
        <nav className="hidden lg:flex gap-8">
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#1"
          >
            Home
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#2"
          >
            About
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#3"
          >
            Services
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#4"
          >
            Success Stories
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#5"
          >
            Team
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/career"
          >
            Career
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#6"
          >
            Contact
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#7"
          >
            FAQ
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#002e57] transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-5">
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#1"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#2"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#3"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#4"
            onClick={toggleMenu}
          >
            Success Stories
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#5"
            onClick={toggleMenu}
          >
            Team
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/career"
            onClick={toggleMenu}
          >
            Career
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#6"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <a
            className="transition-colors duration-300 hover:text-blue-400 hover:underline text-white"
            href="/#7"
            onClick={toggleMenu}
          >
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
