"use client";

import { Heart, Users, Leaf } from "lucide-react";
import { PassionCard } from "./PassionCard";
import { AboutContent } from "./AboutContent";
import { AboutQuote } from "./AboutQuote";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function About() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  
  const passions = [
    {
      icon: Heart,
      title: "Human-Centered Design",
      description:
        "Putting users at the heart of every decision, creating experiences that truly resonate.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Connection & Community",
      description:
        "From performing on stage to volunteering, I thrive on bringing people together.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Leaf,
      title: "Wellness & Balance",
      description:
        "Inspired by yoga, nature, and mindful living to create harmonious digital spaces.",
      color: "text-secondary-foreground",
      bgColor: "bg-secondary",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Organic background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 right-0 w-72 h-72 bg-accent/10 organic-blob-2 animate-float"
          style={{ animationDelay: "2s" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"
          aria-hidden="true"
        />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-semibold mb-4"
          >
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.about.passions.title}
          </p>
        </div>

        {/* Asymmetric layout */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left side - Main content (larger) */}
          <div className="lg:col-span-7 space-y-8">
            <AboutContent />
          </div>

          {/* Right side - Passion cards (smaller, stacked) */}
          <div className="lg:col-span-5 space-y-6">
            {passions.map((passion, index) => (
              <PassionCard key={index} {...passion} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom decorative quote */}
        <AboutQuote />
      </div>
    </section>
  );
}
