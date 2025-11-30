import { Code2, Bot, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with modern, battle-tested technologies that scale with your business.",
    features: ["Web applications & SaaS platforms", "Internal tools & dashboards", "API integrations & microservices"],
  },
  {
    icon: Bot,
    title: "AI Automation & Workflows",
    description: "Transform manual processes into intelligent, automated workflows powered by the latest AI.",
    features: ["Process automation & RPA", "LLM-based agents & assistants", "Data pipelines & ETL"],
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Consultancy",
    description: "Navigate the AI landscape with expert guidance tailored to your specific industry and goals.",
    features: ["AI roadmapping & audits", "PoC development & experimentation", "Team training & workshops"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4 tracking-tight">
            What We Do
          </h2>
          <p className="text-text-muted text-lg">End-to-end software and AI automation for modern teams.</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-bg-light rounded-2xl p-8 border border-bg-mid hover:border-cyan/40 transition-all hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white border-2 border-cyan/30 flex items-center justify-center mb-6 group-hover:border-cyan transition-colors">
                <service.icon className="w-7 h-7 text-cyan" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-xl text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-muted mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0" />
                    <span className="text-text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-cyan font-medium text-sm mt-6 group-hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
