import React, { useState } from 'react';
import { Phone } from 'lucide-react';

interface EmergencyContact {
  name: string;
  phone: string;
  location: string;
}

export default function EmergencySection() {
  const [formData, setFormData] = useState<EmergencyContact>({
    name: '',
    phone: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to emergency services
    alert('Emergency services have been notified. Please stay calm, help is on the way.');
  };

  return (
    <div className="bg-red-50 p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <Phone className="h-6 w-6 text-red-600" />
        <h2 className="text-2xl font-bold text-red-600">Emergency Services</h2>
      </div>
      
      <div className="mb-4">
        <p className="text-red-800 font-semibold">Emergency Hotline: 102</p>
        <p className="text-gray-600">For immediate medical assistance at Graphic Era University</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            required
            className="w-full p-2 border rounded"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Your Location in Campus</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={formData.location}
            onChange={e => setFormData({...formData, location: e.target.value})}
            placeholder="e.g., Block A, Room 203"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors"
        >
          Request Emergency Assistance
        </button>
      </form>
    </div>
  );
}