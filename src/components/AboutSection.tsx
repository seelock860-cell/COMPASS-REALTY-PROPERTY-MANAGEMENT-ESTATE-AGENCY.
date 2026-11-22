import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';
import { ABOUT_IMAGE } from '../data/compassData';

const AUDIENCE_PILLARS = [
  {
    title: 'Property Owners & Landlords',
    detail:
      'Structured asset care, reliable rent collection, and transparent oversight for local and diaspora owners.',
  },
  {
    title: 'Tenants & Corporate Occupiers',
    detail:
      'Curated apartments, family duplexes, and executive office suites backed by responsive management.',
  },
  {
    title: 'Investors & Businesses',
    detail:
      'Market-grounded property advisory, commercial positioning, and long-term yield preservation in Nigeria.',
  },
];

export function AboutSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Editorial Story */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#AE883A]">
                About Compass Realty
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[#0B192C] tracking-tight leading-tight text-balance">
                Dedicated Property Management &amp; Estate Agency in Nigeria
              </h2>

              <div className="mt-6 space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  <strong className="font-semibold text-[#0B192C]">Compass Realty</strong> is a
                  property management and estate agency specializing in professional real estate
                  services across Nigeria. We bridge the gap between property ownership and
                  stress-free performance through disciplined oversight, verified listings, and
                  dependable client care.
                </p>
                <p>
                  Whether managing multi-unit residential buildings, leasing luxury duplexes and
                  3-bedroom apartments, or positioning prime office complexes and commercial plazas,
                  our team brings structure, accountability, and local market clarity to every
                  mandate.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {AUDIENCE_PILLARS.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="font-sans text-sm font-semibold text-[#0B192C]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Architectural Photography */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[320px] lg:min-h-[460px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              {!imageError ? (
                <img
                  src={ABOUT_IMAGE}
                  alt="Double-height luxury residential living space managed by Compass Realty"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B192C] to-[#1C3559] text-white p-8 text-center">
                  <Building2 className="h-12 w-12 text-[#C8A253] mb-3" aria-hidden="true" />
                  <p className="font-display text-lg">Compass Realty Portfolio</p>
                </div>
              )}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B192C]/85 via-[#0B192C]/35 to-transparent p-6 sm:p-8"
              >
                <p className="text-xs font-medium text-[#D9B76C]">
                  Residential · Commercial · Corporate Advisory
                </p>
                <p className="mt-1 text-sm sm:text-base font-medium text-white">
                  Stewarding quality properties with transparency and precision.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
