
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },


  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },

  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "LeetCode",
    src: "/leetcode.svg",
    href: "https://leetcode.com/u/haripradap/",
  },
  {
    name: "GitHub",
    src: "/git.svg",
    href: "https://github.com/Haripradap",

  },
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    href:"https://www.linkedin.com/in/hari-pradap-490663260/"
  },
];
export const Projects = [
  {
    title: "CookMom Recipe App",
    text: "CookMom is a recipe app built with React and powered by the Edamam Recipe API, offering a wide variety of recipes to suit any taste. Deployed on Vercel, it ensures a fast and seamless user experience for cooking enthusiasts.m.",
    src: "/CookMom.png",
  },
  {
    title: "ChatVerse",
    text: "ChatVerse is a real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.IO for instant messaging. It incorporates Zustand for state management, Daisy UI and Tailwind CSS for a sleek and responsive design, and ensures secure authentication with JWT and bcryptjs. This app delivers a seamless and secure chat experience for users.",
    src: "/chat.jpg",
  },
  {
    title: "CartProduct ",
    text: "CartProduct is a dynamic e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js). It offers a seamless shopping experience with features like product browsing, cart management, and secure transactions. Designed for efficiency and scalability, CartProduct combines functionality with a modern user interface.",
    src: "/CartProduct.png",
  },
  {
    title: "Expensico",
    text: "Expensico is a powerful expense tracker built with Next.js and Neon using a Postgres database. It offers a user-friendly interface for managing expenses efficiently, with secure authentication powered by Clerk. Expensico ensures a seamless and secure experience for tracking financial goals.",
    src: "/Expensico.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
