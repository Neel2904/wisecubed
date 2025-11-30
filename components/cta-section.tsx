import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.03] noise-texture" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
          Ready to Automate What Matters?
        </h2>
        <p className="text-white/70 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Let&apos;s map your next 90 days of AI & software improvements. No sales pitch, just a strategy conversation.
        </p>

        <Link href="/contact">
          <Button
            size="lg"
            className="bg-cyan text-navy font-semibold hover:bg-cyan/90 btn-hover text-base px-10 h-14 tracking-wide group"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book a Free 30-Min Strategy Call
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

        <p className="text-white/50 text-sm mt-6">We typically respond within 24 hours</p>
      </div>
    </section>
  )
}
