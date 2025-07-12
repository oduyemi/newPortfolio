/* eslint-disable */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.css";
import Link from "next/link";
import { Button } from "../ui/button";
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
    name: "Simple Todo Application",
    image: "/images/projects/todospring.jpg",
    description: "Simple and classy task management app.",
    fullDescription: `A lightweight Java-based application to help users schedule tasks in real-time with ease and elegance.<br/><br/><a href="https://github.com/oduyemi/todo" target="_blank">See the Code</a>`,
    stack: ["Java", "Spring Framework"],
    url: "https://github.com/oduyemi/todo"
  },
  {
    id: 2,
    name: "Idyll Consults",
    image: "/images/projects/idyllconsults.jpg",
    description: "Official platform for UK-based Idyll Consults.",
    fullDescription: `At Idyll Consults, the mission is to empower students globally through ethical recruitment and strong support systems.<br/><br/><em>“Excellence is not just a goal — it’s our commitment.”</em><br/>The team works relentlessly to guide students with the right resources, every step of the way.<br/><br/>Visit Idyll Consults today and explore a world of opportunity.`,
    stack: ["React", "OpenAI API", "Node.js"],
    url: "https://www.idyllconsults.com/"
  },
  {
    id: 3,
    name: "Giba Healthcare",
    image: "/images/projects/giba.png",
    description: "Web app for a modern wellness clinic across 4 U.S. states.",
    fullDescription: `Giba Medical Clinic is redefining healthcare with cutting-edge therapies:<br/><br/>🔹 Weight Loss Programs <br/>🔹 Hormone Replacement Therapy <br/>🔹 Virtual Consultations <br/>🔹 Direct Primary Care <br/><br/>Also includes a custom admin dashboard to manage users, emails, inquiries, and internal workflows.<br/><br/>Experience the future of wellness with Giba.`,
    stack: ["NextJS", "ExpressJS", "Mongoose"],
    url: "https://gibarestorative.com"
  },
  {
    id: 4,
    name: "LinkOrgNet",
    image: "/images/projects/linkorgnet.png",
    description: "Corporate website for LinkOrg Networks LTD.",
    fullDescription: `LinkOrg Networks delivers fast, scalable internet across Nigeria, using a mix of fiber optics, radio tech, and satellite solutions.<br/><br/>⚡ High-Speed <br/>🌍 Global Connectivity <br/>💸 Affordable Plans <br/>💬 Always-On Support <br/><br/>Built to scale with business and residential needs alike.`,
    stack: ["React", "Socket.io", "Express API", "Mongoose", "TypeScript"],
    url: "https://linkorgnet.com.ng"
  },
  {
    id: 5,
    name: "GrowAfrica Landing Page",
    image: "/images/projects/growafrica.jpg",
    description: "High-converting landing page for a Made-in-Africa ecommerce platform.",
    fullDescription: `GrowAfrica is preparing for its 2026 launch by gathering interest from shoppers and vendors across the continent.<br/><br/>The landing page features a data collection modal form and an admin dashboard connected to GrowAPI for realtime access.<br/><br/>🌍 Want to shop or sell African products?<br/>Join the movement — for Africans, by Africans.`,
    stack: ["React.js", "Framer Motion", "Vercel", "TypeScript", "Express.js", "Mongoose"],
    url: "https://growafrica.vercel.app"
  },
  {
    id: 6,
    name: "Artist Portfolio Website",
    image: "/images/projects/abecole.png",
    description: "A digital portfolio for UK-based Nigerian artist, Abraham Cole.",
    fullDescription: `A beautifully minimal showcase of Abraham Cole’s work. This project merges artistry and engineering to deliver a smooth, immersive viewing experience for art lovers and collectors alike.`,
    stack: ["React", "SASS", "Tailwind CSS", "Node.js", "Express.js"],
    url: "https://abrahamcole.vercel.app"
  }
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
      <div className={styles.ctaContainer} style={{ textAlign: "center", marginTop: "10px"}}>
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
              Visit Project ↗
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
};