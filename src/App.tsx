import React, { useState } from 'react';
import { medicines } from './data/medicines';
import { CartItem, Medicine } from './types';
import Header from './components/Header';
import MedicineCard from './components/MedicineCard';
import Cart from './components/Cart';
import MedicineDetail from './components/MedicineDetail';
import EmergencySection from './components/EmergencySection';
import FreeMedicineSection from './components/FreeMedicineSection';
import ClinicInfo from './components/ClinicInfo';
import MedicineRequest from './components/MedicineRequest';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  const handleAddToCart = (medicine: CartItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === medicine.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === medicine.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...medicine, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prev =>
      quantity === 0
        ? prev.filter(item => item.id !== id)
        : prev.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FreeMedicineSection />
            <h2 className="text-2xl font-bold mb-6">Available Medicines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {medicines.map(medicine => (
                <MedicineCard
                  key={medicine.id}
                  medicine={medicine}
                  onAddToCart={handleAddToCart}
                  onViewDetails={setSelectedMedicine}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <ClinicInfo />
            <MedicineRequest />
            <EmergencySection />
          </div>
        </div>
      </main>

      {isCartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
      )}

      {selectedMedicine && (
        <MedicineDetail
          medicine={selectedMedicine}
          onClose={() => setSelectedMedicine(null)}
        />
      )}
    </div>
  );
}

export default App;