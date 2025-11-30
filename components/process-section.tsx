import { Search, Pencil, Hammer, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We dive deep into your business processes, challenges, and goals to identify the highest-impact opportunities.",
  },
  {
    icon: Pencil,
    title: "Design",
    description: "We architect solutions that balance technical excellence with practical implementation timelines.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Our team develops and deploys your solution using agile sprints with continuous feedback loops.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description: "We monitor performance, gather insights, and continuously improve your systems over time.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4 tracking-tight">
            How We Work Together
          </h2>
          <p className="text-text-muted text-lg">A proven process that delivers results without the chaos.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-cyan/20 via-cyan to-cyan/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Step number & icon */}
                <div className="relative inline-block mb-6">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-cyan flex items-center justify-center mx-auto shadow-lg shadow-cyan/10">
                    <step.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan flex items-center justify-center">
                    <span className="text-navy text-xs font-bold">{i + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
