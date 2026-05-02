import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { AnimatePresence, motion } from 'framer-motion';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import BookingFlow from './components/BookingFlow';
import Activity from './components/Activity';
import Profile from './components/Profile';
import SafetySheet from './components/SafetySheet';
import { ShieldAlert } from 'lucide-react';
import { toast } from 'sonner';

export type Screen = 'home' | 'booking' | 'activity' | 'profile';
export type ServiceType = 'transport' | 'delivery' | null;

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedService, setSelectedService] = useState<ServiceType>(null);
  const [isSafetyOpen, setIsSafetyOpen] = useState(false);

  const navigateToBooking = (service: ServiceType) => {
    setSelectedService(service);
    setCurrentScreen('booking');
  };

  const handleSOS = () => {
    toast.error("Alerte SOS envoyée !", {
      description: "Votre position a été partagée avec les services de sécurité de l'UCAD et vos contacts d'urgence.",
      duration: 5000,
    });
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 overflow-hidden relative shadow-2xl">
      {/* Header for main screens */}
      {currentScreen !== 'booking' && (
        <header className="px-6 pt-6 pb-2 flex justify-between items-center bg-white border-b border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">SunuMoto UCAD</span>
            <h1 className="text-xl font-bold text-gray-900">Na nga def, Moussa</h1>
          </div>
          <button 
            onClick={() => setIsSafetyOpen(true)}
            className="p-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors"
            aria-label="Sécurité"
          >
            <ShieldAlert size={24} />
          </button>
        </header>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-20">
        <AnimatePresence mode="wait">
          {currentScreen === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full"
            >
              <Home onSelectService={navigateToBooking} />
            </motion.div>
          )}

          {currentScreen === 'booking' && (
            <motion.div
              key="booking"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="h-full"
            >
              <BookingFlow 
                serviceType={selectedService} 
                onBack={() => setCurrentScreen('home')} 
              />
            </motion.div>
          )}

          {currentScreen === 'activity' && (
            <motion.div
              key="activity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              <Activity />
            </motion.div>
          )}

          {currentScreen === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              <Profile />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      {currentScreen !== 'booking' && (
        <BottomNav 
          currentScreen={currentScreen} 
          setScreen={setCurrentScreen} 
        />
      )}

      {/* Safety Bottom Sheet */}
      <SafetySheet 
        isOpen={isSafetyOpen} 
        onClose={() => setIsSafetyOpen(false)} 
        onSOS={handleSOS}
      />

      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;