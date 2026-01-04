
import React, { useState } from 'react';
import { UserCheck, Vote, MessageSquare, History, Check, X } from 'lucide-react';
import { MOCK_VOUCH_REQUESTS } from '../constants';
import { VouchRequest } from '../types';

const CoopRoom: React.FC = () => {
  const [vouchRequests, setVouchRequests] = useState<VouchRequest[]>(MOCK_VOUCH_REQUESTS);
  
  const handleVouch = (id: string, accept: boolean) => {
    setVouchRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: accept ? 'vouched' : 'declined' } : req
    ));
  };

  return (
    <div className="space-y-8 pb-24 md:pb-8 max-w-5xl mx-auto">
      <header>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">The Coop Room</h2>
        <p className="text-slate-500 font-medium">Digitalizing social trust through community governance.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vouching Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-lemon-100 text-lemon-800 rounded-xl">
              <UserCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Peer Vouching Requests</h3>
          </div>

          <div className="space-y-4">
            {vouchRequests.map(req => (
              <div key={req.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm transition-all hover:border-lemon-400">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${req.id}`} alt="User" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{req.requesterName}</h4>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Loan Amount: ₦{req.amount.toLocaleString()}</p>
                    </div>
                  </div>
                  {req.status !== 'pending' && (
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      req.status === 'vouched' ? 'bg-lemon-100 text-lemon-800' : 'bg-red-100 text-red-700'
                    }`}>
                      {req.status}
                    </span>
                  )}
                </div>

                {req.status === 'pending' ? (
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleVouch(req.id, false)}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 text-slate-600 rounded-2xl text-xs font-bold hover:bg-red-50 hover:text-red-600 transition-all border border-slate-200"
                    >
                      <X size={16} /> Decline
                    </button>
                    <button 
                      onClick={() => handleVouch(req.id, true)}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-lemon-400 text-slate-900 rounded-2xl text-xs font-bold hover:bg-lemon-500 transition-all shadow-lg"
                    >
                      <Check size={16} /> Vouch for Peer
                    </button>
                  </div>
                ) : (
                  <p className="text-sm text-slate-400 italic text-center py-2 border-t border-slate-50 mt-2">
                    {req.status === 'vouched' ? 'You have staked your trust for this member.' : 'Request has been processed.'}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Voting Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-200 text-slate-900 rounded-xl">
              <Vote size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Community Voting</h3>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="bg-lemon-100 text-lemon-800 text-[10px] font-black px-2 py-1 rounded-lg uppercase">Active Proposal</span>
              <h4 className="font-bold text-slate-800 text-lg leading-snug">Increase maximum loan multiplier from 3x to 4x of total savings?</h4>
            </div>

            <div className="space-y-4">
              <button className="w-full p-4 text-left bg-slate-50 border border-slate-200 rounded-2xl flex justify-between items-center group hover:bg-lemon-50 transition-all">
                <span className="font-bold text-slate-700">Yes, support increase</span>
                <span className="text-lemon-700 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Vote</span>
              </button>
              <button className="w-full p-4 text-left bg-slate-50 border border-slate-200 rounded-2xl flex justify-between items-center group hover:bg-lemon-50 transition-all">
                <span className="font-bold text-slate-700">No, maintain 3x stability</span>
                <span className="text-lemon-700 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Vote</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-widest">
              <span>Ending in 3 days</span>
              <span>1,204 Votes cast</span>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-slate-900 text-white p-6 rounded-[2rem] shadow-xl overflow-hidden relative">
             <History className="absolute top-4 right-4 text-white/10" size={64} />
             <h4 className="font-bold mb-4 flex items-center gap-2">
               <MessageSquare size={16} /> Community Activity
             </h4>
             <div className="space-y-4 relative z-10">
               <p className="text-sm border-l-2 border-lemon-400 pl-4 py-1">
                 <span className="font-bold text-lemon-400">Musa Ibrahim</span> joined the Tailors Guild.
               </p>
               <p className="text-sm border-l-2 border-slate-500 pl-4 py-1 text-slate-300">
                 <span className="font-bold text-white">Kavy Admin</span> distributed Q3 dividends of ₦15.4M.
               </p>
               <p className="text-sm border-l-2 border-lemon-400 pl-4 py-1">
                 <span className="font-bold text-lemon-400">Artisan Guild</span> reached bulk purchase target for Sewing Machines.
               </p>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoopRoom;
