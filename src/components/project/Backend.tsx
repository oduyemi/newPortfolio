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
};

const projects = [
  {
    id: 1,
    name: "BriteBatch",
    image: "/images/projects/backend/britebatch.png",
    description: "An inventory management API that manages batches of products.",
    fullDescription: `BriteBatch is an inventory management API designed to handle batches of products efficiently. It is built using Java Spring Boot and utilizes a MySQL database for data storage. This documentation provides detailed information on how to integrate and interact with the BriteBatch API.`,
    stack: ["Java", "SpringBoot", "MySQL"],
  },
  {
    id: 2,
    name: "ChatBot",
    image: "/images/projects/backend/chatbt.png",
    description: "AI Chat bot",
    fullDescription: `ChatBot is a simple Python project that utilizes the OpenAI API to create a conversational chatbot powered by the GPT-3.5 model. This chatbot can engage in text-based conversations with users by generating responses based on the input provided by the user`,
    stack: ["Python", "OpenAI"],
  },
  {
    id: 3,
    name: "FilmHouse API",
    image: "/images/projects/backend/filmhouse.png",
    description: "API that maintains the records of all movies for a sales and rental movie business. Powered by Python FastAPI",
    fullDescription: `RestAPI allows users to shorten URLs by pasting a long URL into the it's platform and a shorter URL gets automatically generated. The shortened URL is designed to be as short as possible, making it easy to share on social media or through other channels.`,
    stack: ["Python", "FastAPI", "MySQL"],
  },
  {
    id: 4,
    name: "ProForum API",
    image: "/images/projects/backend/proforum.png",
    description: "API for a forum to be integrated into the ProGrowing mentorship platform.",
    fullDescription: `ProForumAPI is an API designed to provide forum functionality for the ProGrowing mentorship platform. It allows users to create posts, comment on posts, like and dislike posts and comments, and interact with tags.`,
    stack: ["Typescript", "Node.js", "Express", "Nodemon", "Mongoose"],
  },
  {
    id: 5,
    name: "LinkOrgAPI",
    image: "/images/projects/backend/linkorg.png",
    description: "API for managing administrative actions, user authentication, session handling, and error handling.",
    fullDescription: `ProForumAPI is an API designed to provide forum functionality for the ProGrowing mentorship platform. It allows users to create posts, comment on posts, like and dislike posts and comments, and interact with tags.`,
    stack: ["Typescript", "Node.js", "Express", "Nodemon", "Mongoose"],
  },
  {
    id: 6,
    name: "GrowAPI",
    image: "/images/projects/backend/presch.png",
    description: "Backend for Grow Africa Landing page to collect waitlist for landing page's form input. Basically gathering user data.",
    fullDescription: `The goal is to keep the end-users in mind and aim for a system that not only meets the technical requirements but is also practical and user-friendly for those interacting with it on a daily basis.`,
    stack: ["Typescript", "JavaScript", "Express", "Mongoose"],
  },
  {
    id: 7,
    name: "Pre-School API",
    image: "/images/projects/backend/presch.png",
    description: "API that maintains the records of all students in a private Daycare center.",
    fullDescription: `The goal is to keep the end-users in mind and aim for a system that not only meets the technical requirements but is also practical and user-friendly for those interacting with it on a daily basis.`,
    stack: ["Python", "FastAPI", "MySQL"],
  },
  {
    id: 8,
    name: "Scissor",
    image: "/images/projects/backend/scissorapi.jpg",
    description: "Link shortner",
    fullDescription: `RestAPI allows users to shorten URLs by pasting a long URL into the it's platform and a shorter URL gets automatically generated. The shortened URL is designed to be as short as possible, making it easy to share on social media or through other channels.`,
    stack: ["Python", "FastAPI", "MySQL"],
  },
  {
    id: 9,
    name: "Schedula",
    image: "/images/projects/backend/schedula.png",
    description: "Backend for Schedula; a to-do web application",
    fullDescription: `Backend for Schedula; a to-do web application`,
    stack: ["Python", "Flask", "MySQL"],
  },
  {
    id: 10,
    name: "ChatBot",
    image: "/images/projects/backend/chatbt.png",
    description: "AI Chat bot",
    fullDescription: `ChatBot is a simple Python project that utilizes the OpenAI API to create a conversational chatbot powered by the GPT-3.5 model. This chatbot can engage in text-based conversations with users by generating responses based on the input provided by the user`,
    stack: ["Python", "OpenAI"],
  },
  {
    id: 11,
    name: "VerifyAPI",
    image: "/images/projects/backend/verify.png",
    description: "A product authentication backend for Verify",
    fullDescription: `Verify is a web application that allows users to verify the authenticity of products.`,
    stack: ["Java", "Spring", "MySQL"],
  },
  {
    id: 12,
    name: "Novunt API",
    image: "/images/projects/backend/novunt.png",
    description: "API for a forum to be integrated into the ProGrowing mentorship platform.",
    fullDescription: `ProForumAPI is an API designed to provide forum functionality for the ProGrowing mentorship platform. It allows users to create posts, comment on posts, like and dislike posts and comments, and interact with tags.`,
    stack: ["Typescript", "Node.js", "Express", "Nodemon", "Mongoose"],
  },
  
];


export const BackendProjects: React.FC = () => {
    const router = useRouter();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className={styles.projectSection}>
      <motion.h2 className={styles.heading} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Backend Projects
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
          </motion.div>
        </div>
      )}
    </section>
  );
};