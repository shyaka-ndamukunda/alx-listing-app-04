// components/properties/PropertyDetail.tsx

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Property } from '@/interfaces';

interface PropertyDetailProps {
  property: Property;
  children: ReactNode; // Add the children prop
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, children }) => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={property.imageUrl}
          alt={property.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{property.location}</p>
          <div className="flex items-center text-gray-700 text-sm mb-6 space-x-4">
            <span>{property.guests} Guest{property.guests !== 1 ? 's' : ''}</span>
            <span>-</span>
            <span>{property.beds} Bed{property.beds !== 1 ? 's' : ''}</span>
            <span>-</span>
            <span>{property.baths} Bath{property.baths !== 1 ? 's' : ''}</span>
          </div>
          <div className="prose lg:prose-xl mb-6">
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p>
              This is a beautiful property located in the heart of the city.
              It is perfect for a relaxing getaway with all the amenities you need.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="p-6 border rounded-lg shadow-md sticky top-8">
            <div className="text-3xl font-bold mb-4">
              ${property.price}
              <span className="text-base font-normal text-gray-500"> / night</span>
            </div>
            {children} {/* This will render the BookingForm */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;