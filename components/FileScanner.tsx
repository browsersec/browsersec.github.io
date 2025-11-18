import React, { useState, useCallback } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { FileUp, FileCheck, ShieldAlert, Search, FileText, Image, Film, Loader2 } from 'lucide-react';

interface ScannedFile {
  name: string;
  size: string;
  status: 'clean' | 'infected' | 'scanning';
  threatType?: string;
  timestamp: string;
}

export const FileScanner: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<ScannedFile[]>([]);

  const simulateScan = (fileName: string, fileSize: string) => {
    const newFile: ScannedFile = {
      name: fileName,
      size: fileSize,
      status: 'scanning',
      timestamp: new Date().toLocaleTimeString()
    };

    setFiles(prev => [newFile, ...prev]);

    // Simulate scan delay (127ms mentioned in PDF, but we make it visible)
    setTimeout(() => {
      setFiles(prev => prev.map(f => {
        if (f.name === fileName) {
          const isMalicious = Math.random() > 0.7; // 30% chance of mock malware
          return {
            ...f,
            status: isMalicious ? 'infected' : 'clean',
            threatType: isMalicious ? 'Polymorphic Trojan.Win32' : undefined
          };
        }
        return f;
      }));
    }, 1500);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    droppedFiles.forEach(file => {
      simulateScan(file.name, (file.size / 1024).toFixed(1) + ' KB');
    });
  }, []);

  return (
    <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Safe File Viewer</h2>
          <p className="text-slate-400 text-sm mt-1">
            Files are processed in LXDE-based Debian containers with ClamAV/VirusTotal integration.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Zone */}
        <div className="lg:col-span-2">
          <div 
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
              isDragging 
                ? 'border-indigo-500 bg-indigo-500/10' 
                : 'border-slate-700 bg-slate-900/30 hover:border-slate-600'
            }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileUp size={40} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Drag & Drop files here</h3>
            <p className="text-slate-400 mb-6">
              or click to browse from your computer
            </p>
            <div className="flex justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><FileText size={14} /> PDF</span>
              <span className="flex items-center gap-1"><Image size={14} /> JPEG</span>
              <span className="flex items-center gap-1"><Film size={14} /> MP4</span>
              <span>+34 formats supported</span>
            </div>
            {/* Hidden input for click to upload would go here */}
            <Button className="mt-6" variant="secondary" onClick={() => simulateScan(`document_${Math.floor(Math.random()*100)}.pdf`, '2.4 MB')}>
              Select Files (Simulate)
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Detection Rate</h4>
              <p className="text-2xl font-bold text-white">92%</p>
              <p className="text-xs text-emerald-400 mt-1">Polymorphic Malware</p>
            </Card>
             <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Scan Overhead</h4>
              <p className="text-2xl font-bold text-white">127ms</p>
              <p className="text-xs text-emerald-400 mt-1">Per file average</p>
            </Card>
             <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Supported Formats</h4>
              <p className="text-2xl font-bold text-white">37</p>
              <p className="text-xs text-emerald-400 mt-1">Firejail Hardened</p>
            </Card>
          </div>
        </div>

        {/* Scan History */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[600px]">
          <div className="p-4 border-b border-slate-800 bg-slate-900/50">
            <h3 className="font-semibold text-white">Recent Scans</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {files.length === 0 && (
              <div className="text-center text-slate-500 py-10 text-sm">
                No files scanned yet.
              </div>
            )}
            {files.map((file, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <div className={`p-2 rounded-lg ${
                  file.status === 'scanning' ? 'bg-indigo-500/10 text-indigo-400' : 
                  file.status === 'clean' ? 'bg-emerald-500/10 text-emerald-400' : 
                  'bg-rose-500/10 text-rose-400'
                }`}>
                  {file.status === 'scanning' ? <Loader2 size={18} className="animate-spin" /> :
                   file.status === 'clean' ? <FileCheck size={18} /> : 
                   <ShieldAlert size={18} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-200 truncate">{file.name}</p>
                  <p className="text-xs text-slate-500">{file.size} • {file.timestamp}</p>
                </div>
                <div className="text-right">
                  {file.status === 'infected' && (
                    <span className="inline-block px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[10px] rounded font-bold uppercase tracking-wide">
                      Blocked
                    </span>
                  )}
                  {file.status === 'clean' && (
                    <span className="inline-block px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] rounded font-bold uppercase tracking-wide">
                      Clean
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
