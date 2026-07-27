import React from "react";

export default function Experiece() {
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

        <div className="max-w-4xl mx-auto relative timeline-line pl-8">
          <div className="relative mb-12 lg:pl-8">
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-gradient border-4 border-slate-900 shadow-lg"></div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Frontend Team Lead
                  </h4>
                  <p className="text-gradient font-medium">Bponi</p>
                </div>
                <div className="self-end sm:self-center px-3 py-1 bg-gradient text-white text-sm rounded-full">
                  Current
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4">Feb 2024 – Present</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <i className="fas fa-chevron-right text-gradient mt-1 text-xs"></i>
                  <span>
                    Leading frontend delivery across
                    <strong className="text-white">15+ production apps</strong>
                    including store-admin, store-book, lms-admin, lms-edo,
                    systems-admin, and more
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-chevron-right text-gradient mt-1 text-xs"></i>
                  <span>
                    Task coordination, code review, mentoring, production issue
                    resolution, and multi-project delivery ownership
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-chevron-right text-gradient mt-1 text-xs"></i>
                  <span>
                    Major contributor to
                    <strong className="text-white">Boisodai</strong> (200K+
                    books, 50K+ authors, 7K+ publishers, 230K+ customers, 220K+
                    orders)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-chevron-right text-gradient mt-1 text-xs"></i>
                  <span>
                    Architected shared platform features: cart, checkout,
                    payment gateways, coupons, reselling, affiliate, logistics,
                    and i18n
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-chevron-right text-gradient mt-1 text-xs"></i>
                  <span>
                    Migrated store-admin & store-book to React/TypeScript/Vite
                    with Apollo Client, standardizing pagination and debounced
                    search across 20+ views
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mb-12 lg:pl-8">
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-600 border-4 border-slate-900"></div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Frontend Developer
                  </h4>
                  <p className="text-gradient font-medium">Bponi</p>
                </div>
                <div className="self-end sm:self-center px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">
                  Promoted
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4">May 2024 – Dec 2024</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <i className="fas fa-chevron-right text-gradient mt-1 text-xs"></i>
                  <span>
                    Converted from intern to full-time; took ownership of
                    frontend delivery across multiple production apps
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-chevron-right text-gradient mt-1 text-xs"></i>
                  <span>
                    Built multi-brand storefront themes with analytics
                    integrations, dark mode, Bangla i18n, and responsive layouts
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-chevron-right text-gradient mt-1 text-xs"></i>
                  <span>
                    Developed systems admin modules: catalog, POS, campaigns,
                    data-table UX with full i18n coverage
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-700 border-4 border-slate-900"></div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Frontend Intern
                  </h4>
                  <p className="text-gradient font-medium">Bponi</p>
                </div>
                <div className="self-end sm:self-center px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full whitespace-nowrap">
                  Started Here
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Feb 2024 – April 2024
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <i className="fas fa-chevron-right text-gradient mt-1 text-xs"></i>
                  <span>
                    Worked on e-commerce issues and features using
                    <strong className="text-white">Vue</strong> in store-admin,
                    store-foodi, store-furn, store-zeen and others
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-chevron-right text-gradient mt-1 text-xs"></i>
                  <span>
                    Learned production-grade Vue, Pinia, GraphQL, and e-commerce
                    patterns under senior mentorship
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
