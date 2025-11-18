import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
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
        className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <header className="h-16 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-medium text-white tracking-wide">
              {currentView === View.DASHBOARD && 'Platform Overview'}
              {currentView === View.BROWSER && 'Secure Remote Browser'}
              {currentView === View.FILE_SCANNER && 'Safe File Viewer'}
              {currentView === View.ARCHITECTURE && 'Architecture Diagram'}
              {currentView === View.LOGS && 'Security Logs'}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-white">Admin User</span>
              <span className="text-xs text-slate-500">KubeBrowse Cluster 1</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-2 border-slate-800 shadow-sm"></div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;