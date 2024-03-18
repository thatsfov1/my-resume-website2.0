import {
  css,
  git,
  github,
  html,
  javascript,
  motion,
  mui,
  react,
  redux,
  sass,
  vite,
  tailwindcss,
  typescript,
} from "../assets/icons";
import movie from "../assets/images/my-movie-choice.png";
import chicstore from "../assets/images/chic-store.png";
import foodrecipes from "../assets/images/food-recipes.png";
import meetfriends from "../assets/images/meetfriends.png";
import rickandmorty from "../assets/images/rick-and-morty.png";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
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
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Frontend",
  },
];

export const projects = [
  {
    iconUrl: meetfriends,
    name: "MeetFriends",
    description:
      "Developed a React prototype for a social network, which includes user authentication, CRUD operations, chat simulation and profile customization.",
    github: "https://github.com/thatsfov1/meet-friends",
    liveLink: "https://meetfriends.netlify.app/",
  },
  {
    iconUrl: movie,
    name: "My Movie Choice",
    description:
      "Built a React app aiding movie selection. Enables access to user ratings, descriptions, cast, trailers, and similar content suggestions for movies or series.",
    github: "https://github.com/thatsfov1/my-movie-choice",
    liveLink: "https://my-movie-choice.netlify.app/",
  },
  {
    iconUrl: chicstore,
    name: 'E-commerce shop "Chic Stock" ',
    description:
      "Created a React-based laptop shop featuring modern design, animations, and seamless Stripe integration for transactions.",
    github: "https://github.com/thatsfov1/chic-stock",
    liveLink: "https://chic-stock.vercel.app/",
  },
  {
    iconUrl: foodrecipes,
    name: "Food Recipes",
    description:
      "Developed a web application for finding recipes. More than thousands of recipes that are listed on basis of various categories.",
    github: "https://github.com/thatsfov1/food-recipes",
    liveLink: "https://typescript-food-recipes.netlify.app/",
  },
  {
    iconUrl: rickandmorty,
    theme: "btn-back-black",
    name: "Rick and Morty Characters",
    description:
      "A React app with Rick and Morty series characters, incorporating custom filters for user-specific searches and demonstrating API integration expertise.",
    github: "https://github.com/thatsfov1/rick-and-morty-characters",
    liveLink: "https://thatsfov1.github.io/rick-and-morty-characters/",
  },
];

export const languages = [
  {
    title: "English",
    level: 70,
  },
  {
    title: "Polish",
    level: 75,
  },
  {
    title: "Ukrainian",
    level: 100,
  },
  {
    title: "Russian",
    level: 100,
  },
];