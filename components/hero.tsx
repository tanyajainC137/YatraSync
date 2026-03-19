"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0F0F0F]">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FFD100]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#6B21A8]/30 blur-[100px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 lg:flex-row lg:gap-16 lg:py-32">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFD100]/30 bg-[#FFD100]/10 px-4 py-2 text-sm text-[#FFD100]">
            <Sparkles className="h-4 w-4" />
            <span>Backed by Y Combinator W25</span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Auto,{" "}
            <span className="bg-gradient-to-r from-[#FFD100] to-[#FFD100]/80 bg-clip-text text-transparent">
              Waiting
            </span>{" "}
            Before You Exit
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-gray-400 lg:mx-0 lg:text-xl">
            Seamless metro-to-auto transitions. We know exactly which coach
            you're in and dispatch your ride before you even tap out.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button
              size="lg"
              className="group h-14 w-full bg-[#FFD100] px-8 text-lg font-semibold text-[#0F0F0F] transition-all hover:bg-[#FFD100]/90 hover:shadow-[0_0_40px_rgba(255,209,0,0.4)] sm:w-auto"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 w-full border-gray-700 bg-transparent px-8 text-lg text-white hover:border-[#6B21A8] hover:bg-[#6B21A8]/10 hover:text-white sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-[#FFD100]">15M+</p>
              <p className="text-sm text-gray-500">Daily Commuters</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-[#FFD100]">45 min</p>
              <p className="text-sm text-gray-500">Avg. Time Saved</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-[#FFD100]">0</p>
              <p className="text-sm text-gray-500">Surge Pricing</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-12 flex-1 lg:mt-0">
          <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-[#6B21A8]/20 to-transparent p-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DjjPcmxOg07v1hXn3qfm6GugnorWfM.png"
              alt="YatraSync - Woman exiting metro with auto waiting"
              className="w-full rounded-2xl object-cover"
            />
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-gray-700/50 bg-[#0F0F0F]/90 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD100]">
                  <svg
                    className="h-6 w-6 text-[#0F0F0F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">Auto Dispatched</p>
                  <p className="text-sm text-gray-400">
                    Pillar 3, Exit B • Arriving in 47s
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#FFD100]">₹89</p>
                  <p className="text-xs text-gray-500">Fixed fare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-600 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-[#FFD100]" />
        </div>
      </div>
    </section>
  );
}
