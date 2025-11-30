import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ValueProps } from "@/components/value-props"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { TechStack } from "@/components/tech-stack"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ValueProps />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TechStack />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
