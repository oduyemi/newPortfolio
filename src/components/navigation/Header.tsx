"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Bookmark,
  Info,
  MessageSquareText,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";





export const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "https://oduyemi.hashnode.dev", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="header">
      <div className="header-left">
        <Link href="/">
          <div className="logo">
            {mounted ? (
              <Image
                src="/images/logo/logo_black.png"
                alt="Logo"
                width={100}
                height={100}
              />
            ) : (
              <div className="logo-placeholder" />
            )}
          </div>
        </Link>
      </div>

      <div className="header-center">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="nav-link">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="header-right">
        <a href="https://github.com/oduyemi" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">GitHub Profile</Button>
        </a>
        <a className="hide" href="https://portal.oduyemi.dev" target="_blank" rel="noopener noreferrer">
          <Button variant="monochrome">Project Portal</Button>
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">More</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="custom-dropdown">
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => router.push("/faqs")}
                className="dropdown-item"
              >
                <Info size={18} className="dropdown-icon" />
                <span>FAQs</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push("/updates")}
                className="dropdown-item"
              >
                <Bookmark size={18} className="dropdown-icon" />
                <span>New Updates</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className="dropdown-separator" />

            <DropdownMenuGroup>
              <DropdownMenuItem asChild className="dropdown-item">
                <a href="tel:+2348166336187" className="dropdown-link">
                  <Phone size={18} className="dropdown-icon" />
                  <span>Call me</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="dropdown-item">
                <a href="mailto:hello@oduyemi.dev" className="dropdown-link">
                  <MessageSquareText size={18} className="dropdown-icon" />
                  <span>Leave me a mail</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu"
        >
          {navItems.map((item) => (
            <div
              key={item.href}
              className="mobile-link"
              onClick={() => {
                router.push(item.href);
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
