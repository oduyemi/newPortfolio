"use client";
import React from "react";
import styles from "./UpdatesHero.module.css";

export const UpdatesHero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.heading}>What&apos;s New</h1>
        <p className={styles.subheading}>
          Thoughts, experiments, and development logs. Occasionally unhinged. Always authentic.
        </p>
      </div>
    </section>
  );
};