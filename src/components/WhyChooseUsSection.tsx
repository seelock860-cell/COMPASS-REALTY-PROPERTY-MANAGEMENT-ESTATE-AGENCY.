import { motion } from 'motion/react';
import { WHY_CHOOSE_ITEMS } from '../data/compassData';

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-[#F8F9FA] py-20 sm:py-24 lg:py-28 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Sticky Architectural Summary */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="text-xs font-semibold tracking-wider text-[#AE883A]">Why Choose Us</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[#0B192C] tracking-tight text-balance">
              Built on Accountability, Discretion &amp; Lasting Value
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Managing and acquiring real estate in Nigeria requires more than listings. It demands
              dependable custodianship, clear financial reporting, and an unwavering commitment to
              every landlord, tenant, and investor we serve.
            </p>

            <div className="mt-8 rounded-xl bg-[#0B192C] p-6 sm:p-7 text-white">
              <p className="text-xs font-medium text-[#D9B76C]">Our Commitment</p>
              <p className="mt-2 font-display text-xl font-medium leading-snug text-white">
                Every property under Compass Realty receives structured oversight designed to
                protect structure, tenancy quality, and annual returns.
              </p>
              <div className="mt-5 pt-4 border-t border-white/12 flex items-center justify-between text-xs text-slate-300">
                <span>Residential &amp; Commercial Mandates</span>
                <a
                  href="#contact"
                  className="font-semibold text-[#D9B76C] hover:text-white transition-colors whitespace-nowrap"
                >
                  Request Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Clean Editorial Pillars */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-xl px-6 sm:px-8">
            {WHY_CHOOSE_ITEMS.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
              >
                <span className="font-mono text-sm font-semibold text-[#AE883A] tabular-nums shrink-0 pt-1">
                  {item.number}.
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#0B192C]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
