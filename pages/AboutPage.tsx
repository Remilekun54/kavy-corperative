
import React from 'react';
import { ArrowRight, Zap, Target, History, Heart, Rocket, ShieldCheck, Globe } from 'lucide-react';

interface AboutPageProps {
  onGetStarted: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-white selection:bg-lemon-200">
      {/* Navbar (Same as Landing for consistency) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass border-b border-slate-100">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.hash = '#landing'}>
           <div className="h-10 w-10 bg-lemon-400 rounded-xl flex items-center justify-center text-slate-900 shadow-xl shadow-lemon-100">
             < Zap size={24} />
           </div>
           <span className="text-2xl font-black text-slate-900 tracking-tighter">KAVY</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <a href="#landing" onClick={() => window.location.hash = '#landing'} className="hover:text-lemon-700">Home</a>
          <a href="#thrift" onClick={(e) => { e.preventDefault(); window.location.hash = '#thrift'; }} className="hover:text-lemon-700">Thrift</a>
          <a href="#guilds" onClick={(e) => { e.preventDefault(); window.location.hash = '#guilds'; }} className="hover:text-lemon-700">Guilds</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); window.location.hash = '#contact'; }} className="hover:text-lemon-700">Contact</a>
        </div>
        <button 
          onClick={onGetStarted}
          className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-extrabold hover:bg-lemon-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-200"
        >
          Join the Coop
        </button>
      </nav>

      {/* SECTION 1: THE MANIFESTO (Hero) */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-up">
          <span className="inline-block bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">
            Our Manifesto
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] max-w-4xl">
            Where Community Meets <span className="text-lemon-500 italic">Capital.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Kavy is the digital bridge between traditional African collective trust and modern financial opportunity. We empower the backbone of the economy—the artisans, the entrepreneurs, and the civil servants.
          </p>
          <div className="w-full h-[500px] rounded-[4rem] overflow-hidden shadow-2xl relative mt-12 group">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
              alt="Diverse Collective Growth" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ROOTS (Our Story) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group animate-slide-right">
             <div className="bg-white p-4 rounded-[3rem] shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=2070&auto=format&fit=crop" 
                  alt="Traditional Markets" 
                  className="rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 h-[600px] w-full object-cover" 
                />
             </div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-lemon-400 opacity-20 blur-[100px] rounded-full"></div>
          </div>
          <div className="space-y-8 animate-slide-left">
            <div className="h-16 w-16 bg-lemon-400 rounded-3xl flex items-center justify-center text-slate-900 shadow-xl">
               <History size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">Born from the <br/> <span className="text-lemon-600">Spirit of Ajo.</span></h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              For generations, African communities have thrived on the principle of "Ajo" or "Esusu"—collective savings built on a handshake. But in a digital world, handshakes aren't enough to secure global credit or scale business operations.
            </p>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Kavy was founded to codify that trust. We took the heart of traditional cooperatives and combined it with institutional-grade security, giving local businesses the power of a global bank while keeping the soul of a community guild.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR MISSION (Vision & Goal) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-lemon-400/10 rounded-full blur-[120px] -mr-48 -mt-48 group-hover:bg-lemon-400/20 transition-all"></div>
            <div className="relative z-10 max-w-3xl space-y-12 animate-fade-up">
               <div className="space-y-4">
                  <h3 className="text-lemon-400 font-black uppercase tracking-widest text-sm flex items-center gap-2">
                    <Target size={16} /> The Mission
                  </h3>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                    Bridging the $330 Billion Credit Gap for African MSMEs.
                  </h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <p className="text-5xl font-black text-lemon-400">10M+</p>
                     <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Entrepreneurs to Empower by 2030</p>
                  </div>
                  <div className="space-y-4">
                     <p className="text-5xl font-black text-lemon-400">100%</p>
                     <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Transparency via Digital Ledgers</p>
                  </div>
               </div>
               <button onClick={onGetStarted} className="bg-lemon-400 text-slate-900 px-8 py-5 rounded-3xl font-black text-lg hover:bg-white transition-colors flex items-center gap-3">
                  Join the Movement <ArrowRight size={20} />
               </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
              alt="Mission in Action" 
              className="hidden lg:block absolute bottom-0 right-0 w-[500px] h-full object-cover grayscale opacity-30 group-hover:opacity-60 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE VALUES (The Pillars) */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4 animate-fade-up">
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">The Non-Negotiables.</h2>
             <p className="text-slate-500 font-medium text-lg">Our four pillars of operation that define every line of code we write.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:translate-y-[-10px] transition-all duration-500 group animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="h-14 w-14 bg-lemon-100 text-lemon-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-lemon-400 group-hover:text-slate-900 transition-colors">
                   <ShieldCheck size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">Radical Trust</h4>
                <p className="text-slate-500 text-sm leading-relaxed">We don't just ask for trust; we verify it through community vouching and transparent smart ledgers.</p>
             </div>
             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:translate-y-[-10px] transition-all duration-500 group animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="h-14 w-14 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-lemon-400 group-hover:text-slate-900 transition-colors">
                   <Heart size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">Ubuntu Spirit</h4>
                <p className="text-slate-500 text-sm leading-relaxed">"I am because we are." Every financial product at Kavy is designed to uplift the collective, not just the individual.</p>
             </div>
             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:translate-y-[-10px] transition-all duration-500 group animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="h-14 w-14 bg-lemon-100 text-lemon-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-lemon-400 group-hover:text-slate-900 transition-colors">
                   < Zap size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">High Velocity</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Financial opportunity shouldn't wait. We automate everything to ensure grants and loans reach you at the speed of business.</p>
             </div>
             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:translate-y-[-10px] transition-all duration-500 group animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="h-14 w-14 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-lemon-400 group-hover:text-slate-900 transition-colors">
                   <Globe size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">Global Reach</h4>
                <p className="text-slate-500 text-sm leading-relaxed">We connect local artisans to international NGOs and wholesale markets, removing the borders from business.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE SCALE (Impact) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
           <div className="flex-1 space-y-8 animate-slide-right">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                Built for <span className="text-lemon-500">Every Corner</span> of Africa.
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Whether you're in the busy markets of Lagos, the technology hubs of Nairobi, or the rural farming guilds of Accra, Kavy provides the tools to manage savings, access credit, and purchase resources in bulk.
              </p>
              <div className="flex items-center gap-8 py-4">
                 <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="h-14 w-14 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                        <img src={`https://i.pravatar.cc/150?u=impact_${i}`} alt="user" />
                     </div>
                   ))}
                 </div>
                 <div className="space-y-1">
                    <p className="text-2xl font-black text-slate-900">50,000+</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Cooperative Members</p>
                 </div>
              </div>
           </div>
           <div className="flex-1 relative animate-slide-left">
              <div className="bg-slate-900 rounded-[3rem] p-4 rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                    alt="Strategic Planning" 
                    className="rounded-[2rem] h-[500px] w-full object-cover grayscale brightness-90" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-lemon-400/20 to-transparent"></div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 6: THE FUTURE (Join Us) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="grid grid-cols-12 h-full">
               {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white"></div>)}
            </div>
         </div>
         <div className="max-w-5xl mx-auto px-6 text-center space-y-10 relative z-10 animate-fade-up">
            <Rocket className="text-lemon-400 mx-auto animate-float" size={64} />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              The Cooperative <br/> <span className="text-lemon-400 italic">Rebirth.</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              We are not just a fintech app. We are a collective movement dedicated to economic liberation. Your trust is your asset. Your community is your strength.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
               <button 
                  onClick={onGetStarted}
                  className="bg-lemon-400 text-slate-900 px-12 py-6 rounded-3xl font-black text-xl hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-lemon-400/20"
               >
                  Join Kavy Today
               </button>
               <button 
                  onClick={() => window.location.hash = '#landing'}
                  className="bg-transparent text-white border border-slate-700 px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-800 transition-all"
               >
                  Return to Home
               </button>
            </div>
            <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] pt-12">
               Established 2023 • Headquartered in Lagos • Expanding across Africa
            </p>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
