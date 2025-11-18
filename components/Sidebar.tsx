import React from 'react';
import { LayoutDashboard, Globe, FileScan, Network, ShieldCheck, Terminal, Menu, Home } from 'lucide-react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onChangeView: (view: View) => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, collapsed, setCollapsed }) => {
  const navItems = [
    { id: View.DASHBOARD, label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: View.BROWSER, label: 'Secure Browser', icon: <Globe size={20} /> },
    { id: View.FILE_SCANNER, label: 'Safe File Viewer', icon: <FileScan size={20} /> },
    { id: View.ARCHITECTURE, label: 'System Architecture', icon: <Network size={20} /> },
    { id: View.LOGS, label: 'Threat Logs', icon: <Terminal size={20} /> },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-slate-900 border-r border-slate-800 transition-all duration-300 z-50 flex flex-col ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 flex items-center justify-between border-b border-slate-800">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white" size={18} />
            </div>
            <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              KubeBrowse
            </span>
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className={`p-1.5 rounded-md hover:bg-slate-800 text-slate-400 transition-colors ${collapsed ? 'mx-auto' : ''}`}
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onChangeView(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
              currentView === item.id 
                ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-600/20' 
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
            }`}
            title={collapsed ? item.label : undefined}
          >
            <span className={currentView === item.id ? 'text-indigo-400' : 'group-hover:text-slate-100'}>
              {item.icon}
            </span>
            {!collapsed && <span className="font-medium">{item.label}</span>}
            {!collapsed && currentView === item.id && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={() => onChangeView(View.LANDING)}
          className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <Home size={20} />
          {!collapsed && <span>Back to Home</span>}
        </button>
      </div>
    </div>
  );
};