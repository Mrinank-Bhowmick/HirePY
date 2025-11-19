"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    gif: "/artificial-intelligence.gif",
    title: "AI Analysis",
    description:
      "Get instant, detailed feedback on your answers, body language, and tone.",
  },
  {
    gif: "/scenario.gif",
    title: "Custom Scenarios",
    description:
      "Practice for specific roles, industries, or companies with tailored questions.",
  },
  {
    gif: "/coach.gif",
    title: "Real-time Coaching",
    description:
      "Receive live tips and suggestions during your mock interview sessions.",
  },
  {
    gif: "/security.gif",
    title: "Private & Secure",
    description:
      "Your data is encrypted and never shared. Practice in a safe environment.",
  },
  {
    gif: "/evolution.gif",
    title: "Progress Tracking",
    description:
      "Monitor your improvement over time with detailed analytics and scores.",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                Why Choose <span className="text-blue-600">HirePY</span>?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-600 max-w-2xl mx-auto"
              >
                Everything you need to ace your next interview, powered by
                advanced artificial intelligence.
              </motion.p>
            </div>
          </div>
        </div>

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <FeatureCard key={index + 3} feature={feature} index={index + 3} />
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
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      onMouseEnter={handleMouseEnter}
      className="flex flex-col items-center text-center p-8 rounded-2xl bg-linear-to-r from-white/60 to-white/30 border border-white/30 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer h-full"
    >
      <div className="relative w-32 h-32 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 overflow-hidden">
        {/* Animated GIF - always visible, plays on first hover */}
        <Image
          src={feature.gif}
          alt={`${feature.title} animation`}
          width={128}
          height={128}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
          {feature.title}
        </h3>
        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}
