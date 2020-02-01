import { Header } from "./modules/Header.js";
import { Skillset } from "./modules/Skillset.js";
import { Experience } from "./modules/Experience.js";
import { SongPlayer } from "./basecamp/modules/SongPlayer.js";

Header(
  `<div class="flex">
  <span class="big">D</span><span id="middle">ouglas Sumne</span><span class="big">r</span></div><span id="bottom">Software Developer</span>`,
  "Worcester, MA",
  "774-200-4059",
  "jdsumner0620@gmail.com"
);
SongPlayer("/assets/sounds/TheNeverendingStory.mp3");
Skillset([
  {
    title: "Languages/Concepts",
    skillList: [
      "JS/AJAX/ReactJS",
      "PHP/MySQL",
      "CSS3 / SCSS / SASS",
      "HTML5",
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
    startDate: "04/2017",
    endDate: "03/2018",
    company: "Self Employed",
    companyLocation: "Worcester, MA",
    title: "Web/Software Developer",
    description:
      "Work with client to plan, architect, and engineer custom web software solutions and websites  for various business needs."
  },
  {
    startDate: "06/2016",
    endDate: "03/2017",
    company: "3Media Web Solutions",
    companyLocation: "Hudson, MA",
    title: "Software Developer",
    description:
      "Primarily building and customizing a page-builder software system for clients to manage their own websites, worked mainly with Javascript and PHP, MySQL for data. This was a full-stack role."
  },
  {
    startDate: "06/2015",
    endDate: "04/2016",
    company: "inConcert Web Solutions",
    companyLocation: "Gardner, MA",
    title: "Junior Software Developer, Software Developer",
    description:
      "Building pixel-perfect websites and small web based applications based on .PSD designs, using HTML5, CSS3, SASS, Javascript, jQuery, and PHP."
  }
]);
