"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      id: 1,
      title: "Home",
      href: "home",
    },
    {
      id: 2,
      title: "About",
      href: "about",
    },
    {
      id: 3,
      title: "Experience",
      href: "experience",
    },
    {
      id: 4,
      title: "Projects",
      href: "projects",
    },
    {
      id: 5,
      title: "Skills",
      href: "skills",
    },
  ];
  return (
    <header>
      <nav
        id="navbar"
        className="transition-all duration-300 fixed top-0 left-0 right-0 z-50 bg-[rgba(15_23_42/0.7)] backdrop-blur-md"
      >
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="#home"
              className="text-xl lg:text-2xl font-serif font-bold tracking-tight text-gradient"
            >
              Nazmul
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.href}`}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  <motion.button
                    whileTap={{ scale: 1.1 }}
                    className="cursor-pointer"
                  >
                    {item.title}
                  </motion.button>
                </Link>
              ))}

              <motion.button whileTap={{ scale: 1.1 }}>
                <Link
                  href="#contact"
                  className="px-5 py-2.5 text-sm font-medium bg-gradient text-white rounded-full transition-all hover:scale-105"
                >
                  Contact
                </Link>
              </motion.button>
            </div>
            <motion.button
              whileTap={{ scale: 1.1 }}
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              <Menu className="size-5" />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              key="mobile-menu"
              className="md:hidden glass border-t border-slate-800"
            >
              <div className="container mx-auto pl-2 pr-4 pt-2 pb-6 space-y-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.href}`}
                    className="block pl-2 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
                  >
                    {item.title}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  className="block pl-2 py-2 text-base font-medium text-gradient hover:opacity-80"
                >
                  Contact Me →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
