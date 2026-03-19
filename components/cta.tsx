"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#FFD100]/20 via-[#9333EA]/10 to-transparent blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#6B21A8]/20 bg-[#6B21A8]/5 px-5 py-2 text-sm text-[#6B21A8]">
          <Sparkles className="h-4 w-4" />
          <span>Limited Early Access</span>
        </div>

        <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Ready to Never Wait for an{" "}
          <span className="bg-gradient-to-r from-[#FFD100] to-[#6B21A8] bg-clip-text text-transparent">
            Auto Again?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-gray-600">
          Join 12,000+ Bangalore commuters on the waitlist. Early subscribers
          get lifetime SurgeShield access and priority onboarding.
        </p>

        {/* Waitlist Form */}
        <div className="mx-auto mt-10 max-w-md">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-[#FFD100] focus:outline-none focus:ring-2 focus:ring-[#FFD100]/20"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="group h-14 bg-gradient-to-r from-[#FFD100] to-amber-500 px-8 text-base font-semibold text-[#0F0F0F] transition-all hover:shadow-[0_0_40px_rgba(255,209,0,0.4)]"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          ) : (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-5 w-5 text-white"
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
                <div className="text-left">
                  <p className="font-semibold text-green-800">
                    You're on the list!
                  </p>
                  <p className="text-sm text-green-600">
                    We'll notify you when we launch in your area.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-[#FFD100] to-[#6B21A8]"
                style={{
                  backgroundImage: `linear-gradient(${45 + i * 30}deg, #FFD100, #6B21A8)`,
                }}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">12,847</span> people
            on the waitlist
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 border-t border-gray-100 pt-12">
          <p className="mb-6 text-sm text-gray-500">Backed by</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-500 text-xs font-bold text-white">
                Y
              </div>
              <span className="font-medium text-gray-600">Combinator</span>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <span className="text-sm text-gray-500">Featured in</span>
            <span className="font-semibold text-gray-700">TechCrunch</span>
            <span className="font-semibold text-gray-700">YourStory</span>
          </div>
        </div>
      </div>
    </section>
  );
}
