import {
  CodeXml,
  Database,
  Server,
  ShoppingCart,
  ToolCase,
  Users,
} from "lucide-react";
import SkillCard from "./SkillCard";
import { Reveal } from "./Animation";

export default function Skills() {
  const skills = [
    {
      id: 1,
      title: "Frontend Core",
      tools: [
        "React",
        "Next.js",
        "Vue",
        "JavaScript",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "HTML/CSS",
        "Responsive Design",
      ],
      toolStyle: "hover:border-blue-500 hover:text-blue-400",
      borderStyle: "hover:border-blue-500/30",
      color: "blue",
      icon: <CodeXml className="size-5" />,
    },
    {
      id: 2,
      title: "State & API",
      tools: [
        "Apollo GraphQL",
        "REST APIs",
        "Pinia",
        "Zustand",
        "Context API",
        "JSON",
        "React Hook Form",
      ],
      toolStyle: "hover:border-pink-500 hover:text-pink-400",
      borderStyle: "hover:border-pink-500/30",
      color: "pink",
      icon: <Database className="size-5" />,
    },
    {
      id: 3,
      title: "E-Commerce",
      tools: [
        "Checkout Flows",
        "Coupons",
        "Logistics",
        "Payment Gateways",
        "POS Systems",
        "i18n",
        "Catelog Management",
        "Dark Mode",
      ],
      toolStyle: "hover:border-emerald-500 hover:text-emerald-400",
      borderStyle: "hover:border-emerald-500/30",
      color: "emerald",
      icon: <ShoppingCart className="size-5" />,
    },
    {
      id: 4,
      title: "Auth & Backend",
      tools: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Firebase",
        "JWT Authentication",
        "RBAC",
      ],
      toolStyle: "hover:border-orange-500 hover:text-orange-400",
      borderStyle: "hover:border-orange-500/30",
      color: "orange",
      icon: <Server className="size-5" />,
    },
    {
      id: 5,
      title: "Tools",
      tools: [
        "Git",
        "GitHub",
        "ESLint",
        "Chrome DevTools",
        "npm/pnpm/bun",
        "Codex Pro",
        "OpenCode",
      ],
      toolStyle: "hover:border-purple-500 hover:text-purple-400",
      borderStyle: "hover:border-purple-500/30",
      color: "purple",
      icon: <ToolCase className="size-6" />,
    },
    {
      id: 6,
      title: "Leadership",
      tools: [
        "Task Coordination",
        "Code Review",
        "Mentoring",
        "Production Debugging",
        "Multi-project Delivery",
      ],
      toolStyle: "hover:border-yellow-500 hover:text-yellow-400",
      borderStyle: "hover:border-yellow-500/30",
      color: "yellow",
      icon: <Users className="size-5" />,
    },
  ];
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gradient uppercase tracking-wider mb-3">
            Technical Arsenal
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Skills & Technologies
          </h3>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Production-proven stack for building scalable e-commerce and
            enterprise applications.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
