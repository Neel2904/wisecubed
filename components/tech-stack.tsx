const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "OpenAI",
  "LangChain",
]

export function TechStack() {
  return (
    <section className="py-16 bg-bg-light border-y border-bg-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-text-muted text-sm font-medium uppercase tracking-wider">
            We work with modern, battle-tested stacks
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-text-muted/60 font-medium text-sm hover:text-cyan transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
