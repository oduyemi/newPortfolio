"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  fullDescription: string;
  stack: string[];
  url: string;
};

const projects = [
  {
    id: 1,
    name: "Hustle & Grind",
    image: "/images/projects/frontend/hustle.png",
    description: "Landing page for hacker-house accelerator.",
    fullDescription: `Hustle & Grind delivers a month of intensive growth, mentorship, and fundraising strategy in Lagos.`,
    stack: ["Next.js", "Framer Motion", "TypeScript"],
    url: "https://hustle.adewaleyusuf.com/"
  },
  {
    id: 2,
    name: "Native Soups",
    image: "/images/projects/frontend/soups.jpg",
    description: "E-commerce demo that caters for supply of indigenous soups.",
    fullDescription: `Native Soups is aimed at helping to improve the availability of quality native cusines, thereby, exploiting & preserving native food & nutritional knowledge, as well as reducing unemployment rate among youths.`,
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://www.idyllconsults.com/"
  },
  {
    id: 3,
    name: "Giba Healthcare",
    image: "/images/projects/giba.png",
    description: "Web app for a modern wellness clinic across 4 U.S. states.",
    fullDescription: `Giba Medical Clinic is redefining healthcare with cutting-edge therapies:<br/><br/>🔹 Weight Loss Programs <br/>🔹 Hormone Replacement Therapy <br/>🔹 Virtual Consultations <br/>🔹 Direct Primary Care <br/><br/>Also includes a custom admin dashboard to manage users, emails, inquiries, and internal workflows.<br/><br/>Experience the future of wellness with Giba.`,
    stack: ["NextJS", "ExpressJS", "Mongoose", "IntakeQ Client API"],
    url: "https://gibarestorative.com"
  },
  {
    id: 4,
    name: "Idyll Consults",
    image: "/images/projects/idyllconsults.jpg",
    description: "Official platform for UK-based Idyll Consults.",
    fullDescription: `At Idyll Consults, the mission is to empower students globally through ethical recruitment and strong support systems.<br/><br/><em>“Excellence is not just a goal — it’s our commitment.”</em><br/>The team works relentlessly to guide students with the right resources, every step of the way.<br/><br/>Visit Idyll Consults today and explore a world of opportunity.`,
    stack: ["React", "OpenAI API", "Node.js"],
    url: "https://www.idyllconsults.com/"
  },
  {
    id: 5,
    name: "LinkOrgNet",
    image: "/images/projects/collabo/linkorgnet.png",
    description: "Corporate website for LinkOrg Networks LTD",
    fullDescription: `LinkOrg Networks delivers fast, scalable internet across Nigeria, using a mix of fiber optics, radio tech, and satellite solutions.<br/><br/>⚡ High-Speed <br/>🌍 Global Connectivity <br/>💸 Affordable Plans <br/>💬 Always-On Support <br/><br/>Built to scale with business and residential needs alike.<br/><br/><i>This project is a teamwork of the software department of LinkOrg Networks </i><br/>`,
    stack: ["React", "Express API", "Mongoose", "TypeScript"],
    url: "https://linkorgnet.com.ng"
  },
  {
    id: 6,
    name: "Artist Portfolio Website",
    image: "/images/projects/abecole.png",
    description: "A digital portfolio for UK-based Nigerian artist, Abraham Cole.",
    fullDescription: `A beautifully minimal showcase of Abraham Cole’s work. This project merges artistry and engineering to deliver a smooth, immersive viewing experience for art lovers and collectors alike.`,
    stack: ["React", "SCSS", "Tailwind CSS", "Node.js", "Express.js"],
    url: "https://abrahamcole.vercel.app"
  },
  {
    id: 7,
    name: "GrowAfrica Landing Page",
    image: "/images/projects/growafrica.jpg",
    description: "High-converting landing page for a Made-in-Africa ecommerce platform.",
    fullDescription: `GrowAfrica is preparing for its 2026 launch by gathering interest from shoppers and vendors across the continent.<br/><br/>The landing page features a data collection modal form and an admin dashboard connected to GrowAPI for realtime access.<br/><br/>🌍 Want to shop or sell African products?<br/>Join the movement — for Africans, by Africans.`,
    stack: ["React.js", "Framer Motion", "Vercel", "TypeScript", "Express.js", "Mongoose"],
    url: "https://growafrica.vercel.app"
  },
  {
    id: 8,
    name: "Haut Logistics",
    image: "/images/projects/frontend/haut.png",
    description: "Demo for logistics web application.",
    fullDescription: `Haut Logistics We handle all aspects of fulfillment and delivery. Our services include:<br/><br/>
                    Air freight into Canada and from Canada<br/>
                    Sea freight import into Canada and export from Canada<br/>
                    Door to Door service<br/>
                    LTL ( Less than Truckload) within Canada<br/>
                    FTL ( Full Truck Load) within Canada<br/>
                    Relocation service Within canada<br/>`,
    stack: ["React.js", "Framer Motion", "Vercel", "TypeScript"],
    url: "https://hautlogistics.vercel.app/"
  },
  {
    id: 9,
    name: "The Churches Online Platform",
    image: "/images/projects/frontend/churches.jpg",
    description: "A religious web platform that help people to connect to local churches online.",
    fullDescription: `The churches Online is an extension of the body of Christ. It is a platform where believers can connect to local churches as the body. Would you like a feature on the Churches Online platform? It is a free service. Our main goal is to promote unity in the body of Christ and operate as one body.`,
    stack: ["React", "SCSS", "Tailwind CSS", "Node.js", "Express.js"],
    url: "https://abrahamcole.vercel.app"
  },
  {
    id: 10,
    name: "Musical Empire",
    image: "/images/projects/frontend/musical.png",
    description: "E-commerce web application for Musical Empire Nigeria Limited",
    fullDescription: `Musical Empire is a business entirely devoted to making readily available the best brands of sound, light equipment, musical instruments and accessories across the world to a wide range of end-users via our E-commerce website and physical store.`,
    stack: ["WordPress", "PhP", "ExpressJS", "NodeJs", "MySQL"],
    url: "https://musicalempire.com.ng"
  },
  {
    id: 11,
    name: "Company website",
    image: "/images/projects/frontend/ruf.jpg",
    description: "Official website of Rufaddas Medical.",
    fullDescription: `Rufaddas Medical is devoted to making a, the best medical and care equipment at affordable prices. To discourage fake and substandard products, thereby, reducing mortality rate. At the same time, saving precious resources currently wasted on avoidable health tourism.`,
    stack: ["WordPress", "PhP", "MySQL"],
    url: "https://rufaddasmedicalsupplies.com"
  },
  {
    id: 12,
    name: "Company website",
    image: "/images/projects/frontend/urb.jpg",
    description: "Official website of UrBizEdge Limited",
    fullDescription: `UrBizEdge is a registered Microsoft Excel consulting, financial modelling, business intelligence, data analysis and enterprise solutions firm in Nigeria. We specialise in helping companies and high value professionals be on top of their business data.`,
    stack: ["WordPress", "PhP", "MySQL"],
    url: "https://rufaddasmedicalsupplies.com"
  }
];


