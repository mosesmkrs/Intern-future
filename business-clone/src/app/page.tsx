'use client'
import Intro from "@/components/Intro";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Numbers from "@/components/Numbers";
import SuccessStories from "@/components/SuccessStories";
import GetInTouch from "@/components/GetInTouch";
import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Home() {
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
      <section id="1">
        <Intro />
      </section>
      <section id="2">
        <AboutUs />
      </section>
      <section id="3">
        <Services />
        <Numbers />
      </section>
      <section id="4">
        <SuccessStories />
      </section>
      <section id="5">
        <Team />
      </section>
      <section id="6">
        <GetInTouch />
      </section>
      <section id="7">
        <FAQ />
      </section>
      
      <a href="#">
  <KeyboardArrowUpIcon style={{ fontSize: '60px' }}
    className={`fixed bottom-8 right-4 bg-blue-400 text-white z-10  p-2 rounded-full transition-opacity duration-500 ease-in-out ${
      scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  />
</a>

    </main>
  );
}
