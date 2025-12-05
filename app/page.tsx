"use client";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  CheckCircle2,
  Trophy,
  Star,
  Sparkles,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";
import { useEffect, useState, useCallback } from "react";

const MeetingBox = dynamic(() => import("@/components/MeetingBox"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-linear-to-br from-slate-100 to-slate-50 rounded-3xl animate-pulse flex items-center justify-center">
      <div className="text-slate-400 text-sm font-medium">Loading preview...</div>
    </div>
  ),
});

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      {/* Premium Background with subtle patterns */}
      <div className="fixed inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Gradient orbs - optimized with will-change and reduced opacity */}
        <div className="absolute top-0 left-1/4 w-160 h-160 bg-linear-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl animate-blob gpu-accelerated" />
        <div className="absolute top-1/4 right-1/4 w-140 h-140 bg-linear-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl animate-blob animation-delay-2000 gpu-accelerated" />
        <div className="absolute bottom-0 left-1/3 w-120 h-120 bg-linear-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-blob animation-delay-4000 gpu-accelerated" />
        
        {/* Top gradient overlay */}
        <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-white via-white/80 to-transparent" />
      </div>

      {/* Navbar - Enhanced with smoother transitions */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className={`container mx-auto px-4 sm:px-6 transition-all duration-700 ease-out ${scrolled ? "max-w-5xl" : ""}`}>
          <div
            className={`flex items-center justify-between rounded-2xl transition-all duration-700 ease-out ${
              scrolled
                ? "bg-white/80 backdrop-blur-2xl border border-slate-200/50 shadow-lg shadow-slate-900/5 px-5 py-2.5"
                : "bg-transparent px-0 py-0"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative w-10 h-10 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  H
                </div>
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                HirePY
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              {["Features", "How it Works", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
                >
                  {item}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-slate-600 font-medium text-sm px-4 py-2 hover:text-slate-900 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="relative group bg-slate-900 text-white rounded-xl font-medium text-sm px-5 py-2.5 overflow-hidden transition-all hover:shadow-xl hover:shadow-slate-900/20">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <a
                  href="/dashboard"
                  className="relative group bg-slate-900 text-white rounded-xl font-medium text-sm px-5 py-2.5 overflow-hidden transition-all hover:shadow-xl hover:shadow-slate-900/20"
                >
                  <span className="relative z-10">Dashboard</span>
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced with better animations */}
      <section className="container mx-auto px-4 sm:px-6 pt-24 pb-12 lg:pt-32 lg:pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-5 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-100/50 text-cyan-700 text-[10px] font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse-soft" />
              AI-Powered Interview Platform
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Master Your{" "}
              <span className="relative">
                <span className="relative z-10 text-gradient animate-gradient bg-300-percent">
                  Next Interview
                </span>
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-cyan-200" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 8 Q50 0 100 8 T200 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience the future of interview preparation with our advanced AI interviewer. 
              <span className="text-slate-800 font-medium"> Real-time feedback</span>, 
              <span className="text-slate-800 font-medium"> realistic scenarios</span>, and 
              <span className="text-slate-800 font-medium"> personalized coaching</span> to help you land your dream job.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <SignedIn>
                <a
                  href="/dashboard"
                  className="group w-full sm:w-auto px-6 py-3 rounded-xl bg-linear-to-r from-slate-900 to-slate-800 text-white font-semibold text-sm transition-all hover:shadow-2xl hover:shadow-slate-900/25 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </SignedIn>
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className="group w-full sm:w-auto px-6 py-3 rounded-xl bg-linear-to-r from-slate-900 to-slate-800 text-white font-semibold text-sm transition-all hover:shadow-2xl hover:shadow-slate-900/25 hover:-translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Start Mock Interview
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold text-sm border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              {[
                { icon: CheckCircle2, text: "Real-time Analysis" },
                { icon: CheckCircle2, text: "Custom Scenarios" },
                { icon: CheckCircle2, text: "Instant Feedback" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 group">
                  <div className="w-4 h-4 rounded-full bg-linear-to-br from-cyan-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-2.5 h-2.5 text-cyan-600" />
                  </div>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Meeting Box with enhanced presentation */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none relative animate-fade-in-up stagger-2">
            <div className="relative group">
              {/* Glow effect behind the card */}
              <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-4xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              
              {/* Main card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-white/50 bg-white/60 backdrop-blur-sm">
                <MeetingBox />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -right-2 sm:-right-4 top-6 sm:top-8 p-2.5 sm:p-3 bg-white/90 backdrop-blur-xl rounded-xl shadow-lg border border-slate-100 animate-float hidden md:block card-hover">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-linear-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/30">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">
                      Confidence Score
                    </div>
                    <div className="text-sm font-bold text-slate-800 flex items-center gap-1">
                      98% 
                      <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-50 px-1 py-0.5 rounded-full">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-2 sm:-left-4 bottom-12 sm:bottom-14 p-2.5 sm:p-3 bg-white/90 backdrop-blur-xl rounded-xl shadow-lg border border-slate-100 animate-float-delayed hidden md:block card-hover">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-linear-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white shadow-md shadow-violet-500/30">
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">
                      AI Feedback
                    </div>
                    <div className="text-sm font-bold text-slate-800">
                      Clear & Concise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 lg:mt-16 animate-fade-in-up stagger-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Users, value: "10,000+", label: "Active Users" },
              { icon: Zap, value: "50,000+", label: "Interviews Completed" },
              { icon: BarChart3, value: "94%", label: "Success Rate" },
              { icon: Star, value: "4.9/5", label: "User Rating" },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group relative p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-100 hover:border-cyan-200 hover:bg-white/80 transition-all duration-300 card-hover text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-slate-50 to-slate-100 mb-2 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-0.5">{value}</div>
                <div className="text-xs text-slate-500 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200/50"></div>
        </div>
      </div>

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
