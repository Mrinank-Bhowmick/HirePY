"use client";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-cyan-50 to-blue-100 text-slate-700 py-12 border-t border-cyan-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                H
              </div>
              <span className="text-xl font-bold text-slate-800">HirePY</span>
            </div>
            <p className="text-slate-600 max-w-sm leading-relaxed">
              Empowering job seekers with AI-driven interview preparation.
              Master your skills, boost your confidence, and land your dream
              job.
            </p>
          </div>

          <div>
            <h4 className="text-slate-800 font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-800 font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} HirePY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-slate-600 hover:text-cyan-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-cyan-600 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-cyan-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-cyan-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
