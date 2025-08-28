// components/properties/PropertyItem.tsx

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Property } from '@/interfaces';

interface PropertyItemProps {
  property: Property;
  children: ReactNode;
}

const PropertyItem: React.FC<PropertyItemProps> = ({ property, children }) => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* ... (existing UI code) ... */}
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {/* ... (property details content) ... */}
          
          <div className="mt-8">
            {/* The reviews will be rendered here */}
            {/* This is where you would place a prop for reviews. A better way would be to just render the review list as a child in the main file*/}
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="p-6 border rounded-lg shadow-md sticky top-8">
            <div className="text-3xl font-bold mb-4">
              ${property.price}
              <span className="text-base font-normal text-gray-500"> / night</span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;