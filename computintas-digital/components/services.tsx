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
      <div id="productos" className="w-full py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              Suite de Aplicaciones
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Productos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Soluciones probadas y listas para implementar en tu empresa
            </p>
          </div>

          {/* Products Showcase */}
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={product.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="relative w-full aspect-square max-w-md rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50 group">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
                    
                    {/* Image */}
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 bg-background/90 backdrop-blur-md rounded-full border border-border shadow-lg">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {product.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent p-2.5 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">
                      Producto {index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    {product.title}
                  </h3>

                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {product.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border/40 hover:border-border hover:bg-muted/60 transition-all duration-200"
                      >
                        <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-foreground/90">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:bg-primary/90 transition-all duration-200 w-fit group/btn"
                  >
                    Solicitar Demo
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-24 p-8 md:p-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Todos nuestros productos incluyen
            </h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Soporte técnico dedicado, capacitación integral, actualizaciones continuas y adaptabilidad a tu negocio
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-200"
            >
              Agendar asesoria gratuita
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
