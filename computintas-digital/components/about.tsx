import { Card, CardContent } from '@/components/ui/card'
import { Lightbulb, Accessibility, CheckCircle } from 'lucide-react'

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de resolver problemas y mejorar la experiencia del usuario.',
    },
    {
      icon: Accessibility,
      title: 'Accesibilidad',
      description: 'Creemos que la tecnología debe ser inclusiva y accesible para todos, sin excepciones.',
    },
    {
      icon: CheckCircle,
      title: 'Calidad',
      description: 'Cada línea de código, cada diseño y cada solución cumple con los más altos estándares.',
    },
  ]

  return (
    <section id="nosotros" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre Computintas Digital
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Con más de una década de experiencia, somos especialistas en transformar ideas en soluciones 
              tecnológicas que impulsan el crecimiento de nuestros clientes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nuestro equipo está comprometido con la excelencia, la innovación continua y el desarrollo 
              de soluciones que van más allá de las expectativas.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary">
                    <CheckCircle className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-foreground">Más de 10 años de experiencia</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary">
                    <CheckCircle className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-foreground">Estándares web internacionales</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary">
                    <CheckCircle className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-foreground">Soporte y mantenimiento continuo</span>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
