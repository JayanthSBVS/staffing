"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  BriefcaseBusiness,
  SearchCheck,
  ShieldCheck,
  UsersRound,
  type LucideIcon
} from "lucide-react";
import {
  fadeInUp,
  scaleOnHover,
  staggerContainer,
} from "@/lib/animations";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: BriefcaseBusiness,
    title: "Permanent Hiring",
    description:
      "Full-time engineering, product, data, and cloud hires matched to role scorecards and compensation bands."
  },
  {
    icon: UsersRound,
    title: "Contract Staffing",
    description:
      "Deployment-ready specialists for urgent programs, cloud migrations, platform rebuilds, and delivery surges."
  },
  {
    icon: ShieldCheck,
    title: "RPO",
    description:
      "Embedded recruitment pods that run sourcing, screening, pipeline governance, and hiring manager cadence."
  },
  {
    icon: SearchCheck,
    title: "Executive Search",
    description:
      "Confidential leadership search for CTO, VP Engineering, Head of Product, Data, and Security roles."
  },
  {
    icon: BrainCircuit,
    title: "Talent Intelligence",
    description:
      "Market maps, availability signals, salary benchmarks, and competitor talent insights for workforce planning."
  }
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="section-shell bg-[#0B0B0B]"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div variants={staggerContainer} className="mx-auto max-w-7xl">
        <motion.div variants={fadeInUp} className="max-w-3xl">
          <div className="mb-5 h-1 w-12 bg-accent" />
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Productized staffing
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            One hiring partner for every critical talent motion.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Each service is run with defined intake, candidate quality gates,
            recruiter ownership, and transparent weekly hiring intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={{ ...fadeInUp, ...scaleOnHover }}
                whileHover="hover"
                className="premium-card group min-h-72"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-page transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_12px_30px_rgba(15,118,110,0.18)]">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-7 text-xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
