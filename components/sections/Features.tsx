"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Target, Lightbulb, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    gif: "/artificial-intelligence.gif",
    icon: Brain,
    title: "AI Analysis",
    description:
      "Get instant, detailed feedback on your answers, body language, and tone with our advanced AI.",
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-50 to-blue-50",
  },
  {
    gif: "/scenario.gif",
    icon: Target,
    title: "Custom Scenarios",
    description:
      "Practice for specific roles, industries, or companies with tailored interview questions.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    gif: "/coach.gif",
    icon: Lightbulb,
    title: "Real-time Coaching",
    description:
      "Receive live tips and actionable suggestions during your mock interview sessions.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50",
  },
  {
    gif: "/security.gif",
    icon: Shield,
    title: "Private & Secure",
    description:
      "Your data is encrypted end-to-end and never shared. Practice in a completely safe environment.",
    color: "from-emerald-500 to-cyan-500",
    bgColor: "from-emerald-50 to-cyan-50",
  },
  {
    gif: "/evolution.gif",
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor your improvement over time with detailed analytics, scores, and personalized insights.",
    color: "from-orange-500 to-rose-500",
    bgColor: "from-orange-50 to-rose-50",
  },
];

export default function Features() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-50/80 via-white to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Why Choose Us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight"
          >
            Everything You Need to{" "}
            <span className="text-gradient">Ace Your Interview</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Our platform combines cutting-edge AI technology with proven interview techniques 
            to give you the confidence you need to succeed.
          </motion.p>
        </div>

        {/* Features Grid - First Row (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-6 lg:mb-8">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Features Grid - Second Row (2 cards centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Hover glow effect */}
      <div className={`absolute -inset-px bg-linear-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
      
      {/* Card */}
      <div className="relative h-full p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:border-transparent overflow-hidden">
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-linear-to-br ${feature.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon and GIF container */}
          <div className="relative w-20 h-20 mb-6">
            {/* Background circle */}
            <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.bgColor} group-hover:scale-110 transition-transform duration-500`} />
            
            {/* GIF */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={feature.gif}
                alt={`${feature.title} animation`}
                width={48}
                height={48}
                className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                unoptimized
              />
            </div>
            
            {/* Small icon badge */}
            <div className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-linear-to-br ${feature.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-4 h-4" />
            </div>
          </div>

          {/* Text content */}
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
            {feature.title}
          </h3>
          <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
            {feature.description}
          </p>
          
          {/* Learn more link */}
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-cyan-600 transition-colors">
            <span>Learn more</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
