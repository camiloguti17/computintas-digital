'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Clock, Users, MapPin, Shield } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    title: 'App Asistencia',
    tagline: 'Control de personal simplificado',
    description: 'Registra y controla de forma ágil la entrada, salida y estado del personal. Seguimiento de horarios en tiempo real para una gestión más organizada.',
    image: '/sol-asistencia.png',
    icon: Clock,
    features: ['Registro en tiempo real', 'Reportes automáticos', 'Múltiples sedes'],
    badge: 'Popular',
  },
  {
    title: 'Gestión de Taller',
    tagline: 'Tu taller, bajo control',
    description: 'Solución completa para talleres mecánicos. Controla recepciones, presupuestos, órdenes de trabajo, inventario y facturación desde un solo sistema.',
    image: '/sol-taller.jpg',
    icon: Users,
    features: ['Órdenes digitales', 'Control de inventario', 'Facturación integrada'],
    badge: null,
  },
  {
    title: 'Seguimiento con Balizas',
    tagline: 'Visibilidad operativa total',
    description: 'Sistema de tracking en tiempo real con tecnología Bluetooth y GPS para localización de activos, vehículos y personal.',
    image: '/sol-balizas.jpg',
    icon: MapPin,
    features: ['Rastreo GPS/BT', 'Alertas automáticas', 'Historial de rutas'],
    badge: null,
  },
  {
    title: 'Actas para Farmacias',
    tagline: 'Cumplimiento normativo garantizado',
    description: 'Actas de recepción digitales y control de vencimientos con alertas automáticas. Mantén el cumplimiento normativo y reduce riesgos.',
    image: '/sol-alertas.jpg',
    icon: Shield,
    features: ['Actas digitales', 'Alertas de vencimiento', 'Trazabilidad completa'],
    badge: 'Nuevo',
  },
]

export function Products() {
  return (
    <section id="productos" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-premium">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-secondary-foreground/70 uppercase tracking-wider mb-4">
            Productos listos para usar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 text-balance">
            Soluciones probadas para necesidades específicas
          </h2>
          <p className="text-lg text-secondary-foreground/70 leading-relaxed text-pretty">
            Aplicaciones listas para implementar, diseñadas para resolver problemas 
            reales de distintos sectores con funcionalidades probadas.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <Card 
                key={product.title}
                className="group bg-secondary-foreground/5 border-secondary-foreground/10 hover:bg-secondary-foreground/10 hover:border-secondary-foreground/20 transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-48 bg-secondary-foreground/5 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-secondary-foreground mb-1">
                          {product.title}
                        </h3>
                        <p className="text-sm text-secondary-foreground/60">
                          {product.tagline}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-secondary-foreground/80 leading-relaxed mb-5">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.features.map((feature) => (
                        <span 
                          key={feature}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-foreground/10 text-secondary-foreground/70"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link 
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      Solicitar información
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-12 border-t border-secondary-foreground/10">
          <p className="text-secondary-foreground/70 mb-6">
            ¿No encuentras lo que buscas? Podemos desarrollar una solución personalizada.
          </p>
          <Link href="#contacto">
            <Button 
              variant="outline" 
              className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 gap-2"
            >
              Hablemos de tu proyecto
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
