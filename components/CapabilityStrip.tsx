"use client";

import { motion } from "framer-motion";

const items = [
  "AI Screening Engine",
  "Pre-Validated Talent Pools",
  "7-Day Hiring Cycles",
  "Enterprise Scale Delivery",
];

export default function CapabilityStrip() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-[#0B0B0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">

        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-[#111] border border-white/10 rounded-xl p-6 text-center hover:border-[#0F766E] transition"
          >
            <p className="text-sm text-gray-400">Capability</p>
            <h3 className="mt-2 font-semibold text-white">{item}</h3>
          </motion.div>
        ))}

      </div>
    </section>
  );
}