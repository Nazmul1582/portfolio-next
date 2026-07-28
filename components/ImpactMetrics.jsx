import { Reveal } from "./Reveal";
import CountUp from "./CountUp";

export default function ImpactMetrics() {
  return (
    <section className="py-24">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="bg-gradient rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <Reveal className="relative z-10 text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Boisodai Platform Impact
            </h3>
            <p className="text-blue-100 text-lg">
              Key metrics from Bangladesh&apos;s largest book e-commerce
              platform
            </p>
          </Reveal>

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <CountUp from={0} to={200} suffix="K+" />
              </div>
              <div className="text-blue-200">Books Cataloged</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <CountUp from={0} to={50} suffix="K+" />
              </div>
              <div className="text-blue-200">Authors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <CountUp from={0} to={7} suffix="K+" />
              </div>
              <div className="text-blue-200">Publishers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <CountUp from={0} to={230} suffix="K+" />
              </div>
              <div className="text-blue-200">Customers</div>
            </div>
          </div>

          <div className="relative z-10 mt-8 text-center">
            <p className="text-blue-200 text-sm">
              Plus 220K+ orders processed. Part of the larger Bponi ecosystem
              with multiple storefronts and admin systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
