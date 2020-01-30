import { Header } from "./modules/Header.js";
import { Skillset } from "./modules/Skillset.js";
import { Experience } from "./modules/Experience.js";

Header(
  "Douglas Sumner | Software Engineer",
  "Worcester, MA",
  "774-200-4059",
  "jdsumner0620@gmail.com"
);

Skillset([
  {
    title: "Languages/Concepts",
    skillList: [
      "JS/AJAX/ReactJS",
      "PHP/MySQL",
      "CSS3 / SCSS / SASS",
      "HTML5",
      "WordPress",
      "Modular / functional programming / OOP",
      "MVC / MV"
    ]
  },
  {
    title: "Tooling",
    skillList: [
      "Yarn, NPM, Webpack",
      "Gulp, Grunt",
      "Git, Bitbucket, Tortoise",
      "Compass",
      "VS Code / Sublime",
      "Photoshop, Adobe XD, Illustrator"
    ]
  },
  {
    title: "Soft Skills",
    skillList: [
      "Self-sufficient; self-taught and self-motivated",
      "Wide variety of experience",
      "UI/UX focused",
      "Natural problem solver",
      "Obsessive nature when taking on tasks",
      "Hungry to learn and grow"
    ]
  }
]);

Experience("Relevant Experience", [
  {
    startDate: "03/2018",
    endDate: "present",
    company: "build/create studios",
    companyLocation: "Ann Arbor, MI",
    title: "Software Developer",
    description:
      "Build customized web-based software solutions per client needs, utilizing Javascript, PHP, MySQL, and many other web technologies. This was a full-stack role."
  },
  {
    startDate: "04/2016",
    endDate: "03/2018",
    company: "Self Employed",
    companyLocation: null,
    title: "Web/Software Developer",
    description:
      "Work with client to plan, architect, and engineer custom web software solutions and websites  for various business needs."
  }
]);
