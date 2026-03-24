'use client'

import Image from 'next/image'

const QR_PLACEHOLDER = 'https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://computintasdigital.com'

const solutions = [
  {
    title: 'Desarrollo de software personalizado',
    description:
      'Creamos soluciones únicas que se adaptan a los procesos y necesidades de tu organización. Nuestro equipo analiza y diseña aplicaciones escalables, seguras y eficientes para optimizar flujos de trabajo, integrar plataformas y transformar ideas en productos digitales.',
    bullets: [
      'Desarrollo web y móvil adaptado a tu negocio',
      'Integración con sistemas existentes y API',
      'Metodologías ágiles para entrega continua',
    ],
    image: '/sol-software.jpg',
    links: {
      video: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    title: 'Aplicaciones disponibles',
    description:
      'Contamos con una suite de aplicaciones listas para usar que pueden desplegarse rápidamente en tu empresa. Diseñadas con interfaces intuitivas y funcionalidades probadas para distintos sectores.',
    bullets: [
      'Instalación rápida y soporte continuo',
      'Adaptables a distintos rubros',
      'Actualizaciones y mejoras periódicas',
    ],
    image: '/sol-apps.jpg',
    links: {
      video: '#',
      instagram: '#',
      facebook: '#',
    },
  },
]

const products = [
  {
    title: 'Aplicación de Asistencia',
    description:
      'App Asistencia es una solución diseñada para registrar y controlar de forma ágil la entrada, salida y estado del personal. Facilita el seguimiento de horarios, mejora el control operativo y permite consultar la información en tiempo real para una gestión más organizada y eficiente.',
    bullets: [
      'Registro rápido de asistencia',
      'Control de horarios y estados',
      'Reportes claros para seguimiento',
    ],
    image: '/sol-asistencia.png',
    imagePosition: 'left',
    links: {
      video: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    title: 'Gestión de Taller',
    description:
      'Solución completa para talleres mecánicos y servicios técnicos. Controla recepciones, presupuestos, órdenes de trabajo, stock y facturación desde un solo sistema, optimizando cada etapa del servicio.',
    bullets: [
      'Órdenes de trabajo digitales',
      'Control de inventario y repuestos',
      'Facturación e informes de gestión',
    ],
    image: '/sol-taller.jpg',
    imagePosition: 'right',
    links: {
      video: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    title: 'Seguimiento con balizas',
    description:
      'Sistema de tracking en tiempo real utilizando tecnología Bluetooth y GPS para la localización de activos, vehículos y personal. Ideal para empresas que requieren visibilidad operativa constante.',
    bullets: [
      'Rastreo en tiempo real de activos y vehículos',
      'Alertas automáticas por zona o movimiento',
      'Panel de control con historial de rutas',
    ],
    image: '/sol-balizas.jpg',
    imagePosition: 'left',
    links: {
      video: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    title: 'Actas de Recepción para farmacias',
    description:
      'Actas de recepción para farmacias y control de vencimientos con alertas automáticas. Mantén el cumplimiento normativo y reduce riesgos mediante notificaciones proactivas y registros digitales.',
    bullets: [
      'Actas digitales de recepción de mercadería',
      'Control de vencimientos con alertas automáticas',
      'Trazabilidad y auditoría de productos',
    ],
    image: '/sol-alertas.jpg',
    imagePosition: 'right',
    links: {
      video: '#',
      instagram: '#',
      facebook: '#',
    },
  },
]

export function Services() {
  return (
    <section id="servicios" className="w-full py-20 md:py-28 bg-[#f0f4f8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Soluciones a tu medida
        </h2>

        {/* Solutions Cards */}
        <div className="flex flex-col gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="relative w-full md:w-[400px] shrink-0 h-64 md:h-[280px] bg-muted/30">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center px-8 py-7 gap-3 flex-1">
                <h3 className="text-xl font-bold text-primary leading-snug">
                  {solution.title}
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  {solution.description}
                </p>
                <ul className="flex flex-col gap-1 mt-1">
                  {solution.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Links + QR */}
                <div className="flex items-center gap-5 mt-3">
                  <a href={solution.links.video} className="text-sm text-primary hover:underline font-medium">
                    Video
                  </a>
                  <a href={solution.links.instagram} className="text-sm text-primary hover:underline font-medium">
                    Instagram
                  </a>
                  <a href={solution.links.facebook} className="text-sm text-primary hover:underline font-medium">
                    Facebook
                  </a>
                  <div className="ml-2 border border-border rounded p-0.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={QR_PLACEHOLDER}
                      alt="Código QR"
                      width={64}
                      height={64}
                      className="block"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Separator - Nuestros Productos */}
      <div className="relative my-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-primary/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#f0f4f8] px-8 py-3 text-2xl md:text-3xl font-bold text-primary rounded-full border-2 border-primary/20">
            Nuestros Productos
          </span>
        </div>
      </div>

      {/* Products Section - Full Width Design */}
      <div className="flex flex-col gap-0 bg-secondary">
        {products.map((product, index) => (
          <div
            key={product.title}
            className={`flex flex-col ${
              product.imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-stretch bg-secondary`}
          >
            {/* Image Container with proper aspect ratio */}
            <div 
              className={`relative w-full lg:w-1/2 flex items-center justify-center p-6 md:p-10 bg-secondary`} 
              style={{ height: '700px' }}
            >
              <div 
                className={`relative overflow-hidden shadow-2xl flex-shrink-0 rounded-xl ring-1 ring-white/10`}
                style={{ 
                  height: '600px',
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                  maxWidth: '95%'
                }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content - padded side */}
            <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2 px-8 md:px-16 lg:px-20 py-12 md:py-16 bg-secondary">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white/70 uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-white/50"></span>
                Producto Destacado
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {product.title}
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {product.description}
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                {product.bullets.map((bullet) => (
                  <li key={bullet} className="text-base text-white/90 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-white" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex items-center gap-4 mt-4 pt-6 border-t border-white/20">
                <a href={product.links.video} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Ver Video
                </a>
                <a href={product.links.instagram} className="px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
                  Instagram
                </a>
                <a href={product.links.facebook} className="px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
                  Facebook
                </a>
                <div className="ml-auto border border-white/20 rounded-lg p-1.5 bg-white/5 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={QR_PLACEHOLDER}
                    alt="Código QR"
                    width={60}
                    height={60}
                    className="block rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
