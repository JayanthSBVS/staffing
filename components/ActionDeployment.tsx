"use client";
import { motion } from "framer-motion";

export default function ActionDeployment() {
  return (
    <section className="py-40 px-6 relative overflow-hidden flex justify-center border-t border-white/5">
      <div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}
        className="relative z-10 w-full max-w-6xl system-card p-16 md:p-32 text-center border-blue-500/20"
      >
        <h2 className="mb-8">Initialize Your Build.</h2>
        <p className="mb-12 max-w-2xl mx-auto text-xl">Stop relying on outbound spam. Access a pre-validated network of elite talent ready for deployment.</p>
        <button className="btn-primary text-lg px-12 py-6">Deploy Infrastructure</button>
      </motion.div>
    </section>
  );
}