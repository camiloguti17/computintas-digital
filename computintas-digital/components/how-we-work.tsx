import { MessageSquare, Lightbulb, Code2, Rocket, Headphones } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Escuchamos',
    description: 'Entendemos tu negocio, tus procesos y tus objetivos para definir juntos la mejor solución.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Diseñamos',
    description: 'Creamos una propuesta técnica y funcional que se ajusta a tus necesidades y presupuesto.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desarrollamos',
    description: 'Construimos tu solución con metodologías ágiles, manteniéndote informado en cada sprint.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Implementamos',
    description: 'Desplegamos la solución, capacitamos a tu equipo y aseguramos una transición fluida.',
  },
  {
    number: '05',
    icon: Headphones,
    title: 'Acompañamos',
    description: 'Brindamos soporte continuo, mantenimiento y mejoras para que tu software evolucione contigo.',
  },
]

export function HowWeWork() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-premium">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Nuestra metodología
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Un proceso claro de principio a fin
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Trabajamos de forma transparente y colaborativa para convertir tu visión 
            en una solución tecnológica que realmente funcione.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Step card */}
                  <div className="flex flex-col items-center text-center lg:pt-0">
                    {/* Number circle */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    
                    {/* Number badge */}
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
                      {index + 1}
                    </span>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
