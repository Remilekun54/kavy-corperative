
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import CoopRoom from './components/CoopRoom';
import Marketplace from './components/Marketplace';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import { INITIAL_USER } from './constants';
import { User } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user] = useState<User>(INITIAL_USER);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#landing');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#landing');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleGetStarted = () => {
    window.location.hash = '#app';
    setActiveTab('dashboard');
  };

  if (currentPath === '#landing' || currentPath === '') {
    return (
      <>
        <LandingPage onGetStarted={handleGetStarted} />
        <Footer />
      </>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'coop':
        return <CoopRoom />;
      case 'market':
        return <Marketplace />;
      case 'grants':
        return <Dashboard user={user} />; // Reusing dashboard components for grants marketplace in this prototype
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 flex">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 md:ml-72 p-6 md:p-12 animate-in fade-in duration-700">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
      {/* Ensuring footer is pushed to the bottom but remains visible after content */}
      <div className="md:ml-72">
        <Footer />
      </div>
    </div>
  );
};

export default App;
