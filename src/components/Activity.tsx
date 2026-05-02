import React from 'react';
import { Bike, Package, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';

const Activity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'transport',
      title: 'Course UCAD',
      date: "Aujourd'hui, 14:20",
      price: '800 FCFA',
      status: 'Terminé',
      location: 'Pavillon B → Fac Droit',
      icon: Bike,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50',
    },
    {
      id: 2,
      type: 'delivery',
      title: 'Livraison Repas',
      date: 'Hier, 19:45',
      price: '1 200 FCFA',
      status: 'Terminé',
      location: 'Point E → Campus UCAD',
      icon: Package,
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 3,
      type: 'transport',
      title: 'Course Campus',
      date: '23 Oct, 10:15',
      price: '500 FCFA',
      status: 'Terminé',
      location: 'ESP → Rectorat',
      icon: Bike,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50',
    }
  ];

  return (
    <div className="px-6 py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Vos activités</h2>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div 
              key={activity.id}
              className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className={`${activity.bgColor} ${activity.iconColor} p-3 rounded-xl`}>
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900 text-sm">{activity.title}</h3>
                  <span className="text-xs font-bold text-gray-900">{activity.price}</span>
                </div>
                <p className="text-[10px] text-gray-500 font-medium mb-1">{activity.date}</p>
                <div className="flex items-center gap-1 text-[10px] text-gray-400">
                  <span className="truncate max-w-[150px]">{activity.location}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                 <CheckCircle2 size={16} className="text-emerald-500" />
                 <ChevronRight size={14} className="text-gray-300" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 text-center border-2 border-dashed border-gray-200">
         <p className="text-sm text-gray-500 font-medium">Fin de l'historique</p>
      </div>
    </div>
  );
};

export default Activity;