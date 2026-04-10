import { Link } from "wouter"
import { Linkedin, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  platform: [
    { label: "How it Works", href: "#platform" },
    { label: "Solutions", href: "#lifecycle" },
    { label: "Results", href: "#results" },
    { label: "FAQs", href: "#faq" }
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
    { label: "Book a Demo", href: "https://cal.com/day-nguyen" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }
  ]
}

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  { Icon: Linkedin, href: "https://www.linkedin.com/company/advanai/", label: "LinkedIn", isCustom: false },
  { Icon: Instagram, href: "https://www.instagram.com/advanintech", label: "Instagram", isCustom: false },
  { Icon: XIcon, href: "https://x.com/AdvanAI11", label: "X", isCustom: true },
  { Icon: Youtube, href: "https://www.youtube.com/@AdvanAI1", label: "YouTube", isCustom: false },
]

function scrollToHash(hash: string) {
  const el = document.getElementById(hash)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: "smooth" })
  }
}

export function Footer() {
  return (
    <footer className="bg-[#fefefe] text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-10 mb-6">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <img src="/advan-logo.png" alt="Advan AI" className="h-9 w-9 object-contain" />
              <span className="font-semibold text-lg text-[#1a1a1a]">Advan AI</span>
            </Link>
            <p className="text-sm text-[#666] mb-4 max-w-xs">
              AI-Powered Growth Systems for Predictable Revenue
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#1a1a1a]/5 hover:bg-[#1a1a1a]/10 transition-colors"
                  aria-label={social.label}
                >
                  {social.isCustom ? <social.Icon /> : <social.Icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[#1a1a1a]/50">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault()
                        scrollToHash(link.href.replace("#", ""))
                      }
                    }}
                    className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[#1a1a1a]/50">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href} className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors">
                      {link.label}
                    </Link>
                  ) : link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToHash(link.href.replace("#", "")) }}
                      className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[#1a1a1a]/50">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-[#1a1a1a]/10 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-[#999]">2026 Advan AI. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-[#999] hover:text-[#1a1a1a] transition-colors"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
