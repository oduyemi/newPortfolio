"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./Faq.module.css";

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "I work on full-stack apps, admin dashboards, APIs, and clean code revamps. If it runs in the browser or server, I’ve probably debugged it at 3am.",
  },
  {
    question: "Do you work with agencies or direct clients?",
    answer:
      "Both. I currently work as a Software Developer/Product Manager for LinkOrg Networks LTD. I partner with agencies as an extension of their dev team and also build directly for startups, creators, and founders — especially those who understand that scope creep is not a love language.",
  },
  {
    question: "What's your turnaround time like?",
    answer:
      "Depends on the scope, but I’m allergic to missed deadlines. You’ll always know where things stand, no guesswork.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes — I ship, support, and scale. Whether it’s patching bugs, adding features, or just optimizing performance, I stick around if needed.",
  },
  {
    question: "Can I see past work or testimonials?",
    answer:
      "Absolutely. I’m happy to walk you through past projects and outcomes. Just ask and I’ll share links and case studies.",
  },
];

export const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>FAQs</h2>

      <div className={styles.wrapper}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.card} ${openIndex === index ? styles.active : ""}`}
            onClick={() => toggle(index)}
          >
            <div className={styles.header}>
              <h3 className={styles.question}>{faq.question}</h3>
              <ChevronDown
                size={18}
                className={`${styles.icon} ${openIndex === index ? styles.rotate : ""}`}
              />
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  className={styles.answer}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        Still curious?{" "}
        <a href="/contact" className={styles.link}>
          Let&apos;s talk.
        </a>
      </div>
    </section>
  );
};
