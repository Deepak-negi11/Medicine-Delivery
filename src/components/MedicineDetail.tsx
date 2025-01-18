import React from 'react';
import { Medicine } from '../types';
import { Pill, Package, X } from 'lucide-react';

interface MedicineDetailProps {
  medicine: Medicine;
  onClose: () => void;
}

export default function MedicineDetail({ medicine, onClose }: MedicineDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{medicine.name}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <img
            src={medicine.imageUrl}
            alt={medicine.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
            loading="lazy"
          />

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Pill className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">Category:</span>
              <span>{medicine.category}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">Stock:</span>
              <span>{medicine.stock} units available</span>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description:</h3>
              <p className="text-gray-600">{medicine.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Usage Instructions:</h3>
              <p className="text-gray-600">
                Please consult with the campus medical staff before taking this medication.
                Follow the prescribed dosage and timing instructions carefully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}