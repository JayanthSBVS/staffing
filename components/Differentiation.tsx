"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CheckCircle2, Clock3, ShieldCheck, X } from "lucide-react";
import {
  cardHover,
  sectionReveal,
  staggerContainer,
  staggerItem
} from "@/components/motion-presets";

const advantages = [
  {
    icon: BrainCircuit,
    title: "AI plus human judgment",
    traditional: "Keyword matching and recruiter memory drive most outreach.",
    zyra:
      "AI ranks skill evidence, then senior recruiters validate role fit, motivation, and delivery maturity."
  },
  {
    icon: Clock3,
    title: "Shortlists in 7 days",
    traditional:
      "Hiring teams wait weeks before seeing candidates who match the actual mandate.",
    zyra:
      "Calibrated search begins within 24 hours and produces interview-ready profiles within a week."
  },
  {
    icon: ShieldCheck,
    title: "Pre-vetted candidates",
    traditional:
      "Profiles arrive with thin notes, unclear compensation fit, and hidden notice-period risk.",
    zyra:
      "Every candidate includes fit rationale, salary alignment, notice period, risk flags, and interview readiness."
  }
];

export default function Differentiation() {
  return (
    <motion.section
      className="section-shell"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={staggerItem} className="max-w-3xl">
          <div className="mb-5 h-1 w-12 bg-accent" />
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Differentiation
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built for hiring decisions that need speed and certainty.
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="mt-14 space-y-5">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <motion.article
                key={advantage.title}
                variants={staggerItem}
                whileHover={cardHover}
                className="premium-card p-5 sm:p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[0.45fr_1fr]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-page">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Capability
                      </p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                        {advantage.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-page/70 p-5 shadow-[0_16px_42px_rgba(0,0,0,0.2)]">
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        <X className="h-4 w-4 text-zinc-600" />
                        Traditional staffing
                      </div>
                      <p className="mt-4 text-sm leading-6 text-zinc-500">
                        {advantage.traditional}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-accent/60 bg-surface-2 p-5 shadow-[0_18px_52px_rgba(0,0,0,0.28)]">
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        Zyra Talent model
                      </div>
                      <p className="mt-4 text-sm leading-6 text-zinc-300">
                        {advantage.zyra}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
