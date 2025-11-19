"use client";
import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

const MeetingBox = dynamic(() => import("@/components/MeetingBox"), {
  ssr: false,
});

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-100 text-slate-900 overflow-x-hidden font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between relative z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">
            H
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">
            HirePY
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-blue-600 transition-colors"
          >
            How it Works
          </a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">
            Pricing
          </a>
        </div>
        <button className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              AI-Powered Recruitment
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Master Your <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient bg-300-percent">
                Next Interview
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the future of interview preparation with our advanced
              AI interviewer. Real-time feedback, realistic scenarios, and
              personalized coaching.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2 group hover:-translate-y-0.5">
                Start Mock Interview
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-md">
                View Demo
              </button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Custom Scenarios</span>
              </div>
            </div>
          </div>

          {/* Right Content - Meeting Box */}
          <div className="flex-1 w-full relative perspective-1000">
            <div className="relative transform transition-all duration-500 hover:rotate-y-2 hover:rotate-x-2 preserve-3d">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse" />
              <MeetingBox />

              {/* Floating Elements */}
              <div className="absolute -right-8 top-12 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    98%
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">
                      Confidence Score
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      Excellent
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-20 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 animate-float-delayed hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Feedback</div>
                    <div className="text-sm font-bold text-slate-900">
                      Clear & Concise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="features">
        <Features />
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="pricing">
        <Pricing />
      </div>

      <Footer />
    </main>
  );
}
