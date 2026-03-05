"use client"

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { useState } from "react"

const navLinks: { title: string; href: string }[] = [
  { title: "Services", href: "/services" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "About", href: "/about" },
]

const cta = { title: "Contact us", href: "/contact" }

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ClearStack</span>
            <img
              src="/images/logo.png"
              alt="ClearStack Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Desktop nav links */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="lg:gap-x-12">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={link.href}>{link.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <InteractiveHoverButton >
            <Link href={cta.href}>{cta.title}</Link>
          </InteractiveHoverButton>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">ClearStack</span>
                <img
                  src="/images/logo.png"
                  alt="ClearStack Logo"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                  <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a href={cta.href} className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    {cta.title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
