"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  buttonHover,
  fadeInUp,
  scaleOnHover,
  staggerContainer
} from "@/lib/animations";

const commitments = [
  "Role calibration within 24 hours",
  "First vetted shortlist within 7 days",
  "Weekly pipeline intelligence for leadership"
];

export default function CTA() {
  return (
    <motion.section
      id="consultation"
      className="section-shell bg-[#0E0E0E]"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        variants={{ ...fadeInUp, ...scaleOnHover }}
        whileHover="hover"
        className="premium-panel relative mx-auto max-w-7xl overflow-hidden"
      >
        <div className="pointer-events-none absolute -right-28 top-8 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full border border-white/5" />

        <motion.div
          variants={staggerContainer}
          className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14"
        >
          <div>
            <div className="mb-5 h-1 w-12 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Hiring starts here
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Start Hiring Smarter Today
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Bring us your hardest open roles. We will turn them into a
              calibrated hiring plan, a validated talent market, and a shortlist
              your interview panel can trust.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="mailto:hello@zyratalent.com?subject=Book%20a%20Staffing%20Consultation"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="premium-button-primary"
              >
                Book a Consultation
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#case-studies"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="premium-button-secondary"
              >
                Review Outcomes
              </motion.a>
            </div>
          </div>

          <div className="self-center rounded-xl border border-white/10 bg-page/80 p-6 shadow-[0_18px_58px_rgba(0,0,0,0.32)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Consultation includes
            </p>
            <div className="mt-6 space-y-5">
              {commitments.map((commitment) => (
                <div key={commitment} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-base font-medium text-white">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
