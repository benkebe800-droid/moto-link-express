import React, { useState } from 'react';
import { ChevronLeft, MapPin, Clock, CreditCard, ShieldCheck, Navigation, Search } from 'lucide-react';
import { ServiceType } from '../App';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

interface BookingFlowProps {
  serviceType: ServiceType;
  onBack: () => void;
}

const BookingFlow: React.FC<BookingFlowProps> = ({ serviceType, onBack }) => {
  const [step, setStep] = useState<'selection' | 'searching' | 'on-trip'>('selection');
  const [pickup, setPickup] = useState('Ma position (Pavillon A)');
  const [dropoff, setDropoff] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('eco');

  const handleBook = () => {
    if (!dropoff) {
      toast.warning("Veuillez entrer une destination");
      return;
    }
    setStep('searching');
    setTimeout(() => {
      setStep('on-trip');
      toast.success("Chauffeur trouvé !");
    }, 3000);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Map Background Simulation */}
      <div className="relative flex-1 bg-gray-200 overflow-hidden">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/89ff4ebe-c054-478f-ad66-6d88402ecd1c/dakar-map-bg-fae5e786-1777757417052.webp" 
          alt="Map" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Top Floating Controls */}
        <div className="absolute top-6 left-6 right-6 z-10 flex flex-col gap-2">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-700"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Floating Markers (Animated) */}
        {step === 'selection' && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
             <div className="relative">
                <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded text-[10px] font-bold shadow-sm whitespace-nowrap">Vous êtes ici</div>
             </div>
          </div>
        )}

        {step === 'on-trip' && (
           <motion.div 
            initial={{ x: -50, y: 50 }}
            animate={{ x: 20, y: -50 }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 z-20"
           >
              <div className="bg-amber-400 p-2 rounded-full shadow-lg border-2 border-white">
                <Navigation size={16} className="text-amber-900 fill-amber-900 rotate-45" />
              </div>
           </motion.div>
        )}
      </div>

      {/* Bottom Interface */}
      <div className="bg-white rounded-t-3xl shadow-[0_-8px_30px_rgb(0,0,0,0.12)] p-6 z-30 min-h-[40%] flex flex-col gap-4">
        <AnimatePresence mode="wait">
          {step === 'selection' && (
            <motion.div 
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {serviceType === 'transport' ? 'Où allez-vous ?' : 'Envoyer un colis'}
                </h3>
                <div className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest border border-amber-100">
                  UCAD Secure
                </div>
              </div>

              {/* Input Group */}
              <div className="space-y-3">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="w-0.5 h-6 bg-gray-200"></div>
                  </div>
                  <input 
                    type="text" 
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Point de départ"
                    className="w-full bg-gray-50 pl-10 pr-4 py-3 rounded-xl border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 rounded-sm bg-emerald-600"></div>
                  </div>
                  <input 
                    type="text" 
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    placeholder="Entrez la destination"
                    className="w-full bg-gray-50 pl-10 pr-4 py-3 rounded-xl border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    autoFocus
                  />
                </div>
              </div>

              {/* Vehicle Options */}
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
                <button 
                  onClick={() => setSelectedVehicle('eco')}
                  className={`flex-shrink-0 flex items-center gap-3 p-3 rounded-2xl border-2 transition-all ${
                    selectedVehicle === 'eco' ? 'border-amber-400 bg-amber-50' : 'border-gray-100'
                  }`}
                >
                  <div className="bg-amber-400 p-2 rounded-xl text-white">
                    <Navigation size={20} className="rotate-45" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Moto Eco</p>
                    <p className="text-[10px] text-gray-500">800 FCFA • 3 min</p>
                  </div>
                </button>
                <button 
                  onClick={() => setSelectedVehicle('safe')}
                  className={`flex-shrink-0 flex items-center gap-3 p-3 rounded-2xl border-2 transition-all ${
                    selectedVehicle === 'safe' ? 'border-amber-400 bg-amber-50' : 'border-gray-100'
                  }`}
                >
                  <div className="bg-emerald-600 p-2 rounded-xl text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Moto Safe+</p>
                    <p className="text-[10px] text-gray-500">1200 FCFA • 5 min</p>
                  </div>
                </button>
              </div>

              <button 
                onClick={handleBook}
                className="w-full bg-amber-400 text-amber-950 font-bold py-4 rounded-2xl shadow-lg shadow-amber-200 active:scale-[0.98] transition-all"
              >
                Confirmer {serviceType === 'transport' ? 'la Course' : 'la Livraison'}
              </button>
            </motion.div>
          )}

          {step === 'searching' && (
            <motion.div 
              key="searching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-8 gap-4"
            >
              <div className="relative">
                <div className="w-16 h-16 border-4 border-amber-100 border-t-amber-400 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Navigation size={24} className="text-amber-400 animate-pulse" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg">Recherche d'un pilote...</h3>
                <p className="text-sm text-gray-500">On vérifie les motos à proximité de l'UCAD</p>
              </div>
              <button 
                onClick={() => setStep('selection')}
                className="mt-4 text-sm font-semibold text-red-500"
              >
                Annuler
              </button>
            </motion.div>
          )}

          {step === 'on-trip' && (
            <motion.div 
              key="on-trip"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" 
                      alt="Driver" 
                      className="w-14 h-14 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-amber-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                      4.9 ★
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Cheikh Gueye</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Toyota Jakarta • DK-8829-AS</p>
                  </div>
                </div>
                <div className="flex gap-2">
                   <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 border border-gray-100">
                     <Search size={20} />
                   </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl">
                 <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-xl text-amber-500 shadow-sm">
                       <Clock size={16} />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-500 uppercase font-bold">Arrivée dans</p>
                       <p className="text-sm font-bold">4 min</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-xl text-emerald-500 shadow-sm">
                       <CreditCard size={16} />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-500 uppercase font-bold">Paiement</p>
                       <p className="text-sm font-bold">Cash / Wave</p>
                    </div>
                 </div>
              </div>

              <div className="flex gap-3">
                 <button 
                  onClick={() => toast.info("Lien de partage copié !")}
                  className="flex-1 bg-emerald-100 text-emerald-700 font-bold py-4 rounded-2xl border border-emerald-200"
                 >
                   Partager mon trajet
                 </button>
                 <button 
                  onClick={() => toast.error("Appel d'urgence en cours...")}
                  className="w-16 bg-red-100 text-red-600 flex items-center justify-center rounded-2xl border border-red-200"
                 >
                   SOS
                 </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BookingFlow;