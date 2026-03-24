'use client'

import Image from 'next/image'
import Link from 'next/link'

const solutions = [
  {
    title: 'Desarrollo de software personalizado',
    subtitle: 'Soluciones a tu medida',
    description:
      'Creamos soluciones únicas adaptadas a tus procesos. Análisis profundo, diseño escalable y metodologías ágiles para transformar tus ideas en productos digitales.',
    bullets: [
      'Desarrollo web y móvil',
      'Integración de sistemas',
      'Arquitectura escalable',
    ],
    image: '/sol-software.jpg',
    icon: '⚙️',
    color: 'from-blue-500/20 to-cyan-500/20',
    ctaText: 'Consultar desarrollo',
  },
  {
    title: 'Aplicaciones listas para usar',
    subtitle: 'Implementación rápida',
    description:
      'Suite de aplicaciones probadas y listas para desplegar. Interfaces intuitivas, funcionalidades comprobadas, instalación rápida y soporte continuo.',
    bullets: [
      'Despliegue en días',
      'Adaptable a tu sector',
      'Actualizaciones incluidas',
    ],
    image: '/sol-apps.jpg',
    icon: '📱',
    color: 'from-emerald-500/20 to-teal-500/20',
    ctaText: 'Explorar apps',
  },
]

export function Services() {
  return (
    <section id="servicios" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            Cómo trabajamos contigo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Soluciones a tu medida
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dos enfoques complementarios para cubrir todas tus necesidades digitales
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
            >
              {/* Gradient Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

              <div className="relative p-8 flex flex-col h-full">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{solution.icon}</div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {solution.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3 leading-snug">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {solution.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-8">
                  {solution.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-foreground/90 font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href="#contacto" className="inline-block">
                  <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/25 group/btn w-full justify-center">
                    {solution.ctaText}
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
