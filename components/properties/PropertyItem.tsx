// components/properties/PropertyItem.tsx
import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';
import { Card } from '@/components/common/Card';
import Button from '@/components/common/Button';

const PropertyItem: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-t-lg overflow-hidden">
        {/* TEMPORARY TEST: Using width and height instead of fill */}
        <Image
          src={property.image}
          alt={property.address}
          width={800} // Example width for testing
          height={600} // Example height for testing
          // Removed: fill, style={{ objectFit: 'cover' }}, className="object-cover", sizes
        />
        <div className="absolute top-2 left-2 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow">
          ${property.price}
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{property.address}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {property.description}
        </p>
        <div className="flex justify-between items-center text-gray-700 text-sm mt-auto">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            {property.beds} Bed{property.beds !== 1 ? 's' : ''}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            {property.baths} Bath{property.baths !== 1 ? 's' : ''}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            {property.sqft} sqft
          </span>
        </div>
        <div className="mt-4">
          <Button label="View Details" />
        </div>
      </div>
    </Card>
  );
};

export default PropertyItem;