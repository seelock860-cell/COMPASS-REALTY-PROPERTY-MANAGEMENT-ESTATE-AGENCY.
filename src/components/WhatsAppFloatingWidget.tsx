import { useState } from 'react';
import { ArrowRight, ExternalLink, X } from 'lucide-react';

interface WhatsAppFloatingWidgetProps {
  onSelectContactForm: (topic: string) => void;
}

const QUICK_TOPICS = [
  'Renting a 3-Bedroom Apartment or Duplex',
  'Property Management Services',
  'Commercial or Office Space Enquiry',
  'Rent Collection & Landlord Oversight',
];

function WhatsAppLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.02 3.2C9.04 3.2 3.36 8.84 3.36 15.77c0 2.24.6 4.43 1.73 6.35L3.2 28.8l6.89-1.8a12.7 12.7 0 0 0 5.93 1.47h.01c6.97 0 12.65-5.64 12.65-12.57 0-3.36-1.32-6.52-3.71-8.9A12.63 12.63 0 0 0 16.02 3.2Zm7.41 17.87c-.31.87-1.82 1.67-2.51 1.77-.64.1-1.46.14-2.36-.15-.55-.18-1.26-.41-2.16-.8-3.8-1.63-6.28-5.44-6.47-5.7-.19-.25-1.54-2.04-1.54-3.89 0-1.85.97-2.76 1.32-3.13.34-.38.75-.47 1-.47h.72c.23 0 .54-.09.85.64.31.75 1.07 2.59 1.16 2.78.1.19.16.41.03.66-.13.25-.19.41-.38.63-.19.22-.4.49-.57.66-.19.19-.39.39-.17.77.22.38.98 1.61 2.11 2.61 1.45 1.29 2.68 1.69 3.06 1.88.38.19.6.16.82-.1.22-.25.95-1.1 1.2-1.48.25-.38.51-.31.85-.19.35.13 2.2 1.03 2.58 1.22.38.19.63.28.72.44.1.16.1.91-.21 1.78Z" />
    </svg>
  );
}

export function WhatsAppFloatingWidget({ onSelectContactForm }: WhatsAppFloatingWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(QUICK_TOPICS[0]);
  const [customNote, setCustomNote] = useState('');

  const compiledMessage = `Hello Compass Realty, I am enquiring about: ${selectedTopic}.${
    customNote.trim() ? ` ${customNote.trim()}` : ''
  }`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    compiledMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Compact Quick-Chat Popover */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Compass Realty WhatsApp Enquiry"
          className="w-[min(calc(100vw-2.5rem),21rem)] rounded-xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
        >
          <div className="bg-[#0B192C] px-4 py-3.5 text-white flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white shrink-0">
                <WhatsAppLogo className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">Compass Realty</p>
                <p className="text-[11px] text-[#D9B76C] truncate">WhatsApp Property Enquiry</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp enquiry box"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-white">
            <p className="text-xs font-medium text-slate-600">
              Select a topic to prepare your WhatsApp message:
            </p>

            <div className="space-y-1.5">
              {QUICK_TOPICS.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-left px-3 py-2 text-xs font-medium rounded-md border transition-colors ${
                    selectedTopic === topic
                      ? 'bg-[#0B192C] text-white border-[#0B192C]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            <div>
              <label htmlFor="wa-custom-note" className="sr-only">
                Additional message
              </label>
              <textarea
                id="wa-custom-note"
                rows={2}
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Optional: preferred location or details..."
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B192C] focus:outline-none focus:ring-2 focus:ring-[#C8A253]"
              />
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[42px] w-full px-4 py-2 text-xs font-semibold text-white bg-[#1FAF53] hover:bg-[#199445] rounded-md transition-colors"
              >
                <WhatsAppLogo className="h-4 w-4" />
                <span>Continue to WhatsApp</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onSelectContactForm(selectedTopic);
                }}
                className="inline-flex items-center justify-center gap-1.5 min-h-[38px] w-full px-3 py-1.5 text-xs font-medium text-[#0B192C] hover:bg-slate-100 rounded-md transition-colors"
              >
                <span>Or Send via Contact Form</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pumping Floating WhatsApp Trigger Button */}
      <div className="relative flex items-center gap-2.5 animate-whatsapp-float">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-full bg-[#0B192C] text-white text-xs font-semibold border border-[#C8A253]/50 shadow-lg hover:bg-[#122643] transition-colors whitespace-nowrap"
          >
            Chat on WhatsApp
          </button>
        )}

        <div className="relative">
          {/* Concentric Pumping Pulse Rings */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-pump"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 rounded-full border border-[#C8A253]/60"
          />

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close WhatsApp enquiry' : 'Open WhatsApp enquiry'}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1FAF53] text-white shadow-xl transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C] focus-visible:ring-offset-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <WhatsAppLogo className="h-7 w-7" />}
          </button>
        </div>
      </div>
    </div>
  );
}
