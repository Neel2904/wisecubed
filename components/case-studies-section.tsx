import { ArrowRight, TrendingDown, Zap, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    industry: "Fintech",
    company: "PayFlow Inc.",
    challenge: "Manual invoice processings taking 40+ hours weekly",
    solution: "AI-powered document extraction and automated workflow",
    results: [
      { icon: TrendingDown, value: "-85%", label: "Manual Work" },
      { icon: Zap, value: "3x", label: "Faster Processing" },
    ],
  },
  {
    industry: "Healthcare",
    company: "MedCare Solutions",
    challenge: "Patient data entry errors and compliance risks",
    solution: "Intelligent data validation with automated compliance checks",
    results: [
      { icon: CheckCircle2, value: "99.2%", label: "Accuracy" },
      { icon: TrendingDown, value: "-60%", label: "Error Rate" },
    ],
  },
  {
    industry: "E-commerce",
    company: "RetailNext",
    challenge: "Customer support overwhelmed with repetitive queries",
    solution: "AI chatbot with smart routing and automated responses",
    results: [
      { icon: Zap, value: "90%", label: "Auto-Resolved" },
      { icon: TrendingDown, value: "-70%", label: "Response Time" },
    ],
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-2 tracking-tight">
              Proven Outcomes
            </h2>
            <p className="text-text-muted text-lg">Real results from real projects.</p>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-cyan font-semibold hover:gap-3 transition-all"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <Link
              key={i}
              href="/case-studies"
              className="group bg-bg-light rounded-2xl p-6 border border-bg-mid hover:border-cyan/40 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Industry tag */}
              <span className="inline-block px-3 py-1 bg-cyan/10 text-cyan text-xs font-semibold rounded-full mb-4">
                {study.industry}
              </span>

              {/* Company */}
              <h3 className="font-heading font-bold text-lg text-text-primary mb-3">{study.company}</h3>

              {/* Challenge & Solution */}
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-text-muted text-xs uppercase tracking-wide font-medium">Challenge</span>
                  <p className="text-text-primary text-sm mt-1">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-text-muted text-xs uppercase tracking-wide font-medium">Solution</span>
                  <p className="text-text-primary text-sm mt-1">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="flex gap-4 pt-4 border-t border-bg-mid">
                {study.results.map((result, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <result.icon className="w-4 h-4 text-green" />
                    <div>
                      <span className="text-text-primary font-bold text-lg">{result.value}</span>
                      <span className="text-text-muted text-xs ml-1">{result.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
