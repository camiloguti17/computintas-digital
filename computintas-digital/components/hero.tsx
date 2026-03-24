import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-tech-background.jpg)',
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Soluciones de{' '}
            <span className="text-primary bg-clip-text">
              software a la medida
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Transformamos ideas en realidad con soluciones tecnológicas innovadoras. Más de una década 
            desarrollando software personalizado para empresas que buscan crecer digitalmente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#servicios">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Ver soluciones
              </Button>
            </Link>
            <Link href="#contacto">
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Solicitar cotización
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
