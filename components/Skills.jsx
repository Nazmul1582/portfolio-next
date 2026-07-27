import {
  CodeXml,
  Database,
  Server,
  ShoppingCart,
  ToolCase,
  Users,
} from "lucide-react";

export default function Skills() {
  const tools = [
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
    },
    {
      id: 2,
      title: "State & API",
      tools: [
        "Apollo GraphQL",
        "REST APIs",
        "Pinia",
        "Zustand",
        "React Hook Form",
      ],
      toolStyle: "hover:border-pink-500 hover:text-pink-400",
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
        "Dark Mode",
      ],
      toolStyle: "hover:border-emerald-500 hover:text-emerald-400",
    },
    {
      id: 4,
      title: "Backend",
      tools: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Firebase",
        "PostgreSQL",
      ],
      toolStyle: "hover:border-orange-500 hover:text-orange-400",
    },
    {
      id: 5,
      title: "Tools",
      tools: [
        "Git",
        "GitHub",
        "ESLint",
        "Chrome DevTools",
        "Codex Pro",
        "OpenCode",
      ],
      toolStyle: "hover:border-purple-500 hover:text-purple-400",
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
    },
  ];
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
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
        </div>
      </div>
    </section>
  );
}
