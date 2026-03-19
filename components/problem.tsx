"use client";

import { Clock, AlertTriangle, TrendingUp, Users } from "lucide-react";

export function Problem() {
  const painPoints = [
    {
      icon: Clock,
      stat: "23 min",
      label: "Average wait time for auto at metro exit",
      color: "#FFD100",
    },
    {
      icon: AlertTriangle,
      stat: "3.2x",
      label: "Surge pricing during peak hours",
      color: "#EF4444",
    },
    {
      icon: TrendingUp,
      stat: "₹847Cr",
      label: "Lost annually to commuter inefficiency",
      color: "#9333EA",
    },
    {
      icon: Users,
      stat: "68%",
      label: "Miss connections due to last-mile chaos",
      color: "#FFD100",
    },
  ];

  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#6B21A8]">
            The Problem
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Silk Board Syndrome is{" "}
            <span className="text-[#6B21A8]">Everywhere</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-gray-600">
            Bangalore's infamous traffic chaos doesn't end when you exit the
            metro. The last mile is broken.
          </p>
        </div>

        {/* Infographic Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 transition-all hover:border-[#6B21A8]/30 hover:shadow-xl"
            >
              <div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${point.color}20` }}
              >
                <point.icon className="h-6 w-6" style={{ color: point.color }} />
              </div>
              <p
                className="text-4xl font-bold"
                style={{ color: point.color }}
              >
                {point.stat}
              </p>
              <p className="mt-2 text-sm text-gray-600">{point.label}</p>
              {/* Decorative gradient */}
              <div
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10 transition-opacity group-hover:opacity-20"
                style={{ backgroundColor: point.color }}
              />
            </div>
          ))}
        </div>

        {/* Silk Board Visual */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F0F0F] to-[#1a1a2e] p-8 lg:p-12">
          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left - The Chaos */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-400">
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                Current Reality
              </div>
              <h3 className="text-2xl font-bold text-white lg:text-3xl">
                The Daily Commuter Nightmare
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Exit metro → Run to find auto → Negotiate fare",
                  "Surge pricing catches you off-guard",
                  "15-30 min wait in sun/rain for a ride",
                  "Miss important meetings, lose productivity",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - The Flow */}
            <div className="relative">
              {/* Connection Lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFD100" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Journey Steps */}
              <div className="space-y-4">
                {[
                  { step: "1", label: "Tap into Metro", time: "9:00 AM" },
                  { step: "2", label: "Coach B3 detected", time: "9:02 AM" },
                  { step: "3", label: "Auto dispatched to Exit 4", time: "9:28 AM" },
                  { step: "4", label: "QR tap out triggers countdown", time: "9:30 AM" },
                  { step: "5", label: "Auto waiting at Pillar 7", time: "9:32 AM" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-[#FFD100]/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD100] to-[#6B21A8] text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-white">{item.label}</p>
                    </div>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        </div>
      </div>
    </section>
  );
}
