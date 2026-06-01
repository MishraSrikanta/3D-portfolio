import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  nina,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  jira,
  niam,
  eva,
  autoCad,
  makerjs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Three.js Developer",
    icon: mobile,
  },
  {
    title: "Angular Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "jira",
    icon: jira,
  },
  {
    name: "autoCad",
    icon: autoCad,
  },
  {
    name: "Maker JS",
    icon: makerjs,
  },
];

const experiences = [
  {
    title: "Project Engineer",
    company_name: "Nina Percept Pvt Ltd.",
    icon: nina,
    iconBg: "#111111",
    date: "Jun 2019 - Jun 2020",
    duration: "1 Year",
    points: [
      "Lead project development initiatives and coordinated cross-functional teams.",
      "Managed project timelines and ensured delivery of high-quality solutions.",
      "Implemented technical solutions for complex engineering challenges.",
      "Collaborated with stakeholders to gather requirements and deliver results.",
    ],
  },
  {
    title: "Soft-skill & IT Trainer",
    company_name: "NIAM",
    icon: niam,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Feb 2022",
    duration: "0.6 Years",
    points: [
      "Trained and mentored team members in soft-skill development and professional growth.",
      "Conducted IT training sessions for diverse groups and skill levels.",
      "Developed training materials and curriculum for effective knowledge transfer.",
      "Improved team communication and collaboration through structured workshops.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Eva",
    icon: eva,
    iconBg: "#0084FF",
    date: "Feb 2022 - Present",
    duration: "5+ Years (Lead)",
    points: [
      "Lead a team of 8 developers in designing and implementing scalable applications.",
      "Architected solutions using React.js, Node.js, and modern technologies.",
      "Mentored junior developers and established best practices for code quality.",
      "Delivered high-impact projects resulting in 50% performance improvements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Normal Portfolio Site",
    description:
      "First and simple portfolio website using HTML, CSS and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://vwdajpgaeygfm7o2csaywq-on.drv.tw/site/portifolio/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
