import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Custom Software", href: "/services" },
    { label: "AI Automation", href: "/services" },
    { label: "AI Consulting", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/wisecubed", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/wise3cubed", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
            <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #38BDF8 0%, #22C55E 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Space Grotesk',
                  fontWeight: '700',
                  fontSize: '18px',
                  color: '#0F172A',
                }}
              >
                W³
              </div>
              <span className="text-white font-heading font-bold text-xl tracking-tight">WiseCubed</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              We build AI-powered systems that actually ship. Modern software development and automation for ambitious
              teams.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  target="_blank"
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/60 hover:text-cyan" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 hover:text-cyan text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 hover:text-cyan text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="mailto:neel@wisecubed.tech" className="hover:text-cyan transition-colors">
                  neel@wisecubed.tech
                </a>
              </li>
              <li>San Francisco, CA</li>
              <li>UTC-8 (PST)</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} WiseCubed. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, i) => (
              <Link key={i} href={link.href} className="text-white/40 hover:text-white/60 text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
