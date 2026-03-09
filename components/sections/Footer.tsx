"use client";
import { Github, Mail, ArrowRight, Heart } from "lucide-react";

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const navigation = {
  project: [
    { name: "Source Code", href: "https://github.com/Mrinank-Bhowmick/HirePY" },
    { name: "Features", href: "#features" },
    { name: "Tech Stack", href: "#features" },
  ],
  social: [
    { name: "GitHub", icon: Github, href: "https://github.com/Mrinank-Bhowmick" },
    { name: "LinkedIn", icon: LinkedInIcon, href: "https://www.linkedin.com/in/mrinank-bhowmick/" },
    { name: "Twitter", icon: TwitterIcon, href: "https://x.com/mrinank110" }
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
                A technical showcase of real-time WebRTC, 3D Canvas rendering, and Google's latest audio AI capabilities.
                Developed by Mrinank Bhowmick.
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
            <div className="lg:col-span-8 flex justify-end">
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                  Project Links
                </h4>
                <ul className="space-y-3">
                  {navigation.project.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? "_blank" : "_self"}
                        rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
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
                 <a href="https://github.com/Mrinank-Bhowmick" className="text-slate-500 hover:text-white transition-colors">Built by Mrinank Bhowmick</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
