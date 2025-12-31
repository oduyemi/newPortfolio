"use client";
import * as React from "react";
import { motion, easeOut, type Variants } from "framer-motion";
import { Check, Loader2, Dot } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./RecentHighlights.module.css";


const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.4,
      ease: easeOut,
    },
  }),
};


export const RecentHighlights: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Recent Highlights</h2>
          <p className={styles.intro}>
            A short progression of what’s live, what’s evolving, and what’s next
            within the ProGrowing ecosystem.
          </p>
        </header>

        <ul className={styles.list}>
          {/* COMPLETED */}
          <motion.li
            custom={0}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={styles.item}
          >
            <span className={styles.iconCompleted}>
              <Check size={14} />
            </span>

            <div className={styles.content}>
              <h3 className={styles.subtitle}>
                ProGrowing Umbrella Platform
              </h3>
              <p className={styles.description}>
                The core ProGrowing platform is complete and deployed. It serves
                as the foundation that ties the entire ecosystem together.
              </p>

              <a
                href="https://progrowing.org"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                progrowing.org →
              </a>
            </div>
          </motion.li>

          {/* ACTIVE */}
          <motion.li
            custom={1}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={cn(styles.item, styles.active)}
          >
            <span className={styles.iconActive}>
              <Loader2 size={14} className={styles.spin} />
            </span>

            <div className={styles.content}>
              <h3 className={styles.subtitle}>
                ProLearn — Learning Platform
              </h3>
              <p className={styles.description}>
                ProLearn has been revamped into a structured learning management
                system. I’m currently building course content — mixing technical
                depth with creative exploration.
              </p>

              <a
                href="https://learn.progrowing.org"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                learn.progrowing.org →
              </a>
            </div>
          </motion.li>

          {/* UPCOMING */}
          <motion.li
            custom={2}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={styles.item}
          >
            <span className={styles.iconUpcoming}>
              <Dot size={18} />
            </span>

            <div className={styles.content}>
              <h3 className={styles.subtitle}>
                ProForum — Mentorship Community
              </h3>
              <p className={styles.description}>
                A discussion-focused forum for mentorship, peer learning, and
                meaningful technical conversations.
              </p>

              <p className={styles.meta}>
                Planned deployment: <code>forum.progrowing.org</code>
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};
