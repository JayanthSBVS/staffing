"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerGroup } from "@/lib/animations";

export default function AsymmetricCapabilities() {
  return (
    <section className="section-y px-6 lg:px-24 bg-[#030303] relative">
      <motion.div variants={staggerGroup} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
        
        <motion.div variants={fadeInUp} className="mb-24">
          <h2 className="mb-6">Deployment <br/> Vectors.</h2>
          <p className="text-xl">Architected for high-velocity scaling. We deploy tailored recruitment vectors rather than off-the-shelf placement.</p>
        </motion.div>

        {/* 12-Column Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[360px] gap-6">
          
          {/* Main Focus Block */}
          <motion.div variants={fadeInUp} className="system-card md:col-span-8 p-12 flex flex-col justify-between group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 w-14 h-14 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
              <div className="w-4 h-4 bg-white/30 rounded-sm group-hover:bg-white transition-colors duration-500" />
            </div>
            <div className="relative z-10">
              <h3 className="mb-4">Executive & Elite Search</h3>
              <p className="text-lg">Discreet, precision-targeted mapping for C-suite and VP-level engineering leadership. Bypassing active boards to headhunt the top 1% securely.</p>
            </div>
          </motion.div>

          {/* Vertical Anchor Block */}
          <motion.div variants={fadeInUp} className="system-card md:col-span-4 md:row-span-2 p-12 flex flex-col justify-end group">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 w-full h-[1px] bg-white/10 mb-8 group-hover:bg-blue-500/50 transition-colors" />
            <h3 className="mb-4 relative z-10">Embedded RPO</h3>
            <p className="relative z-10 text-lg">Deploying proprietary infrastructure directly into your HR ecosystem, taking over end-to-end recruitment with guaranteed SLAs.</p>
          </motion.div>

          {/* Standard Block 1 */}
          <motion.div variants={fadeInUp} className="system-card md:col-span-4 p-10 flex flex-col justify-between">
            <h3>Permanent Scaling</h3>
            <p className="text-sm">High-velocity acquisition for core technical teams via predictive matching algorithms.</p>
          </motion.div>

          {/* Standard Block 2 */}
          <motion.div variants={fadeInUp} className="system-card md:col-span-4 p-10 flex flex-col justify-between">
            <h3>Talent Intelligence</h3>
            <p className="text-sm">Actionable data on market compensation and structural talent migration patterns.</p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}