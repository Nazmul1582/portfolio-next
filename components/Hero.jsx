"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  const { scrollY } = useScroll();
  const blueY = useTransform(scrollY, [0, 500], [0, -80]);
  const pinkY = useTransform(scrollY, [0, 500], [0, -120]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 lg:py-24">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <motion.div
          style={{ y: blueY }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
        />
        <motion.div
          style={{ y: pinkY }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto flex justify-center items-center text-center"
        >
          <div>
            <motion.div variants={child} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-gradient mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Mid Level Frontend Roles
            </motion.div>
            <motion.h1
              variants={child}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-gradient mb-6"
            >
              Md. Nazmul Hasan
            </motion.h1>
            <motion.h3
              variants={child}
              className="sm:text-2xl text-slate-400 font-light mb-7"
            >
              <TypeWriter />
            </motion.h3>
            <motion.p
              variants={child}
              className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed"
            >
              Scaling e-commerce platforms with{" "}
              <span className="text-white font-semibold">
                15+ production apps
              </span>
              . Leading frontend delivery across storefronts, admin dashboards,
              and LMS platforms. React, Vue, Next.js, TypeScript & GraphQL
              specialist.
            </motion.p>

            <motion.div
              variants={child}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="#projects"
                className="group px-8 py-3 bg-gradient text-white font-semibold rounded-full transition-all hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="size-5" />
              </Link>
              <a
                href="https://github.com/nazmul1582"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-[11px] bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all hover:scale-105 border border-slate-700"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
              </a>
            </motion.div>

            <motion.div
              variants={child}
              className="mt-12 flex flex-wrap gap-6 justify-center"
            >
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <CheckCircle className="size-4" />
                <span>15+ Production Apps</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <CheckCircle className="size-4" />
                <span>4 Promotions in 2 Years</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <CheckCircle className="size-4" />
                <span>Team Leadership</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="size-8 text-slate-600" />
      </motion.div>
    </section>
  );
}
