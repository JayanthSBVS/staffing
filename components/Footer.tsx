"use client";

import { motion } from "framer-motion";
import { sectionReveal, staggerItem } from "@/components/motion-presets";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" }
];

const services = [
  "Permanent Hiring",
  "Contract Staffing",
  "RPO",
  "Executive Search",
  "Talent Intelligence"
];

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-white/10 bg-page px-6 py-12 sm:px-8 lg:px-10"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <motion.div variants={staggerItem}>
            <a href="#" className="text-xl font-bold tracking-tight text-white">
              Zyra Talent
            </a>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">
              AI-powered enterprise staffing with human validation for
              engineering, product, data, cloud, and security teams.
            </p>
            <p className="mt-5 text-sm text-zinc-500">
              Bengaluru - Hyderabad - Pune - Remote-first delivery
            </p>
          </motion.div>

          <motion.div variants={staggerItem}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Navigate
            </p>
            <div className="mt-5 space-y-3">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="animated-link">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Staffing
            </p>
            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <p key={service} className="text-sm text-zinc-400">
                  {service}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerItem}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>(c) 2026 Zyra Talent. All rights reserved.</p>
          <a href="mailto:hello@zyratalent.com" className="animated-link">
            hello@zyratalent.com
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
