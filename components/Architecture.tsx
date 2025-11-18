import React from 'react';
import { Card } from './ui/Card';
import { Database, Server, Globe, Shield, Layers, Workflow } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">System Architecture</h2>
        <p className="text-slate-400">Visualizing the KubeBrowse internal Kubernetes flow and isolation layers.</p>
      </div>

      {/* Interactive-looking Diagram */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        
        <div className="relative z-10 flex flex-col items-center space-y-12">
          
          {/* User Layer */}
          <div className="flex flex-col items-center">
            <div className="p-4 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/30 mb-2">
              <Globe size={32} className="text-white" />
            </div>
            <span className="text-slate-300 font-medium">User (Client)</span>
          </div>

          {/* Ingress/Frontend Layer */}
          <div className="w-full max-w-4xl grid grid-cols-3 gap-8 relative">
             {/* Connecting lines */}
             <div className="absolute top-[-48px] left-1/2 w-px h-12 bg-gradient-to-b from-indigo-600 to-slate-600 -translate-x-1/2"></div>
             
             <Node 
               title="Frontend Service" 
               icon={<Layers size={20} />} 
               desc="React UI + WebSocket Handler"
               color="bg-blue-500"
             />
             
             <Node 
               title="API Gateway" 
               icon={<Server size={20} />} 
               desc="Go-based REST API"
               color="bg-purple-500"
             />
             
             <Node 
               title="Auth & Session" 
               icon={<Database size={20} />} 
               desc="Redis + Postgres"
               color="bg-cyan-500"
             />
          </div>

          {/* Isolation Layer */}
          <div className="w-full max-w-5xl border-2 border-dashed border-slate-700 rounded-3xl p-8 bg-slate-900/80 relative">
             <span className="absolute -top-3 left-8 bg-slate-900 px-2 text-slate-400 text-sm font-mono">KUBERNETES CLUSTER - WORKER NODES</span>
             
             <div className="grid grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center justify-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs border border-slate-700">Guacamole Protocol (RDP/VNC)</span>
                  </div>
                  <div className="p-6 bg-slate-800 border border-slate-700 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg"><Workflow size={20} /></div>
                      <h4 className="font-bold text-white">Guacd Pod</h4>
                    </div>
                    <p className="text-xs text-slate-400">Translates RDP traffic to HTML5 for the frontend. Handles TCP connections.</p>
                  </div>
                </div>

                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <BrowserPod id="1" region="US-East" />
                      <BrowserPod id="2" region="EU-West" />
                   </div>
                   <p className="text-center text-xs text-slate-500 mt-2">Ephemeral Browser Pods (Chromium)</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card title="Orchestration">
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>Kubernetes v1.29</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>Calico CNI (Network Policies)</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>Horizontal Pod Autoscaler</li>
          </ul>
        </Card>
        <Card title="Security Core">
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"/>Firejail Sandbox</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"/>ClamAV + VirusTotal</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"/>Zero Trust Microsegmentation</li>
          </ul>
        </Card>
        <Card title="Data Layer">
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"/>MinIO (Object Storage)</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"/>Redis (Session State)</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"/>PostgreSQL (Audit Logs)</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

const Node = ({title, icon, desc, color}: {title: string, icon: any, desc: string, color: string}) => (
  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 relative group hover:border-slate-500 transition-colors">
    <div className={`absolute -top-3 -left-3 p-2 ${color.replace('bg-', 'bg-')}/20 ${color.replace('bg-', 'text-')} rounded-lg shadow-lg`}>
      {icon}
    </div>
    <h4 className="font-bold text-white mt-2 ml-2">{title}</h4>
    <p className="text-xs text-slate-400 mt-2">{desc}</p>
  </div>
);

const BrowserPod = ({id, region}: {id: string, region: string}) => (
  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex flex-col gap-2 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-1 bg-slate-700 rounded-bl-lg">
       <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
    </div>
    <Globe size={16} className="text-slate-400" />
    <div>
      <div className="text-xs font-bold text-slate-200">Browser Pod #{id}</div>
      <div className="text-[10px] text-slate-500">{region}</div>
    </div>
  </div>
);
