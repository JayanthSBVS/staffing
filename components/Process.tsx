"use client";

import { motion } from "framer-motion";
import { ClipboardList, Cpu, Send, UserCheck } from "lucide-react";
import {
  fadeInUp,
  scaleOnHover,
  staggerContainer,
} from "@/lib/animations";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Analysis",
    description:
      "We convert the hiring ask into a role scorecard covering technical depth, domain context, compensation, notice period, and interview bar."
  },
  {
    icon: Cpu,
    title: "AI Screening",
    description:
      "Our sourcing engine ranks candidates by skill adjacency, project evidence, seniority signal, availability, and location fit."
  },
  {
    icon: UserCheck,
    title: "Expert Validation",
    description:
      "Senior recruiters validate motivation, communication, delivery history, salary alignment, and readiness for your interview panel."
  },
  {
    icon: Send,
    title: "Candidate Delivery",
    description:
      "You receive a concise shortlist with fit notes, risk flags, compensation context, and interview scheduling support."
  }
];

export default function Process() {
  return (
    <motion.section
      id="process"
      className="section-shell bg-[#0E0E0E]"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div variants={staggerContainer} className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeInUp}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <div className="mb-5 h-1 w-12 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
              How it works
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A precise hiring operating system, not a resume dump.
            </h2>
          </div>
          <p className="text-lg leading-8 text-zinc-400 lg:pt-12">
            The process is built to remove ambiguity early. Every candidate is
            scored against the mandate before they reach your team, so hiring
            managers spend time on real contenders.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="relative mt-16 grid gap-5 lg:grid-cols-4"
        >
          <div className="pointer-events-none absolute left-6 right-6 top-12 hidden h-px bg-white/10 lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                variants={{ ...fadeInUp, ...scaleOnHover }}
                whileHover="hover"
                className="premium-card group relative min-h-72"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-page transition-all duration-300 group-hover:border-accent">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="rounded-lg border border-white/10 bg-page px-3 py-1 text-sm font-semibold text-zinc-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
