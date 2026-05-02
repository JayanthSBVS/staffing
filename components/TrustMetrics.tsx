"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function TrustMetrics() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#030303] flex justify-center px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row items-center gap-16 text-center md:text-left">
        <p className="text-xs uppercase tracking-widest text-gray-600 font-medium">Powering infrastructure at</p>
        <div className="flex gap-12 opacity-40 grayscale">
           <span className="text-xl font-bold tracking-tighter">Acme Corp</span>
           <span className="text-xl font-bold tracking-tighter">GlobalTech</span>
           <span className="text-xl font-bold tracking-tighter">Nexus</span>
        </div>
      </motion.div>
    </section>
  );
}