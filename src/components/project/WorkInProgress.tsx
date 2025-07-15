"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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

const projects = [
  {
    id: 1,
    name: "Preschool",
    image: "/images/projects/wip/preschool.jpg",
    description: "Frontend application for a creche: A web application with Pre-School API integration",
    fullDescription: `The goal is to keep the end-users in mind and aim for a system that not only meets the technical requirements but is also practical and user-friendly for those interacting with it on a daily basis.`,
    stack: ["NextJS", "ExpressJS", "Python", "FastAPI", "PostGresSQL"],
  },
  {
    id: 2,
    name: "LinkOrg VoIP",
    image: "/images/projects/wip/linkorgvoip.png",
    description: "Fullstack E-commerce Application/VoIP Platform",
    fullDescription: `VoIP platform . Built with Next.js 14 and integrating with ProVu's telecom infrastructure for real-time VoIP provisioning and management.<br/><br/>`,
    stack: ["Next.js14", "TypeScript", "TanStack Query", "Zustand", "Stripe", "ProVu API", "ByComsAPI", "ExpressJS", "NeonAPI"],
  },
  {
    id: 3,
    name: "Project Hub",
    image: "/images/projects/wip/portallanding.png",
    description: "My project hub. As a fullstack developer/product manager, I am coming up with a task management/project tracker tool for my clients",
    fullDescription: `A web based project portal that would serve as a central communication hub between myself and my clients, where my clients can share media files as regards their project and track it’s progress.`,
    stack: ["NextJS", "NestJS", "Node", "MongoDB", "Cloudinary", "Socket.io"],
  },  
  {
    id: 4,
    name: "Kofoworola Alasooke",
    image: "/images/projects/wip/alaso.png",
    description: "E-commerce web application for Fashion icon.",
    fullDescription: ``,
    stack: ["NextJS", "ExpressJS", "Mongoose"],
  },
  {
    id: 5,
    name: "Novunt",
    image: "/images/projects/wip/novuntui.png",
    description: "Investment platform",
    fullDescription: `Novunt is an innovative financial platform committed to redefining profit-sharing and reward distribution in the investment ecosystem. The incentive program is built on principles of fairness, sustainability, and strategic growth, ensuring equitable benefits for all participants while safeguarding the platform’s profitability. <br/><br/>Currently Enhancing the UI and integrating the API I built for it; NovuntAPI <br/>`,
    stack: ["React", "OpenAI API", "Node.js", "Express.js", "Mongoose"],
  },
  {
    id: 6,
    name: "Customer Portal for LinkOrgNet",
    image: "/images/projects/wip/lportal.png",
    description: "Client/admin/Account portal: A PWA",
    fullDescription: `This project is a teamwork of the software department of LinkOrg Networks. The goal is to help end-users access their client portal and manage their internet subscriptions without much intervention from staff.`,
    stack: ["NextJS", "ExpressJS", "Python", "FastAPI", "PostGresDB"],
  },
];

export const WorkInProgress: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className={styles.projectSection}>
      <motion.h2 className={styles.heading} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Work In Progress
      </motion.h2>
      <motion.p 
        style={{
          maxWidth: "700px",
          fontSize: "1rem",
          lineHeight: "1.7",
          color: "#333",
        }}
      >
        This projects are currently still in development. 
        This is an insight into some of the ideas 
        I am building on per time. 
      </motion.p>

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