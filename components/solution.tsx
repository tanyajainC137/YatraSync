"use client";

import { Smartphone, MapPin, Zap, Shield, QrCode, Trophy } from "lucide-react";

export function Solution() {
  const features = [
    {
      icon: Smartphone,
      title: "Station Beacons + Accelerometer",
      description:
        "We pinpoint exactly which metro coach you're in using a combination of BLE beacons and your phone's accelerometer data.",
      gradient: "from-[#FFD100] to-amber-500",
    },
    {
      icon: MapPin,
      title: "Exit Time Calculation",
      description:
        "Real-time walking time from your specific coach to the nearest exit, accounting for crowd density and escalator status.",
      gradient: "from-[#9333EA] to-[#6B21A8]",
    },
    {
      icon: Zap,
      title: "Auto Pre-Dispatch",
      description:
        "Your auto is dispatched to a designated 'Fast-Track' pillar just as you approach the exit. Zero wait time.",
      gradient: "from-[#FFD100] to-amber-500",
    },
    {
      icon: QrCode,
      title: "QR Gate Triggers",
      description:
        "When you tap out, the driver's 'Wait-Time' countdown begins. Perfect synchronization every time.",
      gradient: "from-[#9333EA] to-[#6B21A8]",
    },
    {
      icon: Trophy,
      title: "Priority Tokens",
      description:
        "Drivers earn 'Priority Tokens' for successful YatraSync pickups, unlocking next high-value rides.",
      gradient: "from-[#FFD100] to-amber-500",
    },
    {
      icon: Shield,
      title: "SurgeShield AI",
      description:
        "Predicts crowds 30 mins ahead. Subscribers get locked fixed fares via pooled funds. No surge, ever.",
      gradient: "from-[#9333EA] to-[#6B21A8]",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FFD100]/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#6B21A8]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#FFD100]">
            The Solution
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Multimodal Magic,{" "}
            <span className="bg-gradient-to-r from-[#FFD100] to-[#6B21A8] bg-clip-text text-transparent">
              One Tap
            </span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-gray-600">
            We've rebuilt the last-mile from the ground up. Hardware meets
            software meets incentive design.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-transparent hover:shadow-2xl"
            >
              {/* Icon */}
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient}`}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>

              {/* Hover Gradient Border */}
              <div
                className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                style={{ padding: "1px" }}
              />
            </div>
          ))}
        </div>

        {/* Tech Stack Visual */}
        <div className="mt-20">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Visual - Animated Map */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-1">
                <div className="relative h-80 overflow-hidden rounded-xl bg-[#e8e4d8] lg:h-96">
                  {/* Map Grid Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9ca3af" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                  
                  {/* Roads */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300">
                    {/* Main roads */}
                    <path d="M 0 150 L 400 150" stroke="#d1d5db" strokeWidth="20" fill="none"/>
                    <path d="M 200 0 L 200 300" stroke="#d1d5db" strokeWidth="16" fill="none"/>
                    <path d="M 50 80 L 350 220" stroke="#d1d5db" strokeWidth="8" fill="none"/>
                    
                    {/* Metro Line - Purple */}
                    <path d="M 30 50 L 100 90 L 200 90 L 320 130" stroke="#6B21A8" strokeWidth="6" fill="none" strokeLinecap="round"/>
                    <circle cx="100" cy="90" r="8" fill="#6B21A8" stroke="white" strokeWidth="2"/>
                    <circle cx="200" cy="90" r="10" fill="#FFD100" stroke="#6B21A8" strokeWidth="3"/>
                    <circle cx="320" cy="130" r="8" fill="#6B21A8" stroke="white" strokeWidth="2"/>
                    
                    {/* Animated route from metro to pickup */}
                    <path d="M 200 90 L 200 150 L 280 150" stroke="#FFD100" strokeWidth="4" fill="none" strokeDasharray="8,4" className="animate-pulse"/>
                    
                    {/* Auto icon position */}
                    <circle cx="280" cy="150" r="12" fill="#FFD100" stroke="white" strokeWidth="2"/>
                    <text x="280" y="154" textAnchor="middle" fill="#0F0F0F" fontSize="10" fontWeight="bold">A</text>
                    
                    {/* User walking path */}
                    <circle cx="200" cy="90" r="6" fill="#6B21A8"/>
                    <circle cx="200" cy="120" r="4" fill="#6B21A8" opacity="0.6"/>
                    <circle cx="200" cy="150" r="4" fill="#6B21A8" opacity="0.4"/>
                  </svg>
                  
                  {/* Location labels */}
                  <div className="absolute left-[22%] top-[20%] rounded bg-white/90 px-2 py-1 text-xs font-medium text-[#6B21A8] shadow-sm">
                    MG Road
                  </div>
                  <div className="absolute left-[45%] top-[22%] rounded-lg bg-[#6B21A8] px-2 py-1 text-xs font-bold text-white shadow-lg">
                    Indiranagar
                  </div>
                  <div className="absolute right-[15%] top-[35%] rounded bg-white/90 px-2 py-1 text-xs font-medium text-[#6B21A8] shadow-sm">
                    Trinity
                  </div>
                  
                  {/* Pickup indicator */}
                  <div className="absolute right-[25%] top-[45%] flex items-center gap-1.5 rounded-full bg-[#FFD100] px-3 py-1.5 shadow-lg">
                    <div className="h-2 w-2 animate-ping rounded-full bg-[#0F0F0F]"/>
                    <span className="text-xs font-bold text-[#0F0F0F]">Auto Arriving</span>
                  </div>
                  
                  {/* Walking time badge */}
                  <div className="absolute left-[48%] top-[38%] rounded bg-white px-2 py-1 text-xs shadow">
                    <span className="font-semibold text-[#6B21A8]">2 min</span> walk
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -right-4 -top-4 rounded-xl bg-gradient-to-br from-[#FFD100] to-amber-500 p-3 shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-xl bg-gradient-to-br from-[#6B21A8] to-[#9333EA] p-3 shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                  How It Actually Works
                </h3>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      num: "01",
                      title: "Board Metro",
                      desc: "Our beacons detect which coach you enter",
                    },
                    {
                      num: "02",
                      title: "Journey Tracking",
                      desc: "Real-time position updated via accelerometer fusion",
                    },
                    {
                      num: "03",
                      title: "Smart Dispatch",
                      desc: "Auto sent to your optimal exit 2 mins before arrival",
                    },
                    {
                      num: "04",
                      title: "QR Sync",
                      desc: "Tap out triggers driver countdown — perfect timing",
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD100] to-[#6B21A8] text-sm font-bold text-white">
                        {step.num}
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
