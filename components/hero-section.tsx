"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { HeroVisual } from "./hero-visual"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy/90" />
      <div className="absolute inset-0 opacity-[0.03] noise-texture" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/5">
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-cyan text-xs font-semibold tracking-[0.1em] uppercase">
                Software • AI • Automation
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight text-balance">
              We Build AI-Powered Systems That <span className="text-cyan">Actually Ship</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl">
              We help businesses design, build, and automate custom software using AI — from internal tools to
              end-to-end workflows. No hype, just results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-cyan text-navy font-semibold hover:bg-cyan/90 btn-hover text-base px-8 h-12 tracking-wide group"
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan text-cyan hover:bg-cyan/10 hover:text-cyan text-base px-8 h-12 tracking-wide bg-transparent"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm mb-4">Trusted by teams across</p>
              <div className="flex flex-wrap items-center gap-6">
                {["Fintech", "Healthcare", "SaaS", "E-commerce", "Logistics"].map((industry) => (
                  <span key={industry} className="text-white/40 text-sm font-medium">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
