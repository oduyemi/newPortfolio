/* eslint-disable */
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";
import styles from "./Testimonials.module.css";

type Testimonial = {
  name: string;
  role: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Olubunmi Oderinde",
    role: "Software Tester, IC24",
    message:
      "Working with Yemi has been transformative. Her ability to take our ideas and turn them into real, functional systems is unmatched.",
  },
  {
    name: "Abraham Cole",
    role: "Artist/Communicator & Designer",
    message:
      "Working with Opeyemi was a great experience, as software developer, She's well informed and a creative individual that added brilliance and lots of value to my project.",
  },
  {
    name: "Great Chimezie",
    role: "Software Developer",
    message:
      `I always look forward to seeing your deployed project. Fire up dev, I like the energy 🔥`,
  },
];

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.testimonialSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <MessageCircleHeart size={24} className={styles.icon} />
        Unpaid Compliments (Allegedly)
      </motion.h2>

      <div className={styles.centerWrapper}>
        <div className={styles.sliderOuter}>
          <div className={styles.sliderContainer} style={{ margin: "auto"}}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <p className={styles.message}>
                  &ldquo;{testimonials[index].message}&rdquo;
                </p>
                <div className={styles.author}>
                  <span className={styles.name}>{testimonials[index].name}</span>
                  <span className={styles.role}>{testimonials[index].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
