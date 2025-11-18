
import React, { useState, useEffect, useRef } from 'react';
import { View } from '../types';
import { Button } from './ui/Button';
import { ArrowRight, Shield, Zap, Layers, Github, Box, Twitter, Linkedin, Mail, ExternalLink, Chrome, Play, CheckCircle2, Globe, Lock, Server, Terminal } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (view: View) => void;
}

const ScrollReveal: React.FC<{children: React.ReactNode, className?: string, delay?: number}> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 font-sans overflow-x-hidden relative">
      
      {/* STUNNING ANIMATED BACKGROUND START */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Grid Pattern with Radial Mask - creates depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Moving Gradient Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
          <div className="absolute top-[40%] right-[40%] w-[600px] h-[600px] bg-violet-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        </div>

        {/* Noise Texture Overlay for cinematic feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      {/* STUNNING ANIMATED BACKGROUND END */}

      {/* Top Announcement Bar */}
      <div className="relative z-50 bg-gradient-to-r from-indigo-950/80 via-slate-900 to-indigo-950/80 border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-center text-[11px] md:text-xs font-medium tracking-wide text-slate-300">
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
            </span>
            <span className="text-indigo-200">New:</span> Chrome extension is to be out soon
            <Chrome size={12} className="ml-1 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Floating Navbar */}
      <nav className={`fixed top-9 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-indigo-900/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(View.LANDING)}>
             <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 border border-indigo-400/20">
               <Shield className="text-white" size={18} />
             </div>
             <span className="font-bold text-xl tracking-tight text-white">KubeBrowse</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Security', 'Enterprise', 'Docs'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/browsersec/KubeBrowse" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <button 
              onClick={() => onNavigate(View.DASHBOARD)}
              className="bg-white text-black hover:bg-slate-200 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]">
            <span className="px-1.5 py-0.5 rounded-sm bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">v1.0</span>
            <span>Kubernetes Native Browser Isolation</span>
            <ArrowRight size={12} className="text-slate-500" />
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] animate-[slideUp_0.5s_ease-out] drop-shadow-2xl">
            Browsing, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-white">Securely Isolated.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-[slideUp_0.7s_ease-out]">
            Protect your infrastructure with ephemeral browsing containers. 
            Zero trust architecture that destroys threats before they reach your endpoint.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-[slideUp_0.9s_ease-out]">
            <button 
              onClick={() => onNavigate(View.DASHBOARD)}
              className="h-12 px-8 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-medium shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] transition-all flex items-center gap-2 transform hover:-translate-y-1"
            >
              <Play size={16} fill="currentColor" /> Start Live Demo
            </button>
            <button 
              onClick={() => window.open('https://github.com/browsersec/KubeBrowse', '_blank')}
              className="h-12 px-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium backdrop-blur-sm transition-all flex items-center gap-2 hover:border-white/20"
            >
              <Github size={18} /> Star on GitHub
            </button>
          </div>

          {/* 3D Dashboard Visualization (The "Bolna" Tilted Interface) */}
          <div className="relative max-w-5xl mx-auto perspective-[2000px] group">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-purple-500/20 blur-[80px] -z-10 opacity-60 rounded-[40px]"></div>
            
            <div className="relative bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform rotate-x-[15deg] scale-95 group-hover:rotate-x-0 group-hover:scale-100 transition-all duration-1000 ease-out origin-top ring-1 ring-white/5">
              {/* Fake Browser Header */}
              <div className="h-10 bg-[#151515] border-b border-white/5 flex items-center px-4 gap-4">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                 </div>
                 <div className="flex-1 flex justify-center">
                    <div className="h-6 w-64 bg-[#222] rounded-md flex items-center justify-center text-[10px] text-slate-500 font-mono border border-white/5">
                       <Lock size={8} className="mr-1" /> kubebrowse-secure-session
                    </div>
                 </div>
              </div>
              
              {/* Interface Mockup Content */}
              <div className="aspect-[16/9] bg-slate-900/50 p-6 relative overflow-hidden">
                 <div className="grid grid-cols-12 gap-6 h-full">
                    {/* Sidebar Mock */}
                    <div className="col-span-2 h-full bg-white/5 rounded-lg border border-white/5 p-4 space-y-3">
                       <div className="h-8 w-full bg-indigo-500/20 rounded mb-6"></div>
                       {[1,2,3,4].map(i => <div key={i} className="h-4 w-3/4 bg-white/5 rounded"></div>)}
                    </div>
                    {/* Main Area Mock */}
                    <div className="col-span-10 h-full flex flex-col gap-6">
                       <div className="h-32 w-full bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-white/5 p-6 flex items-center justify-between">
                          <div>
                             <div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
                             <div className="h-8 w-64 bg-white/20 rounded"></div>
                          </div>
                          <div className="h-12 w-12 bg-indigo-500/20 rounded-full"></div>
                       </div>
                       <div className="flex-1 grid grid-cols-3 gap-6">
                          {[1,2,3].map(i => (
                             <div key={i} className="bg-[#111] rounded-lg border border-white/5 p-4">
                                <div className="h-8 w-8 bg-white/5 rounded-full mb-4"></div>
                                <div className="h-4 w-24 bg-white/10 rounded mb-2"></div>
                                <div className="h-2 w-full bg-white/5 rounded"></div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 {/* Floating Overlay Elements */}
                 <div className="absolute top-12 right-12 bg-black/80 backdrop-blur-md border border-green-500/30 p-4 rounded-xl shadow-2xl transform translate-y-4 animate-float-slow">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <Shield size={16} className="text-green-400" />
                       </div>
                       <div>
                          <div className="text-xs text-slate-400">Threat Status</div>
                          <div className="text-sm font-bold text-white">Malware Blocked</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Infinite Marquee - Tech Stack */}
      <section className="py-10 border-y border-white/5 bg-black/20 overflow-hidden relative z-10">
         <ScrollReveal className="max-w-7xl mx-auto px-6 mb-6 text-center">
            <span className="text-sm text-slate-500 font-medium tracking-widest">POWERED BY INDUSTRY STANDARD INFRASTRUCTURE</span>
         </ScrollReveal>
         <div className="flex w-full overflow-hidden mask-linear-fade">
            <div className="flex gap-16 animate-scroll whitespace-nowrap min-w-full items-center justify-center">
               {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                     {['Kubernetes', 'Docker', 'Golang', 'React', 'Redis', 'PostgreSQL', 'Prometheus', 'Firejail', 'Cilium', 'MinIO'].map((tech) => (
                        <span key={tech} className="text-xl font-semibold text-slate-600 flex items-center gap-2 hover:text-slate-400 transition-colors cursor-default">
                           <div className="w-2 h-2 bg-slate-800 rounded-full"></div> {tech}
                        </span>
                     ))}
                  </React.Fragment>
               ))}
            </div>
         </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything you need to <br/>browse securely.</h2>
             <p className="text-slate-400 text-lg">Production-ready features designed for security teams and enterprise infrastructure.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[300px]">
             
             {/* Feature 1: Zero Trust (Large) */}
             <ScrollReveal delay={0} className="md:col-span-6 lg:col-span-7 bg-[#0F0F0F]/80 backdrop-blur-sm rounded-3xl border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-b from-indigo-500/10 to-transparent rounded-full blur-[80px]"></div>
                <div className="relative z-10 h-full flex flex-col">
                   <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/10">
                      <Shield size={24} />
                   </div>
                   <h3 className="text-2xl font-bold mb-2">Zero Trust Architecture</h3>
                   <p className="text-slate-400 mb-8">Every session is instantiated in a fresh, disposable pod. No persistent data, no cookies, no local execution.</p>
                   
                   <div className="mt-auto bg-[#151515] rounded-lg border border-white/5 p-4 font-mono text-xs text-slate-400 flex flex-col gap-2 shadow-inner">
                      <div className="flex justify-between"><span className="text-purple-400">NetworkPolicy</span> <span>Active</span></div>
                      <div className="flex justify-between"><span className="text-blue-400">PodSecurity</span> <span>Restricted</span></div>
                      <div className="flex justify-between"><span className="text-green-400">Microsegmentation</span> <span>Enforced</span></div>
                   </div>
                </div>
             </ScrollReveal>

             {/* Feature 2: Performance (Tall) */}
             <ScrollReveal delay={100} className="md:col-span-6 lg:col-span-5 bg-[#0F0F0F]/80 backdrop-blur-sm rounded-3xl border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
                <div className="h-full flex flex-col">
                   <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/10">
                      <Zap size={24} />
                   </div>
                   <h3 className="text-2xl font-bold mb-2">&lt;300ms Latency</h3>
                   <p className="text-slate-400 mb-8">Optimized Guacamole protocol over WebSocket for native-feeling performance.</p>
                   
                   <div className="mt-auto relative h-32 flex items-end justify-between gap-2 px-4">
                      {[40, 70, 50, 90, 60, 80].map((h, i) => (
                         <div key={i} className="w-full bg-purple-500/20 rounded-t-md transition-all duration-500 group-hover:bg-purple-500/40 hover:scale-y-110 origin-bottom" style={{height: `${h}%`}}></div>
                      ))}
                   </div>
                </div>
             </ScrollReveal>

             {/* Feature 3: File Scanning */}
             <ScrollReveal delay={200} className="md:col-span-6 lg:col-span-4 bg-[#0F0F0F]/80 backdrop-blur-sm rounded-3xl border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-6 border border-green-500/10">
                   <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Safe File Viewer</h3>
                <p className="text-slate-400 text-sm">PDFs and images are rendered in sandboxed containers, stripping malicious scripts.</p>
             </ScrollReveal>

             {/* Feature 4: Open Source */}
             <ScrollReveal delay={300} className="md:col-span-6 lg:col-span-4 bg-[#0F0F0F]/80 backdrop-blur-sm rounded-3xl border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white mb-6 border border-white/10">
                   <Github size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Open Source</h3>
                <p className="text-slate-400 text-sm">Audit the code, deploy on your own cluster. MIT Licensed for maximum flexibility.</p>
             </ScrollReveal>

             {/* Feature 5: Global */}
             <ScrollReveal delay={400} className="md:col-span-12 lg:col-span-4 bg-gradient-to-br from-indigo-900/20 to-[#0F0F0F] rounded-3xl border border-white/5 p-8 flex flex-col justify-center items-center text-center group hover:border-indigo-500/30 transition-colors">
                <Globe size={48} className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
                <h3 className="text-xl font-bold text-white">Deploy Anywhere</h3>
                <p className="text-slate-400 text-sm mt-2">AWS, GKE, Azure, or Bare Metal.</p>
             </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-24 px-6 bg-[#080808] border-y border-white/5 relative z-10">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <ScrollReveal className="flex-1 space-y-8">
               <h2 className="text-4xl font-bold leading-tight">Simple Configuration. <br/><span className="text-indigo-400">Native Kubernetes YAML.</span></h2>
               <p className="text-slate-400 text-lg">Deploy KubeBrowse to your cluster in minutes using standard manifest files. No complex operators required.</p>
               
               <div className="space-y-4">
                  {[
                     { title: 'Standard Deployment', desc: 'Uses standard Deployment and Service resources.' },
                     { title: 'Configurable Resources', desc: 'Define CPU/RAM limits for browser pods.' },
                     { title: 'Network Policies', desc: 'Pre-configured Calico policies for isolation.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mt-1">
                           <CheckCircle2 size={14} />
                        </div>
                        <div>
                           <h4 className="font-semibold text-white">{item.title}</h4>
                           <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="flex-1 w-full">
               <div className="bg-[#111] rounded-xl border border-white/10 p-4 shadow-2xl font-mono text-xs md:text-sm overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                  <div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
                     <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                     <span className="ml-auto text-slate-600">deployment.yaml</span>
                  </div>
                  <div className="space-y-1 text-slate-300">
                     <div className="flex"><span className="text-purple-400 w-8">1</span> <span className="text-indigo-400">apiVersion:</span> apps/v1</div>
                     <div className="flex"><span className="text-purple-400 w-8">2</span> <span className="text-indigo-400">kind:</span> Deployment</div>
                     <div className="flex"><span className="text-purple-400 w-8">3</span> <span className="text-indigo-400">metadata:</span></div>
                     <div className="flex"><span className="text-purple-400 w-8">4</span> &nbsp;&nbsp;<span className="text-blue-400">name:</span> kubebrowse-core</div>
                     <div className="flex"><span className="text-purple-400 w-8">5</span> <span className="text-indigo-400">spec:</span></div>
                     <div className="flex"><span className="text-purple-400 w-8">6</span> &nbsp;&nbsp;<span className="text-blue-400">replicas:</span> 3</div>
                     <div className="flex"><span className="text-purple-400 w-8">7</span> &nbsp;&nbsp;<span className="text-indigo-400">template:</span></div>
                     <div className="flex"><span className="text-purple-400 w-8">8</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-indigo-400">spec:</span></div>
                     <div className="flex"><span className="text-purple-400 w-8">9</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-indigo-400">containers:</span></div>
                     <div className="flex"><span className="text-purple-400 w-8">10</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-blue-400">name:</span> browser-engine</div>
                     <div className="flex"><span className="text-purple-400 w-8">11</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">image:</span> browsersec/engine:latest</div>
                     <div className="flex"><span className="text-purple-400 w-8">12</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">securityContext:</span></div>
                     <div className="flex"><span className="text-purple-400 w-8">13</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">privileged:</span> false</div>
                  </div>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-6 bg-black border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <ScrollReveal className="max-w-sm">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center border border-indigo-500/20">
                     <Shield className="text-white" size={16} />
                  </div>
                  <span className="font-bold text-xl text-white">KubeBrowse</span>
               </div>
               <p className="text-slate-500 mb-8">
                  Pioneering the future of secure remote browsing. Built for the modern cloud-native stack.
               </p>
               <div className="flex gap-4">
                  {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                     <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all border border-white/5 hover:border-white/20">
                        <Icon size={18} />
                     </a>
                  ))}
               </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="grid grid-cols-2 md:grid-cols-3 gap-16">
               <div>
                  <h4 className="text-white font-semibold mb-6">Product</h4>
                  <ul className="space-y-4 text-sm text-slate-500">
                     <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
                     <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
                     <li><a href="#" className="hover:text-indigo-400 transition-colors">Roadmap</a></li>
                     <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-white font-semibold mb-6">Resources</h4>
                  <ul className="space-y-4 text-sm text-slate-500">
                     <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
                     <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
                     <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
                     <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
                  </ul>
               </div>
            </ScrollReveal>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
             <div>© 2025 BrowserSec. All rights reserved.</div>
             <div className="flex gap-8">
                <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
