"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Html } from "@react-three/drei";
import { Mic, MessageSquare, Video, PhoneOff } from "lucide-react";
import { Avatar } from "./Avatar";
import { Suspense } from "react";

export default function MeetingBox() {
  return (
    <div className="relative w-full max-w-4xl aspect-video bg-linear-to-br from-slate-50 via-white to-cyan-50/30 rounded-3xl overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03)_0%,transparent_50%)]" />
      
      {/* Header/Status */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-full border border-slate-200/50 shadow-lg shadow-slate-900/5">
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
          </div>
          <span className="text-sm font-semibold text-slate-700">
            AI Interviewer Active
          </span>
        </div>
      </div>

      {/* Recording indicator */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
        <div className="flex items-center gap-2 bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-xs font-medium text-rose-600">REC</span>
        </div>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0.3, 2.2], fov: 40 }}>
          <ambientLight intensity={0.8} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />
          <Suspense
            fallback={
              <Html center>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100">
                  <div className="w-5 h-5 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm font-medium text-slate-600 whitespace-nowrap">
                    Connecting to interviewer...
                  </span>
                </div>
              </Html>
            }
          >
            <Avatar />
            <Environment preset="city" />
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.3}
              scale={5}
              blur={2.5}
              far={4}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 sm:gap-3 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-xl shadow-slate-900/5">
          <ControlButton icon={Mic} label="Mute" />
          <ControlButton icon={Video} label="Video" />
          <ControlButton icon={MessageSquare} label="Chat" />
          <button 
            className="p-3 sm:p-4 rounded-xl bg-linear-to-r from-rose-500 to-red-500 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 transition-all hover:scale-105 active:scale-95"
            aria-label="End Call"
          >
            <PhoneOff className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Time indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10">
        <div className="px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-lg">
          <span className="text-xs font-mono text-white">00:42</span>
        </div>
      </div>
    </div>
  );
}

function ControlButton({ icon: Icon, label }: { icon: typeof Mic; label: string }) {
  return (
    <button 
      className="group p-3 sm:p-4 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-cyan-600 shadow-sm border border-slate-100 transition-all hover:scale-105 active:scale-95"
      aria-label={label}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
    </button>
  );
}
