export enum PropertyCategory {
  ALL = 'All Properties',
  APARTMENT_3BR = '3-Bedroom Apartments',
  LUXURY_DUPLEX = 'Luxury Duplexes',
  RESIDENTIAL_BUILDING = 'Residential Buildings',
  OFFICE_COMPLEX = 'Office Complexes',
  COMMERCIAL_PROPERTY = 'Commercial Properties',
}

export interface PropertyListing {
  id: string;
  name: string;
  category: Exclude<PropertyCategory, PropertyCategory.ALL>;
  location: string;
  bedroomsLabel: string;
  description: string;
  highlights: string[];
  image: string;
  isSample: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export const SOCIAL_LINKS = {
  instagramHandle: '@compassrentng',
  instagramUrl: 'https://www.instagram.com/compassrentng/',
  facebookHandle: 'Compass_rentng',
  facebookUrl: 'https://www.facebook.com/Compass_rentng',
} as const;

export const HERO_IMAGE = '/src/assets/images/hero_luxury_villa_1795353179478.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_architecture_lounge_1795353180758.jpg';

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Property Management Services',
    description:
      'End-to-end stewardship of residential estates, multi-unit blocks, and corporate facilities across Nigeria — protecting asset value while keeping operations seamless for landlords.',
    deliverables: [
      'Preventive & reactive facility maintenance',
      'Vendor supervision & service charge administration',
      'Periodic property condition inspections',
    ],
  },
  {
    number: '02',
    title: 'Property Rentals & Leases',
    description:
      'Structured tenant sourcing, thorough screening, and transparent lease execution connecting vetted corporate and private tenants with quality residential and commercial spaces.',
    deliverables: [
      'Qualified tenant vetting & background checks',
      'Residential & commercial lease negotiation',
      'Guided property viewings & handover documentation',
    ],
  },
  {
    number: '03',
    title: 'Rent Collection',
    description:
      'Disciplined, timely rent invoicing, collection tracking, and structured remittance to property owners, eliminating follow-up stress and safeguarding predictable rental yields.',
    deliverables: [
      'Automated renewal notices & payment schedules',
      'Transparent owner statements & remittance tracking',
      'Proactive arrears resolution & lease compliance',
    ],
  },
  {
    number: '04',
    title: 'Comprehensive Property Oversight',
    description:
      'Dedicated on-ground representation for local and diaspora property owners, ensuring security, structural upkeep, utility management, and occupant adherence around the clock.',
    deliverables: [
      'Detailed inspection reports with visual updates',
      'Diaspora landlord proxy & asset supervision',
      'Security, power & essential utility coordination',
    ],
  },
  {
    number: '05',
    title: 'Property Marketing and Consultation',
    description:
      'Strategic positioning, visual presentation, and market advisory tailored to Nigerian real estate dynamics — helping owners reduce vacancy cycles and investors make sound decisions.',
    deliverables: [
      'Targeted digital campaigns & curated buyer matching',
      'Rental pricing & market positioning advisory',
      'Portfolio expansion & investment feasibility guidance',
    ],
  },
];

