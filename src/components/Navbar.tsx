import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Properties', href: '#properties' },
  { label: 'Why Us', href: '#why-us' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#0B192C]/96 backdrop-blur-md border-b border-white/10 shadow-sm'
          : 'bg-[#0B192C]/75 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253] rounded-sm py-1"
          >
            <BrandMark className="h-7 w-7 shrink-0" tone="light" />
            <span className="font-display text-lg sm:text-xl font-semibold tracking-tight text-white">
              Compass Realty
            </span>
          </a>

          {/* Zone 2: Clean Single-line Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#D9B76C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253] rounded-sm after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:bg-[#C8A253] after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-[#0B192C] bg-[#C8A253] hover:bg-[#D9B76C] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact Us
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-md text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253]"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#0B192C] border-t border-white/10 px-4 py-4 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="flex items-center min-h-[44px] px-3 py-2 text-base font-medium text-slate-100 hover:text-[#D9B76C] hover:bg-white/5 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="flex items-center justify-center w-full min-h-[44px] px-4 py-2.5 text-sm font-semibold text-[#0B192C] bg-[#C8A253] hover:bg-[#D9B76C] rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
