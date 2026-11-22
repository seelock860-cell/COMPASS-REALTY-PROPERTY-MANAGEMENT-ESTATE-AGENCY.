import { FormEvent, useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, ExternalLink, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/compassData';

interface ContactSectionProps {
  preselectedInterest?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function InstagramIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21.5v-8.2h2.75l.41-3.2H13.5V8.06c0-.93.26-1.56 1.59-1.56h1.7V3.64c-.3-.04-1.3-.12-2.48-.12-2.45 0-4.13 1.5-4.13 4.24v2.34H7.4v3.2h2.78v8.2h3.32Z" />
    </svg>
  );
}

export function ContactSection({ preselectedInterest = '' }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState(preselectedInterest);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    interest: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedInterest) {
      setInterest(preselectedInterest);
      setMessage((prev) =>
        prev.trim()
          ? prev
          : `Hello Compass Realty, I would like to enquire about: ${preselectedInterest}.`
      );
      setSubmittedData(null);
    }
  }, [preselectedInterest]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Please include a brief message (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmittedData({
      name: name.trim(),
      email: email.trim(),
      interest: interest.trim(),
    });
    setName('');
    setEmail('');
    setInterest('');
    setMessage('');
    setErrors({});
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Direct Social Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-[#0B192C] text-white p-7 sm:p-9">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#D9B76C]">Contact Us</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight text-balance">
                Connect With Compass Realty
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Looking to lease a residence, secure commercial space, or entrust your property to
                experienced management? Send us an enquiry or connect directly via our official
                social channels.
              </p>

              {/* Official Social Contact Buttons (No invented phone, email, or address) */}
              <div className="mt-8 space-y-4">
                <a
                  href={SOCIAL_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#C8A253]/60 px-5 py-4 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253]"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#C8A253]/15 text-[#D9B76C] shrink-0">
                      <InstagramIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-300">Instagram</p>
                      <p className="text-sm sm:text-base font-semibold text-white truncate">
                        {SOCIAL_LINKS.instagramHandle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-[#D9B76C] shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={SOCIAL_LINKS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#C8A253]/60 px-5 py-4 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253]"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#C8A253]/15 text-[#D9B76C] shrink-0">
                      <FacebookIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-300">Facebook</p>
                      <p className="text-sm sm:text-base font-semibold text-white truncate">
                        {SOCIAL_LINKS.facebookHandle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-[#D9B76C] shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/12 text-xs sm:text-sm text-slate-300">
              Serving property owners, landlords, tenants, investors, and businesses across Nigeria.
            </div>
          </div>

          {/* Right Column: Validated Enquiry Form */}
          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-[#F8F9FA] p-7 sm:p-9 flex flex-col justify-center">
            {submittedData ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-lg bg-white border border-slate-200 p-6 sm:p-8"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#0B192C]">
                      Enquiry Prepared for Compass Realty
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                      Thank you, <strong className="text-[#0B192C]">{submittedData.name}</strong>.
                      Your enquiry details ({submittedData.email}
                      {submittedData.interest ? ` · ${submittedData.interest}` : ''}) have been
                      recorded. For immediate direct messaging, you may also reach our team on
                      Instagram or Facebook below.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={SOCIAL_LINKS.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 min-h-[42px] px-4 py-2 text-sm font-semibold text-[#0B192C] bg-[#C8A253] hover:bg-[#D9B76C] rounded-md transition-colors"
                      >
                        <InstagramIcon className="h-4 w-4" />
                        <span>Message {SOCIAL_LINKS.instagramHandle}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmittedData(null)}
                        className="min-h-[42px] px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#0B192C]">
                    Send Us a Message
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Share your property goals, leasing enquiry, or management request.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#0B192C] mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      className={`w-full min-h-[44px] rounded-md bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 border transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A253] ${
                        errors.name ? 'border-red-500' : 'border-slate-300 focus:border-[#0B192C]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[#0B192C] mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className={`w-full min-h-[44px] rounded-md bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 border transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A253] ${
                        errors.email ? 'border-red-500' : 'border-slate-300 focus:border-[#0B192C]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-interest"
                    className="block text-sm font-medium text-[#0B192C] mb-1.5"
                  >
                    Property or Service Interest <span className="text-slate-400">(Optional)</span>
                  </label>
                  <input
                    id="contact-interest"
                    name="interest"
                    type="text"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="e.g. 3-Bedroom Apartment, Property Management, Office Complex"
                    className="w-full min-h-[44px] rounded-md bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 border border-slate-300 focus:border-[#0B192C] focus:outline-none focus:ring-2 focus:ring-[#C8A253]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#0B192C] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    placeholder="Tell us about your preferred location, property type, or management needs..."
                    aria-invalid={Boolean(errors.message)}
                    className={`w-full rounded-md bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 border transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A253] ${
                      errors.message ? 'border-red-500' : 'border-slate-300 focus:border-[#0B192C]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 min-h-[46px] w-full sm:w-auto px-6 py-3 text-sm font-semibold text-[#0B192C] bg-[#C8A253] hover:bg-[#D9B76C] rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
