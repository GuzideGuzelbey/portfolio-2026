"use client";

import { site } from "@/lib/data";
import { HeroBackground } from "./HeroBackground";
import { HeroHeading } from "./HeroHeading";
import { HeroButtons } from "./HeroButtons";
import { HeroScrollIndicator } from "./HeroScrollIndicator";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          {/* Main heading with staggered animation */}
          <HeroHeading />

          {/* Description with organic feel */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {t.hero.description}
          </p>

          {/* CTA buttons with playful interaction */}
          <HeroButtons
            onProjectsClick={() => scrollToSection("projects")}
            onContactClick={() => scrollToSection("contact")}
          />

          {/* Scroll indicator with organic animation */}
          <HeroScrollIndicator onScrollClick={() => scrollToSection("about")} />
        </div>
      </div>
    </section>
  );
}
