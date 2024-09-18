'use client'
import React, { useEffect, useState } from 'react'
import CareerIntro from '@/components/careerIntro'
import CareerForm from '@/components/careerForm'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Career() {
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
    <main>
      <section>
         <CareerIntro />
      </section>
      <div>
      <CareerForm />
      </div>
       <a href="#">
  <KeyboardArrowUpIcon
    className={`fixed bottom-8 right-4 bg-blue-400 text-white z-10 w-16 h-16 p-2 rounded-full transition-opacity duration-500 ease-in-out ${
      scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  />
</a>
    </main>
  )
}

export default Career
