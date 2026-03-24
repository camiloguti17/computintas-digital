'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    title: 'App Asistencia',
    subtitle: 'Control de Personal',
    description:
      'Registra y controla la entrada, salida y estado del personal en tiempo real. Horarios claros, reportes automáticos y gestión multi-sucursal.',
    highlights: ['Registro biométrico', 'Reportes automáticos', 'Multi-sucursal'],
    image: '/sol-asistencia.png',
    tag: 'RRHH',
  },
  {
    title: 'Gestión de Taller',
    subtitle: 'Talleres Mecánicos',
    description:
      'Sistema integral para talleres. Controla recepciones, presupuestos, órdenes de trabajo, stock y facturación desde un solo lugar.',
    highlights: ['Órdenes digitales', 'Control de stock', 'Facturación integrada'],
    image: '/sol-taller.jpg',
    tag: 'Automotriz',
  },
  {
    title: 'Tracking con Balizas',
    subtitle: 'Rastreo en Tiempo Real',
    description:
      'Localización de activos, vehículos y personal con Bluetooth y GPS. Alertas automáticas e historial de rutas para visibilidad total.',
    highlights: ['GPS + Bluetooth', 'Alertas automáticas', 'Historial de rutas'],
    image: '/sol-balizas.jpg',
    tag: 'Logística',
  },
  {
    title: 'Actas Farmacéuticas',
    subtitle: 'Farmacias y Droguerías',
    description:
      'Control de recepción y vencimientos con alertas automáticas. Cumplimiento normativo y trazabilidad completa de cada producto.',
    highlights: ['Actas digitales', 'Alertas de vencimiento', 'Auditoría completa'],
    image: '/sol-alertas.jpg',
    tag: 'Farmacia',
  },
]

export function Products() {
  return (
    <section id="productos" className="w-full py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
            Suite de Aplicaciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            Nuestros Productos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Aplicaciones listas para implementar, diseñadas para cada rubro y adaptadas a tu operacion
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.title}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Screenshot Area */}
              <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden shrink-0">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Sector tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-background/90 backdrop-blur-sm rounded-md border border-border/60">
                  <span className="text-xs font-semibold text-primary">{product.tag}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                  {product.subtitle}
                </p>
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>

                {/* Feature chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-0.5 text-xs font-medium text-foreground/70 bg-muted rounded-md"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="#contacto"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30"
                >
                  Solicitar Demo
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 bg-card border border-border rounded-2xl shadow-sm">
          <div>
            <p className="font-semibold text-foreground text-lg">Todos los productos incluyen soporte y capacitacion</p>
            <p className="text-muted-foreground text-sm mt-0.5">Implementacion rapida, actualizaciones continuas y asistencia dedicada</p>
          </div>
          <Link
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm shadow-primary/20 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 transition-all duration-200 whitespace-nowrap"
          >
            Agendar asesoria gratuita
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
