"use client";
import React from "react";
import styles from "./RandomBits.module.css";

export const RandomBits: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Random Bits</h2>
      <ul className={styles.list}>
        <li>🎧 Lately vibing to alt-J and lo-fi jazz</li>
        <li>🧠 Learning Rust (slowly... painfully... stubbornly)</li>
        <li>☕️ Still not drinking coffee. Still sleeping like a log.</li>
      </ul>
    </section>
  );
};