import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header id="navbar" className="transition-all duration-300 bg-gray-50/10">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="#"
            className="text-xl lg:text-2xl font-serif font-bold italic tracking-tight text-gradient"
          >
            Nazmul
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
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
        </nav>
      </div>
    </header>
  );
}
