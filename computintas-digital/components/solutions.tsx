import { Card, CardContent } from '@/components/ui/card'
import { Code2, Smartphone, Database, Cog, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    icon: Code2,
    title: 'Software a la medida',
    description: 'Desarrollamos aplicaciones web y de escritorio completamente personalizadas que se adaptan a los procesos únicos de tu organización.',
    benefits: ['Escalable y seguro', 'Integración con APIs', 'Entrega continua'],
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones móviles',
    description: 'Apps nativas y multiplataforma que conectan tu negocio con clientes y colaboradores desde cualquier lugar.',
    benefits: ['iOS y Android', 'Notificaciones push', 'Modo offline'],
  },
  {
    icon: Database,
    title: 'Sistemas de gestión',
    description: 'ERPs, CRMs y sistemas administrativos que centralizan la información y optimizan la toma de decisiones.',
    benefits: ['Reportes en tiempo real', 'Múltiples usuarios', 'Dashboards interactivos'],
  },
  {
    icon: Cog,
    title: 'Automatización',
    description: 'Automatiza tareas repetitivas, integra plataformas y reduce errores humanos para maximizar la productividad.',
    benefits: ['Flujos automatizados', 'Alertas inteligentes', 'Reducción de errores'],
  },
]

export function Solutions() {
  return (
    <section id="soluciones" className="section-padding bg-background">
      <div className="container-premium">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Nuestras soluciones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Tecnología que transforma tu negocio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Ofrecemos soluciones integrales de software que se adaptan a las necesidades 
            específicas de cada cliente, desde startups hasta grandes empresas.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <Card 
                key={solution.title}
                className="group relative bg-card border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2">
                    {solution.benefits.map((benefit) => (
                      <span 
                        key={benefit}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Cuéntanos sobre tu proyecto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
