"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { Skills } from "@/components/sections/Skills/Skills";
import { Projects } from "@/components/sections/Projects/Projects";
import { Experience } from "@/components/sections/Experience/Experience";
import { Contact } from "@/components/sections/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
