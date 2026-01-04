
import React, { useState } from 'react';
import { Zap, Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactUsPageProps {
  onGetStarted: () => void;
}

const ContactUsPage: React.FC<ContactUsPageProps> = ({ onGetStarted }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const navigateToHome = () => window.location.hash = '#landing';

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
          <a href="#about" onClick={() => window.location.hash = '#about'} className="hover:text-lemon-700">About Us</a>
          <a href="#thrift" onClick={() => window.location.hash = '#thrift'} className="hover:text-lemon-700">Thrift</a>
          <a href="#guilds" onClick={() => window.location.hash = '#guilds'} className="hover:text-lemon-700">Guilds</a>
          <a href="#contact" onClick={() => window.location.hash = '#contact'} className="text-lemon-700">Contact</a>
        </div>
        <button 
          onClick={onGetStarted}
          className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-extrabold hover:bg-lemon-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-200"
        >
          Join the Coop
        </button>
      </nav>

      {/* SECTION 1: HERO & CONTACT FORM */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
           <div className="flex-1 space-y-10 animate-slide-right">
              <div className="space-y-6">
                 <span className="inline-block bg-lemon-100 text-lemon-900 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-lemon-200">
                    Always Here to Help
                 </span>
                 <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                    Let's Start a <br/> <span className="text-lemon-500 italic">Conversation.</span>
                 </h1>
                 <p className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
                    Whether you have questions about guild membership, thrift rotation, or enterprise grants—our team is ready to support your business journey.
                 </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                 <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0">
                       <Mail size={24} />
                    </div>
                    <div>
                       <p className="font-black text-slate-900">Email Us</p>
                       <p className="text-sm text-slate-500">hello@kavy.coop</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-lemon-400 rounded-2xl flex items-center justify-center text-slate-900 shrink-0">
                       <Phone size={24} />
                    </div>
                    <div>
                       <p className="font-black text-slate-900">Call Us</p>
                       <p className="text-sm text-slate-500">+234 800 5289 2667</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="flex-1 w-full animate-slide-left">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-lemon-400/10 rounded-full blur-[60px] -mr-16 -mt-16"></div>
                 <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                       <input 
                         type="text" 
                         placeholder="Enter your name" 
                         className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-lemon-400 focus:bg-white transition-all text-sm font-bold"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                       <input 
                         type="email" 
                         placeholder="your@email.com" 
                         className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-lemon-400 focus:bg-white transition-all text-sm font-bold"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Message</label>
                       <textarea 
                         rows={4}
                         placeholder="How can we help your business?" 
                         className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-lemon-400 focus:bg-white transition-all text-sm font-bold resize-none"
                       />
                    </div>
                    <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-lemon-500 hover:text-slate-900 transition-all shadow-xl flex items-center justify-center gap-3 group">
                       Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2: GLOBAL SUPPORT CHANNELS */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Choose Your <span className="text-lemon-600">Channel.</span></h2>
              <p className="text-slate-500 font-medium text-lg mt-4">Average response time is less than 2 hours.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: MessageSquare, title: "WhatsApp Support", desc: "Quick answers for everyday banking questions.", link: "Chat Now", color: "bg-green-100 text-green-700" },
                { icon: ShieldCheck, title: "Technical Desk", desc: "Help with app login, verification, and guild portals.", link: "Open Ticket", color: "bg-blue-100 text-blue-700" },
                { icon: Globe, title: "Grant Advisory", desc: "Expert help matching your profile with global grants.", link: "Book Consultation", color: "bg-purple-100 text-purple-700" }
              ].map((channel, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:translate-y-[-10px] transition-all duration-500 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                   <div className={`h-16 w-16 ${channel.color} rounded-3xl flex items-center justify-center mb-8`}>
                      <channel.icon size={32} />
                   </div>
                   <h4 className="text-2xl font-black mb-4 tracking-tight">{channel.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed mb-6">{channel.desc}</p>
                   <button className="text-slate-900 font-black text-sm flex items-center gap-2 group">
                      {channel.link} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 3: OUR OFFICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8 animate-slide-right">
                 <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                    Rooted in <br/> <span className="text-lemon-500 underline decoration-lemon-400/50 underline-offset-8">Local Trust.</span>
                 </h2>
                 <p className="text-slate-500 text-lg font-medium leading-relaxed">
                    While our platform is digital, our presence is physical. We have regional hubs across Africa's major economic centers to ensure we're never far from the businesses we serve.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-lemon-400 transition-all">
                       <MapPin className="text-lemon-600 mt-1" />
                       <div>
                          <p className="font-black text-slate-900">Headquarters (Lagos)</p>
                          <p className="text-sm text-slate-500">22A, Admiralty Way, Lekki Phase 1, Lagos, Nigeria.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-lemon-400 transition-all">
                       <MapPin className="text-lemon-600 mt-1" />
                       <div>
                          <p className="font-black text-slate-900">Regional Hub (Nairobi)</p>
                          <p className="text-sm text-slate-500">14 Riverside Drive, Westlands, Nairobi, Kenya.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="flex-1 w-full animate-slide-left relative">
                 <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative h-[500px] border-8 border-slate-50 rotate-2">
                    <img 
                      src="https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?q=80&w=1000&auto=format&fit=crop" 
                      className="w-full h-full object-cover grayscale opacity-80" 
                      alt="Modern Office" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex flex-col justify-end p-12">
                       <h4 className="text-lemon-400 font-black text-4xl mb-2">Visit Us</h4>
                       <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Open Mon-Fri • 9am-5pm</p>
                    </div>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-lemon-400/20 blur-[100px] -z-10 rounded-full"></div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
