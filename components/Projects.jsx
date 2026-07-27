import {
  BookOpen,
  Check,
  ClipboardList,
  ExternalLink,
  GraduationCap,
  Handbag,
  LineChart,
  ShoppingBag,
  SquareCode,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "TaskProof",
      description:
        "A full-stack project & task collaboration system with role-based access control, real-time analytics, and team management.",
      label: "Live Site",
      features: [
        "Role-based auth (Admin / PM / Member)",
        "Project & task CRUD with filtering",
        "Dashboard with charts & KPIs",
      ],
      technologies: [
        "React",
        "Express",
        "MongoDB",
        "Tailwind",
        "TanStack Query",
        "Zustand",
      ],
      liveLink: "https://taskproof-frontend.vercel.app",
      github: "https://github.com/Nazmul1582/taskproof",
      icon: (
        <ClipboardList className="size-16 text-6xl text-white/10 group-hover:scale-110 transition-transform duration-500" />
      ),
      cardGradient: "from-emerald-900/50 to-teal-900/50",
      badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      id: 2,
      title: "Boisodai",
      description:
        "Bangladesh's largest book e-commerce platform. 200K+ books, 50K+ authors, 7K+ publishers, 230K+ customers, 220K+ orders.",
      label: "Live Store",
      features: [
        "Reselling with custom pricing",
        "Multi-auth (Google, Email, OTP)",
        "Membership & coupon system",
      ],
      technologies: ["Vue", "Pinia", "GraphQL", "Tailwind"],
      liveLink: "https://boisodai.com",
      github: "",
      icon: (
        <BookOpen className="size-16 text-6xl text-white/10 group-hover:scale-110 transition-transform duration-500" />
      ),
      cardGradient: "from-blue-900/50 to-purple-900/50",
      badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      id: 3,
      title: "Store Admin",
      description:
        "Unified admin dashboard managing all storefronts. Catalog, orders, POS, campaigns, coupons, reseller, affiliate, and partner management.",
      label: "Store Admin",
      features: [
        "Migrated to React/TypeScript/Vite",
        "Standardized pagination & search",
        "20+ admin views refactored",
      ],
      technologies: ["React", "TypeScript", "Zustand", "Apollo"],
      liveLink: "https://store.bponi.com/admin/",
      github: "",
      icon: (
        <LineChart className="size-16 text-6xl text-white/10 group-hover:scale-110 transition-transform duration-500" />
      ),
      cardGradient: "from-amber-900/50 to-fuchsia-900/50",
      badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
    {
      id: 4,
      title: "Foodi Store",
      description:
        "Fashion & lifestyle storefront with full e-commerce capabilities. Cart, checkout, payment gateways, reselling, and partner portal.",
      label: "Live Store",
      features: [
        "Theme system architecture",
        "Pixel/analytics integrations",
        "Partner & affiliate systems",
      ],
      technologies: ["Vue", "Pinia", "Tailwind", "i18n"],
      liveLink: "https://foodi.store.bponi.com",
      github: "",
      icon: (
        <ShoppingBag className="size-16 text-6xl text-white/10 group-hover:scale-110 transition-transform duration-500" />
      ),
      cardGradient: "from-lime-900/50 to-teal-900/50",
      badgeStyle: "bg-lime-500/10 text-lime-400 border-lime-500/20",
    },
    {
      id: 5,
      title: "Zero Store",
      description:
        "Storefront with heavy pixel/analytics integrations. Full shared commerce features with brand-specific responsive layouts.",
      label: "Live Store",

      features: [
        "Meta Pixel & Google Analytics",
        "Conversion tracking",
        "Performance optimized",
      ],
      technologies: ["Vue", "Pinia", "Tailwind", "SEO", "Analytics"],
      liveLink: "https://zero.store.bponi.com",
      github: "",
      icon: (
        <Handbag className="size-16 text-6xl text-white/10 group-hover:scale-110 transition-transform duration-500" />
      ),
      cardGradient: "from-purple-900/50 to-pink-900/50",
      badgeStyle: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      id: 6,
      title: "LMS Platform",
      description:
        "Learning Management System with course access control, payment processing, and mobile-responsive student dashboards.",
      label: "EdTech",
      features: [
        "Fixed paid/unpaid access bugs",
        "Payment gateway debugging",
        "Mobile layout optimization",
      ],
      technologies: ["Vue", "Pinia", "GraphQL", "Mobile First"],
      liveLink: "https://www.mainamatisurvey.com.bd",
      github: "",
      icon: (
        <GraduationCap className="size-16 text-6xl text-white/10 group-hover:scale-110 transition-transform duration-500" />
      ),
      cardGradient: "from-cyan-900/50 to-violet-900/50",
      badgeStyle: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
  ];
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gradient uppercase tracking-wider mb-3">
            Featured Work
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Production-Scale Projects
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real platforms serving real customers. Live links to production
            systems I&apos;ve built, contributed and maintained.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:-translate-y-2 duration-300 shadow-2xl"
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
