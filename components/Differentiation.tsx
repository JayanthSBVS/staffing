"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Differentiation() {
  return (
    <section className="bg-[#0E0E0E] border-t border-white/5 py-24 px-6 lg:px-20 text-center">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">
          Why Choose Us
        </h2>

        <p className="text-gray-400 leading-relaxed">
          We combine AI precision with human expertise to deliver pre-vetted
          candidates faster than traditional hiring methods. Reduce hiring time,
          improve quality, and scale confidently.
        </p>
      </motion.div>
    </section>
  );
}