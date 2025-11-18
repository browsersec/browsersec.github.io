import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Card } from './ui/Card';
import { Shield, Zap, Users, FileWarning, Activity, Lock } from 'lucide-react';

const performanceData = [
  { time: '00:00', latency: 45, users: 120 },
  { time: '04:00', latency: 52, users: 85 },
  { time: '08:00', latency: 145, users: 340 },
  { time: '12:00', latency: 210, users: 485 },
  { time: '16:00', latency: 180, users: 420 },
  { time: '20:00', latency: 120, users: 290 },
  { time: '23:59', latency: 65, users: 150 },
];

const threatData = [
  { name: 'Phishing', blocked: 2450, allowed: 12 },
  { name: 'Malware', blocked: 1890, allowed: 5 },
  { name: 'Drive-by', blocked: 890, allowed: 0 },
  { name: 'XSS', blocked: 3200, allowed: 25 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Security Overview</h2>
        <div className="flex gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">Last 24 Hours</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/10 rounded-full group-hover:bg-indigo-500/20 transition-colors"></div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium">Active Sessions</p>
              <h3 className="text-3xl font-bold text-white mt-1">485</h3>
            </div>
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
              <Users size={24} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <Activity size={14} />
            <span>+12% from yesterday</span>
          </div>
        </Card>

        <Card className="relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium">Phishing Blocked</p>
              <h3 className="text-3xl font-bold text-white mt-1">96.4%</h3>
            </div>
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
              <Shield size={24} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
             <span className="text-emerald-400">+2.1%</span> efficiency
          </div>
        </Card>

        <Card className="relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-rose-500/10 rounded-full group-hover:bg-rose-500/20 transition-colors"></div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium">Malware Stopped</p>
              <h3 className="text-3xl font-bold text-white mt-1">2,401</h3>
            </div>
            <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
              <FileWarning size={24} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Zero persistent infections</span>
          </div>
        </Card>

        <Card className="relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full group-hover:bg-cyan-500/20 transition-colors"></div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium">Avg. Latency</p>
              <h3 className="text-3xl font-bold text-white mt-1">210ms</h3>
            </div>
            <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
              <Zap size={24} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <span>&lt;300ms target met</span>
          </div>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Performance Scalability">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#475569" />
                <YAxis stroke="#475569" />
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#cbd5e1' }}
                />
                <Legend />
                <Area type="monotone" dataKey="users" stroke="#6366f1" fillOpacity={1} fill="url(#colorUsers)" name="Concurrent Users" />
                <Area type="monotone" dataKey="latency" stroke="#06b6d4" fillOpacity={1} fill="url(#colorLatency)" name="Latency (ms)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Threat Mitigation Analysis">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={threatData} layout="vertical" margin={{ top: 10, right: 30, left: 40, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" stroke="#475569" />
                <YAxis dataKey="name" type="category" stroke="#cbd5e1" />
                <Tooltip 
                  cursor={{fill: '#1e293b'}}
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Legend />
                <Bar dataKey="blocked" fill="#10b981" name="Threats Neutralized" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="allowed" fill="#ef4444" name="Incidents" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Status Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center gap-4">
            <div className="p-2 bg-indigo-900/30 rounded text-indigo-400"><Lock size={20} /></div>
            <div>
                <h4 className="font-semibold text-white">Zero Trust CNI</h4>
                <p className="text-xs text-slate-400">Microsegmentation Active</p>
            </div>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center gap-4">
            <div className="p-2 bg-cyan-900/30 rounded text-cyan-400"><Zap size={20} /></div>
            <div>
                <h4 className="font-semibold text-white">Disposable Pods</h4>
                <p className="text-xs text-slate-400">Chromium Containers Ready</p>
            </div>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center gap-4">
            <div className="p-2 bg-purple-900/30 rounded text-purple-400"><Shield size={20} /></div>
            <div>
                <h4 className="font-semibold text-white">Firejail Hardened</h4>
                <p className="text-xs text-slate-400">File Viewers Secured</p>
            </div>
        </div>
      </div>
    </div>
  );
};
