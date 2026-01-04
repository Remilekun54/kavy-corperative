
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import CoopRoom from './components/CoopRoom';
import Marketplace from './components/Marketplace';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ThriftPage from './pages/ThriftPage';
import GuildsPage from './pages/GuildsPage';
import ContactUsPage from './pages/ContactUsPage';
import Footer from './components/Footer';
import { INITIAL_USER } from './constants';
import { User } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user] = useState<User>(INITIAL_USER);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#landing');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#landing';
      setCurrentPath(hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleGetStarted = () => {
    window.location.hash = '#app';
    setActiveTab('dashboard');
  };

  // Routing logic
  if (currentPath.startsWith('#about')) {
    return (
      <>
        <AboutPage onGetStarted={handleGetStarted} />
        <Footer />
      </>
    );
  }

  if (currentPath.startsWith('#thrift')) {
    return (
      <>
        <ThriftPage onGetStarted={handleGetStarted} />
        <Footer />
      </>
    );
  }

  if (currentPath.startsWith('#guilds')) {
    return (
      <>
        <GuildsPage onGetStarted={handleGetStarted} />
        <Footer />
      </>
    );
  }

  if (currentPath.startsWith('#contact')) {
    return (
      <>
        <ContactUsPage onGetStarted={handleGetStarted} />
        <Footer />
      </>
    );
  }

  if (currentPath.startsWith('#app')) {
    const renderContent = () => {
      switch (activeTab) {
        case 'dashboard': return <Dashboard user={user} />;
        case 'coop': return <CoopRoom />;
        case 'market': return <Marketplace />;
        case 'grants': return <Dashboard user={user} />;
        default: return <Dashboard user={user} />;
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
        <div className="md:ml-72">
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <>
      <LandingPage onGetStarted={handleGetStarted} />
      <Footer />
    </>
  );
};

export default App;
