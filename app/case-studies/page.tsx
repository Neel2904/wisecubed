import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { caseStudies } from "@/lib/case-studies-data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">Case Studies</h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              Real results from real projects. See how we&apos;ve helped businesses automate operations, build custom
              software, and implement AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="bg-bg-light border-b border-bg-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-cyan text-navy text-sm font-semibold rounded-full">All</span>
            {["Fintech", "Healthcare", "E-commerce", "Logistics", "SaaS"].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 bg-white text-text-muted text-sm font-medium rounded-full border border-bg-mid hover:border-cyan hover:text-cyan transition-colors cursor-pointer"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.id}`}
                className="group bg-white rounded-2xl border border-bg-mid hover:border-cyan/40 transition-all hover:shadow-xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-navy p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan/20 text-cyan text-xs font-semibold rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-white/50 text-sm">{study.timeline}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{study.company}</h3>
                  <p className="text-white/70 text-sm">{study.title}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-text-muted mb-6 leading-relaxed">{study.summary}</p>

                  {/* Results Preview */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 2).map((result, i) => (
                      <div key={i} className="bg-bg-light rounded-lg p-3">
                        <span className="text-cyan font-bold text-xl">{result.value}</span>
                        <p className="text-text-muted text-xs mt-1">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Read more */}
                  <div className="flex items-center gap-2 text-cyan font-medium text-sm group-hover:gap-3 transition-all">
                    Read full case study
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
