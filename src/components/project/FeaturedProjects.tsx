"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  fullDescription: string;
  stack: string[];
  url: string;
};

const projects = [
  {
    id: 1,
    name: "Kòfowórọlá Alásọ",
    image: "/images/projects/alaso.jpg",
    description: "E-commerce web application for a SME.",
    fullDescription: `Kòfowórọlá doesn't just create garments — she weave stories into every thread. Every piece is woven on pre-order, allowing full personalization of pattern, color, and style. This ensures each design is as unique as the individual wearing it.`,
    stack: ["NextJS", "MongoDB", "NodeJS", "Cloudinary"],
    url: "https://alaso-ventures.vercel.app"
  },
  {
    id: 2,
    name: "ProGrowing",
    image: "/images/projects/frontend/prog.jpeg",
    description: "Official website for ProGrowing",
    fullDescription: `Version 2: ProGrowing is a web application for programmers, aimed at helping them grow in their skill.`,
    stack: ["Next.js", "Framer Motion", "JavaScript"],
    url: "https://progrowing.org/",
  },
  {
    id: 3,
    name: "Rare Koncepts Events",
    image: "/images/projects/rarekoncepts.jpeg",
    description: "Website for event planner.",
    fullDescription: `Curated luxury experiences crafted with precision, creativity, and flawless event coordination.`,
    stack: ["NextJS", "MongoDB", "NodeJS"],
    url: "https://rarekonceptsevents.ng"
  },
  {
    id: 4,
    name: "SR Luxuries",
    image: "/images/projects/srl.png",
    description: "E-commerce web application for the luxury fashion brand, SR LUXURIES",
    fullDescription: `At SR Luxuries, they don't just sell fashion; they curate an experience. Immerse yourself in a world where bespoke menswear meets cutting-edge technology, offering tailored garments, ready-to-wear pieces, and corporate attire.<br/><br/><a href="https://srluxuries.com" target="_blank">See the Code</a>`,
    stack: ["NextJS", "Typescript", "Cloudinary", "Mongoose"],
    url: "https://srluxuries.com"
  },
  {
    id: 5,
    name: "Losode",
    image: "/images/projects/losode.jpeg",
    description: "E-commerce demo",
    fullDescription: `Explore exclusive, trend-defining pieces curated by our expert stylists. Transform your wardrobe with Losode’s unique, fashion-forward finds.<br/><br/><a href="https://github.com/oduyemi/losode" target="_blank">See the Code</a>`,
    stack: ["NextJS", "Typescript", "Cloudinary", "Mongoose"],
    url: "https://losode-one.vercel.app/"
  },
  {
    id: 6,
    name: "Giba Healthcare",
    image: "/images/projects/giba.png",
    description: "Web app for a modern wellness clinic across 4 U.S. states.",
    fullDescription: `Giba Medical Clinic is redefining healthcare with cutting-edge therapies:<br/><br/>🔹 Weight Loss Programs <br/>🔹 Hormone Replacement Therapy <br/>🔹 Virtual Consultations <br/>🔹 Direct Primary Care <br/><br/>Also includes a custom admin dashboard to manage users, emails, inquiries, and internal workflows.<br/><br/>Experience the future of wellness with Giba.`,
    stack: ["NextJS", "ExpressJS", "Mongoose", "IntakeQ Client API"],
    url: "https://gibarestorative.vercel.app"
  },
  {
    id: 7,
    name: "Idyll Consults",
    image: "/images/projects/idyllconsults.jpg",
    description: "Official platform for UK-based Idyll Consults.",
    fullDescription: `At Idyll Consults, the mission is to empower students globally through ethical recruitment and strong support systems.<br/><br/><em>“Excellence is not just a goal — it’s our commitment.”</em><br/>The team works relentlessly to guide students with the right resources, every step of the way.<br/><br/>Visit Idyll Consults today and explore a world of opportunity.`,
    stack: ["React", "OpenAI API", "Node.js"],
    url: "https://www.idyllconsults.com/"
  },
  {
    id: 8,
    name: "GrowAfrica Landing Page",
    image: "/images/projects/growafrica.jpg",
    description: "High-converting landing page for a Made-in-Africa ecommerce platform.",
    fullDescription: `GrowAfrica is preparing for its 2026 launch by gathering interest from shoppers and vendors across the continent.<br/><br/>The landing page features a data collection modal form and an admin dashboard connected to GrowAPI for realtime access.<br/><br/>🌍 Want to shop or sell African products?<br/>Join the movement — for Africans, by Africans.`,
    stack: ["React.js", "Framer Motion", "Vercel", "TypeScript", "Express.js", "Mongoose"],
    url: "https://growafrica.vercel.app"
  },
  {
    id: 9,
    name: "LinkOrgNet",
    image: "/images/projects/collabo/linkorgnet.png",
    description: "Corporate website for LinkOrg Networks LTD",
    fullDescription: `LinkOrg Networks delivers fast, scalable internet across Nigeria, using a mix of fiber optics, radio tech, and satellite solutions.<br/><br/>⚡ High-Speed <br/>🌍 Global Connectivity <br/>💸 Affordable Plans <br/>💬 Always-On Support <br/><br/>Built to scale with business and residential needs alike.<br/><br/><i>This project is a teamwork of the software department of LinkOrg Networks </i><br/>`,
    stack: ["React", "Express API", "Mongoose", "TypeScript"],
    url: "https://linkorgnet.com.ng"
  },
  {
    id: 10,
    name: "Artist Portfolio Website",
    image: "/images/projects/abecole.png",
    description: "A digital portfolio for UK-based Nigerian artist, Abraham Cole.",
    fullDescription: `A beautifully minimal showcase of Abraham Cole’s work. This project merges artistry and engineering to deliver a smooth, immersive viewing experience for art lovers and collectors alike.`,
    stack: ["React", "SCSS", "Tailwind CSS", "Node.js", "Express.js"],
    url: "https://abrahamcole.vercel.app"
  },
  {
    id: 11,
    name: "Musical Empire",
    image: "/images/projects/musical.jpg",
    description: "E-commerce web application for Musical Empire Nigeria Limited",
    fullDescription: `Musical Empire is a business entirely devoted to making readily available the best brands of sound, light equipment, musical instruments and accessories across the world to a wide range of end-users via our E-commerce website and physical store.`,
    stack: ["WordPress", "PhP", "ExpressJS", "NodeJs", "MySQL"],
    url: "https://musicalempire.com.ng"
  },
  // {
  //   id: 9,
  //   name: "Company website",
  //   image: "/images/projects/frontend/urb.jpg",
  //   description: "Official website of UrBizEdge Limited",
  //   fullDescription: `UrBizEdge is a registered Microsoft Excel consulting, financial modelling, business intelligence, data analysis and enterprise solutions firm in Nigeria. We specialise in helping companies and high value professionals be on top of their business data.`,
  //   stack: ["WordPress", "PhP", "MySQL"],
  //   url: "https://rufaddasmedicalsupplies.com"
  // },
  // {
  //   id: 9,
  //   name: "Company website",
  //   image: "/images/projects/rufaddas.png",
  //   description: "Official website of Rufaddas Medical.",
  //   fullDescription: `Rufaddas Medical is devoted to making a, the best medical and care equipment at affordable prices. To discourage fake and substandard products, thereby, reducing mortality rate. At the same time, saving precious resources currently wasted on avoidable health tourism.`,
  //   stack: ["WordPress", "PhP", "MySQL"],
  //   url: "https://rufaddasmedicalsupplies.com"
  // },
  {
    id: 12,
    name: "Company website",
    image: "/images/projects/white.png",
    description: "Official website of Sparkling White, UK.",
    fullDescription: `From residential and commercial properties to industrial sites, our focus is simple: deliver spotless results, ensure peace of mind, and build lasting relationships through trust and quality.`,
    stack: ["NextJS", "Typescript", "Javascript", "Mongoose"],
    url: "https://www.sparklingwhitelimited.co.uk/"
  },
  
];

