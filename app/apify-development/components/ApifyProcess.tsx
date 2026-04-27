"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Settings, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    title: "Requirement Analysis",
    desc: "We analyze your business goals, target platforms, and data extraction needs in detail.",
    icon: CheckCircle2,
  },
  {
    title: "System Architecture",
    desc: "We design scalable Apify scraping systems with modular, production-ready structure.",
    icon: Settings,
  },
  {
    title: "Development Phase",
    desc: "We build, test, and optimize high-performance scraping actors and pipelines.",
    icon: Rocket,
  },
  {
    title: "Deployment & Monitoring",
    desc: "We deploy to cloud and continuously monitor stability, speed, and data accuracy.",
    icon: LineChart,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ApifyProcess = () => {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">
            How We Work
          </h2>

          <p className="text-gray-600 mt-3">
            A structured engineering workflow designed for scalable,
            production-grade Apify scraping systems.
          </p>
        </div>

        {/* STEPS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative border border-gray-200 rounded-2xl p-6 bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition">
                <step.icon size={20} />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mt-5 group-hover:text-blue-600 transition">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {step.desc}
              </p>

              {/* STEP NUMBER */}
              <div className="absolute top-4 right-4 text-xs text-gray-300 font-semibold">
                0{i + 1}
              </div>

              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-blue-50/30 blur-2xl -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">
            Need a custom Apify automation system?
          </h3>

          <p className="text-gray-600 mt-3">
            We design and build scalable scraping infrastructure for modern businesses.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-500 transition">
            Contact Us
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ApifyProcess;