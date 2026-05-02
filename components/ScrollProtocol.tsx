"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerGroup } from "@/lib/animations";

const phases = [
  { num: "01", title: "System Calibration", desc: "Ingestion of core role requirements, technical stacks, and organizational culture parameters." },
  { num: "02", title: "Algorithmic Sourcing", desc: "Scanning internal networks and market vectors to identify top-percentile matches instantly." },
  { num: "03", title: "Human Validation", desc: "Rigorous technical and behavioral screening by domain experts. Zero false positives." },
  { num: "04", title: "Deployment Integration", desc: "Final candidate onboarding, offer negotiation, and post-placement retention tracking." }
];

export default function ScrollProtocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Drives the vertical progression line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="section-y px-6 lg:px-24 bg-[#030303] border-t border-white/5 relative">
      <motion.div variants={staggerGroup} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-5xl mx-auto">
        
        <motion.div variants={fadeInUp} className="mb-32 text-center">
          <h2>Execution Protocol.</h2>
          <p className="mt-6 text-xl mx-auto">A deterministic pipeline designed to eliminate variance.</p>
        </motion.div>

        <div className="relative pb-10">
          {/* Static Background Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />
          
          {/* Scroll-Driven Active Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-blue-500 md:-translate-x-1/2 shadow-[0_0_20px_#3B82F6] z-0" 
          />
          
          {phases.map((phase, i) => (
            <div key={i} className={`relative flex items-start mb-24 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col md:items-center`}>
              
              {/* Timeline Node intersecting the line */}
              <div className="absolute left-0 md:left-1/2 w-14 h-14 -translate-x-0 md:-translate-x-1/2 bg-[#030303] border-2 border-white/10 rounded-full flex items-center justify-center z-10 transition-colors duration-500 hover:border-blue-500 shadow-2xl">
                <span className="text-xs font-mono text-white">{phase.num}</span>
              </div>
              
              {/* Content Block */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="ml-20 md:ml-0 md:w-1/2 md:px-16 w-full"
              >
                <div className="system-card p-10 group hover:border-blue-500/30">
                  <div className="text-blue-400 text-xs font-mono mb-4 tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Phase {phase.num}</div>
                  <h3 className="mb-4 group-hover:text-blue-400 transition-colors">{phase.title}</h3>
                  <p>{phase.desc}</p>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}