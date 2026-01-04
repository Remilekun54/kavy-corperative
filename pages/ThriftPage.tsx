
import React from 'react';
import { ArrowRight, Zap, Coins, ShieldCheck, RefreshCcw, Users, TrendingUp, Wallet } from 'lucide-react';

interface ThriftPageProps {
  onGetStarted: () => void;
}

const ThriftPage: React.FC<ThriftPageProps> = ({ onGetStarted }) => {
  const navigateToHome = () => window.location.hash = '#landing';
  const navigateToAbout = () => window.location.hash = '#about';
  const navigateToGuilds = () => window.location.hash = '#guilds';
  const navigateToContact = () => window.location.hash = '#contact';

  return (
    <div className="min-h-screen bg-white selection:bg-lemon-200">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass border-b border-slate-100">
        <div className="flex items-center gap-2 cursor-pointer" onClick={navigateToHome}>
           <div className="h-10 w-10 bg-lemon-400 rounded-xl flex items-center justify-center text-slate-900 shadow-xl shadow-lemon-100">
             < Zap size={24} />
           </div>
           <span className="text-2xl font-black text-slate-900 tracking-tighter">KAVY</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <a href="#landing" onClick={navigateToHome} className="hover:text-lemon-700">Home</a>
          <a href="#about" onClick={navigateToAbout} className="hover:text-lemon-700">About Us</a>
          <a href="#guilds" onClick={navigateToGuilds} className="hover:text-lemon-700">Guilds</a>
          <a href="#contact" onClick={navigateToContact} className="hover:text-lemon-700">Contact</a>
        </div>
        <button 
          onClick={onGetStarted}
          className="bg-slate-900 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-2xl text-xs md:text-sm font-extrabold hover:bg-lemon-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-200"
        >
          Join the Coop
        </button>
      </nav>

      {/* SECTION 1: HERO - THE REINVENTION */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
           <div className="flex-1 space-y-6 md:space-y-10 animate-fade-up">
              <span className="inline-block bg-lemon-100 text-lemon-900 px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-lemon-200">
                Collective Wealth Generation
              </span>
              <h1 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1.1] md:leading-[0.9]">
                Your Savings, <br/> <span className="text-lemon-500 underline decoration-lemon-400/30">Amplified.</span>
              </h1>
              <p className="text-base md:text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
                Traditional Ajo and Esusu are beautiful, but they lack the security and scale of modern finance. Kavy Digital Thrift brings traditional rotation to the smartphone era.
              </p>
              <div className="flex flex-wrap gap-4">
                 <button 
                   onClick={onGetStarted}
                   className="w-full sm:w-auto bg-slate-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-[2.5rem] text-sm md:text-lg font-black hover:bg-lemon-500 hover:text-slate-900 transition-all shadow-2xl flex items-center justify-center gap-2 group"
                 >
                   Start a Savings Circle <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
           <div className="flex-1 w-full relative animate-slide-left">
              <div className="bg-slate-50 rounded-[2.5rem] md:rounded-[4rem] p-4 md:p-6 shadow-2xl relative overflow-hidden group">
                 <img 
                   src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop" 
                   alt="Digital Thrift Savings" 
                   className="rounded-[2rem] md:rounded-[3rem] w-full h-[300px] md:h-[550px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-inner"
                 />
                 <div className="absolute top-8 md:top-12 -left-4 md:-left-8 animate-float">
                    <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100">
                       <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Circle Contribution</p>
                       <p className="text-xl md:text-2xl font-black text-slate-900">₦25,000 / week</p>
                       <div className="mt-3 flex gap-1">
                          {[1,2,3,4].map(i => <div key={i} className="h-1.5 md:h-2 w-full bg-lemon-400 rounded-full"></div>)}
                          <div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full"></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS (The Rotation) */}
      <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-12 md:mb-20 animate-fade-up">
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter">The Perfect Circle.</h2>
              <p className="text-slate-400 font-medium text-base md:text-lg mt-4">Simple, transparent, and completely automated.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Users, title: "Join a Circle", desc: "Choose a circle based on your trade or contribution capacity." },
                { icon: Wallet, title: "Automated Saving", desc: "Kavy handles your weekly or monthly debits automatically—no collectors." },
                { icon: RefreshCcw, title: "Fair Rotation", desc: "Our algorithm ensures everyone gets their lump sum fairly based on the group schedule." },
                { icon: TrendingUp, title: "Build Credit", desc: "Every contribution increases your trust score, unlocking cheaper loans." }
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-800 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-700/50 space-y-4 md:space-y-6 hover:bg-slate-800/80 transition-all animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                   <div className="h-12 md:h-16 w-12 md:w-16 bg-lemon-400 rounded-2xl md:rounded-3xl flex items-center justify-center text-slate-900 shadow-xl shadow-lemon-400/20">
                      <step.icon size={24} className="md:w-8 md:h-8" />
                   </div>
                   <h4 className="text-lg md:text-xl font-bold">{step.title}</h4>
                   <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 3: TRUST & SAFETY */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative group animate-slide-right w-full">
               <div className="bg-lemon-50 p-4 md:p-8 rounded-[2.5rem] md:rounded-[4rem] relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" 
                    alt="Secure Trust" 
                    className="rounded-[2rem] md:rounded-[3rem] h-[300px] md:h-[500px] w-full object-cover shadow-2xl grayscale contrast-125" 
                  />
                  <div className="absolute inset-0 bg-lemon-400/10 mix-blend-multiply rounded-[2rem] md:rounded-[3rem]"></div>
               </div>
               <div className="absolute -top-6 md:-top-10 -right-4 md:-right-10 animate-float">
                  <div className="bg-slate-900 text-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl flex items-center gap-3 md:gap-4">
                     <ShieldCheck size={28} className="text-lemon-400 md:w-10 md:h-10" />
                     <div>
                        <p className="text-[8px] md:text-xs font-black uppercase text-slate-400">Security Standard</p>
                        <p className="font-bold text-sm md:text-lg">Bank-Grade Vaults</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="space-y-6 md:space-y-8 animate-slide-left">
               <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                  Institutional <br/> <span className="text-lemon-600">Peace of Mind.</span>
               </h2>
               <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
                  Unlike traditional collectors who can disappear with your hard-earned money, Kavy is a regulated entity. Every Kavy Thrift Circle is backed by our internal Liquidity Fund.
               </p>
               <ul className="space-y-4 md:space-y-6">
                  {[
                    "100% Payout Guarantee: Backed by Kavy's Liquidity Buffer.",
                    "Digital Paper Trail: Transparent real-time ledgers for all members.",
                    "NDIC-Insured Partner Banks: Your deposits are never at risk."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4">
                       <div className="h-5 md:h-6 w-5 md:w-6 rounded-full bg-lemon-400 flex items-center justify-center flex-shrink-0 text-slate-900 mt-0.5 md:mt-1">
                          <ArrowRight size={10} strokeWidth={4} />
                       </div>
                       <p className="text-slate-600 font-bold text-sm md:text-base">{item}</p>
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>

      {/* SECTION 4: THE MULTIPLIER (Credit) */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8 md:space-y-12">
           <div className="inline-flex items-center gap-3 bg-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-sm border border-slate-100 animate-fade-up">
              <TrendingUp className="text-lemon-600" />
              <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-slate-900">The Kavy Multiplier</span>
           </div>
           <h2 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter animate-fade-up">
              Save Today. <span className="text-lemon-500">Scale Tomorrow.</span>
           </h2>
           <p className="text-base md:text-xl text-slate-500 font-medium max-w-3xl mx-auto animate-fade-up leading-relaxed">
              Consistent thrift contributions are the highest signal of trust in our system. After just 3 successful thrift cycles, you unlock interest-free loans up to 3x your contribution amount.
           </p>
           <div className="pt-4 md:pt-8 animate-fade-up w-full">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-slate-100 max-w-4xl mx-auto relative group overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-lemon-400 opacity-10 rounded-full blur-[60px] md:blur-[80px]"></div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left relative z-10">
                    <div className="space-y-1 md:space-y-2">
                       <p className="text-2xl md:text-4xl font-black text-slate-900">₦1.2M</p>
                       <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Savings</p>
                    </div>
                    <div className="md:border-x border-slate-100 md:px-12 space-y-1 md:space-y-2">
                       <p className="text-2xl md:text-4xl font-black text-lemon-600">3.6M</p>
                       <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Credit Power Unlocked</p>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                       <p className="text-2xl md:text-4xl font-black text-slate-900">0%</p>
                       <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Interest Rate</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 5: GUILD SAVINGS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
              <div className="flex-1 order-2 lg:order-1 animate-slide-right w-full">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-900 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] text-white space-y-4 shadow-xl">
                       <p className="text-[10px] font-black uppercase text-lemon-400">Top Circle</p>
                       <h4 className="text-xl md:text-2xl font-bold leading-tight">Agro-Input Collective</h4>
                       <p className="text-xs md:text-sm text-slate-400">Members save for seasonal fertilizer bulk buys.</p>
                    </div>
                    <div className="mt-0 sm:mt-8 bg-lemon-400 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] text-slate-900 space-y-4 shadow-xl">
                       <p className="text-[10px] font-black uppercase text-slate-700 tracking-widest">Newest</p>
                       <h4 className="text-xl md:text-2xl font-bold leading-tight">Civil Servants #09</h4>
                       <p className="text-xs md:text-sm text-slate-700">Monthly rotation for home electronics upgrades.</p>
                    </div>
                 </div>
              </div>
              <div className="flex-1 order-1 lg:order-2 space-y-6 md:space-y-8 animate-slide-left">
                 <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                    Power in <br/> <span className="text-lemon-500 italic">Numbers.</span>
                 </h2>
                 <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
                    Join specialized thrift circles within your guild. Connect with members who understand your business cycle and share your financial goals. Whether it's the Fashion Guild saving for industrial machines or Farmers saving for tractors—there's a circle for you.
                 </p>
                 <button 
                   onClick={navigateToGuilds}
                   className="text-slate-900 font-black text-base md:text-lg flex items-center gap-2 hover:gap-4 transition-all"
                 >
                   Explore Guild Circles <ArrowRight className="text-lemon-600" />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 6: THE CALL TO ACTION */}
      <section className="py-20 md:py-32 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-lemon-400/10 rounded-full blur-[80px] md:blur-[120px] -mr-32 md:-mr-48 -mb-32 md:-mb-48"></div>
         <div className="max-w-4xl mx-auto px-6 text-center space-y-8 md:space-y-12 animate-fade-up">
            <Coins className="text-lemon-400 mx-auto animate-float w-16 h-16 md:w-20 md:h-20" size={80} />
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none">
               Revolutionize <br/> Your <span className="text-lemon-400">Ajo.</span>
            </h2>
            <p className="text-base md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
               Don't leave your financial future to chance or manual ledgers. Join the thousands of Nigerians digitizing their trust with Kavy.
            </p>
            <div className="pt-4 md:pt-8">
               <button 
                 onClick={onGetStarted}
                 className="w-full sm:w-auto bg-lemon-400 text-slate-900 px-10 md:px-16 py-6 md:py-8 rounded-2xl md:rounded-[3rem] font-black text-xl md:text-2xl hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-lemon-400/20"
               >
                 Start Saving Now
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ThriftPage;
