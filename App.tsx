import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { BrowserSession } from './components/BrowserSession';
import { FileScanner } from './components/FileScanner';
import { Architecture } from './components/Architecture';
import { Logs } from './components/Logs';
import { LandingPage } from './components/LandingPage';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LANDING);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD: return <Dashboard />;
      case View.BROWSER: return <BrowserSession />;
      case View.FILE_SCANNER: return <FileScanner />;
      case View.ARCHITECTURE: return <Architecture />;
      case View.LOGS: return <Logs />;
      default: return <Dashboard />;
    }
  };

  // If on Landing Page, render full screen without sidebar
  if (currentView === View.LANDING) {
    return <LandingPage onNavigate={setCurrentView} />;
  }

  // Main App Layout
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex font-sans">
      <Sidebar
        currentView={currentView}
        onChangeView={setCurrentView}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <main
        className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'
          }`}
      >
        <Navbar currentView={currentView} />

        <div className="p-8 max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;