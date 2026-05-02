import React from 'react';
import { User, Bell, Shield, CreditCard, HelpCircle, LogOut, ChevronRight, Settings } from 'lucide-react';

const Profile: React.FC = () => {
  const menuItems = [
    { icon: Bell, label: 'Notifications', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: Shield, label: 'Confidentialité', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { icon: CreditCard, label: 'Paiements', color: 'text-amber-500', bg: 'bg-amber-50' },
    { icon: Settings, label: 'Paramètres', color: 'text-gray-500', bg: 'bg-gray-50' },
    { icon: HelpCircle, label: 'Aide & Support', color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  return (
    <div className="px-6 py-6 space-y-8">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop" 
            alt="User" 
            className="w-24 h-24 rounded-[32px] object-cover border-4 border-white shadow-xl"
          />
          <div className="absolute -bottom-1 -right-1 bg-amber-400 p-2 rounded-2xl border-2 border-white text-amber-950">
            <User size={16} strokeWidth={3} />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Moussa Ndiaye</h2>
          <p className="text-xs text-gray-500 font-medium">moussa.ndiaye@ucad.edu.sn</p>
        </div>
        <div className="flex gap-4 mt-2">
           <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Courses</p>
              <p className="text-lg font-bold text-gray-900">42</p>
           </div>
           <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Note</p>
              <p className="text-lg font-bold text-gray-900">4.8</p>
           </div>
        </div>
      </div>

      {/* Profile Menu */}
      <div className="space-y-3">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button 
              key={idx}
              className="w-full bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 hover:bg-gray-50 transition-colors"
            >
              <div className={`${item.bg} ${item.color} p-2 rounded-xl`}>
                <Icon size={20} />
              </div>
              <span className="flex-1 text-sm font-bold text-gray-700 text-left">{item.label}</span>
              <ChevronRight size={16} className="text-gray-300" />
            </button>
          );
        })}
      </div>

      <button className="w-full p-4 rounded-2xl flex items-center gap-4 text-red-500 hover:bg-red-50 transition-colors mt-4">
        <div className="bg-red-50 p-2 rounded-xl">
          <LogOut size={20} />
        </div>
        <span className="text-sm font-bold">Déconnexion</span>
      </button>

      <div className="text-center pt-4">
         <p className="text-[10px] text-gray-300 font-medium">SunuMoto v1.0.4 • Dakar, Sénégal</p>
      </div>
    </div>
  );
};

export default Profile;