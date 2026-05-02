"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerGroup } from "@/lib/animations";

export default function SocialProof() {
  return (
    <section className="section-y px-6 lg:px-24 bg-[#030303] border-t border-white/5">
      <motion.div variants={staggerGroup} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-5xl mx-auto text-center">
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="inline-flex flex-row -space-x-4 mb-10">
            {[1,2,3].map(i => <div key={i} className="w-16 h-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-md" />)}
          </div>
          <h2 className="text-3xl md:text-5xl leading-[1.2] mb-10 max-w-4xl mx-auto">"They rebuilt our engineering pipeline in 14 days. The variance in quality dropped to absolute zero."</h2>
          <p className="text-xs uppercase tracking-widest font-mono text-gray-500">VP Engineering, Tier 1 SaaS</p>
        </motion.div>
      </motion.div>
    </section>
  );
}