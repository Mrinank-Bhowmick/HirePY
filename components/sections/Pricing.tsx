"use client";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Clock, Zap } from "lucide-react";

const upcomingFeatures = [
  "Unlimited Mock Interviews",
  "Advanced AI Analysis",
  "Industry Specific Roles",
  "Resume Review & Optimization",
  "Priority 24/7 Support",
  "Progress Analytics Dashboard",
];

export default function Pricing() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-slate-50/50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Early Access
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight"
          >
            Simple, Transparent Pricing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Start for free during our beta. Get exclusive early-bird pricing when we launch premium plans.
          </motion.p>
        </div>

        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Animated border gradient */}
            <div className="absolute -inset-px bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-4xl opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
            
            {/* Card */}
            <div className="relative rounded-4xl bg-white overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1.5 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500" />
              
              <div className="p-8 sm:p-12 lg:p-16">
                {/* Beta Badge & Icon */}
                <div className="flex flex-col items-center mb-10">
                  <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-cyan-50 via-blue-50 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Clock className="w-10 h-10 text-cyan-600" />
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-100 mb-4">
                    <Zap className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm font-bold text-cyan-700">FREE DURING BETA</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    Pro Plans Launching Soon
                  </h3>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    We&apos;re currently in beta and all features are completely free. 
                    Join our waitlist to get <span className="font-semibold text-slate-800">exclusive early-bird pricing</span> and 
                    be the first to access premium features.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <button className="group/btn relative px-8 py-4 bg-linear-to-r from-slate-900 to-slate-800 text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-1">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Join Waitlist
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                  
                  <button className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-semibold text-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5 text-cyan-600" />
                    Try Demo Now
                  </button>
                </div>

                {/* Features Grid */}
                <div className="pt-10 border-t border-slate-100">
                  <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
                    What to Expect with Pro
                  </p>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {upcomingFeatures.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-100 to-blue-100 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                          <Check className="w-4 h-4 text-cyan-600" />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                  <p className="text-sm text-slate-500">
                    <span className="font-semibold text-slate-700">No credit card required</span> · Cancel anytime · 
                    <span className="text-cyan-600"> Join 10,000+ users</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
