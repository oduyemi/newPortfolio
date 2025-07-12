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





export const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
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
        <a href="https://github.com/oduyemi" target="_blank" rel="noopener noreferrer">
          <Button variant="monochrome">Project Portal</Button>
        </a>

        <DropdownMenu>
          <DropdownMenuContent>
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
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Phone size={16} className="mr-2" />
                Call me
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquareText size={16} className="mr-2" />
                Leave me a mail
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
