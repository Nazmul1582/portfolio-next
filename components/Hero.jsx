import { ChevronDown, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 lg:py-24">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto flex justify-center items-center text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-gradient mb-6 animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for Mid Level Frontend Roles
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-gradient animate-slide-up mb-6">
              Md. Nazmul Hasan
            </h1>
            <h3 className="sm:text-2xl text-slate-400 font-light italic animate-fade-in mb-7">
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
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="https://github.com/nazmul1582"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-[11px] bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all hover:scale-105 border border-slate-700"
              >
                <span>GitHub</span>
                <ArrowRight className="size-5" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 justify-center animate-slide-up">
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
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="size-8 text-slate-600" />
      </div>
    </section>
  );
}
