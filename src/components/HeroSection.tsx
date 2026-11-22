import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2 } from 'lucide-react';
import { HERO_IMAGE } from '../data/compassData';

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center bg-[#0B192C] pt-16 overflow-hidden"
    >
      {/* Full-bleed architectural photography with resilient fallback */}
      <div className="absolute inset-0">
        {!imageError ? (
          <img
            src={HERO_IMAGE}
            alt="Luxury contemporary residential property represented by Compass Realty in Nigeria"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#07111F] via-[#0B192C] to-[#1C3559] flex items-center justify-center">
            <Building2 className="h-24 w-24 text-[#C8A253]/25" aria-hidden="true" />
          </div>
        )}
        {/* Measured scrim ensuring >7:1 WCAG AAA contrast for hero copy */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#07111F]/92 via-[#0B192C]/78 to-[#0B192C]/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#07111F]/80 via-transparent to-[#07111F]/35"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm font-medium tracking-wider text-[#D9B76C] mb-4"
          >
            Compass Realty Property Management &amp; Estate Agency · Nigeria
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-white font-semibold leading-[1.1] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.85rem)' }}
          >
            Find Your Perfect Property With Compass Realty.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl"
          >
            Delivering trusted property management, residential and commercial leasing, rent
            collection, and strategic real estate advisory for property owners, landlords, tenants,
            investors, and businesses across Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#properties"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 text-sm font-semibold text-[#0B192C] bg-[#C8A253] hover:bg-[#D9B76C] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Properties</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[46px] px-6 py-3 text-sm font-semibold text-white border border-white/35 bg-white/5 hover:bg-white/12 hover:border-white/60 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253]"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Subtle unboxed anchor bar below hero actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-14 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300"
          >
            <span>Residential &amp; Luxury Duplexes</span>
            <span className="text-[#C8A253]" aria-hidden="true">·</span>
            <span>Corporate Office Complexes</span>
            <span className="text-[#C8A253]" aria-hidden="true">·</span>
            <span>End-to-End Landlord Oversight</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
