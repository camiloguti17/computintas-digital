'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#productos', label: 'Productos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-sm border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/logo-computintas.jpg"
              alt="Computintas Digital"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="https://wa.me/573107876505"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-2"
            >
              WhatsApp
            </Link>
            <Link href="#contacto">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group">
                Hablar con un experto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-1 border-t border-border/50">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4 space-y-3">
              <Link 
                href="https://wa.me/573107876505"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  Escribir por WhatsApp
                </Button>
              </Link>
              <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Hablar con un experto
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
