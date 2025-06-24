export const author: string = "Marco Amedura";
export const github: string = "https://github.com/marco-jj";

export const title: string = "Marco Amedura - Software Developer";
export const description: string =
  "I am a self-taught developer who loves to build things for the web. With 5+ years of coding experience, I'm passionate about creating elegant solutions and exploring new technologies. Currently working on exciting projects while remaining open to new opportunities.";
export const country: string = "Italy";

export const FooterSocials = [
  {
    name: "GitHub",
    url: github,
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/marco-amedura/",
    icon: "mdi:linkedin",
  },
  {
    name: "Email",
    url: "mailto:marco@amedura.be",
    icon: "mdi:email",
  },
];

interface Meta {
  title: string;
  description: string;
  keywords: string[];
  ogImage: {
    src: string;
    alt: string;
  };
}

export const defaultMeta: Meta = {
  title: "David Cojocaru - Home",
  description:
    "Discover the portfolio and blog of David Cojocaru, a 16-year-old software developer and cybersecurity enthusiast from Romania. Explore his expertise in web development, programming languages, and more.",
  keywords: [
    "marco amedura",
    "software developer",
    "backend",
    "web development",
    "programming",
    "portfolio",
    "italia",
  ],
  ogImage: {
    src: "/banner.png",
    alt: "David Cojocaru - Home",
  },
};

export interface Category {
  text: string;
  logo: string;
}

export type Technologies = {
  "Web Development": Category[];
  "Development Tools": Category[];
  "Dev Ops": Category[];
  "Operating Systems": Category[];
  "Web Servers": Category[];
  Databases: Category[];
};

export const technologies: Technologies = {
  "Web Development": [
    { text: "Java", logo: "mdi:language-java" },
    { text: "JavaScript", logo: "mdi:language-javascript" },
    { text: "TypeScript", logo: "mdi:language-typescript" },
    { text: "Python", logo: "mdi:language-python" },
    { text: "Node.js", logo: "mdi:nodejs" },
    { text: "Flutter", logo: "mdi:framework-flutter" },
    { text: "Spring Boot", logo: "mdi:framework-springboot" },
    { text: "Spring", logo: "mdi:framework-spring" },
    { text: "NestJS", logo: "mdi:framework-nestjs" },
  ],
  "Development Tools": [
    { text: "Git", logo: "mdi:git" },
    { text: "Subversion", logo: "mdi:subversion" },
    { text: "JetBrains", logo: "mdi:jet-brains" },
  ],
  "Dev Ops": [
    { text: "Docker", logo: "mdi:docker" },
    { text: "GitLab CI/CD", logo: "mdi:gitlab" },
  ],
  "Operating Systems": [
    { text: "Ubuntu", logo: "mdi:ubuntu" },
    { text: "MacOS", logo: "mdi:macos" },
  ],
  "Web Servers": [
    { text: "Tomcat", logo: "cib:tomcat" },
  ],
  Databases: [
    { text: "MySQL", logo: "cib:mysql" },
    { text: "PostgreSQL", logo: "cib:postgres" },
  ],
};
