// Site configuration and content data
export const site = {
  name: "Güzide Güzelbey Esengün",
  title: "Güzide Güzelbey Esengün - Full-Stack Developer & Designer",
  description: "Designer turned Developer with a foundation in Industrial Product Design, user research, and usability. Building full-stack digital products with React, Next.js, Node.js, and modern web technologies.",
  email: "guzide.guzelbey@gmail.com",
  github: "https://github.com/GuzideGuzelbey",
  linkedin: "https://linkedin.com/in/guzide-guzelbeyesengun",
  location: "Aarhus, Denmark",
  tagline: "Bridging Design Thinking with Development Craft",
  bio: "Product person at heart, always chasing the new. I used to be the creative maker using mind and hands - creating products, performing on stage. Now I build software the same way: structured, collaborative, endlessly curious. I feel alive working with people, experimenting with new tech, and bridging disciplines.",
  languages: ["English (Fluent)", "Danish (Intermediate)", "Turkish (Native)"]
};

export const projects = [
  {
    id: '1',
    title: 'Donna Vino ApS - E-commerce Wine Store',
    description: 'Built responsive, user-facing e-commerce features using modern frontend technologies. Developed frontend components with React, Next.js, and Tailwind CSS, ensuring responsive design. Integrated with Express.js APIs and implemented unit tests using Jest and Cypress.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Express.js', 'Jest', 'Cypress'],
    github: 'https://github.com/Donna-Vino-Aps/donna-vino-ecommerce',
    live: '',
  },
  {
    id: '2',
    title: 'HYF Awdiseli - TypeScript Project',
    description: 'A TypeScript-based project demonstrating modern web development practices with type safety and clean architecture.',
    tech: ['TypeScript', 'React', 'Node.js'],
    github: 'https://github.com/kiko-bkr/hyf-adwiseli',
  },
  {
    id: '3',
    title: 'Meal Sharing Platform',
    description: 'A community platform for sharing meals, built with JavaScript and modern web technologies.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/GuzideGuzelbey/meal-sharing',
  },
  {
    id: '4',
    title: 'Memory Game',
    description: 'An interactive memory game built with vanilla JavaScript, demonstrating DOM manipulation and game logic.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/GuzideGuzelbey/Mem-MemoryGame',
  },
  {
    id: '5',
    title: 'ReDI GFM React Seekfestival',
    description: 'A React-based festival seeking application developed during ReDI School training.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/GuzideGuzelbey/redi-GFM-react-seekfestival',
  },
];

export const skills = {
  frontend: [
    { name: 'React', level: 4 },
    { name: 'Next.js', level: 4 },
    { name: 'TypeScript', level: 4 },
    { name: 'JavaScript', level: 5 },
    { name: 'HTML5', level: 5 },
    { name: 'CSS3', level: 5 },
    { name: 'Tailwind CSS', level: 4 },
  ],
  backend: [
    { name: 'Node.js', level: 3 },
    { name: 'Express.js', level: 3 },
    { name: 'Python', level: 2 },
    { name: 'MySQL', level: 3 },
    { name: 'PostgreSQL', level: 3 },
  ],
  testing: [
    { name: 'Jest', level: 4 },
    { name: 'Cypress', level: 4 },
    { name: 'Accessibility Testing', level: 5 },
  ],
  tools: [
    { name: 'Git', level: 4 },
    { name: 'Docker', level: 2 },
    { name: 'Postman', level: 4 },
  ],
  design: [
    { name: 'Figma', level: 5 },
    { name: 'Adobe Photoshop', level: 4 },
    { name: 'Adobe Illustrator', level: 4 },
    { name: 'User Research', level: 5 },
    { name: 'Usability Testing', level: 5 },
  ],
};

export const experience = [
  {
    id: '1',
    company: 'Donna Vino ApS',
    role: 'Full-Stack Developer Intern',
    description: 'Built responsive, user-facing e-commerce features using modern frontend technologies. Developed frontend components with React, Next.js, and Tailwind CSS. Wrote unit tests using Jest and Cypress. Conducted code reviews and participated in daily standups, planning, and retrospectives.',
    period: 'Jul 2025 - Sep 2025',
    location: 'Copenhagen, Denmark',
  },
  {
    id: '2',
    company: 'uTest',
    role: 'Software Tester',
    description: 'Tested 30+ digital products across e-commerce, retail, and entertainment domains. Conducted functional, smoke, and regression testing across web and mobile platforms. Documented detailed bug reports with reproduction steps, severity assessment, and impact analysis.',
    period: 'May 2023 - Jul 2025',
    location: 'Remote, USA',
  },
  {
    id: '3',
    company: 'Istanbul Technical University',
    role: 'Research & Teaching Assistant, Industrial Product Design',
    description: 'Led quality evaluation for 200+ design projects annually. Taught Rhinoceros 3D CAD, Model Making, Visual Communication Design, and User Experience Design. Mentored 200+ students yearly in design thinking, prototyping, and systematic problem-solving.',
    period: 'Jun 2014 - Sep 2021',
    location: 'Istanbul, Turkey',
  },
];
