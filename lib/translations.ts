// Translation data for English and Danish
export type Language = "en" | "da";

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      tagline: "Bridging Design Thinking with Development Craft",
      description: "Designer turned Developer with a foundation in Industrial Product Design, user research, and usability. Building full-stack digital products with React, Next.js, Node.js, and modern web technologies.",
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
      scrollDown: "Scroll down to explore",
    },
    about: {
      title: "About Me",
      quote: "Product person at heart, always chasing the new. I used to be the creative maker using mind and hands - creating products, performing on stage. Now I build software the same way: structured, collaborative, endlessly curious. I feel alive working with people, experimenting with new tech, and bridging disciplines.",
      passions: {
        title: "What Drives Me",
        items: [
          {
            title: "Design Thinking",
            description: "Applying user-centered design principles to create intuitive digital experiences",
          },
          {
            title: "Full-Stack Development",
            description: "Building end-to-end solutions with modern web technologies",
          },
          {
            title: "Continuous Learning",
            description: "Always exploring new technologies and methodologies",
          },
        ],
      },
      languages: "Languages",
      languagesList: ["English (Fluent)", "Danish (Intermediate)", "Turkish (Native)"],
    },
    experience: {
      title: "Experience",
      volunteer: {
        title: "Volunteer Work",
        items: [
          {
            organization: "HackYourFuture Denmark",
            role: "Mentor & Teaching Assistant",
            description: "Mentoring aspiring developers in web development fundamentals, code reviews, and career guidance.",
            period: "2024 - Present",
          },
        ],
      },
    },
    projects: {
      title: "Featured Projects",
      viewCode: "View Code",
      viewLive: "Live Demo",
      allProjects: "View All Projects on GitHub",
    },
    skills: {
      title: "Skills & Technologies",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        testing: "Testing",
        tools: "Tools",
        design: "Design",
      },
    },
    contact: {
      title: "Get In Touch",
      description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        message: "Message",
        messagePlaceholder: "Your message...",
        send: "Send Message",
        sending: "Sending...",
      },
      info: {
        email: "Email",
        location: "Location",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
    },
  },
  da: {
    nav: {
      about: "Om Mig",
      experience: "Erfaring",
      projects: "Projekter",
      skills: "Færdigheder",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hej, jeg er",
      tagline: "Brobygger mellem Designtænkning og Udviklingshåndværk",
      description: "Designer vendt Udvikler med baggrund i Industrielt Produktdesign, brugerundersøgelser og brugervenlighed. Bygger full-stack digitale produkter med React, Next.js, Node.js og moderne webteknologier.",
      viewWork: "Se Mit Arbejde",
      getInTouch: "Kontakt Mig",
      scrollDown: "Scroll ned for at udforske",
    },
    about: {
      title: "Om Mig",
      quote: "Produktperson i hjertet, altid på jagt efter det nye. Jeg plejede at være den kreative skaber, der brugte sind og hænder - skabte produkter, optrådte på scenen. Nu bygger jeg software på samme måde: struktureret, samarbejdende, endeløst nysgerrig. Jeg føler mig levende, når jeg arbejder med mennesker, eksperimenterer med ny teknologi og bygger bro mellem discipliner.",
      passions: {
        title: "Hvad Driver Mig",
        items: [
          {
            title: "Designtænkning",
            description: "Anvender brugercentrerede designprincipper til at skabe intuitive digitale oplevelser",
          },
          {
            title: "Full-Stack Udvikling",
            description: "Bygger end-to-end løsninger med moderne webteknologier",
          },
          {
            title: "Kontinuerlig Læring",
            description: "Udforsker altid nye teknologier og metoder",
          },
        ],
      },
      languages: "Sprog",
      languagesList: ["Engelsk (Flydende)", "Dansk (Mellem)", "Tyrkisk (Modersmål)"],
    },
    experience: {
      title: "Erfaring",
      volunteer: {
        title: "Frivilligt Arbejde",
        items: [
          {
            organization: "HackYourFuture Danmark",
            role: "Mentor & Undervisningsassistent",
            description: "Mentorerer håbefulde udviklere i webudviklingsfundamenter, kodegennemgange og karrierevejledning.",
            period: "2024 - Nu",
          },
        ],
      },
    },
    projects: {
      title: "Udvalgte Projekter",
      viewCode: "Se Kode",
      viewLive: "Live Demo",
      allProjects: "Se Alle Projekter på GitHub",
    },
    skills: {
      title: "Færdigheder & Teknologier",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        testing: "Test",
        tools: "Værktøjer",
        design: "Design",
      },
    },
    contact: {
      title: "Kontakt Mig",
      description: "Jeg er altid åben for at diskutere nye projekter, kreative ideer eller muligheder for at være en del af din vision.",
      form: {
        name: "Navn",
        namePlaceholder: "Dit navn",
        email: "Email",
        emailPlaceholder: "din.email@eksempel.dk",
        message: "Besked",
        messagePlaceholder: "Din besked...",
        send: "Send Besked",
        sending: "Sender...",
      },
      info: {
        email: "Email",
        location: "Placering",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      rights: "Alle rettigheder forbeholdes.",
      builtWith: "Bygget med",
    },
  },
};

export function getTranslation(language: Language) {
  return translations[language];
}
