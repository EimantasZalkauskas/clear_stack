import Link from "next/link"

const footerLinks = {
  company: [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Case Studies", href: "/case-studies" },
  ],
  legal: [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
  ],
  social: [
    { title: "LinkedIn", href: "https://www.linkedin.com/in/eimantas-zalkauskas-8ba006106/" },
    { title: "GitHub", href: "https://github.com/EimantasZalkauskas" },
  ],
}

export function Footer() {
  return (
    <footer className="background-secondary border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <img
              src="/images/logo.png"
              alt="ClearStack Logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm body-text">
              Backend systems that scale. Full stack solutions that ship.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold heading-text mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm body-text hover:text-[#3B82F6] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold heading-text mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm body-text hover:text-[#3B82F6] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold heading-text mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm body-text hover:text-[#3B82F6] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm body-text text-center">
            © {new Date().getFullYear()} ClearStack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
