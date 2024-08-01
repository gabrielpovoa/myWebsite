import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import sushi from "../../public/sushi.png";
import mobile from "../../public/mobile.png";
import vegetation from "../../public/vegetation.png";
import synonym from "../../public/synonym.png";
import firebaseGalery from "../../public/firebaseGalery.jpg";
import multform from "../../public/multform.jpg";
import devPetshop from "../../public/devPetShop.png";
import restaurantFood from "../../public/restaurantFood.png";
import CoffiShop from "../../public/CoffiShop.png";
import TurismoAgencyYT from "../../public/TurismoAgencyYT.png";
import urna from "../../public/urna.png";
import movie from "../../public/movie.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Analise e Desenvolvimento de Sistemas",
    location: "Porto Alegre - RS",
    description:
      "My graduation degree is still in progress.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Canoas - RS (Remote)",
    description:
      "I worked as a full-stack developer and support analyst for 7 months. It was my first experience, where I learned a lot about Git, Git Flow, PHP, and the Scrum methodology. I also upskilled my front-end skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Front End Jr Developer",
    location: "Porto Alegre, RS (Remote)",
    description:
      "One of my amazing experiences as a web developer I was working extensively with WordPress, some Laravel, and Vue.js. Here, I developed larger projects like Nora Teixeira, Avanti, Rossi, Baldo, and assisted in refactoring Redemac. One of my pleasures of working here was building campaigns like Prasuperar and Empresa Gaúcha, where we found a way to help our state and people who need donations.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Sushi",
    url: "https://gabrieldelsushi.vercel.app/",
    description:
      "A project that was supposed to be only a prototype, made with mates from the university.",
    tags: ["React", "TypeScript", "Next.js", "shadcn-ui", "Tailwind", "ZOD", "React Hook Form", "WhatsApp API"],
    imageUrl: sushi,
  },
  {
    title: "Rats movie",
    url: "https://github.com/gabrielpovoa/RnLoginView?tab=readme-ov-file",
    description:
      "A react native app to see movies that contains rats",
    tags: ["React Native", "TypeScript", "Expo", "Styled Components"],
    imageUrl: mobile,
  },
  {
    title: "Vegetation",
    url: "https://visionary-puffpuff-3d52d3.netlify.app/",
    description:
      "Website created using React to write the code and chatgpt to generate data informatin",
    tags: ["React", "Styled-Components", "ChatGPT", "JSON", "VITE"],
    imageUrl: vegetation,
  },
  {
    title: "Synonyms web app",
    url: "https://638a0f0cf62a072546df95b4--fastidious-longma-67c81f.netlify.app/",
    description:
      "A public web app for quick English Synonym",
    tags: ["React", "TypeScript", "API", "Styled-Components"],
    imageUrl: synonym,
  },
  {
    title: "Firebase Gallery",
    url: "https://github.com/gabrielpovoa/gallery-firebase-app",
    description:
      "A public web app for quick upload of images.",
    tags: ["React", "TypeScript", "FireBase", "UUID", "Styled-Components"],
    imageUrl: firebaseGalery,
  },
  {
    title: "Multi-Form",
    url: "https://github.com/gabrielpovoa/gallery-firebase-app",
    description:
      "Multipart form designed by b7web",
    tags: ["React", "TypeScript", "Styled-Components", "ContextAPI", "React Router Dom"],
    imageUrl: multform,
  },
  {
    title: "DevPetShop",
    url: "https://github.com/gabrielpovoa/node-ts-canil",
    description:
      "Petshop website developed using mvc concepts",
    tags: ["Node", "TypeScript", "css", "MVC", "Express", "Mustache"],
    imageUrl: devPetshop,
  },
  {
    title: "Restaurant",
    url: "https://gabrielpovoa.github.io/restaurantFood/",
    description:
      "Retaurant Website all developed in html and css3 usind slide library",
    tags: ["HTML5", "CSS3", "JavaScript", "SlickSlider", "JQuery"],
    imageUrl: restaurantFood,
  },
  {
    title: "CoffiShop",
    url: "https://gabrielpovoa.github.io/CoffiShop/",
    description:
      "Coffee Shop was a website that I created when I was improving my web skills, I made it watching videos on youtube.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    imageUrl: CoffiShop,
  },
  {
    title: "TurismoAgencyYT",
    url: "https://gabrielpovoa.github.io/TurismoAgencyYT/",
    description:
      "WebPage made in HTML5, CSS3, and Vanilla JS overall. I've been feeling some difficulties in JS and this construction helped a lot to improve some skills, and the responsivity in CSS, I'll put a gif below to show how it looks",
    tags: ["HTML5", "CSS3", "JavaScript"],
    imageUrl: TurismoAgencyYT,
  },
  {
    title: "Urna Votação",
    url: "https://github.com/gabrielpovoa/Urna-B7WEB",
    description:
      "Creation of the electronic voting machine made as an exercise by B7WEB.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    imageUrl: urna,
  },
  {
    title: "Movies currently showing",
    url: "https://thunderous-fox-07b3db.netlify.app/",
    description:
      "Movies on cinema",
    tags: ["REACT", "TYPESCRIPT", "API", "Styled-Components"],
    imageUrl: movie,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "GitLab",
  "GitFlow",
  "Wordpress",
  "PHP",
  "Styled-Components",
  "Shadcn/UI",
  "Tailwind",
  "Framer Motion",
  "MySQL",
  "Redux",
  "Express",
] as const;