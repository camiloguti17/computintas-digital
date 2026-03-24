import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
})
const _geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Computintas Digital | Software Empresarial a la Medida',
  description: 'Transformamos empresas con soluciones de software personalizadas. Más de 10 años desarrollando sistemas de gestión, aplicaciones móviles y herramientas digitales para optimizar tu negocio.',
  keywords: ['software empresarial', 'desarrollo a medida', 'sistemas de gestión', 'aplicaciones móviles', 'Colombia', 'transformación digital', 'Computintas'],
  generator: 'v0.app',
  openGraph: {
    title: 'Computintas Digital | Software Empresarial a la Medida',
    description: 'Transformamos empresas con soluciones de software personalizadas. Más de 10 años de experiencia.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Computintas Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computintas Digital | Software Empresarial',
    description: 'Soluciones de software personalizadas para tu empresa',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
