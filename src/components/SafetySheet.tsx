import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShieldAlert, Phone, Share2, Users, X, Info } from 'lucide-react';

interface SafetySheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSOS: () => void;
}

const SafetySheet: React.FC<SafetySheetProps> = ({ isOpen, onClose, onSOS }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 max-w-md mx-auto"
          />
          
          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white rounded-t-[32px] p-8 z-[60] shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-red-50 text-red-600 p-2 rounded-xl">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Centre de Sécurité</h3>
              </div>
              <button onClick={onClose} className="p-2 text-gray-400 hover:bg-gray-50 rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => { onSOS(); onClose(); }}
                className="w-full bg-red-600 text-white p-6 rounded-2xl flex flex-col items-center gap-2 shadow-lg shadow-red-200 active:scale-[0.98] transition-all"
              >
                <Phone size={32} className="fill-white" />
                <span className="text-lg font-bold">ALERTE SOS</span>
                <span className="text-xs opacity-80">Appel d'urgence et envoi de position</span>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
                  <div className="bg-white p-3 rounded-full shadow-sm text-blue-600">
                    <Share2 size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-700">Partager trajet</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
                  <div className="bg-white p-3 rounded-full shadow-sm text-emerald-600">
                    <Users size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-700">Contacts d'urgence</span>
                </button>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex gap-3">
                 <Info size={18} className="text-blue-600 shrink-0" />
                 <div className="space-y-1">
                    <p className="text-xs font-bold text-blue-900">Conseils de sécurité</p>
                    <p className="text-[10px] text-blue-800 opacity-80 leading-relaxed">
                      Vérifiez toujours la plaque d'immatriculation (Jakarta) et le visage du pilote avant de monter. Ne partagez jamais votre code de trajet en dehors de l'application.
                    </p>
                 </div>
              </div>
            </div>

            <div className="mt-8 text-center">
               <p className="text-[10px] text-gray-400 font-medium">UCAD SECURE PROGRAM • 2024</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SafetySheet;