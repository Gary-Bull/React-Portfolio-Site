import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaLinkedin,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiSwift,
  SiDart,
  SiFlutter,
  SiTypescript,
  SiJira,
  SiConfluence,
} from "react-icons/si";
import { LuCircleDashed } from "react-icons/lu";
import { DiResponsive } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { MdGroups3 } from "react-icons/md";

import cartoonMe from "../assets/images/cartoonMe.png";
import NEXTJS_PROJECT from "../assets/images/hulu_clone_next_js.png";
import ios_war_game from "../assets/images/ios_war_game.png";
import ios_weather_app_ui from "../assets/images/ios_weather_app_ui.png";
import ios_movie_app_api_lookup from "../assets/images/ios_movie_app_api_lookup.png";
import flutter_todo_app from "../assets/images/flutter_todo_app.png";
import flutter_ecommerce_app from "../assets/images/flutter_ecommerce_app.png";
import flutter_habit_tracker from "../assets/images/flutter_habit_tracker.png";
import react_portfolio_site from "../assets/images/react_portfolio_site.png";
import Redknights from "../assets/images/Redknights.png";
import todolist from "../assets/images/todolist.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", offest: -100, to: "hero" },
  { id: "02", label: "Skills", offest: -80, to: "skills" },
  { id: "03", label: "About Me", offest: -80, to: "about" },
  { id: "04", label: "Projects", offest: -80, to: "projects" },
  // { id: "05", label: "Contact", offest: -80, to: "contact" },
];

export const STATS = [
  { id: "01", count: "4", label: "Years of \nExperience" },
  //   { id: "02", count: "2", label: "Certifications \nEarned" },
  { id: "02", count: "19", label: "Projects \nCompleted" },
  { id: "03", count: "3", label: "Websites \nDeveloped" },
  //   { id: "04", count: "1", label: "iOS App \nPublished" },
];

export const SKILLS_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Mobile", value: "mobile" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Soft Skills", value: "soft" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaHtml5,
    skill: "HTML",
    progress: 95,
    type: "frontend",
    description:
      "Experienced in creating semantic and accessible HTML markup for web pages and web applications.",
  },
  {
    id: "02",
    icon: FaCss3Alt,
    skill: "CSS",
    progress: 90,
    type: "frontend",
    description:
      "Proficient in designing and styling web pages using CSS, including modern CSS features such as Flexbox and Grid.",
  },
  {
    id: "03",
    icon: FaSass,
    skill: "Sass",
    progress: 85,
    type: "frontend",
    description:
      "Experienced in using Sass to write more maintainable and scalable CSS code.",
  },
  {
    id: "04",
    icon: SiTailwindcss,
    skill: "Tailwind CSS",
    progress: 75,
    type: "frontend",
    description:
      "Proficient in using Tailwind CSS to design and build responsive web pages and web applications.",
  },
  {
    id: "05",
    icon: BiLogoJavascript,
    skill: "JavaScript",
    progress: 70,
    type: "frontend",
    description:
      "Skilled in writing clean and efficient JavaScript code to add interactivity and dynamic functionality to web pages.",
  },
  {
    id: "06",
    icon: SiTypescript,
    skill: "Typescript",
    progress: 45,
    type: "frontend",
    description:
      "Familiar with TypeScript, a superset of JavaScript that adds static types to the language.",
  },
  {
    id: "07",
    icon: FaReact,
    skill: "React JS",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in building user interfaces and web applications using React, a JavaScript library for building user interfaces.",
  },
  {
    id: "08",
    icon: RiNextjsLine,
    skill: "NextJS",
    progress: 50,
    type: "frontend",
    description:
      "Familiar with NextJS, a React framework that enables functionality such as server-side rendering and static site generation.",
  },
  {
    id: "09",
    icon: SiSwift,
    skill: "Swift",
    progress: 60,
    type: "mobile",
    description:
      "Familiar with Swift, a powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS.",
  },
  {
    id: "10",
    icon: SiSwift,
    skill: "SwiftUI",
    progress: 55,
    type: "mobile",
    description:
      "Proficient in building user interfaces for iOS apps using SwiftUI, a modern way to declare user interfaces for any Apple platform.",
  },
  {
    id: "11",
    icon: SiDart,
    skill: "Dart",
    progress: 60,
    type: "mobile",
    description:
      "Proficient in Dart, a client-optimized programming language for apps on multiple platforms.",
  },
  {
    id: "12",
    icon: SiFlutter,
    skill: "Flutter",
    progress: 65,
    type: "mobile",
    description:
      "Experienced in building mobile applications for iOS and Android using Flutter, Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
  },
  {
    id: "13",
    icon: VscVscode,
    skill: "VS Code",
    progress: 90,
    type: "tools",
    description:
      "Efficient in using Visual Studio Code, a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.",
  },
  {
    id: "14",
    icon: FaGitAlt,
    skill: "Git",
    progress: 80,
    type: "tools",
    description:
      "Efficient in using Git, a distributed version control system for tracking changes in source code during software development.",
  },
  {
    id: "15",
    icon: FaGithub,
    skill: "GitHub",
    progress: 80,
    type: "tools",
    description:
      "Experienced in using GitHub, a web-based platform for version control and collaboration using Git.",
  },
  {
    id: "16",
    icon: MdGroups3,
    skill: "Teamwork",
    progress: 95,
    type: "soft",
    description:
      "Experienced in working in team-oriented environments and believe that collaboration and teamwork are essential for achieving the best results.",
  },
  {
    id: "17",
    icon: LuCircleDashed,
    skill: "Agile Methodology",
    progress: 80,
    type: "soft",
    description:
      "Familiar with Agile methodology, a project management approach that helps teams respond to unpredictability through incremental, iterative work cadences known as sprints.",
  },
  {
    id: "18",
    icon: SiJira,
    skill: "JIRA",
    progress: 85,
    type: "soft",
    description:
      "Experienced in using JIRA, a project management tool used for issue tracking, bug tracking, and project management.",
  },
  {
    id: "19",
    icon: SiConfluence,
    skill: "Confluence",
    progress: 90,
    type: "soft",
    description:
      "Experienced in using Confluence, a collaboration software program developed and published by Australian software company Atlassian.",
  },
  {
    id: "20",
    icon: DiResponsive,
    skill: "Responsive Design",
    progress: 95,
    type: "soft",
    description:
      "Proficient in designing and developing responsive websites and web applications that work seamlessly across different devices and screen sizes.",
  },
];

