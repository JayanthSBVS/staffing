"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = ["Requirement", "AI Screening", "Validation", "Delivery"];

export default function Process() {
  return (
    <section className="py-28 px-6 lg:px-20 bg-[#0B0B0B] border-t border-white/5">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto text-center">

        <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-16">
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div key={i} variants={fadeInUp} whileHover={{ y: -8 }}
              className="bg-[#111] p-6 rounded-xl border border-white/10 hover:border-[#0F766E] transition">
              {step}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}