import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "They didn't just build what we asked for — they challenged our assumptions and delivered something far better. Our operational efficiency improved by 40% in the first quarter.",
    name: "Sarah Chen",
    role: "COO",
    company: "TechVentures Inc.",
  },
  {
    quote:
      "Finally, a team that speaks both business and tech. They translated our complex requirements into elegant, maintainable solutions.",
    name: "Marcus Johnson",
    role: "VP of Engineering",
    company: "DataFlow Systems",
  },
  {
    quote:
      "The AI automation they built paid for itself within 2 months. We've automated 80% of our data entry and freed up our team for actual strategy work.",
    name: "Emily Rodriguez",
    role: "Director of Operations",
    company: "ScaleUp Finance",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-bg-light rounded-2xl p-8 border border-bg-mid relative">
              <Quote className="w-10 h-10 text-cyan/20 absolute top-6 right-6" />

              <p className="text-text-primary leading-relaxed mb-6 relative z-10">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan/20 to-cyan/5 flex items-center justify-center">
                  <span className="text-cyan font-bold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-text-muted text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
