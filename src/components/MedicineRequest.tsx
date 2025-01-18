import React, { useState } from 'react';
import { ClipboardList } from 'lucide-react';

interface RequestForm {
  name: string;
  studentId: string;
  medicine: string;
  reason: string;
}

export default function MedicineRequest() {
  const [form, setForm] = useState<RequestForm>({
    name: '',
    studentId: '',
    medicine: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your medicine request has been submitted. Please visit the pharmacy with your ID card.');
    setForm({ name: '', studentId: '', medicine: '', reason: '' });
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <ClipboardList className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-blue-600">Request Medicine</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Student ID</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={form.studentId}
            onChange={e => setForm({...form, studentId: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Required Medicine</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={form.medicine}
            onChange={e => setForm({...form, medicine: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Reason</label>
          <textarea
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={3}
            value={form.reason}
            onChange={e => setForm({...form, reason: e.target.value})}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}