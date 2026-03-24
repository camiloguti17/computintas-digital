import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Services } from '@/components/services'
import { Products } from '@/components/products'
import { Industries } from '@/components/industries'
import { About } from '@/components/about'
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
      <Industries />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}
