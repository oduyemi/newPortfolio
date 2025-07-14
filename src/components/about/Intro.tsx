"use client";
import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import styles from "./About.module.css";

export const AboutIntro: React.FC = () => {
  return (
    <section className={styles.introSection}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className={styles.heading}>
          <User size={24} /> Meet Yemi
        </h1>
        <p className={styles.paragraph}>
          I'm a curious fullstack developer passionate about solving problems with code.
          Whether building smooth user experiences or scalable backend systems, I enjoy
          bringing ideas to life. Currently exploring geospatial data as an MLH Fellow.
        </p>
      </motion.div>
    </section>
  );
};
