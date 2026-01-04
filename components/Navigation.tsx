
import React from 'react';
import { Home, Gift, Users, Settings, LogOut, ShoppingBag } from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col md:flex-row items-center gap-1 md:gap-4 px-3 md:px-6 py-2 md:py-3 rounded-xl transition-all ${
      active ? 'text-slate-900 bg-lemon-400' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
    }`}
  >
    <Icon size={24} />
    <span className="text-[10px] md:text-sm font-semibold tracking-wide">{label}</span>
  </button>
);

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-200 px-4 flex justify-around items-center md:hidden z-50 shadow-2xl">
        <NavItem icon={Home} label="Home" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
        <NavItem icon={Gift} label="Grants" active={activeTab === 'grants'} onClick={() => setActiveTab('grants')} />
        <NavItem icon={ShoppingBag} label="Market" active={activeTab === 'market'} onClick={() => setActiveTab('market')} />
        <NavItem icon={Users} label="Coop" active={activeTab === 'coop'} onClick={() => setActiveTab('coop')} />
      </nav>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-72 bg-white border-r border-slate-200 p-8 z-50">
        <div className="mb-12">
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter">KAVY</h1>
          <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">Cooperative Ltd</p>
        </div>

        <div className="space-y-4 flex-1">
          <NavItem icon={Home} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavItem icon={Gift} label="Grant Marketplace" active={activeTab === 'grants'} onClick={() => setActiveTab('grants')} />
          <NavItem icon={ShoppingBag} label="Kavy Market" active={activeTab === 'market'} onClick={() => setActiveTab('market')} />
          <NavItem icon={Users} label="The Coop Room" active={activeTab === 'coop'} onClick={() => setActiveTab('coop')} />
          <NavItem icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </div>

        <div className="pt-8 border-t border-slate-100">
          <NavItem icon={LogOut} label="Log Out" onClick={() => window.location.hash = '#landing'} />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
