import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Target, Zap, Users, Shield, Lightbulb, Heart } from "lucide-react"

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "Former Google engineer with 12+ years building scalable systems. Passionate about bridging the gap between AI research and real-world business applications.",
    initial: "AT",
  },
  {
    name: "Sarah Martinez",
    role: "CTO",
    bio: "Led engineering teams at Stripe and Palantir. Expert in distributed systems and AI infrastructure.",
    initial: "SM",
  },
  {
    name: "James Chen",
    role: "Head of AI",
    bio: "PhD in Machine Learning from Stanford. Previously built AI products at OpenAI and Anthropic.",
    initial: "JC",
  },
  {
    name: "Maya Patel",
    role: "Head of Engineering",
    bio: "Full-stack architect with experience shipping products to millions of users at Airbnb and Notion.",
    initial: "MP",
  },
]

const values = [
  {
    icon: Target,
    title: "Ship What Matters",
    description: "We focus on outcomes, not outputs. Every line of code should move the needle for your business.",
  },
  {
    icon: Zap,
    title: "Speed with Substance",
    description: "We move fast, but we don't cut corners. Quality and velocity aren't mutually exclusive.",
  },
  {
    icon: Users,
    title: "Partners, Not Vendors",
    description: "We embed with your team, understand your context, and take ownership of results.",
  },
  {
    icon: Shield,
    title: "No Hype, No Jargon",
    description: "We communicate clearly about what AI can and can't do. We under-promise and over-deliver.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "The AI landscape evolves daily. We stay current so you don't have to.",
  },
  {
    icon: Heart,
    title: "Human-Centered AI",
    description: "Technology should augment humans, not replace them. We design with people in mind.",
  },
]

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12M+", label: "Tasks Automated" },
  { value: "98%", label: "Client Retention" },
  { value: "5+", label: "Years Experience" },
]

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">About Us</h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              We&apos;re a team of engineers, AI specialists, and business strategists who believe software should solve
              real problems—not create new ones.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-navy border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-cyan font-heading font-bold text-4xl sm:text-5xl">{stat.value}</span>
                <p className="text-white/60 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6 tracking-tight">
                Why We Exist
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  We founded NexusAI after watching too many businesses struggle with the same problems: manual
                  processes that eat up time, off-the-shelf software that doesn&apos;t quite fit, and AI hype that never
                  delivers.
                </p>
                <p>
                  The truth is, AI and custom software can transform how you work—but only when built by people who
                  understand both the technology and the business context.
                </p>
                <p>
                  We&apos;ve sat in the engineering seats at companies like Google, Stripe, and OpenAI. We&apos;ve seen
                  what works and what doesn&apos;t. And we&apos;ve built NexusAI to be the partner we wished existed
                  when we were on the other side.
                </p>
                <p className="font-medium text-text-primary">
                  Our mission: make AI and software actually work for your business—quietly, reliably, and measurably.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="bg-white rounded-2xl border border-bg-mid p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Founded", value: "2020" },
                  { label: "Team Size", value: "15+" },
                  { label: "HQ", value: "San Francisco" },
                  { label: "Working Hours", value: "Global" },
                ].map((item, i) => (
                  <div key={i} className="bg-bg-light rounded-xl p-6 text-center">
                    <p className="text-text-muted text-sm mb-1">{item.label}</p>
                    <p className="text-text-primary font-heading font-bold text-xl">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4 tracking-tight">
              Leadership Team
            </h2>
            <p className="text-text-muted text-lg">
              Engineers and operators who&apos;ve built at scale—now building for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-bg-light rounded-2xl p-6 border border-bg-mid text-center hover:border-cyan/30 transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan font-heading font-bold text-2xl">{member.initial}</span>
                </div>
                <h3 className="font-heading font-bold text-text-primary text-lg">{member.name}</h3>
                <p className="text-cyan text-sm font-medium mb-3">{member.role}</p>
                <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4 tracking-tight">
              Our Principles
            </h2>
            <p className="text-text-muted text-lg">The values that guide how we work and what we build.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-bg-mid">
                <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="font-heading font-bold text-text-primary text-lg mb-2">{value.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
