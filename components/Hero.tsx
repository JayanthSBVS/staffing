"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#0B0B0B]" />

      {/* LIGHT SYSTEM */}
      <div className="absolute top-[-200px] left-1/2 w-[900px] h-[900px] -translate-x-1/2 bg-[#0F766E]/20 blur-[180px] opacity-60" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-[48px] lg:text-[64px] leading-[1.05] font-semibold tracking-tight">
            Hiring, <span className="text-white/50">Reimagined</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-md">
            Replace slow, manual hiring with an AI-driven system that delivers
            qualified candidates in days—not months.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Book Consultation</button>
          </div>

          <div className="mt-14 flex gap-10 text-sm text-gray-400">
            <div>
              <p className="text-white text-xl font-semibold">1500+</p>
              Clients
            </div>
            <div>
              <p className="text-white text-xl font-semibold">25K+</p>
              Hires
            </div>
            <div>
              <p className="text-white text-xl font-semibold">7 Days</p>
              Avg Hiring
            </div>
          </div>
        </div>

        {/* RIGHT — TRUE PREMIUM VISUAL */}
        <div className="relative h-[520px] hidden lg:block">

          {/* MAIN CARD (FOCUS) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute left-1/2 top-1/2 w-[320px] h-[200px] -translate-x-1/2 -translate-y-1/2 card z-20"
          >
            <p className="text-xs text-gray-400">AI Decision Engine</p>
            <div className="mt-4 h-2 bg-white/10 rounded-full">
              <div className="h-full w-[75%] bg-[#0F766E] rounded-full" />
            </div>
            <p className="mt-4 text-sm text-white">Candidate Match Score</p>
          </motion.div>

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-0 top-10 w-[240px] h-[150px] card opacity-90"
          >
            <p className="text-xs text-gray-400">Input</p>
            <p className="mt-2 text-white text-sm">Role Requirements</p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute right-0 bottom-10 w-[240px] h-[150px] card opacity-90"
          >
            <p className="text-xs text-gray-400">Output</p>
            <p className="mt-2 text-white text-sm">Qualified Candidates</p>
          </motion.div>

          {/* CONNECTOR LINES */}
          <div className="absolute left-1/2 top-[120px] w-[1px] h-[120px] bg-white/10 -translate-x-1/2" />
          <div className="absolute left-[120px] top-[160px] w-[80px] h-[1px] bg-white/10" />
          <div className="absolute right-[120px] bottom-[160px] w-[80px] h-[1px] bg-white/10" />
        </div>
      </div>
    </section>
  );
}