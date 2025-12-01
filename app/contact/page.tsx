"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, CheckCircle2, ArrowRight, Loader2 } from "lucide-react"

const budgetRanges = ["Under $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000 - $100,000", "$100,000+"]

const projectTypes = [
  "Custom Software Development",
  "AI Automation & Workflows",
  "AI Strategy & Consulting",
  "Not sure yet",
]

const initialFormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  projectType: "",
  budget: "",
  message: "",
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState(initialFormState)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || "Failed to send your message.")
      }

      setIsSubmitted(true)
      setFormData(initialFormState)
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : "Failed to send your message.")
      setIsSubmitted(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Let&apos;s Talk
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              Ready to automate what matters? Tell us about your project, and we&apos;ll get back to you within 24 hours
              with next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl border border-bg-mid p-6">
                  <h2 className="font-heading font-bold text-text-primary text-lg mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-cyan" />
                      </div>
                      <div>
                        <p className="text-text-muted text-sm mb-1">Email</p>
                        <a
                          href="mailto:neel@wisecubed.tech"
                          className="text-text-primary font-medium hover:text-cyan transition-colors"
                        >
                          neel@wisecubed.tech
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-cyan" />
                      </div>
                      <div>
                        <p className="text-text-muted text-sm mb-1">Location</p>
                        <p className="text-text-primary font-medium">Gujarat, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-cyan" />
                      </div>
                      <div>
                        <p className="text-text-muted text-sm mb-1">Response Time</p>
                        <p className="text-text-primary font-medium">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-navy rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-white text-lg mb-4">What Happens Next</h3>
                  <div className="space-y-4">
                    {[
                      "We review your submission within 24 hours",
                      "Schedule a 30-min discovery call",
                      "Receive a tailored project proposal",
                      "Begin work within 1-2 weeks",
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0">
                          <span className="text-cyan text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="text-white/70 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-bg-mid p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-text-primary mb-3">Message Sent!</h2>
                    <p className="text-text-muted max-w-md mx-auto">
                      Thanks for reaching out. We&apos;ve received your message and will get back to you within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-text-primary font-medium text-sm mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-10 rounded-lg border-bg-mid bg-bg-light text-text-primary px-4 focus:border-cyan focus:ring-1 focus:ring-cyan"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-text-primary font-medium text-sm mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-10 rounded-lg border-bg-mid bg-bg-light text-text-primary px-4 focus:border-cyan focus:ring-1 focus:ring-cyan"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-text-primary font-medium text-sm mb-2">
                          Company
                        </label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="h-10 rounded-lg border-bg-mid bg-bg-light text-text-primary px-4 focus:border-cyan focus:ring-1 focus:ring-cyan"
                          placeholder="Acme Inc."
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="block text-text-primary font-medium text-sm mb-2">
                          Role
                        </label>
                        <Input
                          type="text"
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="h-10 rounded-lg border-bg-mid bg-bg-light text-text-primary px-4 focus:border-cyan focus:ring-1 focus:ring-cyan"
                          placeholder="Head of Operations"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-text-primary font-medium text-sm mb-2">
                          What do you need? *
                        </label>
                        <Select
                          name="projectType"
                          required
                          value={formData.projectType}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              projectType: value,
                            }))
                          }
                        >
                          <SelectTrigger className="w-full justify-between rounded-lg border border-bg-mid bg-bg-light text-text-primary h-12 focus:border-cyan focus:ring-1 focus:ring-cyan">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-bg-mid">
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-text-primary font-medium text-sm mb-2">
                          Budget Range
                        </label>
                        <Select
                          name="budget"
                          value={formData.budget}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              budget: value,
                            }))
                          }
                        >
                          <SelectTrigger className="w-full justify-between rounded-lg border border-bg-mid bg-bg-light text-text-primary h-12 focus:border-cyan focus:ring-1 focus:ring-cyan">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-bg-mid">
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-text-primary font-medium text-sm mb-2">
                        Tell us about your project *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="rounded-lg border-bg-mid bg-bg-light text-text-primary px-4 py-3 focus:border-cyan focus:ring-1 focus:ring-cyan resize-none"
                        placeholder="Describe your current challenges and what you're hoping to achieve..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-cyan text-navy font-semibold hover:bg-cyan/90 btn-hover h-12 px-8"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>

                    {error ? <p className="text-sm text-red-600">{error}</p> : null}

                    <p className="text-text-muted text-sm">
                      By submitting, you agree to our privacy policy. We&apos;ll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
