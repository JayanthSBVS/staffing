"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  fadeInUp,
  scaleOnHover,
  staggerContainer,
} from "@/lib/animations";

const testimonials = [
  {
    quote:
      "The first shortlist felt like our own hiring team had built it. The profiles were senior, available, compensation-aligned, and ready for serious technical conversation.",
    name: "Anika Rao",
    role: "VP Engineering, cloud finance platform"
  },
  {
    quote:
      "They understood the difference between people who have used Kafka and people who can own Kafka at scale. That changed the quality of every interview loop.",
    name: "Rohan Menon",
    role: "Head of Platform, enterprise SaaS company"
  },
  {
    quote:
      "Zyra gave us market clarity before sending candidates. We knew what talent was available, what it would cost, and which tradeoffs were real.",
    name: "Meera Shah",
    role: "Chief People Officer, digital commerce leader"
  }
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
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
            Client voice
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Trusted by leaders who cannot afford hiring noise.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.name}
              variants={{ ...fadeInUp, ...scaleOnHover }}
              whileHover="hover"
              className="premium-card flex min-h-96 flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-page">
                <Quote className="h-6 w-6 text-accent" />
              </div>
              <blockquote className="mt-6 flex-1 text-lg font-medium leading-8 text-white">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-5">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-zinc-500">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