export const FrontendProjects: React.FC = () => {
    const router = useRouter();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className={styles.projectSection}>
      <motion.h2 className={styles.heading} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Frontend Projects
      </motion.h2>
     
      <div className={styles.grid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.card}
            whileHover={{ scale: 1.03 }}
            onClick={() => setActiveProject(project)}
          >
            <div className={styles.imageWrapper}>
              <Image src={project.image} alt={project.name} fill className={styles.image} />
            </div>
            <div className={styles.cardBody}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.ctaContainer} style={{ textAlign: "center", marginTop: "14px"}}>
        <Link href="/projects" className={styles.projectCta}>
            <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95, rotate: -1 }}
                onClick={() => router.push("/projects")}
                style={{
                backgroundColor: "#111",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "999px",
                border: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                cursor: "pointer",
                }}
            >
                View Full Project Gallery ↗
            </motion.button>
        </Link>
      </div>

      {activeProject && (
        <div className={styles.modalOverlay} onClick={() => setActiveProject(null)}>
          <motion.div
            className={styles.modalContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalImageWrapper}>
              <Image src={activeProject.image} alt={activeProject.name} fill className={styles.modalImage} />
            </div>
            <h3>{activeProject.name}</h3>
            <div
              className={styles.modalDescription}
              dangerouslySetInnerHTML={{ __html: activeProject.fullDescription }}
            />
            <ul className={styles.stackList}>
              {activeProject.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <a href={activeProject.url} target="_blank" className={styles.projectLink}>
              Visit Project ↗
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
};