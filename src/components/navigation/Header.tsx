"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useWindowScroll from "beautiful-react-hooks/useWindowScroll";
import {
  Bookmark,
  Info,
  MessageSquareText,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { easeOut } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";




export const Header: React.FC = () => {
  const router = useRouter();
  const onWindowScroll = useWindowScroll();
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const effectThreshold = 20;

  useEffect(() => {
    setMounted(true);
  }, []);

  onWindowScroll(() => {
    setScrollY(window.scrollY);
  });

  const navItemVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeOut },
  },
};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  return (
    <nav
      className={cn(
        "fixed text-white top-0 z-50 flex w-full items-center justify-between px-8 py-5 transition-all duration-300 ease-out",
        scrollY > effectThreshold
          ? "border-b border-muted bg-background/80 shadow-lg backdrop-blur-md lg:px-32"
          : "bg-transparent lg:px-20"
      )}
    >
      {/* ==== Logo and Nav Links ==== */}
      <div className="flex flex-row items-center space-x-6 overflow-x-auto whitespace-nowrap">
        <Link href="/">
          <motion.div
            className="cursor-pointer text-xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {mounted ? (
              <Image
                alt="Site logo"
                src="/images/logo/logo_black.png"
                width={100}
                height={100}
                className="mt-[-5%]"
                priority
              />
            ) : (
              <div className="h-[40px] w-[120px] animate-pulse rounded-md bg-muted" />
            )}
          </motion.div>
        </Link>

        <motion.div
          className="flex flex-row flex-wrap space-x-6 border-l border-primary/20 px-3 justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={navItemVariants}>
            <Link
              href="/"
              className="text-foreground visited:text-foreground hover:text-primary transition-colors"
              style={{ textDecoration: "none" }}
            >
              &emsp; Home &emsp;
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link
              href="/about"
              className="text-foreground visited:text-foreground hover:text-primary transition-colors"
              style={{ textDecoration: "none" }}
            >
              About &emsp;
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link
              href="/projects"
              className="text-foreground visited:text-foreground hover:text-primary transition-colors"
              style={{ textDecoration: "none" }}
            >
              Projects &emsp;
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link
              href="/blog"
              className="text-foreground visited:text-foreground hover:text-primary transition-colors"
              style={{ textDecoration: "none" }}
            >
              Blog &emsp;
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link
              href="/contact"
              className="text-foreground visited:text-foreground hover:text-primary transition-colors"
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ==== Right Section ==== */}
      <div
        className={cn(
          "flex items-center",
          scrollY > effectThreshold ? "space-x-4" : "space-x-5"
        )}
      >
        {/* Github Button */}
        <a
          href="https://github.com/oduyemi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none"}}
        >
          <Button 
            variant="outline" 
          >
            GitHub Profile
          </Button>&emsp;
        </a>

        {/* Portal Button */}
        <a
          href="https://github.com/oduyemi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none"}}
        >
          <Button variant="default">
            Project Portal
          </Button>&emsp;
        </a>

        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuContent side="bottom" align="end" className="relative z-50 w-56 rounded-lg border border-muted/30 bg-background/90 p-2 shadow-lg ring-1 ring-white/5">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push("/faqs")}>
                <Info size={16} className="mr-2" />
                FAQs
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/updates")}>
                <Bookmark size={16} className="mr-2" />
                New Updates
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className="my-2" />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Phone size={16} className="mr-2" />
                Call me
                {/* tel: +2348166336187 */}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquareText size={16} className="mr-2" />
                Leave me a mail
                {/* mailto hello@oduyemi.dev */}
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

