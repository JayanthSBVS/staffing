"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Global animation primitive (Premium, physics-based feel)
const premiumEasing = [0.22, 1, 0.36, 1];

export default function Hero() {
  const [activeNode, setActiveNode] = useState<"input" | "core" | "output" | null>(null);
  
  // Stagger configurations
  const textStagger = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center px-6 lg:px-24 overflow-hidden bg-[#0A0A0A]">
      
      {/* 
        ENVIRONMENTAL DEPTH:
        Subtle spatial noise and deep volumetric glow to create material reality, not flat space. 
      */}
      <div className="absolute top-[-10%] left-[50%] w-[900px] h-[900px] -translate-x-1/2 bg-[#0F766E]/5 blur-[140px] pointer-events-none rounded-full" />
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-screen"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full pt-20 lg:pt-0">
        
        {/* =========================================
            LEFT COLUMN: Intent & Information
        ============================================= */}
        <motion.div 
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col relative z-20"
        >
          {/* Status Indicator */}
          <motion.div variants={textStagger} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-md mb-8 w-fit">
             <div className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F766E] opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0F766E]"></span>
             </div>
             <span className="text-[11px] font-medium text-[#A1A1AA] uppercase tracking-widest">System Operational</span>
          </motion.div>
          
          {/* Typographic Core */}
          <motion.h1 variants={textStagger} className="text-5xl lg:text-[5.5rem] font-medium tracking-tighter text-[#EDEDED] leading-[1.05] mb-6">
            Hiring Pipeline, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#EDEDED] to-[#EDEDED]/30">
              Architected.
            </span>
          </motion.h1>
          
          <motion.p variants={textStagger} className="max-w-[500px] text-lg text-[#888888] font-light leading-relaxed mb-10">
            Bypass traditional recruitment variance. Deploy a deterministic, AI-driven infrastructure delivering verified engineering matches.
          </motion.p>
          
          {/* Action Hierarchy */}
          <motion.div variants={textStagger} className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-[#EDEDED] text-black px-8 py-4 rounded-lg font-medium tracking-tight transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:bg-white shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">
              Initialize Deployment
            </button>
            <button className="bg-white/[0.03] border border-white/10 text-white px-8 py-4 rounded-lg font-medium tracking-tight backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.08] hover:border-white/20">
              View Architecture
            </button>
          </motion.div>

          {/* Social Proof Sub-system */}
          <motion.div variants={textStagger} className="flex gap-12 border-t border-white/[0.05] pt-8">
            <div className="group cursor-default">
              <p className="text-[#EDEDED] text-2xl font-medium tracking-tight group-hover:text-white transition-colors">1.5k+</p>
              <p className="text-[10px] text-[#52525B] uppercase tracking-widest mt-1 font-mono">Active Nodes</p>
            </div>
            <div className="group cursor-default">
              <p className="text-[#EDEDED] text-2xl font-medium tracking-tight group-hover:text-white transition-colors">98.2%</p>
              <p className="text-[10px] text-[#52525B] uppercase tracking-widest mt-1 font-mono">Retention Rate</p>
            </div>
            <div className="group cursor-default">
              <p className="text-[#EDEDED] text-2xl font-medium tracking-tight group-hover:text-white transition-colors">7 Days</p>
              <p className="text-[10px] text-[#52525B] uppercase tracking-widest mt-1 font-mono">Avg. Cycle</p>
            </div>
          </motion.div>
        </motion.div>

        {/* =========================================
            RIGHT COLUMN: Spatial System Visualization
        ============================================= */}
        <div 
          className="relative h-[650px] hidden lg:block perspective-1000" 
          onMouseLeave={() => setActiveNode(null)}
        >
          {/* 
            SVG DATA FLOW (Background Layer) 
            Paints logical connections between nodes. Reactive to hover states.
          */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
            {/* Input -> Core */}
            <motion.path 
              d="M 120 120 C 120 280, 200 220, 200 320" 
              stroke="#0F766E" strokeWidth="1.5" fill="none" strokeDasharray="4 4"
              animate={{ opacity: (activeNode === 'input' || activeNode === 'core') ? 1 : 0.15 }} transition={{ duration: 0.4 }}
            />
            {/* Core -> Output */}
            <motion.path 
              d="M 200 320 C 200 420, 280 400, 280 500" 
              stroke="#0F766E" strokeWidth="1.5" fill="none" strokeDasharray="4 4"
              animate={{ opacity: (activeNode === 'core' || activeNode === 'output') ? 1 : 0.15 }} transition={{ duration: 0.4 }}
            />
          </svg>

          {/* 
            NODE 1: INGESTION (Foreground Layer) 
          */}
          <motion.div
            onMouseEnter={() => setActiveNode('input')}
            initial={{ opacity: 0, x: -40, rotateY: 5 }} 
            animate={{ opacity: 1, x: 0, rotateY: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: premiumEasing }}
            className={`absolute top-[80px] left-[0px] w-[260px] bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 z-10 cursor-crosshair transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeNode === 'input' ? 'border-[#0F766E]/50 shadow-[0_0_30px_rgba(15,118,110,0.15)] scale-[1.02]' : ''}`}
          >
            <div className="flex justify-between items-center mb-3 border-b border-white/5 pb-2">
              <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-mono">1. Data Ingestion</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
            <p className="text-[#EDEDED] text-sm font-medium mb-3 tracking-tight">Market Vector Parameters</p>
            <div className="space-y-2 opacity-50">
               <div className="w-full h-1.5 bg-white/10 rounded-full" />
               <div className="w-2/3 h-1.5 bg-white/5 rounded-full" />
            </div>
          </motion.div>

          {/* 
            NODE 2: INTELLIGENCE CORE (Focal Point - Highest Z-Index)
            The central engine. Larger, highly detailed, visually dominant. 
          */}
          <motion.div
            onMouseEnter={() => setActiveNode('core')}
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.4, ease: premiumEasing }}
            className={`absolute top-[260px] left-[60px] w-[360px] bg-[#0A0A0A] border rounded-2xl p-7 z-30 cursor-crosshair transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeNode === 'core' ? 'scale-[1.03]' : ''}`}
            style={{ 
              borderColor: activeNode === 'core' ? 'rgba(15,118,110,0.6)' : 'rgba(255,255,255,0.08)', 
              boxShadow: activeNode === 'core' ? '0 30px 80px rgba(0,0,0,0.8), 0 0 50px rgba(15,118,110,0.15)' : '0 20px 50px rgba(0,0,0,0.5)' 
            }}
          >
            {/* Core Ambient Internal Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E]/10 to-transparent pointer-events-none rounded-2xl opacity-50" />
            
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-5 relative z-10">
              <span className="text-[11px] text-[#0F766E] uppercase tracking-widest font-mono font-semibold">2. Validation Engine</span>
              <div className="flex gap-1.5">
                 <div className="w-1 h-3 bg-[#0F766E]/40 animate-pulse rounded-sm" />
                 <div className="w-1 h-3 bg-[#0F766E] shadow-[0_0_8px_#0F766E] animate-pulse rounded-sm" style={{ animationDelay: "150ms" }} />
              </div>
            </div>
            
            <div className="space-y-5 relative z-10">
              <div>
                 <div className="flex justify-between text-xs text-[#A1A1AA] mb-2 font-mono">
                    <span>Algorithmic Scan</span>
                    <span className="text-white">Active</span>
                 </div>
                 <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div animate={{ width: activeNode === 'core' ? "100%" : "40%" }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-white/30" />
                 </div>
              </div>
              <div>
                 <div className="flex justify-between text-xs text-[#A1A1AA] mb-2 font-mono">
                    <span>Precision Logic Match</span>
                    <span className="text-[#0F766E] font-medium">96.4%</span>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div animate={{ width: activeNode === 'core' ? "96%" : "60%" }} transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }} className="h-full bg-[#0F766E]" />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* 
            NODE 3: DEPLOYMENT (Foreground Layer) 
          */}
          <motion.div
            onMouseEnter={() => setActiveNode('output')}
            initial={{ opacity: 0, x: 40, rotateY: -5 }} 
            animate={{ opacity: 1, x: 0, rotateY: 0 }} 
            transition={{ duration: 1, delay: 0.6, ease: premiumEasing }}
            className={`absolute top-[480px] right-[20px] w-[260px] bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 z-10 cursor-crosshair transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeNode === 'output' ? 'border-[#0F766E]/50 shadow-[0_0_30px_rgba(15,118,110,0.15)] scale-[1.02]' : ''}`}
          >
             <div className="flex justify-between items-center mb-3 border-b border-white/5 pb-2">
                <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-mono">3. Output Vector</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
             </div>
             
             {/* Mock User/Candidate Data block */}
             <div className="flex items-center gap-4 mt-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                   <div className="w-4 h-4 border-2 border-white/20 rounded-full" />
                </div>
                <div>
                   <p className="text-[#EDEDED] text-sm font-medium tracking-tight">Verified Profile</p>
                   <p className="text-[#52525B] text-xs font-mono mt-0.5">Ready for Integration</p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}