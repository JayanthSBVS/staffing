"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";

const services = [
  "Permanent Hiring",
  "Contract Staffing",
  "RPO",
  "Executive Search",
  "Talent Intelligence",
  "HR Outsourcing",
];

export default function Services() {
  return (
    <section className="section bg-[#0E0E0E] border-t border-white/5">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2 variants={fadeInUp}>
          Premium Hiring Solutions
        </motion.h2>

        <motion.p variants={fadeInUp} className="mt-4 mb-16 max-w-xl mx-auto">
          Built for speed, precision, and enterprise-grade hiring.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="card text-left"
            >
              <h3 className="text-lg font-semibold text-white">
                {s}
              </h3>
              <p className="mt-2 text-sm">
                High-quality talent sourcing with consistent outcomes.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}