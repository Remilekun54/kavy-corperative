
import React from 'react';
import { ShieldCheck, TrendingUp, HandHelping, ArrowRight, Zap, Globe, Users, Coins, Award, Layers, ShieldAlert, PieChart, Globe2, Briefcase } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const navigateToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#about';
  };

  const navigateToThrift = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#thrift';
  };

  const navigateToGuilds = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#guilds';
  };

  const navigateToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass border-b border-slate-100">
        <div className="flex items-center gap-2">
           <div className="h-10 w-10 bg-lemon-400 rounded-xl flex items-center justify-center text-slate-900 shadow-xl shadow-lemon-100">
             < Zap size={24} />
           </div>
           <span className="text-2xl font-black text-slate-900 tracking-tighter">KAVY</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest items-center">
          <a 
            href="#about" 
            onClick={navigateToAbout}
            className="hover:text-lemon-700 transition-colors"
          >
            About Us
          </a>
          <a 
            href="#thrift" 
            onClick={navigateToThrift}
            className="hover:text-lemon-700 transition-colors"
          >
            Thrift
          </a>
          <a 
            href="#guilds" 
            onClick={navigateToGuilds}
            className="hover:text-lemon-700 transition-colors"
          >
            Guilds
          </a>
          <a 
            href="#contact" 
            onClick={navigateToContact}
            className="hover:text-lemon-700 transition-colors"
          >
            Contact
          </a>
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
          <div className="bg-white p-4 md:p-8 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden group">
             <img 
               src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
               alt="Digital Banking and Trust" 
               className="rounded-2xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700 w-full h-[400px] object-cover" 
             />
             <div className="absolute top-8 right-8 animate-float">
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
             <div className="flex items-center gap-3 font-black text-2xl text-slate-800">< Zap className="text-lemon-600" /> UNICEF</div>
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

      {/* Digital Thrift Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden" id="thrift">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-lemon-400/10 border border-lemon-400/20 rounded-full">
              <Coins size={14} className="text-lemon-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-lemon-400">Ajo & Esusu Redefined</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
              Modernizing tradition with <span className="text-lemon-400">Digital Thrift.</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              We've taken the age-old practice of collective savings and brought it into the 21st century. No more manual ledgers or "collectors" disappearing. Kavy automates your contributions, ensures transparent payouts, and boosts your credit score every time you save.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 h-5 w-5 rounded-full bg-lemon-400 flex items-center justify-center flex-shrink-0 text-slate-900">
                  <ArrowRight size={12} strokeWidth={4} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Automated Rotation</h4>
                  <p className="text-sm text-slate-500">Scheduled payouts to members based on a fair, transparent algorithm.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 h-5 w-5 rounded-full bg-lemon-400 flex items-center justify-center flex-shrink-0 text-slate-900">
                  <ArrowRight size={12} strokeWidth={4} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Guaranteed Payouts</h4>
                  <p className="text-sm text-slate-500">Every circle is backed by Kavy's Liquidity Fund for 100% peace of mind.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 order-1 md:order-2 relative">
             <div className="bg-slate-800/50 p-6 rounded-[3rem] border border-slate-700/50 backdrop-blur-xl relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop" 
                  alt="Traditional Savings Modernized" 
                  className="rounded-[2rem] grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700 h-[450px] w-full object-cover shadow-2xl" 
                />
                <div className="absolute bottom-12 -left-8 bg-lemon-400 p-6 rounded-3xl shadow-2xl text-slate-900 space-y-2 max-w-[200px] border-4 border-slate-900">
                  <p className="text-xs font-black uppercase">Recent Payout</p>
                  <p className="text-2xl font-black tracking-tight">₦450,000</p>
                  <p className="text-[10px] font-bold opacity-60">To Artisan Guild #04</p>
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-lemon-400/20 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Guild Ecosystem Section */}
      <section className="py-24 bg-white relative overflow-hidden" id="guilds">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div className="relative group">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-lemon-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-lemon-400 hover:bg-lemon-50 transition-all cursor-default group/card">
                     <Award size={32} className="mb-4 text-slate-400 group-hover:card:text-lemon-600 transition-colors" />
                     <h4 className="font-black text-slate-800 text-xl tracking-tight">Tailors Guild</h4>
                     <p className="text-xs text-slate-500 font-medium">840 Active Members</p>
                  </div>
                  <div className="mt-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-lemon-400 hover:bg-lemon-50 transition-all cursor-default group/card">
                     <Layers size={32} className="mb-4 text-slate-400 group-hover:card:text-lemon-600 transition-colors" />
                     <h4 className="font-black text-slate-800 text-xl tracking-tight">Agro-Guild</h4>
                     <p className="text-xs text-slate-500 font-medium">1,200 Active Members</p>
                  </div>
                </div>
                <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl text-white relative overflow-hidden">
                   <div className="absolute right-0 bottom-0 opacity-10">
                     <Users size={180} />
                   </div>
                   <h4 className="text-2xl font-black mb-4">Professional Growth</h4>
                   <p className="text-slate-400 text-sm leading-relaxed mb-6">
                     Don't build alone. Kavy Guilds connect you with industry peers for mentorship, standard-setting, and collective bargaining with suppliers.
                   </p>
                   <div className="flex -space-x-3">
                     {[1,2,3,4,5].map(i => (
                       <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden shadow-lg">
                         <img src={`https://i.pravatar.cc/100?u=guild_${i}`} alt="member" />
                       </div>
                     ))}
                     <div className="h-10 w-10 rounded-full border-2 border-slate-900 bg-lemon-400 text-slate-900 flex items-center justify-center text-xs font-black">+2k</div>
                   </div>
                </div>
             </div>
          </div>
          <div className="space-y-8">
            <span className="bg-lemon-100 text-lemon-900 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-lemon-200">
              Community Powered Scale
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
              A Cooperative of <span className="text-lemon-500 underline decoration-lemon-400/50 underline-offset-8">Guilds.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Kavy isn't just one big bank—it's thousands of specialized communities working together. Whether you're a fashion designer, a farmer, or a tech entrepreneur, you belong to a Guild that understands your specific business risks and needs.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <p className="text-3xl font-black text-slate-900">₦2.4B+</p>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Guild Assets Managed</p>
                 </div>
                 <div className="space-y-2">
                   <p className="text-3xl font-black text-slate-900">15+</p>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Industry Categories</p>
                 </div>
              </div>
            </div>
            <button 
              onClick={navigateToGuilds}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-lemon-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-200"
            >
              Find Your Guild
            </button>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: The Stakeholder Promise (Transparency & Safety) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Institutional Grade <span className="text-lemon-600">Governance.</span></h2>
               <p className="text-slate-500 font-medium text-lg">Every stakeholder—from the micro-entrepreneur to the global investor—is protected by our radical transparency protocol.</p>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
               <ShieldAlert className="text-lemon-500" />
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">NDIC-Insured Partner Custody</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-4 group hover:bg-slate-900 transition-all duration-500">
                <div className="h-12 w-12 bg-lemon-100 rounded-xl flex items-center justify-center text-lemon-700 group-hover:bg-lemon-400 group-hover:text-slate-900 transition-colors">
                   <PieChart size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-xl group-hover:text-white">Fair Dividends</h4>
                <p className="text-sm text-slate-500 group-hover:text-slate-400">Quarterly profit distribution based on your contribution and trust score.</p>
             </div>
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-4 group hover:bg-slate-900 transition-all duration-500">
                <div className="h-12 w-12 bg-lemon-100 rounded-xl flex items-center justify-center text-lemon-700 group-hover:bg-lemon-400 group-hover:text-slate-900 transition-colors">
                   <Users size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-xl group-hover:text-white">Democratic Voting</h4>
                <p className="text-sm text-slate-500 group-hover:text-slate-400">Every member has a voice in policy changes, interest rates, and guild formation.</p>
             </div>
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-4 group hover:bg-slate-900 transition-all duration-500">
                <div className="h-12 w-12 bg-lemon-100 rounded-xl flex items-center justify-center text-lemon-700 group-hover:bg-lemon-400 group-hover:text-slate-900 transition-colors">
                   <ShieldCheck size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-xl group-hover:text-white">Escrow Protection</h4>
                <p className="text-sm text-slate-500 group-hover:text-slate-400">Marketplace funds are held in secure escrow until goods are delivered and verified.</p>
             </div>
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-4 group hover:bg-slate-900 transition-all duration-500">
                <div className="h-12 w-12 bg-lemon-100 rounded-xl flex items-center justify-center text-lemon-700 group-hover:bg-lemon-400 group-hover:text-slate-900 transition-colors">
                   <Briefcase size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-xl group-hover:text-white">Audit Readiness</h4>
                <p className="text-sm text-slate-500 group-hover:text-slate-400">Real-time financial ledgers accessible for regulatory and institutional review.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 4: The Path to Prosperity (Mission & Scale) */}
      <section className="py-32 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <div className="flex-1 relative">
                  <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 rotate-3 group hover:rotate-0 transition-transform duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                      alt="The Future of African Enterprise" 
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-12">
                       <p className="text-lemon-400 font-black text-6xl tracking-tighter mb-2">2027</p>
                       <p className="text-white font-bold text-xl uppercase tracking-widest opacity-80">The Pan-African Vision</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 h-64 w-64 bg-lemon-400/20 blur-[100px] -z-10 rounded-full"></div>
               </div>
               
               <div className="flex-1 space-y-10">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-full">
                       <Globe2 size={16} className="text-lemon-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Global Impact Strategy</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">Beyond Banking. <br/><span className="text-lemon-500">A Wealth Legacy.</span></h2>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">
                      Kavy is building the infrastructure for the next 50 years of African growth. We aren't just solving a lending problem; we are creating a circular economy where wealth stays within the community, grows through technology, and is protected by trust.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">Financial Inclusion</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Bridging the $330B credit gap for African MSMEs through non-traditional data sets.</p>
                     </div>
                     <div className="space-y-3">
                        <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">Climate Resilience</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Partnering with green-grants to provide eco-friendly equipment to our Agro-Guilds.</p>
                     </div>
                  </div>

                  <div className="pt-8">
                     <button 
                       onClick={onGetStarted}
                       className="group bg-slate-900 text-white p-1 rounded-full flex items-center gap-4 pr-8 hover:bg-lemon-500 transition-all duration-500"
                     >
                       <div className="h-14 w-14 bg-lemon-400 rounded-full flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                          <ArrowRight size={24} />
                       </div>
                       <span className="font-black text-lg group-hover:text-slate-900">Secure Your Legacy</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default LandingPage;
