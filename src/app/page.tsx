"use client";
import { AboutMe } from "@/components/home/AboutMe";
import { Banner } from "@/components/home/Banner";
import { MyBlog } from "@/components/home/Blog";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FeaturedProjects } from "@/components/project/FeaturedProjects";
import { ProjectHub } from "@/components/project/ProjectHub";
import { MySkills } from "@/components/home/Skills";
import { Testimonials } from "@/components/home/Testimonials";
import { motion } from "framer-motion";
import styles from "@/components/home/About.module.css"
export default function Home() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div style={{ marginTop: "4%"}}>
        <MySkills />
      </div>
      <div>
        <FeaturedProjects />
      </div>
      <div>
        <motion.div
        className={styles.headerContainer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.aboutHeading}>About Me</h2>
        <div className={styles.divider} />
      </motion.div>
        <AboutMe />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <MyBlog />
      </div>
      <div>
        <ContactCTA />
      </div>
      <div>
        <ProjectHub />
      </div>
    </>

  );
}
