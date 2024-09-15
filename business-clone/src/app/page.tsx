import Intro from "@/components/Intro";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Numbers from "@/components/Numbers";
import SuccessStories from "@/components/SuccessStories";
import GetInTouch from "@/components/GetInTouch";


export default function Home() {
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
      <Numbers/>
     </section>
     <section id="4">
      <SuccessStories/>
      <Contact/>
     </section>
     <section id="5">
      <Team/>
     </section>
     <section id="6">
      <GetInTouch/>
     </section>
     <section id="7">
      <FAQ/>
     </section>
    </main>
  );
}
