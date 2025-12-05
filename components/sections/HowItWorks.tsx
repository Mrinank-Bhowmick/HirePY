"use client";
import { motion } from "framer-motion";
import { UserPlus, Settings, Video, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up in seconds with your email or social accounts and set up your professional profile.",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Settings,
    title: "Customize Interview",
    description: "Select your target industry, role, company, and difficulty level for a tailored experience.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Video,
    title: "Start Session",
    description: "Interact with our AI interviewer in a realistic video environment with real-time responses.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: FileText,
    title: "Get Feedback",
    description: "Receive comprehensive analysis with actionable insights to improve your interview skills.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Simple Process
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight"
          >
            How It Works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Your journey to interview mastery in four simple steps. 
            Get started in minutes and see results immediately.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5">
            <div className="w-full h-full bg-linear-to-r from-cyan-200 via-indigo-200 to-purple-200 rounded-full" />
            <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 rounded-full animate-pulse opacity-50" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number & Icon Container */}
                    <div className="relative mb-8">
                      {/* Background glow */}
                      <div className={`absolute inset-0 bg-linear-to-br ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                      
                      {/* Icon box */}
                      <div className={`relative w-24 h-24 ${step.bgColor} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg shadow-slate-100`}>
                        <Icon className={`w-10 h-10 bg-linear-to-br ${step.color} bg-clip-text text-transparent`} strokeWidth={1.5} />
                        
                        {/* Gradient overlay on icon */}
                        <div className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                      </div>
                      
                      {/* Step number badge */}
                      <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-xl bg-linear-to-br ${step.color} flex items-center justify-center text-white text-sm font-bold shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed max-w-xs">
                      {step.description}
                    </p>

                    {/* Arrow for desktop (except last item) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute top-24 -right-3 transform translate-x-1/2 text-slate-300 group-hover:text-cyan-400 transition-colors z-10">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 lg:mt-20"
        >
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-slate-900 to-slate-800 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-slate-900/20 transition-all hover:-translate-y-1 group"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
