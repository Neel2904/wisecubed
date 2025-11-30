"use client"

import { useEffect, useState } from "react"

export function HeroVisual() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative">
      {/* Dashboard mockup */}
      <div className="relative bg-navy/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        {/* Window controls */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-white/40 text-xs font-mono">automation-dashboard.ai</span>
        </div>

        {/* Dashboard content */}
        <div className="space-y-4">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Tasks Automated", value: "12,847", change: "+24%" },
              { label: "Time Saved", value: "340h", change: "+18%" },
              { label: "Accuracy", value: "99.2%", change: "+0.3%" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`bg-white/5 rounded-lg p-3 border border-white/5 ${
                  mounted ? "animate-in fade-in slide-in-from-bottom-2" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
              >
                <p className="text-white/50 text-xs mb-1">{stat.label}</p>
                <p className="text-white font-heading font-bold text-lg">{stat.value}</p>
                <span className="text-green text-xs font-medium">{stat.change}</span>
              </div>
            ))}
          </div>

          {/* Workflow visualization */}
          <div className="bg-white/5 rounded-lg p-4 border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/60 text-sm">Active Workflows</span>
              <span className="px-2 py-1 bg-green/20 text-green text-xs rounded-full font-medium">LIVE</span>
            </div>

            {/* Workflow nodes */}
            <div className="flex items-center justify-between">
              {["Input", "Process", "AI Agent", "Output"].map((node, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      i === 2 ? "bg-cyan/20 border-cyan" : "bg-white/10 border-white/10"
                    } border`}
                  >
                    <span className="text-xs text-white/80">{i + 1}</span>
                  </div>
                  {i < 3 && <div className="w-8 h-px bg-gradient-to-r from-white/20 to-cyan/40 mx-1" />}
                </div>
              ))}
            </div>
          </div>

          {/* Activity feed */}
          <div className="space-y-2">
            {[
              { time: "2s ago", action: "Invoice processed automatically", status: "success" },
              { time: "15s ago", action: "Customer query routed to AI", status: "success" },
              { time: "1m ago", action: "Report generated & sent", status: "success" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 ${
                  mounted ? "animate-in fade-in slide-in-from-right-2" : "opacity-0"
                }`}
                style={{ animationDelay: `${300 + i * 150}ms`, animationFillMode: "forwards" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                  <span className="text-white/70 text-sm">{item.action}</span>
                </div>
                <span className="text-white/40 text-xs">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan/5 rounded-full blur-3xl" />
    </div>
  )
}
