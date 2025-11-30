import { Zap, Rocket, Puzzle, MessageSquare } from "lucide-react"

const props = [
  {
    icon: Zap,
    title: "Automate Repetitive Workflows",
    description: "Eliminate manual tasks with intelligent automation that learns and adapts to your processes.",
  },
  {
    icon: Rocket,
    title: "Ship MVPs Faster with AI",
    description: "Go from concept to production in weeks, not months, with AI-accelerated development.",
  },
  {
    icon: Puzzle,
    title: "Integrate Your Existing Tools",
    description: "Connect your current tech stack seamlessly with custom APIs and data pipelines.",
  },
  {
    icon: MessageSquare,
    title: "Consulting That Speaks Both",
    description: "We bridge the gap between business strategy and technical implementation.",
  },
]

export function ValueProps() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-6 border border-bg-mid hover:border-cyan/30 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
                <prop.icon className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-lg mb-2">{prop.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
