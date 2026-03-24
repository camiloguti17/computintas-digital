import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Escuchamos tus necesidades, entendemos tu negocio y definimos objetivos claros para tu proyecto.',
    details: ['Reunion inicial', 'Levantamiento de requerimientos', 'Definicion de alcance'],
  },
  {
    number: '02',
    title: 'Analisis',
    description: 'Evaluamos procesos actuales, identificamos oportunidades de mejora y diseñamos la arquitectura ideal.',
    details: ['Mapeo de procesos', 'Analisis de datos', 'Propuesta tecnica'],
  },
  {
    number: '03',
    title: 'Diseno',
    description: 'Creamos prototipos y definimos la experiencia de usuario con interfaces intuitivas y funcionales.',
    details: ['Wireframes y mockups', 'Validacion con usuarios', 'Diseno de interfaces'],
  },
  {
    number: '04',
    title: 'Desarrollo',
    description: 'Construimos la solucion con metodologias agiles, entregas incrementales y codigo de alta calidad.',
    details: ['Sprints de desarrollo', 'Pruebas continuas', 'Control de calidad'],
  },
  {
    number: '05',
    title: 'Implementacion',
    description: 'Desplegamos la solucion, capacitamos a tu equipo y brindamos soporte continuo para el exito.',
    details: ['Migracion de datos', 'Capacitacion', 'Soporte post-lanzamiento'],
  },
]

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Trabajamos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un proceso probado que garantiza resultados exitosos en cada proyecto
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" />
          <div className="hidden lg:block absolute top-16 left-0 w-1/2 h-0.5 bg-primary/50" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Step Number Circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <span className="text-lg font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  {/* Connector dot for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-border mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-1.5">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-5">
            Cada proyecto es unico. Adaptamos nuestra metodologia a tus necesidades especificas.
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm shadow-primary/20 hover:bg-primary/90 transition-all duration-200 hover:shadow-md hover:shadow-primary/25"
          >
            Iniciar mi proyecto
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
