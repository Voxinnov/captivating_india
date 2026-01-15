'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '#destinations', label: 'Destinations' },
    { href: '/tours', label: 'Tours' },
    { href: '/hotels', label: 'Hotels' },
    { href: '/activities', label: 'Activities' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-[#3a2e1f]/70 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="#" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Captivating India Logo" 
              className="h-16 w-auto md:h-20 lg:h-24 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wider text-white uppercase hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Email Contact */}
          <div className="hidden lg:flex items-center gap-2 text-white">
            <Mail size={18} className="text-white" />
            <a 
              href="mailto:info@captivatingindia.co.uk" 
              className="text-xs md:text-sm font-medium tracking-wider uppercase hover:text-primary transition-colors"
            >
              INFO@CAPTIVATINGINDIA.CO.UK
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-white/20">
            <div className="flex flex-col gap-4 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wider text-white uppercase hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 text-white pt-2 border-t border-white/20">
                <Mail size={18} />
                <a 
                  href="mailto:info@captivatingindia.co.uk" 
                  className="text-xs font-medium tracking-wider uppercase hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  INFO@CAPTIVATINGINDIA.CO.UK
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
