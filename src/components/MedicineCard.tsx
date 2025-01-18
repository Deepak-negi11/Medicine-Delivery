import React from 'react';
import { Medicine } from '../types';
import { Info } from 'lucide-react';

interface MedicineCardProps {
  medicine: Medicine;
  onAddToCart: (medicine: Medicine) => void;
  onViewDetails: (medicine: Medicine) => void;
}

export default function MedicineCard({ medicine, onAddToCart, onViewDetails }: MedicineCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={medicine.imageUrl}
          alt={medicine.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{medicine.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{medicine.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">In Stock: {medicine.stock}</span>
          <button
            onClick={() => onViewDetails(medicine)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <Info className="h-4 w-4" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}