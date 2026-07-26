import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav
        id="navbar"
        className="transition-all duration-300 fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="#"
              className="text-xl lg:text-2xl font-bold tracking-tight text-gradient"
            >
              Nazmul
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="px-5 py-2.5 text-sm font-medium bg-gradient text-white rounded-full transition-all hover:scale-105"
              >
                Contact
              </Link>
            </div>
            <button
              id="mobile-menu-btn"
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className="md:hidden glass border-t border-slate-800 bg-[rgba(15_23_42/0.7)] backdrop-blur-md"
        >
          <div className="container mx-auto pl-2 pr-4 pt-2 pb-6 space-y-2">
            <Link
              href="#"
              className="block pl-2 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block pl-2 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="block pl-2 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="block pl-2 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="block pl-2 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="block pl-2 py-2 text-base font-medium text-gradient hover:opacity-80"
            >
              Contact Me →
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
