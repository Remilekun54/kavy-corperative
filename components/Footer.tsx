
import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.hash = '#landing'}>
            <div className="h-8 w-8 bg-lemon-400 rounded-lg flex items-center justify-center text-slate-900 shadow-lg shadow-lemon-400/20">
              <Zap size={18} />
            </div>
            <span className="text-xl font-black tracking-tighter">KAVY</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Digitalizing trust for Africa's informal economy. Join the cooperative movement and scale your business today.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-lemon-400 hover:text-slate-900 transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-lemon-400 hover:text-slate-900 transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-lemon-400 hover:text-slate-900 transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lemon-400 mb-6 uppercase tracking-widest text-xs">Platform</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#thrift" className="hover:text-white transition-colors">Savings Pools</a></li>
            <li><a href="#app" className="hover:text-white transition-colors">Grant Marketplace</a></li>
            <li><a href="#app" className="hover:text-white transition-colors">Kavy Market</a></li>
            <li><a href="#guilds" className="hover:text-white transition-colors">Guild Ecosystem</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lemon-400 mb-6 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Legal & Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lemon-400 mb-6 uppercase tracking-widest text-xs">Stay Connected</h4>
          <p className="text-sm text-slate-400 mb-4">Get the latest updates on available grants and bulk buy opportunities.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:border-lemon-400"
            />
            <button className="bg-lemon-400 text-slate-900 p-2 rounded-xl hover:bg-lemon-500 transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
        <p>© 2025 Kavy Cooperative Ltd. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-lemon-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-lemon-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-lemon-400 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
