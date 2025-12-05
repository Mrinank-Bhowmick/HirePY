"use client";
import { Github, Twitter, Linkedin, Mail, ArrowRight, Heart } from "lucide-react";

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
  social: [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Email", icon: Mail, href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="container mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative w-11 h-11 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    H
                  </div>
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  HirePY
                </span>
              </div>
              
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Empowering job seekers with AI-driven interview preparation. 
                Master your skills, boost your confidence, and land your dream job.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-3 pt-2">
                {navigation.social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="w-10 h-10 rounded-xl bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700/50 hover:border-cyan-500/30 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:-translate-y-1"
                      aria-label={item.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation columns */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                  Product
                </h4>
                <ul className="space-y-3">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                  Company
                </h4>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter column */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                Stay Updated
              </h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Subscribe to our newsletter for the latest interview tips, AI updates, and exclusive content.
              </p>
              
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                <button className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center gap-2 group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm flex items-center gap-1">
                © {new Date().getFullYear()} HirePY. Made with 
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> 
                for job seekers worldwide.
              </p>
              
              <div className="flex items-center gap-6 text-sm">
                {navigation.legal.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
