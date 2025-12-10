"use client";

import { site } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function Header() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const t = getTranslation(language);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("main")?.focus();
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>
      
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg font-semibold hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
          aria-label="Go to home"
        >
          GG
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-200" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm p-2"
                  >
                    {item.label}
                  </button>
                ))}

                <div className="border-t pt-4 mt-4 space-y-4">
                  <div className="flex items-center gap-2 p-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                  </div>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-2"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email</span>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${site.email}`} aria-label="Send email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <div className="w-px h-6 bg-border mx-1" aria-hidden="true" />
          </div>

          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
