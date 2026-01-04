
import React, { useState } from 'react';
// Added Gift to the imports from lucide-react to fix the error on line 124
import { Eye, EyeOff, TrendingUp, ShieldCheck, ChevronRight, Zap, ArrowUpRight, ArrowDownLeft, Gift } from 'lucide-react';
import { User, Grant } from '../types';
import { MOCK_GRANTS } from '../constants';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [showBalance, setShowBalance] = useState(true);

  // Simple grant matching logic for preview
  const matchedGrants = MOCK_GRANTS.filter(g => g.category.includes(user.type)).slice(0, 2);

  return (
    <div className="space-y-8 pb-24 md:pb-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">E n'lẹ o, {user.name.split(' ')[0]} 👋</h2>
          <p className="text-slate-500 font-medium">{user.type} • Tier {user.verifiedLevel} Verified Member</p>
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 transition-colors relative">
            <ShieldCheck size={20} />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-lemon-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="h-12 w-12 bg-lemon-100 rounded-2xl flex items-center justify-center text-slate-900 overflow-hidden border border-lemon-200">
            <img src="https://picsum.photos/seed/adeleke/100" alt="Avatar" />
          </div>
        </div>
      </header>

      {/* Financial Core Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Card */}
        <div className="lg:col-span-2 bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl shadow-slate-200 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lemon-400/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-lemon-400/20 transition-all duration-500"></div>
          
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-1">
              <p className="text-slate-400 text-sm font-semibold tracking-wider uppercase">Active Wallet Balance</p>
              <div className="flex items-center gap-3">
                <h3 className="text-4xl md:text-5xl font-black tabular-nums">
                  {showBalance ? `₦${user.balance.toLocaleString()}` : '••••••••'}
                </h3>
                <button onClick={() => setShowBalance(!showBalance)} className="text-slate-400 hover:text-white transition-colors">
                  {showBalance ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
              </div>
            </div>
            <div className="bg-lemon-400/20 px-3 py-1 rounded-full flex items-center gap-2 border border-lemon-400/30 backdrop-blur-sm">
              <TrendingUp size={14} className="text-lemon-400" />
              <span className="text-xs font-bold text-lemon-400">+₦{user.dividends.toLocaleString()} Dividends</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-lemon-400 text-slate-900 px-6 py-4 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
              <ArrowUpRight size={18} /> Add Savings
            </button>
            <button className="bg-slate-800 text-white border border-slate-700 px-6 py-4 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 hover:bg-slate-700 active:scale-95 transition-all">
              <ArrowDownLeft size={18} /> Apply for Loan
            </button>
          </div>
        </div>

        {/* Trust Score Card */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-slate-800 text-lg">Kavy Trust Score</h4>
              <p className="text-slate-400 text-xs font-semibold uppercase">Real-time Credit Rating</p>
            </div>
            <span className="bg-lemon-100 text-lemon-800 text-[10px] font-black px-2 py-1 rounded-lg uppercase">Excellent</span>
          </div>

          <div className="flex flex-col items-center py-6">
            <div className="relative h-32 w-32">
              <svg className="h-full w-full transform -rotate-90">
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-50"/>
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray="364" strokeDashoffset={364 - (364 * user.trustScore / 1000)} className="text-lemon-500 stroke-round transition-all duration-1000" style={{ strokeLinecap: 'round' }}/>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-slate-900">{user.trustScore}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Points</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl flex items-start gap-3 border border-slate-100">
            <div className="p-2 bg-lemon-100 text-lemon-700 rounded-lg">
              <Zap size={16} />
            </div>
            <p className="text-xs text-slate-500 leading-snug">
              Consistency unlocked <span className="text-lemon-700 font-bold">₦250k</span> instant grant eligibility.
            </p>
          </div>
        </div>
      </div>

      {/* Grant Matching Feature */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h4 className="text-xl font-bold text-slate-800 tracking-tight">Matched Grants for You</h4>
            <p className="text-slate-400 text-sm font-medium">Based on your {user.type} persona</p>
          </div>
          <button className="text-lemon-700 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Marketplace <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matchedGrants.map(grant => (
            <div key={grant.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-lemon-300 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-lemon-700 uppercase tracking-widest">{grant.provider}</span>
                  <h5 className="font-bold text-slate-800 text-lg group-hover:text-lemon-800 transition-colors">{grant.title}</h5>
                </div>
                <div className="h-10 w-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                  <Gift size={20} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="space-y-1">
                  <p className="text-xs text-slate-400 font-bold uppercase">Funding Up To</p>
                  <p className="text-2xl font-black text-slate-900">₦{grant.amount.toLocaleString()}</p>
                </div>
                <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-lemon-500 hover:text-slate-900 transition-colors shadow-lg">
                  Apply with Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Savings Progress Feature */}
      <section className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-lg font-bold text-slate-800">Target Savings Goal</h4>
          <span className="text-lemon-700 font-bold text-sm">₦{user.currentSavings.toLocaleString()} / ₦{user.savingsGoal.toLocaleString()}</span>
        </div>
        <div className="h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div 
            className="h-full bg-lemon-400 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(205,220,57,0.4)]"
            style={{ width: `${(user.currentSavings / user.savingsGoal) * 100}%` }}
          />
        </div>
        <div className="mt-4 flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>0% Start</span>
          <span className="text-slate-800">24% Achieved</span>
          <span>100% Goal</span>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
