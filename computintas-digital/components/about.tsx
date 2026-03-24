import { CheckCircle2, Award, Users, Zap, Shield, HeartHandshake } from 'lucide-react'

const differentiators = [
  {
    icon: Award,
    title: 'Más de 10 años de experiencia',
    description: 'Una década desarrollando soluciones tecnológicas para empresas de todos los tamaños y sectores.',
  },
  {
    icon: Users,
    title: 'Equipo especializado',
    description: 'Profesionales certificados en desarrollo, diseño UX y gestión de proyectos tecnológicos.',
  },
  {
    icon: Zap,
    title: 'Metodología ágil',
    description: 'Entregas incrementales que te permiten ver avances reales y ajustar el rumbo según tus necesidades.',
  },
  {
    icon: Shield,
    title: 'Código de calidad',
    description: 'Seguimos estándares internacionales de desarrollo para garantizar software seguro y escalable.',
  },
  {
    icon: HeartHandshake,
    title: 'Soporte continuo',
    description: 'No te dejamos solo después del lanzamiento. Ofrecemos soporte y mantenimiento permanente.',
  },
]

const checkpoints = [
  'Comunicación directa con el equipo técnico',
  'Documentación completa del proyecto',
  'Capacitación para tu equipo',
  'Actualizaciones y mejoras continuas',
]

export function About() {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Tu socio tecnológico de confianza
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              En Computintas Digital no solo desarrollamos software, construimos relaciones 
              de largo plazo con nuestros clientes. Entendemos que cada proyecto es único 
              y merece una atención personalizada.
            </p>
            
            {/* Checkpoints */}
            <div className="space-y-4">
              {checkpoints.map((checkpoint) => (
                <div key={checkpoint} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">{checkpoint}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - differentiators grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.slice(0, 4).map((item) => {
              const Icon = item.icon
              return (
                <div 
                  key={item.title}
                  className="p-6 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/20 hover:bg-muted transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="h-8 w-8 text-primary" />
            </div>
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Soporte continuo garantizado
              </h3>
              <p className="text-muted-foreground">
                No te dejamos solo después del lanzamiento. Ofrecemos planes de soporte y 
                mantenimiento para que tu software siga evolucionando con tu negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
