import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BedDouble, Building2, Check, MapPin, X } from 'lucide-react';
import {
  PropertyCategory,
  PropertyListing,
  SAMPLE_PROPERTIES,
} from '../data/compassData';

interface PropertiesSectionProps {
  onEnquireProperty: (property: PropertyListing) => void;
}

const FILTER_CATEGORIES: PropertyCategory[] = [
  PropertyCategory.ALL,
  PropertyCategory.APARTMENT_3BR,
  PropertyCategory.LUXURY_DUPLEX,
  PropertyCategory.RESIDENTIAL_BUILDING,
  PropertyCategory.OFFICE_COMPLEX,
  PropertyCategory.COMMERCIAL_PROPERTY,
];

function PropertyImage({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-[#0B192C] to-[#1C3559] flex flex-col items-center justify-center p-6 text-center text-white">
        <Building2 className="h-10 w-10 text-[#C8A253] mb-2" aria-hidden="true" />
        <span className="font-display text-sm text-slate-200">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    />
  );
}

export function PropertiesSection({ onEnquireProperty }: PropertiesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>(PropertyCategory.ALL);
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);

  const filteredProperties = useMemo(() => {
    if (activeCategory === PropertyCategory.ALL) {
      return SAMPLE_PROPERTIES;
    }
    return SAMPLE_PROPERTIES.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="properties" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#AE883A]">
              Available Properties
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[#0B192C] tracking-tight text-balance">
              Curated Residential &amp; Commercial Portfolio
            </h2>
          </div>

          <p className="max-w-md text-sm text-slate-600 leading-relaxed">
            <strong className="font-semibold text-[#0B192C]">Sample Portfolio Notice:</strong> The
            featured residences, office complexes, and commercial properties below are clearly marked
            sample listings designed to be replaced directly with Compass Realty&apos;s active
            inventory.
          </p>
        </div>

        {/* Interactive Category Filter Controls */}
        <div
          role="tablist"
          aria-label="Filter properties by type"
          className="mt-9 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4"
        >
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253] ${
                  isActive
                    ? 'bg-[#0B192C] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-[#0B192C]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Property Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProperties.map((property, index) => (
            <motion.article
              key={property.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden transition-shadow duration-200 hover:shadow-md"
            >
              <div>
                {/* 4:3 Property Photography */}
                <button
                  type="button"
                  onClick={() => setSelectedProperty(property)}
                  aria-label={`View details for ${property.name}`}
                  className="block w-full aspect-[4/3] overflow-hidden bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C8A253]"
                >
                  <PropertyImage
                    src={property.image}
                    alt={`${property.name} — ${property.location}`}
                    title={property.name}
                  />
                </button>

                {/* Card Body */}
                <div className="p-6">
                  {/* Quiet Unboxed Metadata (Zero-Pill Rule) */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500">
                    {property.isSample && (
                      <>
                        <span className="text-[#AE883A] font-semibold">Sample Listing</span>
                        <span aria-hidden="true">·</span>
                      </>
                    )}
                    <span>{property.category}</span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-semibold text-[#0B192C] leading-snug">
                    <button
                      type="button"
                      onClick={() => setSelectedProperty(property)}
                      className="text-left hover:text-[#AE883A] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {property.name}
                    </button>
                  </h3>

                  {/* Location & Bedrooms/Spec */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#AE883A] shrink-0" aria-hidden="true" />
                      <span>{property.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble
                        className="h-3.5 w-3.5 text-[#AE883A] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{property.bedroomsLabel}</span>
                    </span>
                  </div>

                  <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                    {property.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProperty(property)}
                  className="text-xs sm:text-sm font-medium text-slate-700 hover:text-[#0B192C] underline-offset-4 hover:underline whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253] rounded-sm"
                >
                  View Details
                </button>

                <button
                  type="button"
                  onClick={() => onEnquireProperty(property)}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#1C3559] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253]"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="property-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07111F]/75 backdrop-blur-xs p-4"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-white border border-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProperty(null)}
              aria-label="Close property details"
              className="absolute top-3 right-3 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#0B192C]/85 text-white hover:bg-[#0B192C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-[16/10] w-full bg-slate-100 overflow-hidden">
              <PropertyImage
                src={selectedProperty.image}
                alt={selectedProperty.name}
                title={selectedProperty.name}
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                <span className="text-[#AE883A] font-semibold">Sample Listing</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProperty.category}</span>
              </div>

              <h3
                id="property-modal-title"
                className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#0B192C]"
              >
                {selectedProperty.name}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#AE883A]" aria-hidden="true" />
                  <span>{selectedProperty.location}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BedDouble className="h-4 w-4 text-[#AE883A]" aria-hidden="true" />
                  <span>{selectedProperty.bedroomsLabel}</span>
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedProperty.description}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200">
                <h4 className="font-sans text-xs font-semibold tracking-wider text-[#0B192C]">
                  Key Property Highlights
                </h4>
                <ul className="mt-3 space-y-2">
                  {selectedProperty.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check
                        className="h-4 w-4 text-[#AE883A] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProperty(null)}
                  className="min-h-[42px] px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0B192C] border border-slate-300 rounded-md transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const prop = selectedProperty;
                    setSelectedProperty(null);
                    onEnquireProperty(prop);
                  }}
                  className="inline-flex items-center gap-2 min-h-[42px] px-5 py-2 text-sm font-semibold text-[#0B192C] bg-[#C8A253] hover:bg-[#D9B76C] rounded-md transition-colors"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
