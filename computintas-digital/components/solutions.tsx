'use client'

import { Code2, Layers, Cog, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const solutions = [
  {
    icon: Code2,
    title: 'Desarrollo de Software a Medida',
    subtitle: 'Soluciones unicas para tu negocio',
    description:
      'Creamos aplicaciones personalizadas que se adaptan exactamente a los procesos de tu organizacion. Desde sistemas web hasta apps moviles, con integracion completa a tus plataformas existentes.',
    benefits: [
      'Analisis de requerimientos detallado',
      'Arquitectura escalable y segura',
      'Integracion con APIs y sistemas existentes',
      'Metodologias agiles con entregas continuas',
    ],
    highlight: 'Ideal para empresas que necesitan procesos digitales unicos',
  },
  {
    icon: Layers,
    title: 'Suite de Aplicaciones Listas',
    subtitle: 'Productos probados y listos para implementar',
    description:
      'Contamos con soluciones pre-desarrolladas que puedes implementar rapidamente en tu empresa. Sistemas de gestion, control de personal, seguimiento de activos y mas.',
    benefits: [
      'Implementacion rapida en dias',
      'Soporte tecnico continuo incluido',
      'Actualizaciones y mejoras periodicas',
      'Adaptables a distintos sectores',
    ],
    highlight: 'Perfecto para comenzar a digitalizar sin largos tiempos de desarrollo',
  },
  {
    icon: Cog,
    title: 'Automatizacion de Procesos',
    subtitle: 'Optimiza operaciones repetitivas',
    description:
      'Identificamos tareas manuales que consumen tiempo y las convertimos en flujos automaticos. Reduce errores, ahorra horas de trabajo y mejora la eficiencia operativa.',
    benefits: [
      'Mapeo de procesos actuales',
      'Diseno de flujos automatizados',
      'Integracion con herramientas existentes',
      'Metricas de ahorro y eficiencia',
    ],
    highlight: 'ROI visible en las primeras semanas de implementacion',
  },
  {
    icon: Headphones,
    title: 'Soporte y Mantenimiento',
    subtitle: 'Tu equipo tecnologico externo',
    description:
      'Ofrecemos planes de soporte continuo para mantener tus sistemas funcionando de manera optima. Actualizaciones, monitoreo, resolucion de incidencias y mejoras evolutivas.',
    benefits: [
      'Soporte tecnico por multiples canales',
      'Monitoreo proactivo de sistemas',
      'Actualizaciones de seguridad',
      'SLA con tiempos de respuesta garantizados',
    ],
    highlight: 'Tranquilidad total para tu operacion tecnologica',
  },
]

export function Solutions() {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Nuestras Soluciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Tecnologia que impulsa tu negocio
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Desde desarrollo a medida hasta productos listos para usar, te acompanamos en cada etapa de tu transformacion digital.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <article
                key={solution.title}
                className="group relative bg-card rounded-xl border border-border p-6 lg:p-8 card-hover"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {solution.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-2 pt-2">
                    {solution.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* Highlight */}
                  <div className="pt-4 mt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground italic">
                      {solution.highlight}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            No sabes cual solucion es la adecuada para tu empresa?
          </p>
          <Link href="#contacto">
            <Button size="lg" className="font-semibold">
              Agenda una asesoria gratuita
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
