import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Code2, Bot, Lightbulb, CheckCircle2, Users, Clock, Shield, Zap } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored solutions built with modern, battle-tested technologies that scale with your business. From MVPs to enterprise systems.",
    idealFor:
      "Businesses needing custom internal tools, SaaS platforms, or complex integrations that off-the-shelf software can't provide.",
    deliverables: [
      "Full-stack web applications",
      "Internal dashboards & admin tools",
      "API development & integrations",
      "Database design & optimization",
      "Cloud infrastructure setup",
      "CI/CD pipelines & DevOps",
    ],
    benefits: [
      { icon: Zap, text: "Ship MVPs in 4-8 weeks" },
      { icon: Shield, text: "Enterprise-grade security" },
      { icon: Users, text: "Scalable architecture" },
    ],
  },
  {
    icon: Bot,
    title: "AI Automation & Workflows",
    description:
      "Transform manual, repetitive processes into intelligent, automated workflows powered by the latest AI technologies.",
    idealFor:
      "Teams drowning in repetitive tasks, data entry, customer support tickets, or manual reporting processes.",
    deliverables: [
      "Process automation & RPA",
      "LLM-based agents & assistants",
      "Document processing & extraction",
      "Intelligent routing & triage",
      "Data pipelines & ETL",
      "Custom AI model fine-tuning",
    ],
    benefits: [
      { icon: Clock, text: "Save 20+ hours/week" },
      { icon: CheckCircle2, text: "99%+ accuracy" },
      { icon: Zap, text: "24/7 automation" },
    ],
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Consultancy",
    description:
      "Navigate the AI landscape with expert guidance. We help you identify opportunities, validate ideas, and build a practical roadmap.",
    idealFor:
      "Leaders exploring AI adoption but unsure where to start, what's possible, or how to prioritize initiatives.",
    deliverables: [
      "AI opportunity assessment",
      "Technical feasibility analysis",
      "ROI modeling & business cases",
      "Proof-of-concept development",
      "Vendor evaluation & selection",
      "Team training & workshops",
    ],
    benefits: [
      { icon: Lightbulb, text: "Clear AI roadmap" },
      { icon: Shield, text: "Risk-aware planning" },
      { icon: Users, text: "Team enablement" },
    ],
  },
]

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. MVPs and automations typically take 4-8 weeks. Larger enterprise projects may span 3-6 months. We always start with a scoping session to provide accurate estimates.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We've delivered successful projects across fintech, healthcare, e-commerce, logistics, SaaS, and professional services. Our approach is adaptable to any industry with complex processes or data.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, we offer flexible maintenance and support packages. This includes bug fixes, performance monitoring, feature updates, and scaling support as your needs grow.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Security is built into our process from day one. We follow industry best practices, implement proper authentication and encryption, and can work within specific compliance frameworks (HIPAA, SOC 2, GDPR).",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer both project-based and retainer engagements depending on your needs. After an initial scoping call, we provide transparent, fixed-price quotes with clearly defined deliverables.",
  },
  {
    question: "Can you work with our existing tech stack?",
    answer:
      "Absolutely. We're experienced in integrating with existing systems and can adapt to your current infrastructure. We prioritize solutions that complement rather than replace what's working.",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">Services</h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              End-to-end software and AI automation for modern teams. From strategy to deployment, we handle the
              complexity so you can focus on growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl border border-bg-mid overflow-hidden">
              <div className="grid lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center shrink-0">
                      <service.icon className="w-7 h-7 text-cyan" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                        {service.title}
                      </h2>
                      <p className="text-text-muted leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="bg-bg-light rounded-xl p-6 mb-8">
                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">Ideal For</h3>
                    <p className="text-text-primary">{service.idealFor}</p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary text-lg mb-4">What You Get</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green shrink-0" />
                          <span className="text-text-muted">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Benefits Sidebar */}
                <div className="bg-navy p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-6">Key Benefits</h3>
                  <div className="space-y-6">
                    {service.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center">
                          <benefit.icon className="w-5 h-5 text-cyan" />
                        </div>
                        <span className="text-white font-medium">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted text-lg">Common questions about working with us.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-bg-light rounded-xl border border-bg-mid px-6">
                <AccordionTrigger className="text-left font-heading font-semibold text-text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
