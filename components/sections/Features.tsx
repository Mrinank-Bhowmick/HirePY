"use client";
import { motion } from "framer-motion";
import { Brain, Target, Zap, Shield, BarChart, Users } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    title: "AI Analysis",
    description:
      "Get instant, detailed feedback on your answers, body language, and tone.",
  },
  {
    icon: <Target className="w-6 h-6 text-purple-600" />,
    title: "Custom Scenarios",
    description:
      "Practice for specific roles, industries, or companies with tailored questions.",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    title: "Real-time Coaching",
    description:
      "Receive live tips and suggestions during your mock interview sessions.",
  },
  {
    icon: <Shield className="w-6 h-6 text-green-600" />,
    title: "Private & Secure",
    description:
      "Your data is encrypted and never shared. Practice in a safe environment.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-pink-600" />,
    title: "Progress Tracking",
    description:
      "Monitor your improvement over time with detailed analytics and scores.",
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    title: "Community Hub",
    description:
      "Connect with peers, share experiences, and learn from others' success.",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
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
            className="text-slate-600"
          >
            Everything you need to ace your next interview, powered by advanced
            artificial intelligence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
