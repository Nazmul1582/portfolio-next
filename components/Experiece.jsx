import { ChevronRight } from "lucide-react";

export default function Experiece() {
  const experieces = [
    {
      id: 1,
      role: "Frontend Team Lead",
      label: "Current",
      company: "Bponi",
      duration: "Feb 2024 - Present",
      activities: [
        "Leading frontend delivery across 15+ production apps including store-admin, store-book, lms-admin, lms-edo, systems-admin, and more",
        "Task coordination, code review, mentoring, production issue resolution, and multi-project delivery ownership",
        "Major contributor to Boisodai (200K+ books, 50K+ authors, 7K+ publishers, 230K+ customers, 220K+ orders)",
        "Architected shared platform features: cart, checkout, payment gateways, coupons, reselling, affiliate, logistics, and i18n",
        "Migrated store-admin & store-book to React/TypeScript/Vite with Apollo Client, standardizing pagination and debounced search across 20+ views",
      ],
      labelStyle: "bg-gradient text-white",
      timelineRoundStyle:
        "absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-gradient border-4 border-slate-900 shadow-lg",
    },
    {
      id: 2,
      role: "Frontend Developer",
      label: "Promoted",
      company: "Bponi",
      duration: "May 2024 - Dec 2024",
      activities: [
        "Converted from intern to full-time; took ownership of frontend delivery across multiple production apps",
        "Built multi-brand storefront themes with analytics integrations, dark mode, Bangla i18n, and responsive layouts",
        "Developed systems admin modules: catalog, POS, campaigns, data-table UX with full i18n coverage",
      ],
      labelStyle: "bg-green-500/10 text-green-400 border border-green-500/20",
      timelineRoundStyle:
        "absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-600 border-4 border-slate-900",
    },
    {
      id: 3,
      role: "Frontend Intern",
      label: "Started Here",
      company: "Bponi",
      duration: "Feb 2024 - April 2024",
      activities: [
        "Worked on e-commerce issues and features using Vue in store-admin, store-foodi, store-furn, store-zeen and others",
        "Learned production-grade Vue, Pinia, GraphQL, and e-commerce patterns under senior mentorship",
      ],
      labelStyle: "bg-slate-700 text-slate-300 whitespace-nowrap",
      timelineRoundStyle:
        "absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-700 border-4 border-slate-900",
    },
  ];
  return (
    <section id="experience" className="py-24 bg-slate-900/50 relative">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gradient uppercase tracking-wider mb-3">
            Experience
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Career Trajectory
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative timeline-line pl-8 space-y-8 lg:space-y-12">
          {experieces.map((item) => (
            <div key={item.id} className="relative lg:pl-8">
              <div className={item.timelineRoundStyle}></div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {item.role}
                    </h4>
                    <p className="text-gradient font-medium">{item.company}</p>
                  </div>
                  <div
                    className={`self-end sm:self-center px-3 py-1 text-sm rounded-full ${item.labelStyle}`}
                  >
                    {item.label}
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">{item.duration}</p>
                <ul className="space-y-2 text-slate-300">
                  {item.activities.map((el, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="size-5" />
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
