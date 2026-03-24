'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const footerSections = [
  {
    title: 'Productos',
    links: [
      { label: 'App Asistencia', href: '#productos' },
      { label: 'Gestión de Taller', href: '#productos-taller' },
      { label: 'Tracking', href: '#productos-tracking' },
      { label: 'Actas Farmacéuticas', href: '#productos-farma' },
    ],
  },
  {
    title: 'Soluciones',
    links: [
      { label: 'Desarrollo Custom', href: '#servicios' },
      { label: 'Aplicaciones', href: '#servicios-apps' },
      { label: 'Automatización', href: '#servicios-auto' },
      { label: 'Soporte 24/7', href: '#servicios-soporte' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nosotros', href: '#nosotros' },
      { label: 'Nuestro proceso', href: '#proceso' },
      { label: 'Industrias', href: '#industrias' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '/privacy' },
      { label: 'Términos de uso', href: '/terms' },
      { label: 'Política de cookies', href: '/cookies' },
      { label: 'Aviso legal', href: '/legal' },
    ],
  },
]

const socialLinks = [
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  { icon: Twitter, href: '#twitter', label: 'Twitter' },
  { icon: Facebook, href: '#facebook', label: 'Facebook' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/logo-compu-negro.png"
                alt="Computintas Digital"
                width={200}
                height={60}
                className="h-12 w-auto invert"
              />
            </Link>
            <p className="text-sm text-background/80 leading-relaxed mb-6">
              Soluciones de software innovadoras para empresas que buscan transformación digital.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-background mb-5 opacity-90">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/75 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-background/20">
          {/* Email */}
          <a
            href="mailto:Contacto@computintas.co"
            className="flex items-start gap-3 hover:opacity-80 transition-opacity group"
          >
            <div className="w-10 h-10 rounded-lg bg-background/10 group-hover:bg-background/20 flex items-center justify-center shrink-0 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-background/60 uppercase tracking-wider">Email</p>
              <p className="text-sm text-background/90 break-all">Contacto@computintas.co</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+576048298470"
            className="flex items-start gap-3 hover:opacity-80 transition-opacity group"
          >
            <div className="w-10 h-10 rounded-lg bg-background/10 group-hover:bg-background/20 flex items-center justify-center shrink-0 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-background/60 uppercase tracking-wider">Teléfono</p>
              <p className="text-sm text-background/90">+57 604 8298470</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-background/60 uppercase tracking-wider">Ubicación</p>
              <p className="text-sm text-background/90">Apartadó, Antioquia, Colombia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20 bg-background/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>
              &copy; {currentYear} Computintas Digital. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs">
              <Link key="privacy" href="#" className="hover:text-background transition-colors">
                Política de privacidad
              </Link>
              <span className="text-background/40">/</span>
              <Link key="terms" href="#" className="hover:text-background transition-colors">
                Términos de servicio
              </Link>
              <span className="text-background/40">/</span>
              <Link key="cookies" href="#" className="hover:text-background transition-colors">
                Política de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
