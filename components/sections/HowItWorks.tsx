"use client";
import { motion } from "framer-motion";
import { UserPlus, Settings, Video, FileText } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Create Account",
    description: "Sign up in seconds and set up your professional profile.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Customize Interview",
    description: "Select your industry, role, and difficulty level.",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Start Session",
    description: "Interact with our AI interviewer in a realistic environment.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Get Feedback",
    description: "Receive detailed analysis and actionable improvements.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white/30 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            How It Works
          </motion.h2>
          <p className="text-slate-600">
            Your journey to interview mastery in four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (SVG Wave) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-64 -translate-y-1/2 z-0 pointer-events-none overflow-visible">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="neonGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Base Tube */}
              <path
                d="M0,100 L20,100 L20,20 L280,20 L280,100 L320,100 L320,180 L580,180 L580,100 L620,100 L620,20 L880,20 L880,100 L920,100 L920,180 L1180,180 L1180,100 L1200,100"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-30"
              />
              {/* Neon Liquid */}
              <motion.path
                d="M0,100 L20,100 L20,20 L280,20 L280,100 L320,100 L320,180 L580,180 L580,100 L620,100 L620,20 L880,20 L880,100 L920,100 L920,180 L1180,180 L1180,100 L1200,100"
                fill="none"
                stroke="url(#neonGradient)"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 shadow-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:border-blue-100 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
