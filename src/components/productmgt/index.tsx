"use client";
import React from "react";
import styles from "./Management.module.css";

export default function ProductManagement() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Product Management</h1>
        <p className={styles.subtitle}>
          Building products that solve problems, delight users, and scale sustainably.
          From ideation to delivery — with strategy, empathy, and execution.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.heading}>📌 Focus Areas</h2>
            <ul className={styles.list}>
              <li>Product Strategy & Roadmapping</li>
              <li>User Research & Competitive Analysis</li>
              <li>Feature Prioritization</li>
              <li>Agile Delivery & Cross-functional Collaboration</li>
              <li>Metrics Tracking & Iteration</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.heading}>🛠 Tools & Methods</h2>
            <ul className={styles.list}>
              <li>Wireframes & Prototyping (Figma, Whimsical)</li>
              <li>Backlog Management (Jira, Notion)</li>
              <li>OKRs, KPIs & Product Analytics</li>
              <li>User Story Mapping & JTBD Framework</li>
              <li>Lean, Agile, Scrum & Kanban</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.headingCenter}>🌟 Product Philosophy</h2>
        <p className={styles.philosophy}>
          I believe in building with empathy — putting user needs at the center, validating ideas
          early, and collaborating with engineering, design, and marketing teams to ship products
          that matter. Every decision should be intentional, and every iteration a step closer to clarity.
        </p>
      </section>

      <section className={styles.ctaSection}>
        <a href="/contact" className={styles.ctaButton}>
          Let&apos;s Talk
        </a>
      </section>
    </main>
  );
}
