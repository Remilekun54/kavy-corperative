
import React from 'react';
import { ArrowRight, Zap, Users, Hammer, Sprout, ShoppingCart, GraduationCap, MapPin, Award, CheckCircle } from 'lucide-react';

interface GuildsPageProps {
  onGetStarted: () => void;
}

const GuildsPage: React.FC<GuildsPageProps> = ({ onGetStarted }) => {
  const navigateToHome = () => window.location.hash = '#landing';
  const navigateToAbout = () => window.location.hash = '#about';
  const navigateToThrift = () => window.location.hash = '#thrift';
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
          <a href="#thrift" onClick={navigateToThrift} className="hover:text-lemon-700">Thrift</a>
          <a href="#contact" onClick={navigateToContact} className="hover:text-lemon-700">Contact</a>
        </div>
        <button 
          onClick={onGetStarted}
          className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-extrabold hover:bg-lemon-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-200"
        >
          Join the Coop
        </button>
      </nav>

      {/* SECTION 1: HERO - THE GUILD MOVEMENT */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center space-y-8 animate-fade-up">
          <span className="inline-block bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
            Community-Driven Enterprise
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] max-w-5xl mx-auto">
            Unity is our <span className="text-lemon-500 italic">Financial Leverage.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            In the Kavy ecosystem, you don't build alone. Join a specialized guild that protects your interests, boosts your credit, and grants access to wholesale markets.
          </p>
          <div className="flex justify-center gap-6">
             <button onClick={onGetStarted} className="bg-lemon-400 text-slate-900 px-10 py-5 rounded-3xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-lemon-200">
                Join Your Guild
             </button>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up">
           <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" className="h-64 w-full object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all" alt="Business Group" />
           <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c02?q=80&w=800&auto=format&fit=crop" className="h-64 w-full object-cover rounded-[2rem] mt-12 grayscale hover:grayscale-0 transition-all" alt="African Business Planning" />
           <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" className="h-64 w-full object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all" alt="Meeting Collaboration" />
           <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop" className="h-64 w-full object-cover rounded-[2rem] mt-12 grayscale hover:grayscale-0 transition-all" alt="Entrepreneur Success" />
        </div>
      </section>

      {/* SECTION 2: THE INDUSTRY FOCUS (Categories) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl space-y-4">
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Specialized for <span className="text-lemon-600">You.</span></h2>
                 <p className="text-slate-500 font-medium text-lg">Every business has unique risks. We have guilds for every trade.</p>
              </div>
              <div className="h-12 w-12 bg-lemon-400 rounded-full flex items-center justify-center animate-bounce">
                 <ArrowRight className="rotate-90 text-slate-900" />
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Hammer, title: "Artisan Guilds", desc: "Fashion designers, mechanics, carpenters, and crafts professionals.", color: "bg-orange-50" },
                { icon: Sprout, title: "Agro-Guilds", desc: "Smallholder farmers, agro-processors, and livestock managers.", color: "bg-green-50" },
                { icon: GraduationCap, title: "Civil Servant Guilds", desc: "Education, healthcare, and administrative government workers.", color: "bg-blue-50" }
              ].map((guild, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group hover:border-lemon-400 transition-all">
                   <div className={`h-16 w-16 ${guild.color} rounded-3xl flex items-center justify-center text-slate-700 mb-8 group-hover:bg-lemon-400 transition-colors`}>
                      <guild.icon size={32} />
                   </div>
                   <h4 className="text-2xl font-black mb-4 tracking-tight">{guild.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed mb-6">{guild.desc}</p>
                   <button className="text-lemon-700 font-bold text-sm flex items-center gap-2">View Open Circles <ArrowRight size={14} /></button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 3: THE VOUCHING NETWORK (Social Trust) */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 space-y-8 animate-slide-right">
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                  Your Peers are <br/> <span className="text-lemon-500 underline decoration-lemon-400/50">Your Collateral.</span>
               </h2>
               <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  Kavy replaces land titles and bank statements with Peer Vouching. When you join a guild, your fellow members vouch for your integrity. This social trust score unlocks instant credit without paperwork.
               </p>
               <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl relative">
                  <div className="flex items-center gap-4 mb-4">
                     <Users size={24} className="text-lemon-400" />
                     <h4 className="font-bold">Trust Network Stats</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-3xl font-black text-lemon-400">98.4%</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Repayment Rate</p>
                     </div>
                     <div>
                        <p className="text-3xl font-black text-lemon-400">1.2M+</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Peer Vouches Given</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex-1 relative animate-slide-left">
               <div className="bg-slate-50 p-4 rounded-[4rem] relative z-10">
                  <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop" className="rounded-[3rem] h-[600px] w-full object-cover grayscale brightness-90" alt="Peer Trust Collaboration" />
               </div>
               <div className="absolute top-1/2 left-0 -translate-x-12 -translate-y-1/2 bg-lemon-400 p-8 rounded-3xl shadow-2xl text-slate-900 space-y-2 border-4 border-white rotate-[-5deg]">
                  <CheckCircle size={32} />
                  <p className="font-black text-xl">Vouched!</p>
                  <p className="text-xs font-bold opacity-70">By 12 Guild Members</p>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 4: COLLECTIVE BARGAINING (Economy of Scale) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-20">
           <div className="flex-1 space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-lemon-400/10 border border-lemon-400/20 rounded-full">
                <ShoppingCart size={14} className="text-lemon-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-lemon-400">Wholesale Power</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                 Buy like a <span className="text-lemon-400 italic">Corporation.</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                 Guilds pool their orders to purchase inventory and equipment directly from manufacturers. By cutting out middle-men, Kavy members save up to 35% on business inputs compared to retail markets.
              </p>
              <div className="flex items-center gap-6 py-6 border-t border-slate-800">
                 <div className="p-4 bg-white/5 rounded-2xl flex-1 border border-white/10 group hover:border-lemon-400/50 transition-all">
                    <p className="text-lemon-400 font-black text-3xl">35%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Avg. Material Savings</p>
                 </div>
                 <div className="p-4 bg-white/5 rounded-2xl flex-1 border border-white/10 group hover:border-lemon-400/50 transition-all">
                    <p className="text-lemon-400 font-black text-3xl">₦0</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Shipping Fees for Guilds</p>
                 </div>
              </div>
           </div>
           <div className="flex-1 relative animate-slide-right">
              <div className="bg-slate-800 rounded-[3rem] p-6 shadow-2xl relative z-10">
                 <img src="https://images.unsplash.com/photo-1553413766-41f9d287af3c?q=80&w=1000&auto=format&fit=crop" className="rounded-[2rem] w-full h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Bulk Inventory Logistics" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-lemon-400/20 blur-[100px] -z-10 rounded-full"></div>
           </div>
        </div>
      </section>

      {/* SECTION 5: EDUCATION & MENTORSHIP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="grid grid-cols-2 gap-4 animate-fade-up">
              <div className="space-y-4">
                 <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover grayscale shadow-xl" alt="African Business Training" />
                 <div className="bg-lemon-50 p-8 rounded-3xl border border-lemon-100">
                    <h4 className="font-bold text-lemon-900">Weekly Webinars</h4>
                    <p className="text-xs text-lemon-700 mt-2">Financial literacy & market trends for artisans.</p>
                 </div>
              </div>
              <div className="space-y-4 mt-12">
                 <div className="bg-slate-900 p-8 rounded-3xl text-white">
                    <h4 className="font-bold">Mastermind Circles</h4>
                    <p className="text-xs text-slate-400 mt-2">Connecting veterans with rising entrepreneurs.</p>
                 </div>
                 <img src="https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=600&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover grayscale shadow-xl" alt="Professional Mentorship" />
              </div>
           </div>
           <div className="space-y-8 animate-slide-left">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                 Knowledge is <br/> <span className="text-lemon-500 underline decoration-lemon-400/50 underline-offset-8">Common Wealth.</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                 Every Kavy Guild operates as a training hub. Access professional certification programs, business management courses, and direct mentorship from industry leaders—all included in your membership.
              </p>
              <div className="flex items-center gap-4">
                 <div className="h-12 w-12 bg-lemon-100 rounded-xl flex items-center justify-center text-lemon-700">
                    <Award size={24} />
                 </div>
                 <p className="font-bold text-slate-800">Earn Kavy Professional Badges</p>
              </div>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-lemon-500 hover:text-slate-900 transition-all shadow-xl">
                 Explore Learning Hub
              </button>
           </div>
        </div>
      </section>

      {/* SECTION 6: THE CALL TO ACTION - FIND YOUR PLACE */}
      <section className="py-32 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-12 animate-fade-up">
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
               Don't Scale <br/> in <span className="text-lemon-500 italic">Silence.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
               Find the professional family that will stand by your business. Whether you're a market trader or a tech founder, there's a guild waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
               <button 
                  onClick={onGetStarted}
                  className="bg-slate-900 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-lemon-500 hover:text-slate-900 hover:scale-105 transition-all shadow-2xl"
               >
                  Find My Guild
               </button>
               <button 
                  onClick={navigateToHome}
                  className="bg-white text-slate-900 border border-slate-200 px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-50 transition-all"
               >
                  Return Home
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default GuildsPage;
