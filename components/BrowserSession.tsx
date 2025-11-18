import React, { useState, useEffect } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Lock, RotateCcw, Shield, AlertTriangle, ArrowLeft, ArrowRight, Search, RefreshCw } from 'lucide-react';

export const BrowserSession: React.FC = () => {
  const [url, setUrl] = useState('https://example-bank.com/login');
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected' | 'terminated'>('idle');
  const [securityScore, setSecurityScore] = useState(100);
  const [events, setEvents] = useState<string[]>([]);

  const startSession = () => {
    setStatus('connecting');
    setEvents(prev => [...prev, 'Initializing ephemeral pod...', 'Applying Firejail policies...', 'Establishing WebSocket tunnel...']);
    setTimeout(() => {
      setStatus('connected');
      setEvents(prev => [...prev, 'Session established via Guacamole protocol', 'Zero Trust Network Policy Applied']);
    }, 2000);
  };

  const terminateSession = () => {
    setStatus('terminated');
    setEvents(prev => [...prev, 'Pod destroyed', 'Data purged']);
    setTimeout(() => setStatus('idle'), 1500);
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col space-y-4">
      {/* Control Bar */}
      <div className="flex items-center justify-between bg-slate-900 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <GlobeIcon /> Remote Browser
          </h2>
          {status === 'connected' && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Secure Tunnel
            </span>
          )}
        </div>
        
        <div className="flex gap-2">
          {status === 'connected' ? (
            <Button variant="danger" onClick={terminateSession} icon={<RotateCcw size={16}/>}>
              Destroy Session
            </Button>
          ) : (
            <Button variant="primary" onClick={startSession} disabled={status === 'connecting'}>
              {status === 'connecting' ? 'Provisioning...' : 'Launch New Session'}
            </Button>
          )}
        </div>
      </div>

      {/* Main Browser Window Simulation */}
      <div className="flex-1 flex gap-6 overflow-hidden">
        
        {/* Browser Viewport */}
        <div className="flex-1 flex flex-col bg-slate-950 border border-slate-700 rounded-lg shadow-2xl overflow-hidden relative">
          {/* Mock Browser Chrome (UI) */}
          <div className="bg-slate-800 p-2 flex items-center gap-3 border-b border-slate-700">
             <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-rose-500"></div>
               <div className="w-3 h-3 rounded-full bg-amber-500"></div>
               <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
             </div>
             <div className="flex gap-2 text-slate-400 ml-2">
               <ArrowLeft size={16} />
               <ArrowRight size={16} />
               <RefreshCw size={16} />
             </div>
             <div className="flex-1 bg-slate-900 rounded-md h-8 flex items-center px-3 text-sm text-slate-300 gap-2 border border-slate-700">
               <Lock size={12} className="text-emerald-500" />
               <span className="text-emerald-500 text-xs">Isolated</span>
               <div className="w-px h-4 bg-slate-700 mx-1"></div>
               <input 
                 className="bg-transparent border-none outline-none w-full text-slate-300 placeholder-slate-500"
                 value={url}
                 onChange={(e) => setUrl(e.target.value)}
                 disabled={status !== 'connected'}
               />
             </div>
          </div>

          {/* Viewport Content */}
          <div className="flex-1 relative flex items-center justify-center bg-white">
            {status === 'idle' && (
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <GlobeIcon size={40} />
                </div>
                <h3 className="text-slate-900 font-semibold text-lg">Ready to Browse</h3>
                <p className="text-slate-500 max-w-sm mx-auto mt-2">
                  Launch a disposable Chromium container to browse the web without risking your local endpoint.
                </p>
              </div>
            )}
            
            {status === 'connecting' && (
               <div className="text-center">
                 <div className="animate-spin w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                 <p className="text-slate-600 font-medium animate-pulse">Provisioning Pod...</p>
               </div>
            )}

            {status === 'connected' && (
              <div className="w-full h-full relative bg-gray-50">
                {/* Mock Web Page Content */}
                <div className="w-full h-16 bg-blue-900 flex items-center justify-between px-8">
                  <span className="text-white font-bold text-xl">ExampleBank</span>
                  <div className="flex gap-4 text-blue-200 text-sm">
                    <span>Personal</span>
                    <span>Business</span>
                    <span>Login</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back</h1>
                    <div className="space-y-4">
                      <div className="h-10 bg-gray-100 rounded w-full"></div>
                      <div className="h-10 bg-gray-100 rounded w-full"></div>
                      <div className="h-10 bg-blue-600 rounded w-32"></div>
                    </div>
                    <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded text-sm text-yellow-800 flex gap-2">
                      <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                      <p>This session is being rendered remotely. No code is executing on your device.</p>
                    </div>
                  </div>
                </div>
                
                {/* Watermark */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-slate-900/90 text-white text-xs rounded-full shadow-lg pointer-events-none backdrop-blur">
                  Protected by KubeBrowse
                </div>
              </div>
            )}

            {status === 'terminated' && (
               <div className="text-center">
                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                   <RotateCcw size={32} />
                 </div>
                 <h3 className="text-slate-900 font-semibold">Session Destroyed</h3>
                 <p className="text-slate-500">Container removed from cluster.</p>
               </div>
            )}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="w-80 flex flex-col gap-4">
           <Card title="Session Telemetry" className="flex-1">
             <div className="space-y-4">
               <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                 <span className="text-slate-400 text-sm">Latency</span>
                 <span className="text-emerald-400 font-mono">42ms</span>
               </div>
               <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                 <span className="text-slate-400 text-sm">Bandwidth</span>
                 <span className="text-slate-200 font-mono">1.2 Mbps</span>
               </div>
               <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                 <span className="text-slate-400 text-sm">FPS</span>
                 <span className="text-slate-200 font-mono">60</span>
               </div>
               <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                 <span className="text-slate-400 text-sm">Pod ID</span>
                 <span className="text-slate-500 font-mono text-xs truncate max-w-[100px]">kb-pod-x9s2</span>
               </div>
             </div>

             <div className="mt-6">
               <h4 className="text-slate-200 font-medium mb-3 text-sm">Real-time Logs</h4>
               <div className="bg-slate-950 rounded-md p-3 h-48 overflow-y-auto text-xs font-mono text-slate-400 border border-slate-800">
                 {events.map((e, i) => (
                   <div key={i} className="mb-1.5">
                     <span className="text-indigo-500">[{new Date().toLocaleTimeString()}]</span> {e}
                   </div>
                 ))}
                 {events.length === 0 && <span className="text-slate-600">Waiting for session...</span>}
               </div>
             </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

const GlobeIcon: React.FC<{size?: number}> = ({size = 24}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);
