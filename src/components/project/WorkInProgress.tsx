"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.css";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  fullDescription: string;
  stack: string[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "ProLearn",
    image: "/images/projects/wip/learn.jpg",
    description: "A learning management system for ProGrowing",
    fullDescription:
      "Version 2 of the ProGrowing Learn application. A learning management system built to scale learning within the ProGrowing community.",
    stack: ["Next.js", "TypeScript", "Mongoose", "Cloudinary", "Socket.IO"],
  },
  {
    id: 2,
    name: "Project Hub",
    image: "/images/projects/wip/portallanding.png",
    description:
      "A project and communication hub for managing client projects efficiently.",
    fullDescription:
      "A web-based portal that serves as a central communication hub between clients and myself. Clients can share files, monitor progress, and collaborate seamlessly.",
    stack: ["Next.js", "NestJS", "MongoDB", "Cloudinary", "Socket.IO"],
  },
  {
    id: 3,
    name: "Kofoworola Alasooke",
    image: "/images/projects/wip/alaso.png",
    description: "E-commerce platform for a fashion brand.",
    fullDescription:
      "A modern e-commerce experience built to showcase fashion collections and streamline online sales.",
    stack: ["Next.js", "Express.js", "Mongoose"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const WorkInProgress: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className={styles.projectSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Work In Progress
      </motion.h2>

      {/* <motion.p
        className={styles.subText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        These projects are currently under active development — a glimpse into
        ideas I’m shaping and iterating on.
      </motion.p> */}

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className={styles.card}
            onClick={() => setActiveProject(project)}
            role="button"
            tabIndex={0}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.name}
                fill
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.cardBody}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className={styles.viewHint}>View details →</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setActiveProject(null)}
                aria-label="Close modal"
              >
                ×
              </button>

              <div className={styles.modalImageWrapper}>
                <Image
                  src={activeProject.image}
                  alt={activeProject.name}
                  fill
                  className={styles.modalImage}
                />
              </div>

              <h3>{activeProject.name}</h3>
              <p className={styles.modalDescription}>
                {activeProject.fullDescription}
              </p>

              <ul className={styles.stackList}>
                {activeProject.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
