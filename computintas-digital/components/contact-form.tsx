'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Send, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Contacto@computintas.co',
    href: 'mailto:Contacto@computintas.co',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '604 8298470',
    href: 'tel:6048298470',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Apartadó, Colombia',
    href: null,
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun - Vie, 8am - 6pm',
    href: null,
  },
]

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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', company: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contacto" className="section-padding bg-muted/30">
      <div className="container-premium">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Conversemos sobre tu proyecto
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            ¿Tienes una idea o un problema que resolver? Cuéntanos y te ayudaremos 
            a encontrar la mejor solución tecnológica para tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                )
                
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Respuesta inmediata</h3>
                    <p className="text-sm text-muted-foreground">Escríbenos por WhatsApp</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/573107876505?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20soluciones%20de%20software."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
                    Iniciar conversación
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className="bg-background border-border h-11"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email corporativo
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="tu@empresa.com"
                        required
                        className="bg-background border-border h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="bg-background border-border h-11"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="¿Qué problema quieres resolver? ¿Qué funcionalidades necesitas?"
                      required
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base gap-2"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario aceptas nuestra política de privacidad. 
                    Responderemos en menos de 24 horas hábiles.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
