'use client'

import Image from 'next/image'
import Link from 'next/link'

const solutions = [
  {
    title: 'Desarrollo de software personalizado',
    description:
      'Creamos soluciones únicas que se adaptan a los procesos y necesidades de tu organización. Nuestro equipo analiza y diseña aplicaciones escalables, seguras y eficientes para optimizar flujos de trabajo, integrar plataformas y transformar ideas en productos digitales.',
    bullets: [
      'Desarrollo web y móvil adaptado a tu negocio',
      'Integración con sistemas existentes y API',
      'Metodologías ágiles para entrega continua',
    ],
    image: '/sol-software.jpg',
  },
  {
    title: 'Aplicaciones disponibles',
    description:
      'Contamos con una suite de aplicaciones listas para usar que pueden desplegarse rápidamente en tu empresa. Diseñadas con interfaces intuitivas y funcionalidades probadas para distintos sectores.',
    bullets: [
      'Instalación rápida y soporte continuo',
      'Adaptables a distintos rubros',
      'Actualizaciones y mejoras periódicas',
    ],
    image: '/sol-apps.jpg',
  },
]

const products = [
  {
    title: 'App Asistencia',
    subtitle: 'Control de Personal',
    description:
      'Registra y controla la entrada, salida y estado del personal en tiempo real. Gestión organizada y eficiente de horarios.',
    highlights: ['Registro biométrico', 'Reportes automáticos', 'Multi-sucursal'],
    image: '/sol-asistencia.png',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconBg: 'bg-blue-500/10',
  },
  {
    title: 'Gestión de Taller',
    subtitle: 'Talleres Mecánicos',
    description:
      'Sistema integral para talleres. Controla recepciones, presupuestos, órdenes de trabajo, stock y facturación.',
    highlights: ['Órdenes digitales', 'Control de stock', 'Facturación integrada'],
    image: '/sol-taller.jpg',
    color: 'from-emerald-500/20 to-teal-500/20',
    iconBg: 'bg-emerald-500/10',
  },
  {
    title: 'Tracking con Balizas',
    subtitle: 'Rastreo en Tiempo Real',
    description:
      'Localización de activos, vehículos y personal con tecnología Bluetooth y GPS. Visibilidad operativa constante.',
    highlights: ['GPS + Bluetooth', 'Alertas automáticas', 'Historial de rutas'],
    image: '/sol-balizas.jpg',
    color: 'from-violet-500/20 to-purple-500/20',
    iconBg: 'bg-violet-500/10',
  },
  {
    title: 'Actas Farmacéuticas',
    subtitle: 'Farmacias y Droguerías',
    description:
      'Control de recepción y vencimientos con alertas automáticas. Cumplimiento normativo y trazabilidad completa.',
    highlights: ['Actas digitales', 'Alertas de vencimiento', 'Auditoría completa'],
    image: '/sol-alertas.jpg',
    color: 'from-rose-500/20 to-pink-500/20',
    iconBg: 'bg-rose-500/10',
  },
]

export function Services() {
  return (
    <section id="servicios" className="w-full py-20 md:py-28 bg-[#f0f4f8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Soluciones a tu medida
        </h2>

        {/* Solutions Cards */}
        <div className="flex flex-col gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="relative w-full md:w-[400px] shrink-0 h-64 md:h-[280px] bg-muted/30">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center px-8 py-7 gap-3 flex-1">
                <h3 className="text-xl font-bold text-primary leading-snug">
                  {solution.title}
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  {solution.description}
                </p>
                <ul className="flex flex-col gap-1 mt-1">
                  {solution.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div id="productos" className="w-full py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              Suite de Aplicaciones
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Productos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Soluciones probadas y listas para implementar en tu empresa
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Gradient Background Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative p-6">
                  {/* Header with Image */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-muted shrink-0 ring-1 ring-border">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-accent uppercase tracking-wide">
                        {product.subtitle}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mt-0.5 truncate">
                        {product.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-foreground/80 bg-muted/60 rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Solicitar demo
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Todos nuestros productos incluyen soporte, capacitacion y actualizaciones
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm shadow-primary/20 hover:bg-primary/90 transition-all duration-200 hover:shadow-md hover:shadow-primary/25"
            >
              Agendar asesoria gratuita
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
