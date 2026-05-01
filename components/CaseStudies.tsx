"use client";

import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <section className="py-28 px-6 lg:px-20 bg-[#0E0E0E] border-t border-white/5 text-center">
      <h2 className="text-4xl font-bold mb-16">Results That Matter</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-[#111] p-6 rounded-xl border border-white/10 hover:shadow-2xl transition">
          Reduced hiring time by 60%
        </div>
        <div className="bg-[#111] p-6 rounded-xl border border-white/10 hover:shadow-2xl transition">
          200+ engineers placed in 90 days
        </div>
      </div>
    </section>
  );
}