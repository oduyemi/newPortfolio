"use client";
import React, { useState } from "react";
import styles from "./Main.module.css";
import Image from "next/image";

type Category = "All" | "Frontend" | "Backend" | "Collaborations" | "Toy Projects" | "Work in Progress";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  fullDescription: string;
  stack: string[];
  category: Category;
  url: string;
};

const allProjects: Project[] = [
  {
    id: 1,
    name: "Hustle & Grind",
    image: "/images/projects/frontend/hustle.png",
    description: "Landing page for hacker-house accelerator.",
    fullDescription: `Hustle & Grind delivers a month of intensive growth, mentorship, and fundraising strategy in Lagos.`,
    stack: ["Next.js", "Framer Motion", "TypeScript"],
    category: "Frontend",
    url: "https://hustle.adewaleyusuf.com/"
  },
  {
    id: 2,
    name: "BriteBatch",
    image: "/images/projects/backend/britebatch.png",
    description: "An inventory management API that manages batches of products.",
    fullDescription: `BriteBatch is an inventory management API designed to handle batches of products efficiently. It is built using Java Spring Boot and utilizes a MySQL database for data storage. This documentation provides detailed information on how to integrate and interact with the BriteBatch API.`,
    stack: ["Java", "SpringBoot", "MySQL"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 3,
    name: "Giba Healthcare",
    image: "/images/projects/giba.png",
    description: "Web app for a modern wellness clinic across 4 U.S. states.",
    fullDescription: `Giba Medical Clinic is redefining healthcare with cutting-edge therapies:<br/><br/>🔹 Weight Loss Programs <br/>🔹 Hormone Replacement Therapy <br/>🔹 Virtual Consultations <br/>🔹 Direct Primary Care <br/><br/>Also includes a custom admin dashboard to manage users, emails, inquiries, and internal workflows.<br/><br/>Experience the future of wellness with Giba.`,
    stack: ["NextJS", "ExpressJS", "Mongoose", "IntakeQ Client API"],
    category: "Frontend",
    url: "https://gibarestorative.com"
  },
  {
    id: 4,
    name: "Artist Portfolio Website",
    image: "/images/projects/abecole.png",
    description: "A digital portfolio for UK-based Nigerian artist, Abraham Cole.",
    fullDescription: `A beautifully minimal showcase of Abraham Cole’s work. This project merges artistry and engineering to deliver a smooth, immersive viewing experience for art lovers and collectors alike.`,
    stack: ["React", "SCSS", "Tailwind CSS", "Node.js", "Express.js"],
    category: "Frontend",
    url: "https://abrahamcole.vercel.app"
  },
    {
    id: 5,
    name: "Law X Tech",
    image: "/images/projects/collabo/lawxtech.jpg",
    description: "Website for NGO",
    fullDescription: `At Law x Tech, their mission is to bridge the gap between the worlds of law and technology, empowering legal professionals and tech enthusiasts to navigate the ever-evolving landscape of legal tech. Founded in 2023 by Sopuruchi Rufus, a visionary with a dynamic blend of legal expertise and technological innovation, our organization aims to transform the legal profession by providing the skills needed to thrive in the new internet economy.`,
    stack: ["NextJS", "Typescript", "JavaScript", "MUI", "Tailwindcss"],
    category: "Collaborations",
    url: "https://lawxtech.org/"
  },
  {
    id: 6,
    name: "LinkOrgNet",
    image: "/images/projects/collabo/linkorgnet.png",
    description: "Corporate website for LinkOrg Networks LTD",
    fullDescription: `LinkOrg Networks delivers fast, scalable internet across Nigeria, using a mix of fiber optics, radio tech, and satellite solutions.<br/><br/>⚡ High-Speed <br/>🌍 Global Connectivity <br/>💸 Affordable Plans <br/>💬 Always-On Support <br/><br/>Built to scale with business and residential needs alike.<br/><br/><i>This project is a teamwork of the software department of LinkOrg Networks </i><br/>`,
    stack: ["React", "MUI", "SwiperJS", "TypeScript"],
    category: "Collaborations",
    url: "https://linkorgnet.com.ng",
  },
  {
    id: 7,
    name: "Fitness Guide",
    image: "/images/projects/collabo/fit.jpg",
    description: "A fitness Evaluation web application",
    fullDescription: `Through partnerships with the public, private, and non-profit sectors. Fitness Guide International promotes programs and initiatives that motivate people of all ages, backgrounds, and abilities to lead active, healthy lives. Through seminars, lectures, handbills, books e.t.c. our mission is to engage, educate, and empower all Nigerians to adopt a healthy lifestyle that includes regular physical activity and good nutrition.`,
    stack: ["HTML", "CSS", "Booststrap 5", "Python", "Flask"],
    category: "Collaborations",
    url: "",
  },
  {
    id: 8,
    name: "Novunt API",
    image: "/images/projects/backend/novunt.png",
    description: "REST API powering the Novunt financial platform.",
    fullDescription: `ProForumAPI is an API designed to provide forum functionality for the ProGrowing mentorship platform. It allows users to create posts, comment on posts, like and dislike posts and comments, and interact with tags.`,
    stack: ["Typescript", "Node.js", "Express", "Nodemon", "Mongoose"],
    category: "Backend",
    url: ""
  },
  {
    id: 9,
    name: "Customer Portal for LinkOrgNet",
    image: "/images/projects/wip/lportal.png",
    description: "Client/admin/Account portal: A PWA",
    fullDescription: `This project is a teamwork of the software department of LinkOrg Networks. The goal is to help end-users access their client portal and manage their internet subscriptions without much intervention from staff.`,
    stack: ["NextJS", "ExpressJS", "Python", "FastAPI", "PostGresDB"],
    category: "Work in Progress",
    url: "",
  },
  {
    id: 10,
    name: "Project Portal",
    image: "/images/projects/wip/portallanding.png",
    description: "Collaboration hub for project communication and updates.",
    fullDescription: `A web based project portal that would serve as a central communication hub between myself and my clients, where my clients can share media files as regards their project and track it’s progress.`,
    category: "Work in Progress",
    stack: ["NextJS", "NestJS", "Node", "MongoDB", "Cloudinary", "Socket.io"],
    url: "https://portal.oduyemi.dev",
  },
  {
    id: 11,
    name: "GrowAfrica Landing Page",
    image: "/images/projects/growafrica.jpg",
    description: "High-converting landing page for a Made-in-Africa ecommerce platform.",
    fullDescription: `GrowAfrica is preparing for its 2026 launch by gathering interest from shoppers and vendors across the continent.<br/><br/>The landing page features a data collection modal form and an admin dashboard connected to GrowAPI for realtime access.<br/><br/>🌍 Want to shop or sell African products?<br/>Join the movement — for Africans, by Africans.`,
    stack: ["React.js", "Framer Motion", "Vercel", "TypeScript"],
    category: "Frontend",
    url: "https://growafrica.vercel.app",
  },
  {
    id: 12,
    name: "Simple Todo Application",
    image: "/images/projects/todospring.jpg",
    description: "Simple and classy task management app.",
    fullDescription: `A lightweight Java-based application to help users schedule tasks in real-time with ease and elegance.<br/><br/><a href="https://github.com/oduyemi/todo" target="_blank">See the Code</a>`,
    stack: ["Java", "Spring Framework"],
    category: "Toy Projects",
    url: "",
  },
  {
    id: 13,
    name: "Company website",
    image: "/images/projects/frontend/urb.jpg",
    description: "Official website of UrBizEdge Limited",
    fullDescription: `UrBizEdge is a registered Microsoft Excel consulting, financial modelling, business intelligence, data analysis and enterprise solutions firm in Nigeria. We specialise in helping companies and high value professionals be on top of their business data.`,
    stack: ["WordPress", "PhP", "MySQL"],
    category: "Frontend",
    url: "https://urbizedge.com"
  },
  {
    id: 14,
    name: "Bridal Fabrics",
    image: "/images/projects/collabo/fabrics.jpg",
    description: "Fashion store.",
    fullDescription: `Frontend build for bridalfabrics.fashion. A web application for a fashion brand that sells bridal laces, tulles, and all the fabrics that are bridal.`,
    stack: ["HTML", "CSS", "Bootstrap", "Python", "Flask"],
    category: "Collaborations",
    url: "",
  },
  {
    id: 15,
    name: "ChatBot",
    image: "/images/projects/backend/chatbt.png",
    description: "AI Chat bot",
    fullDescription: `ChatBot is a simple Python project that utilizes the OpenAI API to create a conversational chatbot powered by the GPT-3.5 model. This chatbot can engage in text-based conversations with users by generating responses based on the input provided by the user`,
    stack: ["Python", "OpenAI"],
    category: "Backend",
    url: "",
  },
  {
    id: 16,
    name: "Celsza",
    image: "/images/projects/collabo/celza.jpg",
    description: "Church website.",
    fullDescription: `Web application for Christ Embassy Lagos sub-zone (Gbagada, Lagos, Nigeria).`,
    stack: ["HTML", "CSS", "JavScript", "Python", "Flask"],
    category: "Collaborations",
    url: "",
  },
  {
    id: 17,
    name: "FilmHouse API",
    image: "/images/projects/backend/filmhouse.png",
    description: "API that maintains the records of all movies for a sales and rental movie business. Powered by Python FastAPI",
    fullDescription: `RestAPI allows users to shorten URLs by pasting a long URL into the it's platform and a shorter URL gets automatically generated. The shortened URL is designed to be as short as possible, making it easy to share on social media or through other channels.`,
    stack: ["Python", "FastAPI", "MySQL"],
    category: "Backend",
    url: "",
  },
  {
    id: 18,
    name: "Locale",
    image: "/images/projects/collabo/localeHome.jpg",
    description: "Frontend for an API.",
    fullDescription: `A React frontend build for Locale API. A collaborative work with Emmanuel Albert who will work on the backend.`,
    stack: ["React", "JavaScript", "Tailwindcss"],
    category: "Collaborations",
    url: "",
  },
  {
    id: 19,
    name: "ProForum API",
    image: "/images/projects/backend/proforum.png",
    description: "API for a forum to be integrated into the ProGrowing mentorship platform.",
    fullDescription: `ProForumAPI is an API designed to provide forum functionality for the ProGrowing mentorship platform. It allows users to create posts, comment on posts, like and dislike posts and comments, and interact with tags.`,
    stack: ["Typescript", "Node.js", "Express", "Nodemon", "Mongoose"],
    category: "Backend",
    url: "",
  },
  {
    id: 20,
    name: "LinkOrgAPI",
    image: "/images/projects/backend/linkorg.png",
    description: "API for managing administrative actions, user authentication, session handling, and error handling.",
    fullDescription: `ProForumAPI is an API designed to provide forum functionality for the ProGrowing mentorship platform. It allows users to create posts, comment on posts, like and dislike posts and comments, and interact with tags.`,
    stack: ["Typescript", "Node.js", "Express", "Nodemon", "Mongoose"],
    category: "Backend",
    url: "",
  },
  {
    id: 21,
    name: "Preschool",
    image: "/images/projects/wip/preschool.jpg",
    description: "Frontend application for a creche: A web application with Pre-School API integration",
    fullDescription: `The goal is to keep the end-users in mind and aim for a system that not only meets the technical requirements but is also practical and user-friendly for those interacting with it on a daily basis.`,
    stack: ["NextJS", "TailwindCSS", "Shadcn", "Lucide-react"],
    category: "Work in Progress",
    url: "",
  },
  {
    id: 22,
    name: "GrowAPI",
    image: "/images/projects/backend/presch.png",
    description: "Backend for Grow Africa Landing page to collect waitlist for landing page's form input. Basically gathering user data.",
    fullDescription: `The goal is to keep the end-users in mind and aim for a system that not only meets the technical requirements but is also practical and user-friendly for those interacting with it on a daily basis.`,
    stack: ["Typescript", "JavaScript", "Express", "Mongoose"],
    category: "Backend",
    url: ""
  },
  {
    id: 23,
    name: "Project Hub",
    image: "/images/projects/wip/portallanding.png",
    description: "My project hub. As a fullstack developer/product manager, I am coming up with a task management/project tracker tool for my clients",
    fullDescription: `A web based project portal that would serve as a central communication hub between myself and my clients, where my clients can share media files as regards their project and track it’s progress.`,
    stack: ["NextJS", "NestJS", "Node", "MongoDB", "Cloudinary", "Socket.io"],
    category: "Work in Progress",
    url: ""
  }, 
  {
    id: 24,
    name: "Pre-School API",
    image: "/images/projects/backend/presch.png",
    description: "API that maintains the records of all students in a private Daycare center.",
    fullDescription: `The goal is to keep the end-users in mind and aim for a system that not only meets the technical requirements but is also practical and user-friendly for those interacting with it on a daily basis.`,
    stack: ["Python", "FastAPI", "MySQL"],
    category: "Backend",
    url: ""
  },
  {
    id: 25,
    name: "LinkOrg VoIP",
    image: "/images/projects/wip/linkorgvoip.png",
    description: "Fullstack E-commerce Application/VoIP Platform",
    fullDescription: `VoIP platform . Built with Next.js 14 and integrating with ProVu's telecom infrastructure for real-time VoIP provisioning and management.<br/><br/>`,
    stack: ["Next.js14", "TypeScript", "TanStack Query", "Zustand", "Stripe", "ProVu API", "ByComsAPI", "ExpressJS", "NeonAPI"],
    category: "Work in Progress",
    url: "https://staging.linkorgnet.com.ng",
  }, 
  {
    id: 26,
    name: "Scissor",
    image: "/images/projects/backend/scissorapi.jpg",
    description: "Link shortner",
    fullDescription: `RestAPI allows users to shorten URLs by pasting a long URL into the it's platform and a shorter URL gets automatically generated. The shortened URL is designed to be as short as possible, making it easy to share on social media or through other channels.`,
    stack: ["Python", "FastAPI", "MySQL"],
    category: "Toy Projects",
    url: "",
  },
  {
    id: 27,
    name: "Haut Logistics",
    image: "/images/projects/frontend/haut.png",
    description: "Demo for logistics web application.",
    fullDescription: `Haut Logistics We handle all aspects of fulfillment and delivery. Our services include:<br/><br/>
                    Air freight into Canada and from Canada<br/>
                    Sea freight import into Canada and export from Canada<br/>
                    Door to Door service<br/>
                    LTL ( Less than Truckload) within Canada<br/>
                    FTL ( Full Truck Load) within Canada<br/>
                    Relocation service Within canada<br/>`,
    stack: ["React.js", "Framer Motion", "Vercel", "TypeScript"],
    category: "Frontend",
    url: "https://hautlogistics.vercel.app/"
  },
  {
    id: 28,
    name: "Schedula",
    image: "/images/projects/backend/schedula.png",
    description: "Backend for Schedula; a to-do web application",
    fullDescription: `Backend for Schedula; a to-do web application`,
    stack: ["Python", "Flask", "MySQL"],
    category: "Backend",
    url: "",
  },
  {
    id: 29,
    name: "ChatBot",
    image: "/images/projects/backend/chatbt.png",
    description: "AI Chat bot",
    fullDescription: `ChatBot is a simple Python project that utilizes the OpenAI API to create a conversational chatbot powered by the GPT-3.5 model. This chatbot can engage in text-based conversations with users by generating responses based on the input provided by the user`,
    stack: ["Python", "OpenAI"],
    category: "Backend",
    url: ""
  },
  {
    id: 30,
    name: "Native Soups",
    image: "/images/projects/frontend/soups.jpg",
    description: "E-commerce demo that caters for supply of indigenous soups.",
    fullDescription: `Native Soups is aimed at helping to improve the availability of quality native cusines, thereby, exploiting & preserving native food & nutritional knowledge, as well as reducing unemployment rate among youths.`,
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    url: "https://dynamic-baklava-4abc56.netlify.app/",
  },
  {
    id: 31,
    name: "VerifyAPI",
    image: "/images/projects/backend/verify.png",
    description: "A product authentication backend for Verify",
    fullDescription: `Verify is a web application that allows users to verify the authenticity of products.`,
    stack: ["Java", "Spring", "MySQL"],
    category: "Backend",
    url: ""
  },
  {
    id: 32,
    name: "Idyll Consults",
    image: "/images/projects/idyllconsults.jpg",
    description: "Official platform for UK-based Idyll Consults.",
    fullDescription: `At Idyll Consults, the mission is to empower students globally through ethical recruitment and strong support systems.<br/><br/><em>“Excellence is not just a goal — it’s our commitment.”</em><br/>The team works relentlessly to guide students with the right resources, every step of the way.<br/><br/>Visit Idyll Consults today and explore a world of opportunity.`,
    stack: ["React", "OpenAI API", "Node.js"],
    category: "Frontend",
    url: "https://www.idyllconsults.com/",
  },
  {
    id: 33,
    name: "Novunt API",
    image: "/images/projects/backend/novunt.png",
    description: "API for a forum to be integrated into the ProGrowing mentorship platform.",
    fullDescription: `ProForumAPI is an API designed to provide forum functionality for the ProGrowing mentorship platform. It allows users to create posts, comment on posts, like and dislike posts and comments, and interact with tags.`,
    stack: ["Typescript", "Node.js", "Express", "Nodemon", "Mongoose"],
    category: "Backend",
    url: ""
  },
  {
    id: 34,
    name: "The Churches Online Platform",
    image: "/images/projects/frontend/churches.jpg",
    description: "A religious web platform that help people to connect to local churches online.",
    fullDescription: `The churches Online is an extension of the body of Christ. It is a platform where believers can connect to local churches as the body. Would you like a feature on the Churches Online platform? It is a free service. Our main goal is to promote unity in the body of Christ and operate as one body.`,
    stack: ["React", "SCSS", "Tailwind CSS", "Node.js", "Express.js"],
    category: "Frontend",
    url: "https://abrahamcole.vercel.app"
  },
  {
    id: 35,
    name: "Kofoworola Alasooke",
    image: "/images/projects/wip/alaso.png",
    description: "E-commerce web application for Fashion icon.",
    fullDescription: ``,
    stack: ["NextJS", "ExpressJS", "Mongoose", "Node.js"],
    category: "Work in Progress",
    url: "",
  },
  {
    id: 36,
    name: "Company website",
    image: "/images/projects/frontend/ruf.jpg",
    description: "Official website of Rufaddas Medical.",
    fullDescription: `Rufaddas Medical is devoted to making a, the best medical and care equipment at affordable prices. To discourage fake and substandard products, thereby, reducing mortality rate. At the same time, saving precious resources currently wasted on avoidable health tourism.`,
    stack: ["WordPress", "PhP", "MySQL"],
    category: "Frontend",
    url: "https://rufaddasmedicalsupplies.com"
  },
  {
    id: 37,
    name: "Chop Beta",
    image: "/images/projects/toy/chopbeta.jpg",
    description: "A food-seller app",
    fullDescription: `A React web application for ChopBeta. The unique food plug that lets connects and trade home-made foods.`,
    stack: ["React", "JavaScript", "Nodemon", "ExpressJS", "NodeJs"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 38,
    name: "Musical Empire",
    image: "/images/projects/frontend/musical.png",
    description: "E-commerce web application for Musical Empire Nigeria Limited",
    fullDescription: `Musical Empire is a business entirely devoted to making readily available the best brands of sound, light equipment, musical instruments and accessories across the world to a wide range of end-users via our E-commerce website and physical store.`,
    stack: ["WordPress", "PhP", "ExpressJS", "NodeJs", "MySQL"],
    category: "Frontend",
    url: "https://musicalempire.com.ng",
  },
  {
    id: 39,
    name: "Chow",
    image: "/images/projects/toy/chow.jpg",
    description: "Restaurant App",
    fullDescription: `A web application for Chow Restaurant that allows users to order meals and access all other services offered by the restaurant.`,
    stack: ["WordPress", "PhP", "ExpressJS", "NodeJs", "MySQL"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 40,
    name: "Dev Quiz",
    image: "/images/projects/toy/devquiz.png",
    description: "Restaurant App",
    fullDescription: `A web application for Chow Restaurant that allows users to order meals and access all other services offered by the restaurant.`,
    stack: ["React", "PhP", "ExpressJS", "NodeJs", "MySQL"],
    category: "Toy Projects",
    url: "https://dev-quiz-tan.vercel.app/"
  },
  {
    id: 41,
    name: "Insider Insights",
    image: "/images/projects/toy/insider.png",
    description: "Business/job review insights",
    fullDescription: `A web application that people can post reviews on businesses so that job seekers can easily find insider information about the places they are applying to.`,
    stack: ["Vue.js", "JavaScript", "Tailwindcss"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 42,
    name: "LinkedIn Clone",
    image: "/images/projects/toy/lclone.png",
    description: "A clone of LinkedIn homepage",
    fullDescription: `This project is a clone of the LinkedIn platform, featuring a user interface that mimics LinkedIn's layout and design. The clone includes essential functionalities like a navbar, sidebar, main content feed, right sidebar, and footer.`,
    stack: ["React", "Chakra UI", "JavaScript", "Framer Motion"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 43,
    name: "Instagram Clone",
    image: "/images/projects/toy/clone.jpg",
    description: "Instagram clone",
    fullDescription: ``,
    stack: ["React", "Dexie", "Get Photo URL"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 44,
    name: "Schedula",
    image: "/images/projects/toy/schedula.jpg",
    description: "A to-do web application",
    fullDescription: `A to-do web application.`,
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 45,
    name: "TechGPT (ChatGPT Clone)",
    image: "/images/projects/toy/techgpt.png",
    description: "A creative clone of ChatGPT",
    fullDescription: `A creative clone of ChatGPT.`,
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 46,
    name: "Techie",
    image: "/images/projects/toy/techie.jpg",
    description: "Multi-user blog",
    fullDescription: `A multiple user blogging application. The fundamental concept is that anyone visiting the website should be able to read a blog post written by them or another user because the app has a landing page that lists a variety of articles written by different authors.Erekere is a Nigerian tour operating company that promotes African tourism and connects people. We organise group tours, school excursions, corporate retreats, holiday packages and also offer tour guide services within Africa, to educate people about the beauty within. We organise affordable tours to encourage Nigerians and even foreigners to explore our rich and diverse cultural heritage as well as our enthralling and beautiful landscapes.`,
    stack: ["Next.js", "Tailwindcss", "MUI", "ApexCharts", "Python", "FastAPI", "MySQL"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 47,
    name: "Locale",
    image: "/images/projects/toy/locale.png",
    description: "Geographical developer tool",
    fullDescription: `A developer tool for anyone who needs to know Nigeria, geographically. Locale’s API shows you all of Nigeria’s regions, states, and local government areas(LGAs). Locale is looking to be a very useful tool for the thousands of businesses building for Nigeria’s 200M+ population size.`,
    stack: ["React", "Bootstrap", "MUI", "Python", "FastAPI", "PostgreSQL"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 48,
    name: "Vortex",
    image: "/images/projects/toy/vortex.jpg",
    description: "YouTube Video Downloader",
    fullDescription: `YouTube Video Downloader.`,
    stack: ["React", "JavaScript", "Tailwindcss", "NodeJS", "Express"],
    category: "Toy Projects",
    url: ""
  },
  {
    id: 49,
    name: "Todomatic",
    image: "/images/projects/toy/todoshi.png",
    description: "Task management application",
    fullDescription: `TodoMatic is a task management application built to help users organize their tasks efficiently. With a user-friendly interface, TodoMatic allows users to add, manage, and track tasks based on their completion status and scheduled time. The app features filtering options to display active, completed, or all tasks, providing users with a streamlined experience.`,
    stack: ["WordPress", "PhP", "ExpressJS", "NodeJs", "MySQL"],
    category: "Toy Projects",
    url: ""
  },
];

const descriptions: Record<Category, string> = {
  All: "A curated mix of everything — from backend magic to collaborative builds and passion projects.",
  Frontend: "Clean interfaces, interactive components, and responsive design. My frontend explorations live here.",
  Backend: "APIs, databases, and infrastructure. These projects power the logic behind the UI.",
  Collaborations:
    "The projects in this category are collaborations and close-source contributions that I have participated in. It's always a privilege to build MVPs alongside other skilled devs.",
  "Toy Projects":
    "I refer to this category as Toy or Demo projects because they hardly ever leave my GitHub repository. Some are deployed, and some are not — just for fun and learning.",
  "Work in Progress":
    "These projects are currently still in development. An insight into ideas I’m shaping over time. Yes — very much a WIP!",
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((proj) => proj.category === selectedCategory);

  const categories: Category[] = [
    "All",
    "Frontend",
    "Backend",
    "Collaborations",
    "Toy Projects",
    "Work in Progress",
  ];

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.title}>Projects</h2>
    <p>Some notable projects</p>
      <div className={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`${styles.tab} ${
              selectedCategory === cat ? styles.activeTab : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className={styles.description}>{descriptions[selectedCategory]}</p>

      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <p className={styles.noResults}>No projects in this category yet.</p>
        ) : (
          filtered.map((proj) => (
            <div
              key={`${proj.id}-${proj.name}`}
              className={styles.card}
              onClick={() => setActiveProject(proj)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{proj.name}</h3>
                <p>{proj.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {activeProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveProject(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalImageWrapper}>
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                fill
                className={styles.modalImage}
              />
            </div>
            <h3>{activeProject.name}</h3>
            <div className={styles.modalDescription}>
              {activeProject.fullDescription
                .split("\n")
                .map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))}
            </div>
            <ul className={styles.stackList}>
              {activeProject.stack?.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {activeProject.url && (
              <div className="text-center mt-4">
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visitBtn}
                >
                  Visit Project
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
