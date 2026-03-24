import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image
              src="/logo-compu-negro.png"
              alt="Computintas Digital"
              width={300}
              height={100}
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm opacity-75">
              Soluciones de software a la medida para tu negocio.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Soluciones</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="#servicios" className="hover:opacity-100 transition-opacity">
                  Desarrollo personalizado
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:opacity-100 transition-opacity">
                  Sistemas a medida
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:opacity-100 transition-opacity">
                  Aplicaciones
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:opacity-100 transition-opacity">
                  Seguimiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Empresa</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="#nosotros" className="hover:opacity-100 transition-opacity">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:opacity-100 transition-opacity">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:opacity-100 transition-opacity">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Contacto</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="mailto:Contacto@computintas.co" className="hover:opacity-100 transition-opacity">
                  Contacto@computintas.co
                </a>
              </li>
              <li>
                <a href="tel:6048298470" className="hover:opacity-100 transition-opacity">
                  604 8298470
                </a>
              </li>
              <li>Apartadó, Colombia</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>&copy; {currentYear} Computintas Digital. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Privacidad
              </Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Términos
              </Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