export const FeaturedProjects: React.FC = () => {
    const router = useRouter();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className={styles.projectSection}>
      <motion.h2 className={styles.heading} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Featured Projects
      </motion.h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.card}
            whileHover={{ scale: 1.03 }}
            onClick={() => setActiveProject(project)}
          >
            <div className={styles.imageWrapper}>
              <Image src={project.image} alt={project.name} fill className={styles.image} />
            </div>
            <div className={styles.cardBody}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.ctaContainer} style={{ textAlign: "center", marginTop: "14px"}}>
        <Link href="/projects" className={styles.projectCta}>
            <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95, rotate: -1 }}
                onClick={() => router.push("/projects")}
                style={{
                backgroundColor: "#111",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "999px",
                border: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                cursor: "pointer",
                }}
            >
                View Full Project Gallery ↗
            </motion.button>
        </Link>
      </div>

      {activeProject && (
        <div className={styles.modalOverlay} onClick={() => setActiveProject(null)}>
          <motion.div
            className={styles.modalContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalImageWrapper}>
              <Image src={activeProject.image} alt={activeProject.name} fill className={styles.modalImage} />
            </div>
            <h3>{activeProject.name}</h3>
            <div
              className={styles.modalDescription}
              dangerouslySetInnerHTML={{ __html: activeProject.fullDescription }}
            />
            <ul className={styles.stackList}>
              {activeProject.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <a href={activeProject.url} target="_blank" className={styles.projectLink}>
              Visit Site ↗
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
};