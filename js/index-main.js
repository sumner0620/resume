// module imports
import { Main } from "./modules/Main.js";
import { Sidebar } from "./modules/Sidebar.js";
import { Slide } from "./modules/Slide.js";

// method imports
import { Padding } from "./tidy/Padding.js";

// call the elements

// add <main>
Main();

// add sidebar, which is actually the <header>
Sidebar(
  "ds<span>.</span>",
  "Worcester, MA",
  "774-200-4059",
  "jdsumner0620@gmail.com",
  [
    '<i title="JavaScript" class="fab fa-js"></i>',
    '<i title="ReactJS" class="fab fa-react"></i>',
    '<i title="PHP" class="fab fa-php"></i>',
    '<i title="CSS3" class="fab fa-css3-alt"></i>',
    '<i title="SASS" class="fab fa-sass"></i>',
    '<i title="HTML5" class="fab fa-html5"></i>',
    '<i title="Git" class="fab fa-git-alt"></i>',
    '<i title="WordPress" class="fab fa-wordpress-simple"></i>',
    '<i title="NPM" class="fab fa-npm"></i>',
    '<i title="Yarn" class="fab fa-yarn"></i>',
    '<i title="Gulp" class="fab fa-gulp"></i>',
    '<i title="Grunt" class="fab fa-grunt"></i>',
    '<i title="PhotoShop" class="fab fa-adobe"></i>'
  ],
  "https://github.com/dpsumner1289/",
  "https://www.linkedin.com/in/douglas-sumner"
);

// add 'about me' section
Slide(
  "about me.",
  "i'm a front end dev out of Worcester, MA. i offer a blend of left and right brain, 5 years of experience, and a holistic view of the web and its makeup.",
  [],
  false
);

// add 'work' section
Slide(
  "work.",
  "i've worked on both large and small projects, from start to finish. here's a few examples of my projects:",
  [
    {
      title: "Opioid Action Center",
      description:
        "worked with a top design agency to help this health security company come up with a way to help combat the opioid crisis",
      image: "https://douglassumner.com/assets/images/opioidactioncenter.png"
    },
    {
      title: "Caelynx Engineering",
      description:
        "along with build/create studios, worked to create a vibrant, resource-rich online presence with highly user friendly admin capabilities for Caelynx, a national engineering firm",
      image: "https://douglassumner.com/assets/images/caelynx.png"
    },
    {
      title: "University of Michigan - Impact",
      description:
        "worked with the University of Michigan and build/create studios to develop a beautiful online resource center, focused on maximizing private support for the University and its various coexisting organizations",
      image: "https://douglassumner.com/assets/images/leadersandbestimpact.png"
    }
    // {
    //   title: "In Good Company Detroit",
    //   description:
    //     "worked to empower startups and entrepreneurs with this modern, sharp looking website, built with the good folks at build/create studios",
    //   image: "https://douglassumner.com/assets/images/ingoodcodetroit.png"
    // }
  ],
  false
);

// add 'contact me' section
Slide(
  "contact me.",
  "<p>want to work together? i work with agencies, software companies and directly with clients. the best way to reach me is <a href='mailto:jdsumner0620@gmail.com'>by email</a></p>",
  [],
  false
);

// call the methods

// pad the <main> against the sidebar
Padding();
