
import React from 'react';
import { ShieldCheck, TrendingUp, HandHelping, ArrowRight, Zap, Globe, Users } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass border-b border-slate-100">
        <div className="flex items-center gap-2">
           <div className="h-10 w-10 bg-lemon-400 rounded-xl flex items-center justify-center text-slate-900 shadow-xl shadow-lemon-100">
             <Zap size={24} />
           </div>
           <span className="text-2xl font-black text-slate-900 tracking-tighter">KAVY</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <a href="#features" className="hover:text-lemon-700">Features</a>
          <a href="#partners" className="hover:text-lemon-700">Grants</a>
          <a href="#coop" className="hover:text-lemon-700">The Coop</a>
        </div>
        <button 
          onClick={onGetStarted}
          className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-extrabold hover:bg-lemon-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-200"
        >
          Join the Coop
        </button>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <span className="inline-block bg-lemon-100 text-lemon-900 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-lemon-200">
            Digitizing Trust for Modern Africa
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
            Empowering Your Business Through <span className="text-lemon-500">Social Trust.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            The all-in-one cooperative platform for Artisans, Civil Servants, and Entrepreneurs. Access zero-collateral loans, international grants, and wholesale business supplies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onGetStarted}
              className="bg-lemon-400 text-slate-900 px-8 py-5 rounded-[2rem] text-lg font-black hover:bg-lemon-500 transition-all shadow-2xl shadow-lemon-100 flex items-center justify-center gap-2 group"
            >
              Get Started Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-slate-50 text-slate-900 px-8 py-5 rounded-[2rem] text-lg font-black border border-slate-200 hover:bg-white transition-all">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-lemon-400 rounded-full blur-[100px] opacity-20 -z-10 animate-pulse"></div>
          <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden group">
             <img src="https://images.unsplash.com/photo-1501524326573-6389b7eb047f?q=80&w=2070&auto=format&fit=crop" alt="Traditional banking hall queue" className="rounded-2xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700" />
             <div className="absolute top-4 right-4 animate-float">
               <div className="bg-slate-900 text-white px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-lemon-400/50">
                 <ShieldCheck size={20} className="text-lemon-400" />
                 <span className="text-xs font-bold">Trust Verified</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Partners */}
      <section className="py-20 bg-slate-50 overflow-hidden" id="partners">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Trusted by global partners & NGOs</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-3 font-black text-2xl text-slate-800"><Globe className="text-lemon-600" /> UNDP</div>
             <div className="flex items-center gap-3 font-black text-2xl text-slate-800"><Users className="text-lemon-600" /> LagosState</div>
             <div className="flex items-center gap-3 font-black text-2xl text-slate-800"><Zap className="text-lemon-600" /> UNICEF</div>
             <div className="flex items-center gap-3 font-black text-2xl text-slate-800"><TrendingUp className="text-lemon-600" /> USAID</div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="features">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Everything you need to scale.</h2>
           <p className="text-slate-500 font-medium text-lg">Unique financial tools built specifically for the informal economy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:border-lemon-200 transition-all space-y-6 group">
              <div className="h-16 w-16 bg-slate-50 text-slate-900 rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-lemon-400 transition-colors">
                <HandHelping size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Grant-as-a-Service</h3>
              <p className="text-slate-500 font-medium">We match your business profile with global grants from NGOs and governments automatically.</p>
           </div>
           <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:border-lemon-200 transition-all space-y-6 group">
              <div className="h-16 w-16 bg-slate-50 text-slate-900 rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-lemon-400 transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Social Trust Credit</h3>
              <p className="text-slate-500 font-medium">No credit history? No problem. Your trust score is calculated based on peer vouching and consistency.</p>
           </div>
           <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:border-lemon-200 transition-all space-y-6 group">
              <div className="h-16 w-16 bg-slate-50 text-slate-900 rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-lemon-400 transition-colors">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Bulk Purchase Power</h3>
              <p className="text-slate-500 font-medium">Pool your capital with fellow members to buy raw materials at wholesale prices through Kavy Market.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
