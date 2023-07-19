import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiAntdesign,
  SiGit,
  SiI18Next,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import spotify from "../assets/spotify.jpeg";
import onlineStore from "../assets/onlineStore.jpeg";
import asyncRace from "../assets/asyncRace.png";
import songBird from "../assets/songBird.jpeg";
import onlineZoo from "../assets/onlineZoo.jpeg";
import findGithub from "../assets/findGithub.jpeg";
import presRevealjs from "../assets/presRevealjs.jpeg";
import lawyers from "../assets/lawyers.jpeg";
import goCorona from "../assets/goCorona.jpeg";
import lostShirt from "../assets/lostShirt.jpeg";
import dndCalc from "../assets/dndCalc.jpeg";
import guess from "../assets/guess.jpeg";

export const techStackData = [
  { id: 1, icon: <FaHtml5 size="50px" color="#E44F26" /> },
  { id: 2, icon: <FaCss3Alt size="50px" color="#1572B6" /> },
  { id: 3, icon: <FaJs size="50px" color="#F5DE19" /> },
  { id: 4, icon: <FaReact size="50px" color="#00D8FF" /> },
  { id: 5, icon: <SiTypescript size="50px" color="#1572B6" /> },
  { id: 6, icon: <FaBootstrap size="50px" color="#563D7C" /> },
  { id: 7, icon: <SiAntdesign size="50px" color="#1890ff" /> },
  { id: 8, icon: <FaGithub size="50px" color="#1572B6" /> },
  { id: 9, icon: <SiGit size="50px" color="#DE4C36" /> },
  { id: 10, icon: <SiI18Next size="50px" color="#4baf4f" /> },
  { id: 11, icon: <SiWebpack size="50px" color="#8ed6fb " /> },
  { id: 12, icon: <TbBrandVscode size="50px" color="#1F9CF0" /> },
];

export const projectData = [
  {
    id: 24,
    src: `${guess}`,
    name: "Guess My Number!",
    description: "Individual project",
    code: "https://github.com/MarinaZai/Course-Jonas/tree/GuessMyNumber",
    deploy: "https://guessnumberplay.netlify.app/",
    stack: "HTML,CSS,JS",
  },
  {
    id: 23,
    src: `${dndCalc}`,
    name: "DND Conctructor calculator",
    description: "Individual project",
    code: "https://github.com/MarinaZai/DND-Calculator/pull/1",
    deploy: "https://dnd-calc-m-z.netlify.app/",
    stack: "React,TypeScript,React-beautiful-dnd, uuid",
  },
  {
    id: 13,
    src: `${spotify}`,
    name: "Spotify clone",
    description: "Final team project",
    code: "https://github.com/Stangat/spotify-clone/pull/53",
    deploy: "https://spotify-clone-rschool.netlify.app/",
    stack:
      "React, Webpack, TypeScript, i18next, react-router/react-router-dom, Ant Design",
  },
  {
    id: 14,
    src: `${onlineStore}`,
    name: "Online-store",
    description: "Team project",
    code: "https://github.com/Stangat/online-store/pull/39",
    deploy: "https://online-store-sgmz.netlify.app/?",
    stack: "JavaScript,Webpack,TypeScript",
  },
  {
    id: 15,
    src: `${asyncRace}`,
    name: "Async race",
    description: "Individual educational project",
    code: "https://github.com/MarinaZai/Async-Race",
    deploy: "https://async-race-marinazai.netlify.app/",
    stack: "React,Webpack,TypeScript,axios",
  },
  {
    id: 16,
    src: `${songBird}`,
    name: "Song-bird",
    description: "Individual educational project",
    code: "https://github.com/MarinaZai/Song-bird",
    deploy: "https://bird-songs-check.netlify.app/",
    stack: " JavaScript,Webpack,SASS",
  },
  {
    id: 17,
    src: `${onlineZoo}`,
    name: "Online-zoo",
    description: "Individual educational project",
    code: "https://github.com/MarinaZai/Online-zoo",
    deploy:
      "https://marinazai.github.io/Online-zoo/online-zoo/pages/main/index.html",
    stack: "HTML,CSS,JavaScript",
  },
  {
    id: 18,
    src: `${findGithub}`,
    name: "Find github profile",
    description: "Individual educational project",
    code: "https://github.com/MarinaZai/star",
    deploy: "https://find-github-profile1.netlify.app/user-not-found",
    stack: "React,axios",
  },
  {
    id: 19,
    src: `${presRevealjs}`,
    name: "Presentation using reveal.js on the theme of WEBGL/THREE.js",
    description: "Individual educational project",
    code: "https://github.com/MarinaZai/reveal.js",
    deploy: "https://marinazai.github.io/reveal.js/",
    stack:
      "React, Webpack, TypeScript, i18next, react-router/react-router-dom, Ant Design",
  },
  {
    id: 20,
    src: `${lawyers}`,
    name: "Lawyers hub",
    description: "Individual educational project",
    code: "https://github.com/MarinaZai/LAWYERS-HUB",
    deploy: "https://marinazai.github.io/LAWYERS-HUB/#/",
    stack: "HTML, CSS",
  },
  {
    id: 21,
    src: `${goCorona}`,
    name: "Go Corona",
    description: "Individual educational project",
    code: "https://github.com/MarinaZai/GoCorona",
    deploy: "https://marinazai.github.io/GoCorona/",
    stack: "HTML, CSS",
  },
  {
    id: 22,
    src: `${lostShirt}`,
    name: "Lost shirt",
    description: "Individual educational project",
    code: "https://github.com/MarinaZai/Lostshirt",
    deploy: "https://marinazai.github.io/Lostshirt/#",
    stack: "HTML, CSS, JS",
  },
];
