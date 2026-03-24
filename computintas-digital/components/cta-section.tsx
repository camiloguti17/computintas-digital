'use client'

import Link from 'next/link'

export function CTASection() {
  const benefits = [
    {
      metric: '300+',
      label: 'Proyectos Implementados',
      description: 'En empresas de todos los tamaños',
    },
    {
      metric: '98%',
      label: 'Tasa de Satisfacción',
      description: 'Clientes que renuevan sus servicios',
    },
    {
      metric: '15+',
      label: 'Años de Experiencia',
      description: 'En desarrollo y soluciones digitales',
    },
    {
      metric: '24/7',
      label: 'Soporte Dedicado',
      description: 'Para tu tranquilidad operativa',
    },
  ]

  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-background via-background to-primary/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Block */}
        <div className="mb-20 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full">
            Comienza Hoy
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-balance">
              Transforma tu negocio con soluciones{' '}
              <span className="text-primary">tecnológicas probadas</span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Miles de empresas confían en Computintas Digital para optimizar sus operaciones, 
            reducir costos y acelerar su crecimiento. Tu turno es ahora.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="#contacto">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-200 w-full sm:w-auto">
                Agendar Demo Gratuita
              </button>
            </Link>
            <Link href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/5 transition-all duration-200 w-full sm:w-auto">
                Contactar por WhatsApp
              </button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Sin compromisos. Respuesta en menos de 24 horas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.metric}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Content */}
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {benefit.metric}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {benefit.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Tecnología de punta · Equipo Experto · Soporte Continuo
          </p>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.118a3.066 3.066 0 01-3.062 3.062H7.117a3.066 3.066 0 01-3.062-3.062V6.517a3.066 3.066 0 012.812-3.062zM9 11a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-foreground">
              100% seguro y confiable
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
