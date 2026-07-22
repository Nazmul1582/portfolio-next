import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-gradient mb-6 animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for Mid Level Frontend Roles
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gradient animate-slide-up">
              Md. Nazmul Hasan
            </h1>
            <h3 className="sm:text-2xl text-slate-400 font-light animate-fade-in">
              Frontend-Focused Full Stack Developer...
            </h3>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed animate-slide-up">
              Scaling e-commerce platforms with{" "}
              <span className="text-white font-semibold">
                15+ production apps
              </span>
              . Leading frontend delivery across storefronts, admin dashboards,
              and LMS platforms. React, Vue, Next.js, TypeScript & GraphQL
              specialist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Link
                href="#projects"
                className="group px-8 py-3 bg-gradient text-white font-semibold rounded-full transition-all hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link
                href="https://github.com/nazmul1582"
                target="_blank"
                className="px-8 py-[11px] bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all hover:scale-105 border border-slate-700"
              >
                <i className="fab fa-github mr-2"></i>GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
