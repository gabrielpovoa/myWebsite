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
import masterAi from "../../public/master-ai.png";
import evo from "../../public/evo.png";
import orisha from "../../public/orisha.png";
import login from '../../public/login-php.png';
import cnn from '../../public/cnnScrapper-golang.png';
import restApi  from '../../public/restApi-golang.png';
import gallery from '../../public/gallery-nodejs.png';

import ze from  "../../public/ze-pneus.png";
import italinea from  "../../public/italineaclassmoveis.png";
import clubInfluencia from  "../../public/clube-influencia-ativa.png";


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
    date: "2023 - 🚀",
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
      icon: React.createElement(CgWorkAlt),
      date: "2023 - 2024",
  },
  {
    title: "Front End Jr Developer at Agência Digital Fox3",
    location: "Porto Alegre, RS (On-Site)",
    description:
      "I migrated to this company to deepen my knowledge of WordPress. Since then, I’ve developed numerous projects for amazing and large companies, such as Ze Pneus, and refactored Italinea Class Moveis. Additionally, I’ve provided maintenance for various existing and legacy systems & sites, including Pixels Pub and others built on Magento. I was also hired to migrate some systems to React and Laravel, so I’m continuously expanding my skill set.",
      icon: React.createElement(CgWorkAlt),
      date: "2024 - 11/2024",
  },
  {
    title: "Assitente de Suporte at Able",
    location: "Porto Alegre, RS (Remote)",
    description:
      "Provided technical support to internal users through multiple channels, managed ticket creation, assisted in training new employees, and resolved customer issues and inquiries.",
      icon: React.createElement(CgWorkAlt),
      date: "11/2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Gallery API - Node.Js",
    url: "https://github.com/gabrielpovoa/fitness-gallery",
    description:
      "Node.js and Express-based application designed to manage and showcase fitness galleries. It allows users to create, view, and manage galleries.",
    tags: ["Node.Js", "Typscript", "Javascript", "Express", "Prisma", "MySQL",],
    imageUrl: gallery,
  },
  {
    title: "To do Rest API - Golang",
    url: "https://github.com/gabrielpovoa/apiGolang",
    description:
      "A simple RESTful API built with Go, designed to manage tasks efficiently. This API allows you to create, read, update, and delete (CRUD).",
    tags: ["Golang", "Api", "Postman",],
    imageUrl: restApi,
  },
  {
    title: "CNN Scrappr - Golang",
    url: "https://github.com/gabrielpovoa/cnn-scrapper",
    description:
      "This is a simple Go program that scrapes news titles from the CNN Brasil homepage and saves them into a local JSON file.",
    tags: ["Golang", "Json", "Scrapper",],
    imageUrl: cnn,
  },
  {
    title: "Signup/Login Form PHP & JS",
    url: "https://github.com/gabrielpovoa/form-php",
    description:
      "I built a signup and login system using PHP and JavaScript with three views and implemented JS API requests.",
    tags: ["PHP", "JAVASCRIPT", "API", "CSS"],
    imageUrl: login,
  },
  {
    title: "Learning how to use Chat GPT",
    url: "https://master-ai-use.vercel.app/",
    description:
      "A web application designed to demonstrate how artificial intelligence works and how to maximize its potential.",
    tags: ["React", "TypeScript", "Next.js", "shadcn-ui", "Tailwind", ],
    imageUrl: masterAi,
  },
  {
    title: "Practice: Refactoring an WP site",
    url: "https://refactor-evo-one.vercel.app/",
    description:
      "I decided to refactor a random website and chose Evo One. I rebuilt this website using Next.js.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", ],
    imageUrl: evo,
  },
  {
    title: "Orisha 📿❤️🗝️",
    url: "https://orixalizese.vercel.app/Home",
    description:
      "A website dedicated to promoting the Yoruba culture in Rio Grande do Sul, focusing on raising awareness about the Orishas and their significance.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", ],
    imageUrl: orisha,
  },
  {
    title: "Sushi",
    url: "https://gabrieldelsushi.vercel.app/",
    description:
      "A project that was supposed to be only a prototype, made with mates from the university.",
    tags: ["React", "TypeScript", "Next.js", "shadcn-ui", "Tailwind", "ZOD", "React Hook Form", "WhatsApp API"],
    imageUrl: sushi,
  },
  // {
  //   title: "Ze Pneus",
  //   url: "https://zepneus.com.br/",
  //   description:
  //     "One of the projects I rebuild from scratch on the company I currently work.",
  //   tags: ["PHP", "JavaScript", "Ajax", "WordPress", "Git & Github", "Elementor Pro", "CF7", "WhatsApp API"],
  //   imageUrl: ze,
  // },
  // {
  //   title: "Italinea Class Móveis",
  //   url: "https://italineaclassmoveis.com.br/",
  //   description:
  //     "A legacy website where it wasn't reponsive, so I rebuild with a new layout and colors, but maintaining the structure. I turn it responsive for all kind of screen and finishi within two days",
  //   tags: ["PHP", "JavaScript","WordPress", "Elementor Pro", "WhatsApp API"],
  //   imageUrl: italinea,
  // },
  // {
  //   title: "Clube Fluência Ativa",
  //   url: "#",
  //   description:
  //     "A landing page for an English Teacher; With that one I developed other one: Domine o Inglês",
  //   tags: ["PHP", "JavaScript","WordPress", "Elementor Pro", "WhatsApp API"],
  //   imageUrl: clubInfluencia,
  // },
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
  "Elementor Pro",
  "Ajax",
  "FileZilla",
  "PHP",
  "Styled-Components",
  "Shadcn/UI",
  "Tailwind",
  "Framer Motion",
  "MySQL",
  "Redux",
  "Express",
] as const;