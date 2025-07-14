"use client";
import React from "react";
import styles from "./RecentHighlights.module.css";

export const RecentHighlights: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Recent Highlights</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>🚧 Project Portal is Coming Soon</h3>
            <p className={styles.description}>
              I&apos;m currently building a 
              full-featured web-based client portal. 
              It will serve as a hub for project 
              collaboration — clients can share files, 
              track milestones, and get real-time updates. 
              Think of it as a communication bridge 
              that eliminates email chaos.
            </p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>🌱 ProGrowing Initiative</h3>
            <p className={styles.description}>
              I&apos;ve launched <strong>ProGrowing</strong>, 
              a mentorship & upskilling initiative tailored 
              for devs navigating early-career confusion. It&apos;s 
              my small way of supporting those who are 
              committed — no handholding, just honest, 
              growth-focused sessions.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
