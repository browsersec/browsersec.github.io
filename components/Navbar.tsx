import React from 'react';
import { View } from '../types';
import { Search, Bell, HelpCircle, ChevronRight, Shield, User } from 'lucide-react';

interface NavbarProps {
    currentView: View;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView }) => {
    const getTitle = () => {
        switch (currentView) {
            case View.DASHBOARD: return 'Platform Overview';
            case View.BROWSER: return 'Secure Remote Browser';
            case View.FILE_SCANNER: return 'Safe File Viewer';
            case View.ARCHITECTURE: return 'Architecture Diagram';
            case View.LOGS: return 'Security Logs';
            default: return 'Dashboard';
        }
    };

    return (
        <header className="h-20 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl sticky top-0 z-40 px-8 flex items-center justify-between transition-all duration-300">
            {/* Left Section: Breadcrumbs & Title */}
            <div className="flex items-center gap-4">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-1">
                        <span className="hover:text-zinc-300 transition-colors cursor-pointer">KubeBrowse</span>
                        <ChevronRight className="w-3 h-3 text-zinc-700" />
                        <span className="text-blue-400/90">Cluster 1</span>
                    </div>
                    <h1 className="text-xl font-semibold text-zinc-100 tracking-tight flex items-center gap-3">
                        {getTitle()}
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                            Live
                        </span>
                    </h1>
                </div>
            </div>

            {/* Right Section: Search, Actions, Profile */}
            <div className="flex items-center gap-6">
                {/* Search Bar */}
                <div className="relative group hidden md:block">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="bg-zinc-900/50 border border-white/5 text-zinc-300 text-sm rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 block w-72 pl-10 p-2.5 transition-all placeholder:text-zinc-600 hover:bg-zinc-900 hover:border-white/10"
                        placeholder="Search resources..."
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 bg-zinc-800/50 border border-zinc-700/50 rounded shadow-sm">⌘K</kbd>
                    </div>
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-2 border-r border-white/5 pr-6">
                    <button className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all relative group">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#09090b] group-hover:scale-110 transition-transform"></span>
                    </button>
                    <button className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all">
                        <HelpCircle className="w-5 h-5" />
                    </button>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 pl-2 cursor-pointer group">
                    <div className="flex flex-col items-end hidden sm:block">
                        <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Admin User</span>
                        <span className="text-xs text-zinc-500 flex items-center gap-1">
                            <Shield className="w-3 h-3 text-zinc-600" />
                            Secured
                        </span>
                    </div>
                    <div className="relative">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/5 overflow-hidden group-hover:border-blue-500/30 transition-colors">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-zinc-700 to-zinc-800">
                                <User className="w-5 h-5 text-zinc-400" />
                            </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#09090b] rounded-full flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#09090b]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
