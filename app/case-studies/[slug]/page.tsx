import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { caseStudies } from "@/lib/case-studies-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Quote, Clock } from "lucide-react"

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }))
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.id === slug)

  if (!study) {
    notFound()
  }

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white/60 hover:text-cyan text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-cyan/20 text-cyan text-xs font-semibold rounded-full">{study.industry}</span>
            <span className="flex items-center gap-2 text-white/50 text-sm">
              <Clock className="w-4 h-4" />
              {study.timeline}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight text-balance">
            {study.title}
          </h1>
          <p className="text-white/70 text-lg">{study.company}</p>
        </div>
      </section>

      {/* Results Banner */}
      <section className="bg-navy border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((result, i) => (
              <div key={i} className="text-center">
                <span className="text-cyan font-heading font-bold text-3xl sm:text-4xl">{result.value}</span>
                <p className="text-white/60 text-sm mt-1">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-bg-mid p-8 md:p-12 space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">The Challenge</h2>
              <p className="text-text-muted leading-relaxed text-lg">{study.challenge}</p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-6">Our Approach</h2>
              <div className="space-y-4">
                {study.approach.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-cyan font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-text-muted leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {study.techUsed.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-bg-light text-text-muted text-sm font-medium rounded-lg border border-bg-mid"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results Detail */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-6">Results</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {study.results.map((result, i) => (
                  <div key={i} className="bg-bg-light rounded-xl p-6 border border-bg-mid">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green" />
                      <span className="text-cyan font-heading font-bold text-2xl">{result.value}</span>
                    </div>
                    <p className="text-text-muted">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-navy rounded-xl p-8">
              <Quote className="w-10 h-10 text-cyan/30 mb-4" />
              <p className="text-white text-lg leading-relaxed mb-6">&ldquo;{study.testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center">
                  <span className="text-cyan font-bold text-lg">{study.testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{study.testimonial.name}</p>
                  <p className="text-white/60 text-sm">
                    {study.testimonial.role}, {study.testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
