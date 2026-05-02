import React from 'react';
import { Bike, Package, MapPin, Star, ChevronRight, Bell } from 'lucide-react';
import { ServiceType } from '../App';

interface HomeProps {
  onSelectService: (service: ServiceType) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectService }) => {
  return (
    <div className="px-6 py-4 space-y-6">
      {/* Hero Card */}
      <div className="relative rounded-2xl overflow-hidden bg-emerald-900 h-44 shadow-lg">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/89ff4ebe-c054-478f-ad66-6d88402ecd1c/hero-moto-ucad-e607b5ce-1777757417347.webp" 
          alt="SunuMoto UCAD" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent p-6 flex flex-col justify-end">
          <h2 className="text-white text-xl font-bold">Sécurité & Rapidité</h2>
          <p className="text-emerald-100 text-sm opacity-90">Transportez-vous en toute confiance à l'UCAD</p>
        </div>
      </div>

      {/* Main Services */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => onSelectService('transport')}
          className="bg-amber-100 p-4 rounded-2xl flex flex-col gap-3 items-start hover:bg-amber-200 transition-colors border border-amber-200 shadow-sm"
        >
          <div className="bg-amber-400 p-2 rounded-xl text-white">
            <Bike size={24} />
          </div>
          <div>
            <span className="font-bold text-amber-900">Transport</span>
            <p className="text-[10px] text-amber-700 font-medium">Bouger vite</p>
          </div>
        </button>

        <button 
          onClick={() => onSelectService('delivery')}
          className="bg-emerald-100 p-4 rounded-2xl flex flex-col gap-3 items-start hover:bg-emerald-200 transition-colors border border-emerald-200 shadow-sm"
        >
          <div className="bg-emerald-600 p-2 rounded-xl text-white">
            <Package size={24} />
          </div>
          <div>
            <span className="font-bold text-emerald-900">Livraison</span>
            <p className="text-[10px] text-emerald-700 font-medium">Colis Express</p>
          </div>
        </button>
      </div>

      {/* Recent Locations */}
      <section className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Destinations récentes</h3>
          <button className="text-xs text-amber-600 font-semibold">Voir tout</button>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden shadow-sm">
          <div className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="bg-gray-100 p-2 rounded-full text-gray-400">
              <MapPin size={18} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">Pavillon A, Campus Social</p>
              <p className="text-xs text-gray-500">UCAD, Dakar</p>
            </div>
            <ChevronRight size={16} className="text-gray-300" />
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="bg-gray-100 p-2 rounded-full text-gray-400">
              <MapPin size={18} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">Faculté des Sciences</p>
              <p className="text-xs text-gray-500">Avenue Cheikh Anta Diop</p>
            </div>
            <ChevronRight size={16} className="text-gray-300" />
          </div>
        </div>
      </section>

      {/* Campus Alerts */}
      <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-start gap-3">
        <div className="bg-amber-500 text-white p-1.5 rounded-lg mt-0.5">
          <Bell size={16} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-amber-900">Information Campus</h4>
          <p className="text-xs text-amber-800 opacity-80 mt-1">
            Zones de patrouilles renforcées entre la Bibliothèque Universitaire et la cité des filles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;