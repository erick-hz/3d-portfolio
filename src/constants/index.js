import { meta, techMahindra, kaiber, pixelbot } from "../assets/images"
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Tech Mahindra (Scotiabank)",
    icon: techMahindra,
    iconBg: "#ed0722",
    date: "July 2024 - Present",
    points: [
      "Development and maintenance of components using React JS and Redux Toolkit.",
      "Integration and communication with APIs, leveraging Redux for state management.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality microservice-based front-end products.",
      "Implementing responsive design and ensuring cross-browser compatibility for microservices.",
      "Participating in code reviews and providing constructive feedback to other developers, ensuring adherence to best practices."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Kaiber",
    icon: kaiber,
    iconBg: "#000",
    date: "June 2023 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Pixelbot",
    icon: pixelbot,
    iconBg: "#fbc3bc",
    date: "July 2021 - July 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
]

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "https://erickdev.netlify.app/",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/erick-hz",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/erick-hernandez-93361618b/",
  },
]

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Scotiabank",
    description:
      "Scotiabank uses a modern architecture with backend and frontend microservices in React and Redux Toolkit, hosted on cloud platforms like GCP, Azure, and AWS. This setup enables scalable, independent application development and supports agile practices for efficient operations.",
    link: "https://www.scotiabank.com/ca/en/personal.html",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-red",
    name: "Kaiber",
    description:
      " Kaiber's website uses React and Redux specifically. Kaiber's platform is focused on AI-enhanced creative tools, such as their Superstudio product, which integrates AI models for generating and manipulating multimedia content. ",
    link: "https://kaiber.ai/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Kaiber App",
    description: "AI Art Lab: Artist-Built",
    link: "https://apps.apple.com/us/app/kaiber/id6458980808",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Personal porfolio",
    description: "I build things for the web.",
    link: "https://erickdev.netlify.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Marble Slab Canada",
    description:
      "Get your favourite treats with the NEW MARBLE SLAB mobile ordering app.",
    link: "https://apps.apple.com/us/app/marble-slab-canada/id1599580387",
  }
]