import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PropertiesSection } from './components/PropertiesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingWidget } from './components/WhatsAppFloatingWidget';
import { PropertyListing } from './data/compassData';

export default function App() {
  const [enquiryInterest, setEnquiryInterest] = useState('');

  const scrollToContact = (interestLabel: string) => {
    setEnquiryInterest(interestLabel);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireProperty = (property: PropertyListing) => {
    scrollToContact(`${property.name} (${property.location})`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectService={scrollToContact} />
        <PropertiesSection onEnquireProperty={handleEnquireProperty} />
        <WhyChooseUsSection />
        <ContactSection preselectedInterest={enquiryInterest} />
      </main>

      <Footer />

      <WhatsAppFloatingWidget onSelectContactForm={scrollToContact} />
    </div>
  );
}
