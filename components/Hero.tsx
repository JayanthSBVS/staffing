"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, CheckCircle2, Sparkles } from "lucide-react";
import {
  fadeInUp,
  buttonHover,
  scaleOnHover,
  staggerContainer
} from "@/lib/animations";

const clientSignals = [
  "Series D SaaS",
  "Global BFSI GCC",
  "Digital Commerce",
  "Cloud Platform",
  "Product Studio"
];

const metrics = [
  { value: "1,500+", label: "enterprise mandates delivered" },
  { value: "25,000+", label: "technology hires placed" },
  { value: "7 days", label: "average vetted shortlist" }
];

const shortlistRows = [
  {
    role: "Backend Platform Engineer",
    stack: "Java, Spring Boot, Kafka, AWS",
    signal: "Validated for distributed systems and ownership depth",
    score: "94"
  },
  {
    role: "Cloud Data Engineer",
    stack: "Python, Spark, Airflow, GCP",
    signal: "Mapped to migration, lakehouse, and cost-control experience",
    score: "91"
  },
  {
    role: "Engineering Manager",
    stack: "SaaS, DevOps, Team Scale",
    signal: "Screened for hiring maturity and delivery leadership",
    score: "89"
  }
];

function AnimatedBackdrop() {
  const verticalLines = Array.from({ length: 15 });
  const horizontalLines = Array.from({ length: 10 });
  const particles = Array.from({ length: 26 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -right-40 top-16 h-80 w-80 rounded-full border border-white/10"
        animate={{ rotate: 360, scale: [1, 1.04, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 left-10 h-72 w-72 rounded-full border border-white/5"
        animate={{ rotate: -360, scale: [1, 0.96, 1] }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />

      {verticalLines.map((_, index) => (
        <motion.span
          key={`v-${index}`}
          className="absolute top-0 h-full w-px bg-surface-2"
          style={{ left: `${index * 7.15}%` }}
          animate={{ opacity: [0.06, 0.18, 0.06] }}
          transition={{
            duration: 7 + (index % 4),
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {horizontalLines.map((_, index) => (
        <motion.span
          key={`h-${index}`}
          className="absolute left-0 h-px w-full bg-surface-2"
          style={{ top: `${index * 11.5}%` }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{
            duration: 8 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }}
        />
      ))}

      {particles.map((_, index) => (
        <motion.span
          key={`p-${index}`}
          className="absolute h-1 w-1 rounded-full bg-accent"
          style={{
            left: `${6 + ((index * 31) % 88)}%`,
            top: `${10 + ((index * 43) % 76)}%`
          }}
          animate={{
            opacity: [0.08, 0.32, 0.08],
            scale: [1, 1.55, 1],
            y: [0, -8, 0]
          }}
          transition={{
            duration: 4 + (index % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.16
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <motion.section
      className="relative isolate overflow-hidden border-t border-white/5 bg-page"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <AnimatedBackdrop />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            Zyra Talent
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 text-sm font-medium md:flex"
          >
            <a href="#services" className="animated-link">
              Services
            </a>
            <a href="#process" className="animated-link">
              Process
            </a>
            <a href="#case-studies" className="animated-link">
              Results
            </a>
            <a href="#testimonials" className="animated-link">
              Clients
            </a>
          </nav>

          <motion.a
            href="#consultation"
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="hidden rounded-lg border border-accent px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition-all duration-300 hover:bg-[#149287] hover:shadow-lg md:inline-flex"
          >
            Book Consultation
          </motion.a>
        </header>

        <div className="grid flex-1 items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <motion.div
            variants={staggerContainer}
            className="relative"
          >
            <motion.div
              variants={fadeInUp}
              className="group mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/90 px-4 py-2 text-sm font-medium text-zinc-300 shadow-[0_18px_42px_rgba(0,0,0,0.32)] backdrop-blur transition-all duration-300 hover:border-accent"
            >
              <CheckCircle2 className="h-4 w-4 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3 group-hover:scale-110" />
              AI-ranked shortlists, validated by senior hiring experts
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Build High-Performance Tech Teams Faster
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl"
            >
              Enterprise staffing for engineering, product, data, cloud, and
              security roles, powered by AI sourcing intelligence and verified
              by recruiters who understand real delivery environments.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href="#consultation"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="premium-button-primary px-7 py-4 sm:px-9"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="#consultation"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="premium-button-secondary px-7 py-4 sm:px-9"
              >
                <CalendarCheck className="h-5 w-5 text-accent" />
                Book Consultation
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 grid gap-5 sm:grid-cols-3"
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-[#111]/70 p-4 shadow-[0_16px_46px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-accent hover:shadow-2xl"
                >
                  <div className="text-2xl font-bold tracking-tight text-white">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm leading-5 text-zinc-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-xl border border-white/5 bg-surface/30" />
            <motion.div
              variants={{ ...fadeInUp, ...scaleOnHover }}
              whileHover="hover"
              className="premium-panel relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-6">
                <div>
                  <p className="text-sm font-medium text-zinc-400">
                    Live hiring command center
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-white">
                    18 role shortlist in progress
                  </h2>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-white">
                  <Sparkles className="h-4 w-4 text-accent" />
                  94% fit
                </div>
              </div>

              <div className="space-y-3 p-5 sm:p-6">
                {shortlistRows.map((row) => (
                  <motion.div
                    key={row.role}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="rounded-xl border border-white/8 bg-page/80 p-4 transition-all duration-300 hover:border-accent hover:bg-surface-2 hover:shadow-2xl"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="font-semibold text-white">{row.role}</p>
                        <p className="mt-1 text-sm text-zinc-300">{row.stack}</p>
                        <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                          {row.signal}
                        </p>
                      </div>
                      <span className="min-w-12 rounded-full border border-white/10 bg-surface-2 px-3 py-1.5 text-center text-sm font-bold text-white">
                        {row.score}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-page/50">
                {[
                  ["48h", "first slate"],
                  ["73%", "interview rate"],
                  ["2.8x", "faster close"]
                ].map(([value, label]) => (
                  <div key={label} className="px-4 py-5 text-center">
                    <div className="text-xl font-bold text-white">{value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-500">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          className="border-t border-white/10 pt-7"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Trusted by hiring leaders across complex technology environments
          </p>

          <div className="grid grid-cols-2 gap-4 text-base font-semibold text-zinc-400 sm:grid-cols-3 lg:grid-cols-5">
            {clientSignals.map((logo) => (
              <motion.div
                key={logo}
                variants={{ ...fadeInUp, ...scaleOnHover }}
                whileHover="hover"
                className="flex h-14 transform-gpu items-center justify-center rounded-xl border border-white/10 bg-[#111]/75 px-4 text-center shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition-all duration-300 hover:text-white"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
