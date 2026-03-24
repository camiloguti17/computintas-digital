import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Solutions } from '@/components/solutions'
import { Products } from '@/components/products'
import { HowWeWork } from '@/components/how-we-work'
import { About } from '@/components/about'
import { FinalCTA } from '@/components/final-cta'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Solutions />
      <Products />
      <HowWeWork />
      <About />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  )
}
