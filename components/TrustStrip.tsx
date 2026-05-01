"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type CounterProps = {
  value: number;
  suffix?: string;
};

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100
  });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest).toLocaleString()}${suffix}`;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const metrics = [
  { value: 1500, suffix: "+", label: "Clients Served" },
  { value: 25000, suffix: "+", label: "Placements Completed" },
  { value: 92, suffix: "%", label: "Interview Success Rate" },
  { value: 7, suffix: " days", label: "Average Hiring Time" }
];

export default function TrustStrip() {
  return (
    <section className="py-32 px-6 lg:px-24 bg-[#0E0E0E] border-t border-white/5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto"
      >
        {/* HEADER */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight">
            Trusted by High-Performance Teams
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Proven hiring outcomes across enterprise and fast-scaling companies.
          </p>
        </motion.div>

        {/* METRICS GRID */}
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 60px rgba(0,0,0,0.4)"
              }}
              className="bg-[#111] p-6 rounded-xl border border-white/10 text-center transition"
            >
              <div className="text-4xl font-bold text-white">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-3 text-gray-400 text-sm">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* LOGO STRIP */}
        <motion.div variants={fadeInUp} className="mt-20 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
            Industries we support
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {["Fintech", "SaaS", "Retail", "AI", "Cloud", "Cybersecurity"].map(
              (item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 rounded-lg border border-white/10 bg-[#111] text-gray-400 hover:text-white transition"
                >
                  {item}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}