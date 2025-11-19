"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Html } from "@react-three/drei";
import { Mic, MessageSquare, Video, PhoneOff } from "lucide-react";
import { Avatar } from "./Avatar";
import { Suspense } from "react";

export default function MeetingBox() {
  return (
    <div className="relative w-full max-w-4xl aspect-video bg-white/80 backdrop-blur-xl rounded-3xl border border-cyan-200 shadow-2xl overflow-hidden ring-1 ring-cyan-100">
      {/* Header/Status */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-200 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        <span className="text-sm font-medium text-slate-800">
          AI Interviewer Active
        </span>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-cyan-50/40 to-blue-50/40">
        <Canvas camera={{ position: [0, 0.3, 2.2], fov: 40 }}>
          <ambientLight intensity={0.7} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Suspense
            fallback={
              <Html center>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-cyan-200">
                  <div className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                    Interviewer joining...
                  </span>
                </div>
              </Html>
            }
          >
            <Avatar />
            <Environment preset="city" />
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.4}
              scale={5}
              blur={2.5}
              far={4}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button className="p-4 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg backdrop-blur-sm transition-all hover:scale-110 border border-cyan-200 group">
          <Mic
            size={24}
            className="group-hover:text-cyan-600 transition-colors"
          />
        </button>
        <button className="p-4 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg backdrop-blur-sm transition-all hover:scale-110 border border-cyan-200 group">
          <Video
            size={24}
            className="group-hover:text-cyan-600 transition-colors"
          />
        </button>
        <button className="p-4 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg backdrop-blur-sm transition-all hover:scale-110 border border-cyan-200 group">
          <MessageSquare
            size={24}
            className="group-hover:text-cyan-600 transition-colors"
          />
        </button>
        <button className="p-4 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30 backdrop-blur-sm transition-all hover:scale-110 border border-red-400">
          <PhoneOff size={24} />
        </button>
      </div>
    </div>
  );
}
