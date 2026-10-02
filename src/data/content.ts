export type NavLink = {
  href: string;
  label: string;
};

export type Skill = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  liveUrl: string;
};

export type ContactLink = {
  label: string;
  text: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills: Skill[] = [
  {
    title: "Custom-Coded",
    description:
      "Building unique, fully customized websites with a personalized user experience and code.",
  },
  {
    title: "Shopify",
    description:
      "Developing and customizing Shopify stores with user-friendly designs and functionality.",
  },
  {
    title: "WordPress",
    description: "Creating dynamic websites using WordPress with custom themes and plugins.",
  },
  {
    title: "SEO",
    description: "Optimizing websites for search engines to improve visibility and ranking.",
  },
];

export const projects: Project[] = [
  {
    title: "Nimmy",
    description:
      "A personal portfolio showcasing skills, projects, and professional experience.",
    liveUrl: "https://nimmy.fr",
  },
  {
    title: "SaveraaINT",
    description:
      "A global IT solutions provider offering innovative technology services and products.",
    liveUrl: "https://saveraaintl.com/",
  },
  {
    title: "Libras Chemical",
    description:
      "A leading supplier of electroplating chemicals and industrial solutions for various industries.",
    liveUrl: "https://libraschemical.com.pk/",
  },
  {
    title: "Nail Care Academy",
    description:
      "A leading supplier of electroplating chemicals and industrial solutions for various industries.",
    liveUrl: "https://www.nailcareacademy.com/",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    text: "nabeel12sheikh@gmail.com",
    href: "mailto:nabeel12sheikh@gmail.com",
  },
  {
    label: "GitHub",
    text: "Nabeelsheikh-22",
    href: "https://github.com/Nabeelsheikh-22?tab=repositories",
  },
  {
    label: "LinkedIn",
    text: "Nabeel Sheikh",
    href: "https://www.linkedin.com/feed?nis=true",
  },
];
