// constants/index.ts

export const HERO_BG_IMAGE = 'https://picsum.photos/seed/hero-bg/1920/1080';

export const FILTER_LABELS = [
  'All', // 'All' is a special filter, not a direct category
  'Apartment',
  'House',
  'Condo',
  'Villa',
  'Townhouse',
];

export const PROPERTY_LISTING_SAMPLE = [
  {
    id: '1',
    image: 'https://picsum.photos/seed/property-1/800/600',
    price: '350,000',
    address: '123 Ocean Drive, Miami, FL',
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: 'Apartment',
    description: 'Luxurious apartment with stunning ocean views.',
    category: ['Apartment'], // <-- ADDED category
  },
  {
    id: '2',
    image: 'https://picsum.photos/seed/property-2/800/600',
    price: '520,000',
    address: '456 Hillside Ave, San Francisco, CA',
    beds: 4,
    baths: 3,
    sqft: 2500,
    type: 'House',
    description: 'Spacious family home in a quiet neighborhood.',
    category: ['House'], // <-- ADDED category
  },
  {
    id: '3',
    image: 'https://picsum.photos/seed/property-3/800/600',
    price: '280,000',
    address: '789 Downtown Loft, New York, NY',
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: 'Condo',
    description: 'Modern loft in the heart of the city.',
    category: ['Condo'], // <-- ADDED category
  },
  {
    id: '4',
    image: 'https://picsum.photos/seed/property-4/800/600',
    price: '1,200,000',
    address: '101 Palm Blvd, Beverly Hills, CA',
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: 'Villa',
    description: 'Exclusive villa with private pool and garden.',
    category: ['Villa'], // <-- ADDED category
  },
  {
    id: '5',
    image: 'https://picsum.photos/seed/property-5/800/600',
    price: '410,000',
    address: '222 Lakefront Rd, Seattle, WA',
    beds: 3,
    baths: 2,
    sqft: 2000,
    type: 'Townhouse',
    description: 'Cozy townhouse overlooking a serene lake.',
    category: ['Townhouse'], // <-- ADDED category
  },
  {
    id: '6',
    image: 'https://picsum.photos/seed/property-6/800/600',
    price: '680,000',
    address: '333 Mountain View, Denver, CO',
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: 'House',
    description: 'Stunning mountain views from every room.',
    category: ['House'], // <-- ADDED category
  },
];