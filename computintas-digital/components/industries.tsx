'use client'

import Link from 'next/link'

const industries = [
  {
    name: 'Talleres Mecánicos',
    icon: '🔧',
    problem: 'Gestión manual de órdenes de trabajo, control de inventario disperso y facturación tediosa que genera retrasos y errores',
    solution: 'Sistema integral que centraliza recepciones, presupuestos, órdenes de trabajo digitales, stock y facturación en un solo lugar',
    benefits: ['Reducir tiempo de atención', 'Control de repuestos en tiempo real', 'Facturación automatizada'],
    color: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-200',
  },
  {
    name: 'Farmacias y Droguerías',
    icon: '💊',
    problem: 'Riesgo de venta de productos vencidos, ausencia de trazabilidad y dificultad en cumplimiento normativo farmacéutico',
    solution: 'Actas digitales con alertas automáticas de vencimiento, trazabilidad completa y auditoría integrada para cumplimiento normativo',
    benefits: ['Alertas automáticas de vencimiento', 'Auditoría y trazabilidad completa', 'Cumplimiento normativo'],
    color: 'from-rose-500/10 to-pink-500/10',
    borderColor: 'border-rose-200',
  },
  {
    name: 'Control de Personal',
    icon: '👥',
    problem: 'Registro manual de asistencia propenso a errores, reportes manuales y falta de visibilidad en tiempo real del estado del equipo',
    solution: 'App de asistencia con registro rápido, reportes automáticos y control de horarios con visibilidad operativa inmediata',
    benefits: ['Registro ágil de asistencia', 'Reportes automáticos y precisos', 'Control de horarios en tiempo real'],
    color: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-200',
  },
  {
    name: 'Logística y Transporte',
    icon: '📍',
    problem: 'Incapacidad de localizar activos y vehículos, falta de visibilidad en rutas y pérdida de control sobre flota distribuida',
    solution: 'Sistema de tracking en tiempo real con GPS y Bluetooth que localiza activos, genera alertas y mantiene historial de rutas',
    benefits: ['Localización en tiempo real', 'Alertas automáticas por zona', 'Historial completo de movimientos'],
    color: 'from-violet-500/10 to-purple-500/10',
    borderColor: 'border-violet-200',
  },
]

export function Industries() {
  return (
    <section id="industrias" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            Por Sector
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Soluciones por Industria
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conoce cómo nuestras soluciones resuelven los problemas específicos de tu sector
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative p-8 flex flex-col gap-6 h-full">
                {/* Header */}
                <div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">{industry.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{industry.name}</h3>
                </div>

                {/* Problem */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-destructive">Problema</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.problem}</p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">Solución</p>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed font-medium">{industry.solution}</p>
                </div>

                {/* Benefits */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">Beneficios</p>
                  </div>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-accent shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-foreground/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Solicitar consulta
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            ¿No encontraste tu sector? Tenemos soluciones para muchas más industrias
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-200"
          >
            Agendar consulta personalizada
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
