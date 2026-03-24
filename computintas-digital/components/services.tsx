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

    </section>
  )
}
