import { ChartLine, Rocket, UsersRound } from "lucide-react";
import CountUp from "./CountUp";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-gradient uppercase tracking-wider mb-3">
              About Me
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              From Intern to <span className="text-gradient">Team Lead</span> in
              2 Years
            </h3>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello, I am Md. Nazmul Hasan, a Frontend Team Lead and
                frontend-focused full stack developer with production experience
                in e-commerce storefronts, admin dashboards, LMS products, and
                platform systems.
              </p>
              <p>
                Since February 2024, I&apos;ve been a core part of the{" "}
                <span className="text-white font-medium">Bponi/frontend</span>{" "}
                ecosystem, delivering across 15+ production products. I
                converted from Intern to Full-Time and was promoted to Frontend
                Team Lead due to strong frontend delivery, production support,
                ownership, and consistent contribution across high-impact
                production systems.
              </p>
              <p>
                My strongest expertise is frontend engineering: React, Vue,
                Next.js, TypeScript, JavaScript, Vite, Tailwind CSS, Apollo
                GraphQL, and e-commerce systems including checkout, catalog,
                coupons, campaigns, POS, orders, and multi-storefront themes.
              </p>
              <p>
                I use{" "}
                <span className="text-white font-medium">
                  AI-assisted engineering (Codex Pro)
                </span>{" "}
                as a core part of my workflow — for codebase exploration,
                implementation planning, debugging, refactoring, and faster
                delivery across frontend, backend, and database work.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <Rocket className="size-5 text-gradient mb-2" />
                <div className="text-white font-semibold">Fast Growth</div>
                <div className="text-sm text-slate-500">
                  Intern → Lead in 24 months
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <UsersRound className="size-5 text-gradient mb-2" />
                <div className="text-white font-semibold">Team Leadership</div>
                <div className="text-sm text-slate-500">
                  Code reviews & mentoring
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-2">
            <div className="bg-linear-to-br from-blue-900/50 to-purple-900/50 border border-slate-700 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-10"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-2">
                  Boisodai Scale
                </h4>
                <p className="text-slate-400 text-sm mb-6">
                  Bangladesh&apos;s largest book e-commerce platform
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-slate-800/75 rounded-xl">
                    <div className="text-3xl font-bold text-white">
                      <CountUp from={0} to={200} suffix="K+" />
                    </div>
                    <div className="text-sm text-slate-400 mt-1">Books</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/75 rounded-xl">
                    <div className="text-3xl font-bold text-white">
                      <CountUp from={0} to={50} suffix="K+" />
                    </div>
                    <div className="text-sm text-slate-400 mt-1">Authors</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/75 rounded-xl">
                    <div className="text-3xl font-bold text-white">
                      <CountUp from={0} to={7} suffix="K+" />
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      Publishers
                    </div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/75 rounded-xl">
                    <div className="text-3xl font-bold text-white">
                      <CountUp from={0} to={230} suffix="K+" />
                    </div>
                    <div className="text-sm text-slate-400 mt-1">Customers</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Total Orders</span>
                    <span className="text-white font-bold">220K+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-gradient text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm inline-flex">
              <ChartLine className="size-5 mr-1" /> <span>Live Platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
