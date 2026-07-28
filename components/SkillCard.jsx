"use client";

import { motion } from "motion/react";

export default function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-slate-800/30 border border-slate-700 rounded-2xl p-6 ${skill.borderStyle} transition-colors`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
          {skill.icon}
        </div>
        <h4 className="text-lg font-bold text-white">{skill.title}</h4>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.03 } },
        }}
        className="flex flex-wrap gap-2"
      >
        {skill.tools.map((el, idx) => (
          <motion.span
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className={`px-3 py-1.5 bg-slate-700 text-slate-200 text-sm rounded-lg border border-slate-600 ${skill.toolStyle} cursor-default duration-200 transition-all hover:scale-105 hover:shadow-xl`}
          >
            {el}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
