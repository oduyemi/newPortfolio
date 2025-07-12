"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Settings, BarChart2 } from "lucide-react";
import styles from "./Skills.module.css";

const skills = [
  {
    icon: <Code2 size={28} color="#fff" />,
    bg: "#111111",
    title: "Frontend Development",
    description: "Crafting clean and minimal user experiences with refined detail.",
    cta: "Recent Works",
    link: "/projects/frontend"
  },
  {
    icon: <Server size={28} color="#fff" />,
    bg: "#111111",
    title: "Backend APIs",
    description: "Engineering fast, secure systems that quietly power your product.",
    cta: "Recent Works",
    link: "/projects/backend"
  },
  {
    icon: <Settings size={28} color="#fff" />,
    bg: "#111111",
    title: "Product Management",
    description: "Focusing on clarity, collaboration, and meaningful delivery.",
    cta: "Learn More",
    link: "/product-management"
  },
  {
    icon: <BarChart2 size={28} color="#fff" />,
    bg: "#111111",
    title: "SEO / Analytics",
    description: "Insightful, data-driven decisions that respect user simplicity.",
    cta: "Learn More",
    link: "/seo-analytics"
  },
];

export const MySkills: React.FC = () => {
  return (
    <section className={styles.skillsSection}>
      <motion.h2
        className={`${styles.heading} animate__animated animate__fadeInDown`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills & Focus Areas
      </motion.h2>

      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className={`${styles.card} animate__animated animate__fadeInUp`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <div className={styles.iconContainer} style={{ background: skill.bg }}>
              {skill.icon}
            </div>
            <h3 className={styles.cardTitle}>{skill.title}</h3>
            <p className={styles.cardDescription}>{skill.description}</p>

            {skill.cta && skill.link && (
              <a href={skill.link} className={styles.link}>
                {skill.cta}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
