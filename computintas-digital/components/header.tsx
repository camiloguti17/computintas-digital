'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/logo-computintas.jpg"
              alt="Computintas Digital"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Soluciones
            </Link>
            <Link href="#nosotros" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link href="#contacto">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contáctanos
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-3">
            <Link 
              href="#servicios" 
              className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluciones
            </Link>
            <Link 
              href="#nosotros" 
              className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              href="#contacto" 
              className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Contáctanos
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
