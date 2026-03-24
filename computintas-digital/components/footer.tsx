import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'

const footerLinks = {
  soluciones: [
    { label: 'Software a medida', href: '#soluciones' },
    { label: 'Aplicaciones móviles', href: '#soluciones' },
    { label: 'Sistemas de gestión', href: '#soluciones' },
    { label: 'Automatización', href: '#soluciones' },
  ],
  productos: [
    { label: 'App Asistencia', href: '#productos' },
    { label: 'Gestión de Taller', href: '#productos' },
    { label: 'Seguimiento Balizas', href: '#productos' },
    { label: 'Actas Farmacias', href: '#productos' },
  ],
  empresa: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Metodología', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      {/* Main footer content */}
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/logo-compu-negro.png"
              alt="Computintas Digital"
              width={180}
              height={60}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Transformamos empresas con soluciones de software a la medida. 
              Más de 10 años impulsando el crecimiento digital de nuestros clientes.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a 
                href="mailto:Contacto@computintas.co" 
                className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                Contacto@computintas.co
              </a>
              <a 
                href="tel:6048298470" 
                className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                604 8298470
              </a>
              <div className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="h-4 w-4" />
                Apartadó, Colombia
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Soluciones</h3>
            <ul className="space-y-3">
              {footerLinks.soluciones.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Productos</h3>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary-foreground/20 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-premium py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>
              &copy; {currentYear} Computintas Digital. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-secondary-foreground transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-secondary-foreground transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
