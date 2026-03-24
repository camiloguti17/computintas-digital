import Link from 'next/link'
import { Shield, Zap, Users, HeadphonesIcon, Code2, TrendingUp } from 'lucide-react'

const advantages = [
  {
    icon: Code2,
    title: 'Desarrollo a Medida',
    description: 'Cada solución se construye desde cero para adaptarse perfectamente a tu operación, no al revés.',
  },
  {
    icon: Zap,
    title: 'Implementación Rápida',
    description: 'Metodologías ágiles que permiten entregas incrementales y resultados visibles en semanas.',
  },
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Protocolos de seguridad empresarial, backups automáticos y cumplimiento normativo.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte Dedicado',
    description: 'Equipo técnico disponible para resolver incidencias y acompañarte en cada paso.',
  },
  {
    icon: Users,
    title: 'Capacitación Integral',
    description: 'Entrenamos a tu equipo para que aprovechen al máximo cada herramienta implementada.',
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidad',
    description: 'Soluciones que crecen contigo, desde una sucursal hasta operaciones multi-sede.',
  },
]

const stats = [
  { value: '15+', label: 'Años en el mercado' },
  { value: '300+', label: 'Proyectos entregados' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Soporte disponible' },
]

export function About() {
  return (
    <section id="nosotros" className="w-full py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por qué Computintas Digital
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            No somos solo proveedores de software. Somos socios estratégicos comprometidos con el éxito de tu negocio, 
            combinando experiencia técnica con un profundo entendimiento de los desafíos empresariales.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 bg-background rounded-2xl border border-border shadow-sm">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage) => {
            const Icon = advantage.icon
            return (
              <div
                key={advantage.title}
                className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Más de una década transformando empresas
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Desde 2009, hemos acompañado a cientos de empresas en su camino hacia la digitalización. 
                Comenzamos como un pequeño equipo de desarrolladores apasionados y hoy somos referentes 
                en soluciones tecnológicas para múltiples industrias.
              </p>
              <p>
                Nuestra filosofía es simple: <span className="text-foreground font-medium">entender primero, desarrollar después</span>. 
                Cada proyecto comienza con un análisis profundo de tus procesos, desafíos y objetivos, 
                para crear soluciones que realmente impacten tu operación.
              </p>
              <p>
                No creemos en soluciones genéricas. Creemos en herramientas que se adaptan a tu forma de trabajar, 
                que tu equipo adopta con facilidad y que generan retorno desde el primer día.
              </p>
            </div>
          </div>

          <div className="bg-background p-8 rounded-2xl border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-6">Nuestro compromiso</h4>
            <ul className="space-y-4">
              {[
                'Transparencia total en tiempos, costos y alcance',
                'Comunicación constante durante todo el proyecto',
                'Entregas incrementales con valor desde el inicio',
                'Documentación completa y código limpio',
                'Garantía post-implementación incluida',
                'Evolución continua según tus necesidades',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:bg-primary/90 transition-all duration-200"
          >
            Conversemos sobre tu proyecto
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
