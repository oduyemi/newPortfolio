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
  url: string;
};

const projects = [
  {
    id: 1,
    name: "E-Commerce Dashboard",
    image: "/projects/ecommerce.png",
    description: "A robust analytics platform for e-commerce admins.",
    fullDescription: "Built with Next.js and Chart.js to visualize sales, customers, and inventory in real-time.",
    stack: ["Next.js", "Tailwind CSS", "Chart.js"],
    url: "https://example.com/ecommerce"
  },
  {
    id: 2,
    name: "AI Blog Generator",
    image: "/images/projects/aiblog.png",
    description: "Generates SEO-friendly blogs using OpenAI APIs.",
    fullDescription: "Integrates GPT-4 to create long-form content with customizable tone, length, and citations.",
    stack: ["React", "OpenAI API", "Node.js"],
    url: "https://example.com/aiblog"
  },
  {
    id: 3,
    name: "Giba Healthcare",
    image: "/images/projects/giba.png",
    description: "Manage leave, performance and HR workflows in one place.",
    fullDescription: "A streamlined portal to track employee time off, reviews, and documents with secure access.",
    stack: ["Vue", "Firebase", "Sass"],
    url: "https://example.com/hrportal"
  },
  {
    id: 4,
    name: "Crypto Tracker",
    image: "/projects/crypto.png",
    description: "Real-time dashboard for monitoring crypto markets.",
    fullDescription: "Using CoinGecko API and WebSockets for live updates. Includes portfolio monitoring and alerts.",
    stack: ["React", "Socket.io", "CoinGecko API"],
    url: "https://example.com/crypto"
  },
  {
    id: 5,
    name: "Startup Landing Page",
    image: "/projects/startup.png",
    description: "Sleek landing page optimized for conversions.",
    fullDescription: "Built with responsiveness and performance in mind. Integrates analytics and user tracking.",
    stack: ["Next.js", "Framer Motion", "Vercel"],
    url: "https://example.com/startup"
  },
  {
    id: 6,
    name: "EdTech Course Hub",
    image: "/projects/edtech.png",
    description: "Course marketplace with user dashboard and payments.",
    fullDescription: "Built with React, Stripe, and Firebase Auth to manage subscriptions and course progress.",
    stack: ["React", "Stripe", "Firebase"],
    url: "https://example.com/edtech"
  }
];

export const FeaturedProjects: React.FC = () => {
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
            <p>{activeProject.fullDescription}</p>
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