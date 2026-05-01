"use client";

import { motion } from "framer-motion";
import {
  cardHover,
  sectionReveal,
  staggerContainer,
  staggerItem
} from "@/components/motion-presets";

const caseStudies = [
  {
    company: "B2B SaaS scale-up",
    mandate: "Java platform hiring",
    problem:
      "A revenue-critical workflow rebuild was blocked by six open backend roles and a 34-day average interview delay.",
    action:
      "We built a Spring Boot, Kafka, AWS scorecard, mapped product companies with similar transaction loads, and validated candidates for ownership in distributed systems.",
    result: "18 hires in 31 days",
    metric: "42% reduction in time-to-hire"
  },
  {
    company: "Global BFSI GCC",
    mandate: "Cloud data engineering pod",
    problem:
      "The internal team needed senior data engineers for a GCP lakehouse migration but existing vendors were sending ETL-only profiles.",
    action:
      "AI screening separated Spark, Airflow, BigQuery, and governance experience from keyword noise before recruiter validation.",
    result: "11 accepted offers",
    metric: "86% first-round selection rate"
  },
  {
    company: "Digital commerce leader",
    mandate: "Product and security leadership",
    problem:
      "Leadership hiring had stalled because candidates lacked both consumer-scale domain depth and stakeholder maturity.",
    action:
      "We ran a confidential market map across commerce, payments, and logistics firms, then validated motivation, compensation fit, and executive communication.",
    result: "3 leaders closed",
    metric: "9.2/10 hiring manager satisfaction"
  }
];

export default function CaseStudies() {
  return (
    <motion.section
      id="case-studies"
      className="section-shell"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerItem}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <div className="mb-5 h-1 w-12 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Case studies
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Measurable hiring outcomes, not activity reports.
            </h2>
          </div>
          <p className="text-lg leading-8 text-zinc-400 lg:pt-12">
            Every mandate is managed around business risk: speed, role quality,
            interview conversion, offer acceptance, and long-term retention fit.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <motion.article
              key={study.company}
              variants={staggerItem}
              whileHover={cardHover}
              className="premium-card flex min-h-[34rem] flex-col"
            >
              <div className="border-b border-white/10 pb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {study.company}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                  {study.mandate}
                </h3>
              </div>

              <div className="flex-1 space-y-4 py-6">
                <div className="rounded-2xl border border-white/10 bg-page/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {study.problem}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-page/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Action
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {study.action}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-accent/60 bg-surface-2 p-5">
                <p className="text-2xl font-bold tracking-tight text-white">
                  {study.result}
                </p>
                <p className="mt-1 text-sm text-zinc-400">{study.metric}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
