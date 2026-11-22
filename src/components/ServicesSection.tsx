import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data/compassData';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="bg-[#0B192C] text-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#D9B76C]">Our Services</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight text-balance">
              Complete Real Estate &amp; Management Capabilities
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
            Tailored property services engineered to maximize asset longevity, occupancy stability,
            and peace of mind across Nigeria.
          </p>
        </div>

        {/* Asymmetric editorial grid for the 5 services */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {SERVICES.map((service, index) => {
            // Top 2 services span 3 cols each (2-up marquee), bottom 3 span 2 cols each (3-up)
            const colSpanClass = index < 2 ? 'lg:col-span-3' : 'lg:col-span-2';

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${colSpanClass} flex flex-col justify-between rounded-xl bg-[#122643]/75 border border-white/10 p-6 sm:p-8 hover:border-[#C8A253]/50 transition-colors duration-200`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-sm font-semibold text-[#D9B76C] tabular-nums">
                      {service.number}.
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectService?.(service.title)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-[#D9B76C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253] rounded-sm"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>

                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold text-white leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <Check
                        className="h-4 w-4 text-[#C8A253] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
