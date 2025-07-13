"use client";
import React from "react";
import { Github, Linkedin, Mail, Book } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/oduyemi",
    label: "GitHub",
    icon: <Github size={20} />,
  },
  {
    href: "https://www.linkedin.com/in/opeyemi-oduyemi-bba776124/",
    label: "LinkedIn",
    icon: <Linkedin size={20} />,
  },
  {
    href: "mailto:hello@oduyemi.dev",
    label: "Email",
    icon: <Mail size={20} />,
  },
  {
    href: "https://oduyemi.hashnode.dev/",
    label: "Blog",
    icon: <Book size={20} />,
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="name">
          I build things people didn&apos;t realize they needed &#8209; until they do.
        </div>

        <div className="socials">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={link.href} target="_blank" aria-label={link.label}>
                {link.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bottom">
        <p>&copy; {new Date().getFullYear()} Oduyemi. All rights reserved.</p>
      </div>
    </footer>
  );
};