export const ABOUT_ME = {
  content: `I am a Front-End Developer with 4 years of experience in designing and developing user-friendly, responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React and NextJS. 

Initially self-taught, my passion has then enabled me to gain a full-time position in an engineering team. Being a self-taught developer has required a lot of dedication, curiosity and a willingness to learn from various resources, online tutorials, documentation and community forums. There has been a lot of trial and errors, but each mistake has been a valuable learning opportunity.

I have been engaged in mobile app development under the guidance of a mentor for the past year, utilising Swift and SwiftUI, as I aspire to enter the mobile app development industry.

I really enjoy being in team-oriented environments and believe that collaboration and teamwork are essential for achieving the best results. I am always eager to take on new challenges and collaborate with others to create innovative and impactful digital solutions.

Outside of my professional life, I am a proud husband and father. My wife and i are blessed with three wonderful children who bring joy and inspiration to our lives every day. Family is at the heart of everything i do, and their support fuels my drive to succeed.`,
  socialLinks: [
    {
      id: "01",
      label: "LinkedIn",
      icon: FaLinkedin,
      link: "https://github.com/Gary-Bull",
    },
    {
      id: "02",
      label: "GitHub",
      icon: FaGithub,
      link: "https://www.linkedin.com/in/gary-bull-5a7471186/",
    },
  ],
  email: "webdev.gary@gmail.com",
  website: "https://webdevgary.co.uk/",
  linkedIn: "https://www.linkedin.com/in/gary-bull-5a7471186/",
};

export const PROJECTS = [
  {
    id: 1,
    title: "NextJS Hulu Clone",
    description:
      "This project is a clone of the Hulu website built using NextJS, React and Tailwind CSS. It also calls the TMDb API to fetch movies and TV shows.",
    image: NEXTJS_PROJECT,
    tags: ["NextJS", "React", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "React Portfolio Site",
    description:
      "This project is my personal portfolio site built using React and Tailwind CSS.",
    image: react_portfolio_site,
    tags: ["React", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Red Knights Martial Arts",
    description:
      "This project was designed and developed by myself for my local Martial Arts School. I used HTML, CSS, Bootstrap and JavaScript",
    image: Redknights,
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 4,
    title: "ToDo site",
    description:
      "This project is a simple ToDo site built using HTML, CSS and JavaScript.",
    image: todolist,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "War Game iOS App",
    description:
      "This project is a simple War Game iOS app built using Swift and SwiftUI.",
    image: ios_war_game,
    tags: ["Swift", "SwiftUI"],
  },
  {
    id: 6,
    title: "Weather App iOS UI",
    description:
      "This project is a weather app UI built using Swift and SwiftUI.",
    image: ios_weather_app_ui,
    tags: ["Swift", "SwiftUI"],
  },
  {
    id: 7,
    title: "Movie App iOS App",
    description:
      "This project is a movie app API lookup built using Swift and SwiftUI. It calls the TMDb API to fetch movies. It also includes a search feature.",
    image: ios_movie_app_api_lookup,
    tags: ["Swift", "SwiftUI"],
  },
  {
    id: 8,
    title: "Flutter Todo App",
    description: "This project is a todo app built using Dart and Flutter.",
    image: flutter_todo_app,
    tags: ["Dart", "Flutter"],
  },
  {
    id: 9,
    title: "Flutter E-Commerce App",
    description:
      "This project is an e-commerce app built using Dart and Flutter.",
    image: flutter_ecommerce_app,
    tags: ["Dart", "Flutter"],
  },
  {
    id: 10,
    title: "Flutter Habit Tracker",
    description:
      "Inspired by gitHub's contribution graph, this project is a habit tracker app built using Dart and Flutter.",
    image: flutter_habit_tracker,
    tags: ["Dart", "Flutter"],
  },
];
