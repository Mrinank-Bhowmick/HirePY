"use client";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Pricing Plans
          </motion.h2>
          <p className="text-slate-700">
            Currently in demo stage. Pricing will be announced soon.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-linear-to-br from-cyan-50 via-blue-50 to-white rounded-3xl p-12 border-2 border-cyan-200 shadow-xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Pricing & Features Coming Soon
              </h3>
              <p className="text-slate-700 text-lg mb-8 max-w-xl mx-auto">
                We&apos;re currently in the demo phase and working hard to
                finalize our pricing tiers and feature packages. Stay tuned for
                exciting announcements!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-colors shadow-lg shadow-cyan-400/30">
                  Join Waitlist
                </button>
                <button className="px-8 py-3 bg-white text-cyan-700 rounded-xl font-medium hover:bg-cyan-50 transition-colors border-2 border-cyan-200">
                  Try Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
