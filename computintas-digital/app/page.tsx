import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Services } from '@/components/services'
import { Products } from '@/components/products'
import { Process } from '@/components/process'
import { About } from '@/components/about'
import { CTASection } from '@/components/cta-section'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Products />
      <Process />
      <About />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  )
}
