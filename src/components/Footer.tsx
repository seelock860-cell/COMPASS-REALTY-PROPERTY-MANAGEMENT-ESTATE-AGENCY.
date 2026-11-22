import { SERVICES, SOCIAL_LINKS } from '../data/compassData';
import { BrandMark } from './BrandMark';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07111F] text-slate-300 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <BrandMark className="h-7 w-7 shrink-0" tone="light" />
              <span className="font-display text-xl font-semibold text-white">
                Compass Realty
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              Compass Realty Property Management &amp; Estate Agency — delivering reliable real
              estate management, leasing, and advisory across Nigeria.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#D9B76C]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition-colors">
                  Available Properties
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#D9B76C]">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.number}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#D9B76C]">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram ({SOCIAL_LINKS.instagramHandle})
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook ({SOCIAL_LINKS.facebookHandle})
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} Compass Realty Property Management &amp; Estate Agency. All rights
            reserved.
          </p>
          <p>Real Estate &amp; Property Management · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
