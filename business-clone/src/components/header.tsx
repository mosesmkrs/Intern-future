'use client'
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`flex z-50 justify-between px-8 py-5 text-xl fixed w-full transition-colors duration-300 ${
        scrolled ? 'bg-[#002e57]' : 'bg-transparent'
      }`}
    >
      <div>
        <a href="#">MKRS</a>
      </div>

      <div className='flex gap-8'>
        <a className='transition-colors duration-300 hover:text-blue-400 hover:underline' href="#1">Home</a>
        <a className='transition-colors duration-300 hover:text-blue-400 hover:underline' href="#2">About</a>
        <a className='transition-colors duration-300 hover:text-blue-400 hover:underline' href="#3">Services</a>
        <a className='transition-colors duration-300 hover:text-blue-400 hover:underline' href="#4">Success Stories</a>
        <a className='transition-colors duration-300 hover:text-blue-400 hover:underline' href="#5">Team</a>
        <a className='transition-colors duration-300 hover:text-blue-400 hover:underline' href="/career">Career</a>
        <a className='transition-colors duration-300 hover:text-blue-400 hover:underline' href="#7">Contact</a>
        <a className='transition-colors duration-300 hover:text-blue-400 hover:underline' href="#8">FAQ</a>
      </div>
    </header>
  );
}
