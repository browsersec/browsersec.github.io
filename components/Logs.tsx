import React from 'react';
import { Card } from './ui/Card';
import { AlertOctagon, CheckCircle, Shield } from 'lucide-react';

const logs = [
  { id: 1, time: '10:42:15', source: '192.168.1.105', event: 'Phishing Attempt Blocked', detail: 'Suspicious domain detected via heuristics', severity: 'high' },
  { id: 2, time: '10:41:03', source: '192.168.1.112', event: 'File Upload Scanned', detail: 'report_q4.pdf - Clean', severity: 'low' },
  { id: 3, time: '10:39:55', source: '192.168.1.098', event: 'Browser Session Started', detail: 'Pod k8s-brow-x92 created', severity: 'info' },
  { id: 4, time: '10:35:21', source: 'External', event: 'Port Scan Detected', detail: 'Blocked by Network Policy', severity: 'medium' },
  { id: 5, time: '10:30:12', source: '192.168.1.105', event: 'Malware Download Prevented', detail: 'Signature match: Trojan.Win32.Generic', severity: 'critical' },
];

export const Logs: React.FC = () => {
  return (
    <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Security Audit Logs</h2>
        <button className="text-sm text-indigo-400 hover:text-indigo-300">Export CSV</button>
      </div>

      <Card className="overflow-hidden p-0">
        <table className="w-full text-left text-sm text-slate-400">
          <thead className="bg-slate-800/50 text-slate-200 uppercase font-medium text-xs">
            <tr>
              <th className="px-6 py-4">Timestamp</th>
              <th className="px-6 py-4">Severity</th>
              <th className="px-6 py-4">Event</th>
              <th className="px-6 py-4">Source</th>
              <th className="px-6 py-4">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-mono">{log.time}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    log.severity === 'critical' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                    log.severity === 'high' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                    log.severity === 'medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                    log.severity === 'low' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    'bg-slate-700/30 text-slate-400 border border-slate-700'
                  }`}>
                    {log.severity === 'critical' || log.severity === 'high' ? <AlertOctagon size={12} /> :
                     log.severity === 'low' ? <CheckCircle size={12} /> : <Shield size={12} />}
                    {log.severity.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-200 font-medium">{log.event}</td>
                <td className="px-6 py-4 font-mono text-xs">{log.source}</td>
                <td className="px-6 py-4">{log.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
