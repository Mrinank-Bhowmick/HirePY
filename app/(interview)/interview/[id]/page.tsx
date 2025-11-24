"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Mic,
  MicOff,
  Power,
  Volume2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenAI, Modality } from "@google/genai";

// Configuration for the Gemini API
const MODEL_NAME = "models/gemini-2.5-flash-native-audio-preview-09-2025";
const API_KEY = "";

const base64ToFloat32 = (base64Data: string) => {
  const binaryString = atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const int16Array = new Int16Array(bytes.buffer);
  const float32Array = new Float32Array(int16Array.length);
  for (let i = 0; i < int16Array.length; i++) {
    float32Array[i] = int16Array[i] / 32768.0;
  }
  return float32Array;
};

const floatTo16BitPCM = (float32Array: Float32Array) => {
  const buffer = new ArrayBuffer(float32Array.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < float32Array.length; i++) {
    const s = Math.max(-1, Math.min(1, float32Array[i]));
    view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return new Int16Array(buffer);
};

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};

export default function InterviewPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [audioLevel, setAudioLevel] = useState(0);
  const [aiSpeaking, setAiSpeaking] = useState(false);

  // Refs for audio handling
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<AudioNode | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sessionRef = useRef<any>(null);
  const scheduledEndTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<AudioBufferSourceNode[]>([]);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize Audio Context
  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      const AudioContextClass =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioContextClass({ sampleRate: 24000 }); // Set to 24kHz to match Gemini output if possible, otherwise we resample
    }
    return audioContextRef.current;
  }, []);

  // Audio Input Logic (Microphone)
  // Defined before connectToGemini to be used inside it
  const startAudio = useCallback(async () => {
    try {
      const ctx = initAudioContext();
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: 16000, // Try to request 16kHz
          channelCount: 1,
          echoCancellation: true,
          autoGainControl: true,
          noiseSuppression: true,
        },
      });

      mediaStreamRef.current = stream;
      const source = ctx.createMediaStreamSource(stream);

      // Visualizer setup
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      analyserRef.current = analyser;

      // Start visualizer loop
      const updateAudioLevel = () => {
        if (!analyserRef.current) return;

        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);

        // Calculate average
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        const average = sum / dataArray.length;
        setAudioLevel(average); // 0 to 255

        animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
      };
      updateAudioLevel();

      // Processor setup for sending audio
      // Use AudioWorklet for better performance and to avoid deprecation warnings
      await ctx.audioWorklet.addModule("/audio-processor.js");
      const workletNode = new AudioWorkletNode(ctx, "audio-processor");

      workletNode.port.onmessage = (event) => {
        if (!sessionRef.current) return;

        const inputData = event.data; // Float32Array
        const pcm16 = floatTo16BitPCM(inputData);
        const base64Audio = arrayBufferToBase64(pcm16.buffer);

        // Send to Gemini
        sessionRef.current.sendRealtimeInput({
          audio: {
            data: base64Audio,
            mimeType: `audio/pcm;rate=${ctx.sampleRate}`, // Send current sample rate
          },
        });
      };

      source.connect(workletNode);
      workletNode.connect(ctx.destination); // Keep the graph alive
      processorRef.current = workletNode;

      setIsMicOn(true);
    } catch (err: unknown) {
      console.error("Error starting audio", err);
      setError("Could not access microphone");
    }
  }, [initAudioContext]);

  const stopAudio = useCallback(() => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (analyserRef.current) {
      analyserRef.current.disconnect();
      analyserRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsMicOn(false);
    setAudioLevel(0);
  }, []);

  // Audio Playback Logic
  const queueAudio = useCallback(
    (base64Data: string) => {
      const float32Array = base64ToFloat32(base64Data);
      const ctx = initAudioContext();
      const buffer = ctx.createBuffer(1, float32Array.length, 24000); // Gemini output is 24kHz
      buffer.getChannelData(0).set(float32Array);

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);

      // Schedule playback
      const currentTime = ctx.currentTime;
      let startTime = scheduledEndTimeRef.current;

      // If the schedule is in the past (or just starting), reset to current time
      if (startTime < currentTime) {
        startTime = currentTime;
      }

      source.start(startTime);
      scheduledEndTimeRef.current = startTime + buffer.duration;

      // Track active sources for interruption handling
      activeSourcesRef.current.push(source);
      setAiSpeaking(true);

      source.onended = () => {
        activeSourcesRef.current = activeSourcesRef.current.filter(
          (s) => s !== source
        );
        if (
          activeSourcesRef.current.length === 0 &&
          scheduledEndTimeRef.current <= ctx.currentTime
        ) {
          setAiSpeaking(false);
        }
      };
    },
    [initAudioContext]
  );

  // Handle incoming messages from Gemini
  const handleServerMessage = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (message: any) => {
      const { serverContent } = message;
      if (serverContent) {
        if (serverContent.modelTurn) {
          const parts = serverContent.modelTurn.parts;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          for (const part of parts as any[]) {
            if (
              part.inlineData &&
              part.inlineData.mimeType.startsWith("audio/pcm")
            ) {
              // Received audio data
              const base64Data = part.inlineData.data;
              queueAudio(base64Data);
            }
          }
        }

        if (serverContent.turnComplete) {
          // Turn complete
        }

        if (serverContent.interrupted) {
          // Clear audio queue if interrupted
          activeSourcesRef.current.forEach((source) => {
            try {
              source.stop();
            } catch (e) {
              console.error(e);
            }
          });
          activeSourcesRef.current = [];
          scheduledEndTimeRef.current = 0;
          setAiSpeaking(false);
        }
      }
    },
    [queueAudio]
  );

  const disconnect = useCallback(async () => {
    if (sessionRef.current) {
      try {
        sessionRef.current.close();
      } catch (e) {
        console.error("Error closing session", e);
      }
      sessionRef.current = null;
    }
    stopAudio();
    setIsConnected(false);
    setAiSpeaking(false);
  }, [stopAudio]);

  // Connect to Gemini
  const connectToGemini = async () => {
    if (!API_KEY) {
      setError("API Key not found. Please set NEXT_PUBLIC_GEMINI_API_KEY.");
      return;
    }

    try {
      setIsConnecting(true);
      setError(null);

      const client = new GoogleGenAI({
        apiKey: API_KEY,
        httpOptions: { apiVersion: "v1alpha" },
      });

      // Configure the session

      const session = await client.live.connect({
        model: MODEL_NAME,
        config: {
          responseModalities: [Modality.AUDIO], // We want audio response
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } },
          },
          proactivity: { proactiveAudio: true },
          systemInstruction: "You are a helpful storyteller.",
        },
        callbacks: {
          onopen: () => {
            console.log("Gemini Live Session Opened");
            setIsConnected(true);
            setIsConnecting(false);
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onmessage: (message: any) => {
            handleServerMessage(message);
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onclose: (event: any) => {
            console.log("Gemini Live Session Closed", event);
            setIsConnected(false);
            setIsConnecting(false);
            stopAudio();
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onerror: (err: any) => {
            console.error("Gemini Live Session Error", err);
            setError(err.message || "Connection error");
            setIsConnected(false);
            setIsConnecting(false);
            stopAudio();
          },
        },
      });

      sessionRef.current = session;

      // Start microphone immediately after connection
      await startAudio();
    } catch (err: unknown) {
      console.error("Failed to connect:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to connect to Gemini Live API"
      );
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambient Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />

      <div className="z-10 flex flex-col items-center gap-8 max-w-md w-full">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">
            Gemini Live Interview
          </h1>
          <p className="text-gray-400">Real-time voice interaction with VAD</p>
        </div>

        {/* Main Visualizer Circle */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* AI Speaking Pulse */}
          <AnimatePresence>
            {aiSpeaking && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0.5 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl"
              />
            )}
          </AnimatePresence>

          {/* User Speaking Pulse (VAD Visual) */}
          <motion.div
            animate={{
              scale: 1 + (audioLevel / 255) * 0.5,
              boxShadow: isMicOn
                ? `0 0 ${audioLevel / 5}px ${
                    audioLevel / 10
                  }px rgba(147, 51, 234, 0.5)`
                : "none",
            }}
            className={cn(
              "w-40 h-40 rounded-full flex items-center justify-center transition-colors duration-300",
              isConnected
                ? "bg-linear-to-br from-blue-600 to-purple-600"
                : "bg-gray-800",
              aiSpeaking && "from-blue-400 to-cyan-400"
            )}
          >
            {isConnected ? (
              <Volume2
                className={cn(
                  "w-12 h-12 text-white",
                  aiSpeaking && "animate-pulse"
                )}
              />
            ) : (
              <Power className="w-12 h-12 text-gray-400" />
            )}
          </motion.div>

          {/* Orbiting Particles (Decoration) */}
          {isConnected && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
            </motion.div>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-4 w-full">
          {error && (
            <div className="flex items-center gap-2 text-red-400 bg-red-900/20 px-4 py-2 rounded-lg text-sm">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          {!isConnected ? (
            <Button
              size="lg"
              onClick={connectToGemini}
              disabled={isConnecting}
              className="w-full bg-white text-black hover:bg-gray-200 transition-all rounded-full h-12 font-medium"
            >
              {isConnecting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Start Interview"
              )}
            </Button>
          ) : (
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "w-14 h-14 rounded-full border-2 transition-all",
                  isMicOn
                    ? "border-purple-500 bg-purple-500/10 text-purple-400"
                    : "border-gray-700 text-gray-500"
                )}
                onClick={() => {
                  if (mediaStreamRef.current) {
                    mediaStreamRef.current.getAudioTracks().forEach((track) => {
                      track.enabled = !track.enabled;
                    });
                    setIsMicOn((prev) => !prev);
                  }
                }}
              >
                {isMicOn ? (
                  <Mic className="w-6 h-6" />
                ) : (
                  <MicOff className="w-6 h-6" />
                )}
              </Button>

              <Button
                variant="destructive"
                size="icon"
                className="w-14 h-14 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500/30 border-2 border-red-500/50"
                onClick={disconnect}
              >
                <Power className="w-6 h-6" />
              </Button>
            </div>
          )}
        </div>

        <div className="text-xs text-gray-600 max-w-xs text-center">
          Powered by Gemini 2.5 Flash Native Audio. <br />
          Ensure your microphone is enabled.
        </div>
      </div>
    </div>
  );
}
