"use client";

export function Market() {
  const metrics = [
    { value: "15M", label: "Daily Commuters in Bangalore" },
    { value: "₹2.4B", label: "Last-mile market (annual)" },
    { value: "73%", label: "Use metro + auto combo" },
    { value: "4.2M", label: "Target addressable users" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0F0F0F] py-24 lg:py-32">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gradient Orbs */}
      <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-[#FFD100]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-[#6B21A8]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#FFD100]">
            Market Opportunity
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Bangalore is Just the{" "}
            <span className="bg-gradient-to-r from-[#FFD100] to-[#9333EA] bg-clip-text text-transparent">
              Beginning
            </span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-8 text-center backdrop-blur-sm transition-all hover:border-[#FFD100]/30"
            >
              <p className="bg-gradient-to-r from-[#FFD100] to-[#9333EA] bg-clip-text text-5xl font-bold text-transparent">
                {metric.value}
              </p>
              <p className="mt-3 text-sm text-gray-400">{metric.label}</p>
              {/* Glow on hover */}
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD100]/5 to-[#6B21A8]/5" />
              </div>
            </div>
          ))}
        </div>

        {/* Map Visualization */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-[#0F0F0F] p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left - City Expansion */}
            <div>
              <h3 className="text-2xl font-bold text-white lg:text-3xl">
                Expansion Roadmap
              </h3>
              <p className="mt-4 text-gray-400">
                Starting with Namma Metro's 75+ stations, then scaling to every
                Indian metro system.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    city: "Bangalore",
                    status: "Launch",
                    year: "2025",
                    color: "#FFD100",
                  },
                  {
                    city: "Hyderabad",
                    status: "Pilot",
                    year: "2025",
                    color: "#9333EA",
                  },
                  {
                    city: "Chennai",
                    status: "Planning",
                    year: "2026",
                    color: "#6B21A8",
                  },
                  {
                    city: "Mumbai",
                    status: "Pipeline",
                    year: "2026",
                    color: "#FFD100",
                  },
                  {
                    city: "Delhi NCR",
                    status: "Pipeline",
                    year: "2027",
                    color: "#9333EA",
                  },
                ].map((city) => (
                  <div
                    key={city.city}
                    className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: city.color }}
                      />
                      <span className="font-medium text-white">{city.city}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: `${city.color}20`,
                          color: city.color,
                        }}
                      >
                        {city.status}
                      </span>
                      <span className="text-sm text-gray-500">{city.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative h-72 w-72 lg:h-80 lg:w-80">
                {/* Concentric Circles */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-gray-700/50"
                    style={{
                      transform: `scale(${i * 0.25})`,
                      opacity: 1 - i * 0.2,
                    }}
                  />
                ))}
                {/* Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-[#FFD100]/20" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD100] to-[#9333EA]">
                      <span className="text-2xl font-bold text-white">BLR</span>
                    </div>
                  </div>
                </div>
                {/* Other cities */}
                {[
                  { name: "HYD", angle: 45, distance: 120 },
                  { name: "CHN", angle: 135, distance: 140 },
                  { name: "MUM", angle: 225, distance: 130 },
                  { name: "DEL", angle: 315, distance: 150 },
                ].map((city) => {
                  const x =
                    Math.cos((city.angle * Math.PI) / 180) * city.distance;
                  const y =
                    Math.sin((city.angle * Math.PI) / 180) * city.distance;
                  return (
                    <div
                      key={city.name}
                      className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 bg-gray-800/80 text-xs font-medium text-gray-300"
                      style={{
                        transform: `translate(${x - 20}px, ${y - 20}px)`,
                      }}
                    >
                      {city.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Data Moat */}
        <div className="mt-12 rounded-2xl border border-[#FFD100]/20 bg-gradient-to-r from-[#FFD100]/10 to-transparent p-6 lg:p-8">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white">
                Building the Data Moat
              </h4>
              <p className="mt-2 text-gray-400">
                Every ride creates proprietary data: crowd patterns, exit times,
                driver behavior. This data moat compounds over time, making
                YatraSync impossible to replicate.
              </p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#FFD100]">10M+</p>
                <p className="text-xs text-gray-500">Data points/month</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#9333EA]">94%</p>
                <p className="text-xs text-gray-500">Prediction accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
