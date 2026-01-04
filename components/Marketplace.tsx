
import React from 'react';
import { ShoppingBag, Users, ChevronRight, Tags } from 'lucide-react';
import { MOCK_MARKET_ITEMS } from '../constants';

const Marketplace: React.FC = () => {
  return (
    <div className="space-y-8 pb-24 md:pb-8">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Kavy Market</h2>
          <p className="text-slate-500 font-medium">Pool funds with your guild members for wholesale prices.</p>
        </div>
        <div className="hidden md:flex gap-2">
           <button className="px-4 py-2 bg-lemon-100 text-lemon-800 rounded-xl font-bold text-sm hover:bg-lemon-200 transition-colors">Join Group</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_MARKET_ITEMS.map(item => (
          <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg group">
            <div className="h-56 w-full overflow-hidden relative">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                {item.category}
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 glass rounded-2xl flex justify-between items-center border border-white/20">
                <span className="text-xs font-bold text-slate-800">Ends in 48h</span>
                <span className="text-xs font-black text-lemon-800 uppercase bg-lemon-400 px-2 py-1 rounded-lg">Limited Slots</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-extrabold text-slate-800 leading-tight">{item.name}</h3>
              
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-xs text-slate-400 font-bold line-through">₦{item.originalPrice.toLocaleString()}</p>
                  <p className="text-2xl font-black text-slate-900">₦{item.bulkPrice.toLocaleString()}</p>
                </div>
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                    </div>
                  ))}
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-lemon-100 text-lemon-800 flex items-center justify-center text-[10px] font-bold">
                    +{item.joinedCount}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <span>Group Order Progress</span>
                  <span>{item.joinedCount}/{item.targetCount} Joined</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-lemon-400 rounded-full transition-all duration-1000"
                    style={{ width: `${(item.joinedCount / item.targetCount) * 100}%` }}
                  />
                </div>
              </div>

              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-lemon-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-200">
                Join Bulk Purchase <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ))}
        
        {/* Suggest Feature */}
        <div className="bg-white border-2 border-dashed border-slate-200 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center space-y-4 group cursor-pointer hover:border-lemon-400 hover:bg-lemon-50/30 transition-all">
           <div className="h-16 w-16 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 shadow-sm group-hover:scale-110 group-hover:bg-lemon-400 group-hover:text-slate-900 transition-all">
             <Tags size={32} />
           </div>
           <div>
             <h4 className="text-lg font-black text-slate-800 tracking-tight text-center">Suggest a Bulk Buy</h4>
             <p className="text-sm text-slate-500 font-medium">What materials does your guild need this week?</p>
           </div>
           <button className="px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-lg group-hover:bg-lemon-500 group-hover:text-slate-900">Submit Request</button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
