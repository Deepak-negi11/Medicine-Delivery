import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export default function ClinicInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Clinic Information</h2>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold">Opening Hours</h3>
            <p className="text-gray-600">Monday - Saturday</p>
            <p className="text-gray-600">9:00 AM - 5:00 PM</p>
            <p className="text-red-600 font-medium">Emergency Services: 24/7</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-600">GEHU Medical Center</p>
            <p className="text-gray-600">Graphic Era Hill University</p>
            <p className="text-gray-600">Bhimtal Campus</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Phone className="h-5 w-5 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="text-gray-600">Emergency: 102</p>
            <p className="text-gray-600">Reception: (05942) 247283</p>
          </div>
        </div>
      </div>
    </div>
  );
}