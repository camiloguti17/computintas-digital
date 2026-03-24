import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1E3A8A',
}

export const metadata: Metadata = {
  title: 'Computintas Digital | Soluciones de Software Personalizadas',
  description: 'Desarrollo de software a la medida, aplicaciones empresariales y soluciones digitales innovadoras. Más de 15 años de experiencia en transformación digital.',
  keywords: ['software a medida', 'desarrollo de aplicaciones', 'soluciones digitales', 'transformación digital', 'Colombia', 'Apartadó'],
  metadataBase: new URL('https://computintasdigital.com'),
  alternates: {
    canonical: 'https://computintasdigital.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Computintas Digital | Soluciones de Software Personalizadas',
    description: 'Desarrollo de software a la medida, aplicaciones empresariales y soluciones digitales innovadoras.',
    url: 'https://computintasdigital.com',
    siteName: 'Computintas Digital',
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computintas Digital',
    description: 'Soluciones de software personalizadas',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="alternate" hrefLang="es" href="https://computintasdigital.com" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
