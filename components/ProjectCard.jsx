"use client";

import { motion } from "motion/react";
import { Check, ExternalLink, SquareCode } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
      <a
        href={project.liveLink}
        target="_blank"
        className={`block h-48 bg-linear-to-br relative overflow-hidden ${project.cardGradient}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {project.icon}
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur rounded-full text-xs text-white border border-white/10">
          {project.label}
        </div>
      </a>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <a
            href={project.liveLink}
            target="_blank"
            className="text-xl font-bold text-white transition-colors link-hover"
          >
            {project.title}
          </a>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <SquareCode className="size-5" />
            </a>
          ) : (
            <a
              href={project.liveLink}
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <ExternalLink className="size-5" />
            </a>
          )}
        </div>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="space-y-2 mb-4">
          {project.features.map((el, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs text-slate-500"
            >
              <Check className="size-4 text-green-500" />
              {el}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((el, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 text-xs rounded border ${project.badgeStyle}`}
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