export const SAMPLE_PROPERTIES: PropertyListing[] = [
  {
    id: 'harmony-3br-lekki',
    name: 'The Harmony 3-Bedroom Residences',
    category: PropertyCategory.APARTMENT_3BR,
    location: 'Lekki Phase 1, Lagos',
    bedroomsLabel: '3 Bedrooms · En-Suite',
    description:
      'Well-appointed 3-bedroom luxury apartment featuring expansive living areas, private glass balconies, fitted kitchen, and dedicated compound parking in a serene gated court.',
    highlights: [
      '3 en-suite bedrooms + guest restroom',
      '24-hour estate security & treated water supply',
      'Dedicated covered parking bays',
    ],
    image: '/src/assets/images/prop_three_bedroom_apt_1795353180178.jpg',
    isSample: true,
  },
  {
    id: 'ikoyi-crown-duplex',
    name: 'Ikoyi Crown Detached Duplex',
    category: PropertyCategory.LUXURY_DUPLEX,
    location: 'Old Ikoyi, Lagos',
    bedroomsLabel: '5 Bedrooms · Private Terrace',
    description:
      'Contemporary 5-bedroom detached duplex crafted with natural stone cladding, double-height reception lounge, spacious family terrace, and landscaped private driveway.',
    highlights: [
      '5 spacious bedrooms + 2-room service quarters',
      'Floor-to-ceiling glazing & private outdoor terrace',
      'Generous interlocking stone parking forecourt',
    ],
    image: '/src/assets/images/prop_luxury_duplex_1795353180242.jpg',
    isSample: true,
  },
  {
    id: 'maitama-terrace-block',
    name: 'Maitama Court Residential Building',
    category: PropertyCategory.RESIDENTIAL_BUILDING,
    location: 'Maitama, Abuja',
    bedroomsLabel: '12 Residential Units',
    description:
      'Full multi-unit residential apartment building ideal for institutional landlords, diplomatic housing, or corporate staff residences within a secure, manicured Abuja enclave.',
    highlights: [
      'Multi-unit residential block with gated access control',
      'Dedicated facility management & generator house',
      'Private balconies & landscaped courtyard',
    ],
    image: '/src/assets/images/prop_residential_building_1795353180040.jpg',
    isSample: true,
  },
  {
    id: 'ascent-office-complex',
    name: 'The Ascent Corporate Office Complex',
    category: PropertyCategory.OFFICE_COMPLEX,
    location: 'Victoria Island, Lagos',
    bedroomsLabel: '6 Floors · Commercial Offices',
    description:
      'Grade-A corporate office complex featuring a double-height reception lobby, flexible open-plan floor plates, curtain-wall glazing, and generous executive parking.',
    highlights: [
      'Modular corporate office suites & executive floors',
      'Grand double-height stone & glass reception',
      'Central access control & ample visitor parking',
    ],
    image: '/src/assets/images/prop_office_complex_1795353182052.jpg',
    isSample: true,
  },
  {
    id: 'ikeja-gateway-plaza',
    name: 'Ikeja Gateway Commercial Plaza',
    category: PropertyCategory.COMMERCIAL_PROPERTY,
    location: 'Ikeja GRA, Lagos',
    bedroomsLabel: 'Retail & Commercial Suites',
    description:
      'High-visibility commercial property positioned along a thriving business corridor, offering expansive ground-floor glass showrooms and upper-floor business offices.',
    highlights: [
      'High-street visibility with ground-floor storefronts',
      'Dedicated paved customer & tenant parking forecourt',
      'Suitable for banking halls, clinics, retail & studios',
    ],
    image: '/src/assets/images/prop_commercial_plaza_1795353180529.jpg',
    isSample: true,
  },
  {
    id: 'victoria-crest-penthouse',
    name: 'Victoria Crest 3-Bedroom Penthouse',
    category: PropertyCategory.APARTMENT_3BR,
    location: 'Victoria Island, Lagos',
    bedroomsLabel: '3 Bedrooms · Waterfront View',
    description:
      'Refined 3-bedroom residence distinguished by double-height ceilings, marble floors, panoramic lagoon views, and curated concierge-managed building facilities.',
    highlights: [
      '3 en-suite bedrooms with double-height living area',
      'Panoramic skyline & waterfront outlook',
      'Full facility management & controlled building entry',
    ],
    image: '/src/assets/images/about_architecture_lounge_1795353180758.jpg',
    isSample: true,
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Professional Property Management',
    description:
      'Structured operational systems, vetted maintenance artisans, and documented accounting keep every property well-preserved and financially productive.',
  },
  {
    number: '02',
    title: 'Reliable Service',
    description:
      'Consistent communication, punctual lease administration, and responsive support ensure landlords and tenants never experience unnecessary delays.',
  },
  {
    number: '03',
    title: 'Quality Properties',
    description:
      'Every residential home, duplex, office complex, and commercial plaza we represent is carefully assessed for structural integrity, location value, and livability.',
  },
  {
    number: '04',
    title: 'Customer Satisfaction',
    description:
      'From first enquiry to lease renewal, we prioritize clarity, fairness, and attentive hospitality tailored to property owners, tenants, and investors.',
  },
  {
    number: '05',
    title: 'Professional Property Oversight',
    description:
      'Whether you reside in Nigeria or abroad, our team acts as your trusted custodian on the ground — conducting routine inspections and protecting long-term asset value.',
  },
];
