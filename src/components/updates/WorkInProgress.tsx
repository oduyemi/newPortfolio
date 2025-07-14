"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../home/Projects.module.css";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  fullDescription: string;
  stack: string[];
};

const projects = [
  {
    id: 1,
    name: "LinkOrg VoIP",
    image: "/images/projects/wip/linkorgvoip.png",
    description: "Fullstack E-commerce Application/VoIP Platform",
    fullDescription: `VoIP platform . Built with Next.js 14 and integrating with ProVu's telecom infrastructure for real-time VoIP provisioning and management.<br/><br/>`,
    stack: ["Next.js14", "TypeScript", "TanStack Query", "Zustand", "Stripe", "ProVu API", "ByComsAPI", "ExpressJS", "NeonAPI"],
  },
  {
    id: 2,
    name: "Novunt",
    image: "/images/projects/wip/novuntui.png",
    description: "Official platform for UK-based Idyll Consults.",
    fullDescription: `Currently Enhancing the UI and integrating the API I built for it; NovuntAPI`,
    stack: ["React", "OpenAI API", "Node.js", "Express.js", "Mongoose"],
  },
  {
    id: 3,
    name: "Kofoworola Alasooke",
    image: "/images/projects/wip/alaso.png",
    description: "E-commerce web application for Fashion icon.",
    fullDescription: ``,
    stack: ["NextJS", "ExpressJS", "Mongoose"],
  },
];

export const WorkInProgress: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className={styles.projectSection}>
      <motion.h2 className={styles.heading} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Work In Progress
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
          </motion.div>
        </div>
      )}
    </section>
  );
};