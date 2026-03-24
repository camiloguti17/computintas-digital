import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Solutions } from '@/components/solutions'
import { About } from '@/components/about'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Solutions />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}
