'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', company: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contacto" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Hablemos sobre tu proyecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Nos encantaría conocer tus necesidades. Contáctanos para una consulta sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Methods - Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email */}
            <Link href="mailto:Contacto@computintas.co">
              <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground break-all group-hover:text-primary transition-colors">
                      Contacto@computintas.co
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Phone */}
            <Link href="tel:+576048298470">
              <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      +57 604 8298470
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* WhatsApp */}
            <Link href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
              <div className="group p-6 rounded-xl border border-accent/30 bg-accent/5 hover:border-accent hover:shadow-md hover:shadow-accent/10 transition-all duration-200 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                      Charla rápida y directa
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Location */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                  <p className="text-sm text-muted-foreground">
                    Apartadó, Antioquia
                    <br />
                    Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-4 rounded-lg bg-muted/40 border border-border">
              <p className="text-xs text-muted-foreground font-medium">
                Respaldado por el mejor equipo de soporte
              </p>
              <p className="text-sm text-foreground font-semibold mt-1">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>

          {/* Form - Right Column */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-2xl border border-border">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nombre completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  required
                  className="bg-background border-border focus-ring h-11"
                />
              </div>

              {/* Email and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="juan@empresa.com"
                    required
                    className="bg-background border-border focus-ring h-11"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Tu empresa"
                    className="bg-background border-border focus-ring h-11"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Describe brevemente qué necesitas. ¿Qué desafíos enfrenta tu empresa? ¿Cuáles son tus objetivos?"
                  required
                  rows={4}
                  className="bg-background border-border resize-none focus-ring"
                />
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground">
                Tus datos están seguros. Nos comprometemos a usarlos solo para contactarte y ofrecerte soluciones.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar solicitud
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </Button>
                <Link href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-accent/30 hover:border-accent hover:bg-accent/5 text-foreground font-semibold h-11 transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </span>
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
