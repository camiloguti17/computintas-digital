'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const FLOATING_METRICS = [
  { label: 'Procesos optimizados', value: '+85%', delay: 0 },
  { label: 'Reducción de errores', value: '-60%', delay: 150 },
  { label: 'Tiempo ahorrado', value: '4h/día', delay: 300 },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Decorative grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-[15%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-primary">+10 años transformando empresas</span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-balance">
                Software que{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  impulsa tu negocio
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Desarrollamos soluciones a la medida que automatizan procesos, reducen costos operativos y 
              te dan el control total de tu operación. Desde facturación electrónica hasta ERP completos.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link href="#contacto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
                >
                  Solicitar Demo Gratis
                </Button>
              </Link>
              <Link href="#servicios">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-border hover:border-primary/50 text-foreground font-medium px-7 transition-all duration-300 hover:bg-primary/5"
                >
                  Ver Soluciones
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div
              className={`flex items-center gap-6 text-sm text-muted-foreground transition-all duration-700 delay-[400ms] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sin compromisos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Soporte incluido</span>
              </div>
            </div>
          </div>

          {/* Right: Visual composition */}
          <div className="order-1 lg:order-2 relative">
            {/* Main dashboard mockup */}
            <div
              className={`relative bg-card rounded-2xl border border-border shadow-2xl shadow-primary/10 overflow-hidden transition-all duration-1000 delay-200 ${
                mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-background rounded-md border border-border flex items-center px-3">
                    <span className="text-xs text-muted-foreground">app.computintas.com</span>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 space-y-4 bg-gradient-to-br from-background to-muted/30">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Ventas hoy', value: '$2.4M', change: '+12%' },
                    { label: 'Ordenes', value: '1,284', change: '+8%' },
                    { label: 'Clientes', value: '847', change: '+15%' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-card rounded-lg border border-border p-3">
                      <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-lg font-bold text-foreground">{stat.value}</p>
                      <span className="text-xs text-accent font-medium">{stat.change}</span>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="bg-card rounded-lg border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">Ingresos mensuales</span>
                    <span className="text-xs text-muted-foreground">Ultimos 6 meses</span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-24">
                    {[40, 65, 45, 80, 55, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-sm transition-all duration-500"
                        style={{ height: `${h}%`, transitionDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Table preview */}
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  <div className="px-4 py-2 border-b border-border bg-muted/30">
                    <span className="text-sm font-medium text-foreground">Últimas transacciones</span>
                  </div>
                  <div className="divide-y divide-border">
                    {[
                      { name: 'Factura #1284', status: 'Completado', amount: '$1,250' },
                      { name: 'Factura #1283', status: 'Pendiente', amount: '$890' },
                    ].map((row, i) => (
                      <div key={i} className="px-4 py-2 flex items-center justify-between">
                        <span className="text-sm text-foreground">{row.name}</span>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            row.status === 'Completado' 
                              ? 'bg-accent/10 text-accent' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {row.status}
                          </span>
                          <span className="text-sm font-medium text-foreground">{row.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating metric cards */}
            {FLOATING_METRICS.map((metric, i) => (
              <div
                key={i}
                className={`absolute bg-card/95 backdrop-blur-sm rounded-xl border border-border shadow-lg px-4 py-3 transition-all duration-700 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${
                  i === 0 ? '-top-4 -left-4 lg:-left-8' :
                  i === 1 ? 'top-1/3 -right-4 lg:-right-8' :
                  '-bottom-4 left-8 lg:left-4'
                }`}
                style={{ transitionDelay: `${600 + metric.delay}ms` }}
              >
                <p className="text-xs text-muted-foreground mb-0.5">{metric.label}</p>
                <p className="text-xl font-bold text-primary">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
