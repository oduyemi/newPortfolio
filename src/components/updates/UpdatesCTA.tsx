"use client";
import React from "react";
import styles from "./UpdatesCTA.module.css";

export const UpdatesCTA: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.heading}>Want Updates in Your Inbox?</h2>
      <form className={styles.form}>
        <input type="email" placeholder="you@email.com" required className={styles.input} />
        <button type="submit" className={styles.button}>
          Subscribe
        </button>
      </form>
    </section>
  );
};
