"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  fadeInUp,
  scaleOnHover,
  staggerContainer
} from "@/lib/animations";

type CounterProps = {
  value: number;
  suffix?: string;
};

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 28,
    stiffness: 90
  });
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
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

const proofMetrics = [
  {
    value: 1500,
    suffix: "+",
    label:
      "enterprise hiring mandates delivered across SaaS, BFSI, GCC, and retail technology"
  },
  {
    value: 25000,
    suffix: "+",
    label:
      "technology professionals placed into engineering, cloud, data, and security teams"
  },
  {
    value: 92,
    suffix: "%",
    label: "shortlisted candidates accepted for first-round interviews by client panels"
  },
  {
    value: 7,
    suffix: " days",
    label: "typical time to deliver a calibrated, role-ready candidate slate"
  }
];

const logoRow = [
  "Fintech GCC",
  "B2B SaaS",
  "Retail Cloud",
  "Data Platform",
  "Cybersecurity",
  "AI Product Lab"
];

export default function TrustStrip() {
  return (
    <motion.section
      className="section-shell bg-[#0E0E0E]"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div variants={staggerContainer} className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-xl border border-white/10 bg-[#111]/55 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.26)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <motion.div variants={fadeInUp}>
            <div className="mb-5 h-1 w-12 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Proven delivery
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hiring confidence for teams where every open role affects the roadmap.
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {proofMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={{ ...fadeInUp, ...scaleOnHover }}
                whileHover="hover"
                className="premium-card"
              >
                <div className="text-4xl font-bold tracking-tight text-white">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={fadeInUp} className="mt-12">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
            Hiring environments we support every quarter
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {logoRow.map((logo) => (
              <motion.div
                key={logo}
                variants={{ ...fadeInUp, ...scaleOnHover }}
                whileHover="hover"
                className="flex h-16 transform-gpu items-center justify-center rounded-xl border border-white/10 bg-[#111] px-5 text-center text-base font-semibold text-zinc-400 shadow-[0_14px_42px_rgba(0,0,0,0.22)] transition-all duration-300 hover:text-white"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
