import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="container-premium relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed text-pretty">
            Agenda una consulta gratuita con nuestro equipo y descubre cómo podemos 
            ayudarte a alcanzar tus objetivos con tecnología de primer nivel.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contacto">
              <Button 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-8 text-base gap-2 group"
              >
                Solicitar consulta gratuita
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <a 
              href="https://wa.me/573107876505?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20sobre%20soluciones%20de%20software."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 text-base gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp directo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
