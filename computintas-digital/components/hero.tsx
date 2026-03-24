import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const benefits = [
  'Software 100% personalizado',
  'Soporte técnico continuo',
  'Integración con sistemas existentes',
]

const stats = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '50+', label: 'Proyectos entregados' },
  { value: '98%', label: 'Clientes satisfechos' },
]

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-premium relative z-10">
        <div className="flex flex-col items-center py-20 md:py-28 lg:py-36">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Soluciones tecnológicas empresariales
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground text-center max-w-5xl mb-6 leading-[1.1] tracking-tight text-balance">
            Software que impulsa el{' '}
            <span className="text-primary">crecimiento</span>{' '}
            de tu empresa
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-8 leading-relaxed text-pretty">
            Desarrollamos soluciones de software a la medida que automatizan procesos, 
            mejoran la eficiencia operativa y potencian los resultados de tu negocio.
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="#contacto">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base gap-2 group"
              >
                Solicitar una demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="#soluciones">
              <Button 
                size="lg" 
                variant="outline"
                className="border-border text-foreground hover:bg-muted h-12 px-8 text-base"
              >
                Ver soluciones
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="w-full max-w-2xl">
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-border/50">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
