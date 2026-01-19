# Portfolio Website - Güzide Güzelbey Esengün

A modern, accessible, and bilingual portfolio website showcasing my journey from Product Design to Software Development.

## Design Concept

**"The Bridge Studio: Connecting Design & Code"**

This portfolio embodies the concept of bridging design thinking with development craft, featuring:
- Split visual design (Design ↔ Code)
- Interactive journey timeline
- Network-style skills constellation
- Studio-inspired project showcase

## Features

- **Bilingual Support**: Full English/Danish translation with Context API
- **Dark/Light Mode**: Theme switching with system preference detection
- **WCAG 2.2 Compliant**: Fully accessible with proper contrast, ARIA labels, and keyboard navigation
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Respects `prefers-reduced-motion` for accessibility
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Theme**: next-themes
- **Icons**: Lucide React
- **Database**: Supabase (ready for integration)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Custom theme & styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   ├── LanguageToggle.tsx  # Language switcher
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero with split design/code visual
│   │   ├── About.tsx       # Journey timeline
│   │   ├── Skills.tsx      # Skills constellation
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Experience.tsx  # Work experience timeline
│   │   └── Contact.tsx     # Contact form
│   └── ui/                 # shadcn/ui components
├── contexts/
│   └── LanguageContext.tsx # i18n state management
├── config/
│   └── site.ts             # Site configuration
├── lib/
│   ├── mockData.ts         # Mock data (Supabase-ready structure)
│   └── utils.ts            # Utility functions
└── types/
    └── portfolio.ts        # TypeScript interfaces
```

## Key Sections

1. **Hero**: Split visual showcasing design background and development skills
2. **About**: Interactive timeline of career transition journey
3. **Skills**: Categorized skills with proficiency levels
4. **Projects**: Featured projects with tech stack and links
5. **Experience**: Professional timeline with volunteer work
6. **Contact**: Contact form and social links

## Internationalization

The site supports English and Danish with:
- Context API for state management
- localStorage persistence
- Dynamic HTML lang attribute
- Comprehensive translations for all content

## Theme

Custom theme featuring:
- **Light Mode**: Warm neutrals with terracotta accents (Danish minimalism + Turkish warmth)
- **Dark Mode**: Deep backgrounds with warm undertones
- **WCAG AA+ Contrast**: All color combinations meet accessibility standards
- **Color-blind Friendly**: Tested palette for various types of color blindness

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env.local` file for Supabase integration (when ready):

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Schema (Supabase Ready)

The project is structured to easily integrate with Supabase:

- **projects**: Portfolio projects with bilingual content
- **skills**: Technical skills with categories and proficiency
- **experience**: Work history with bilingual descriptions
- **contact_submissions**: Contact form submissions

## Accessibility Features

- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- Screen reader optimization
- Focus indicators
- Skip to content link
- Proper heading hierarchy
- Alt text for images
- Color contrast compliance
- Reduced motion support

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Color Palette

### Light Mode
- Primary: `hsl(15, 65%, 45%)` - Terracotta
- Background: `hsl(30, 15%, 98%)` - Warm white
- Foreground: `hsl(25, 10%, 15%)` - Dark brown

### Dark Mode
- Primary: `hsl(15, 70%, 60%)` - Light terracotta
- Background: `hsl(25, 15%, 8%)` - Deep brown
- Foreground: `hsl(30, 10%, 95%)` - Off white

## License

© 2025 Güzide Güzelbey Esengün. All rights reserved.

## Contact

- **Email**: guzide.guzelbey@gmail.com
- **LinkedIn**: [linkedin.com/in/guzide-guzelbeyesengun](https://linkedin.com/in/guzide-guzelbeyesengun)
- **GitHub**: [github.com/GuzideGuzelbey](https://github.com/GuzideGuzelbey)
- **Location**: Aarhus, Denmark

---

Built with 🤍 using Next.js, TypeScript & Tailwind CSS
