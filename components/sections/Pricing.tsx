"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out the platform.",
    features: [
      "1 Mock Interview per month",
      "Basic Feedback",
      "Standard Scenarios",
      "Community Access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious job seekers.",
    features: [
      "Unlimited Mock Interviews",
      "Advanced AI Analysis",
      "Custom Scenarios",
      "Priority Support",
      "Progress Tracking",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations.",
    features: [
      "Team Management",
      "Custom Branding",
      "API Access",
      "Dedicated Account Manager",
      "SSO Integration",
    ],
    popular: false,
  },
];

export default function Pricing() {
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
            Simple, Transparent Pricing
          </motion.h2>
          <p className="text-slate-600">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={clsx(
                "relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2",
                plan.popular
                  ? "bg-white shadow-2xl border-blue-200 ring-2 ring-blue-500 ring-offset-2"
                  : "bg-white/50 backdrop-blur-sm border-white/60 shadow-lg hover:shadow-xl"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-slate-500">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  "w-full py-3 rounded-xl font-medium transition-all",
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                )}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
