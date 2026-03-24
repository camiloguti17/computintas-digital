import { Building2, Hospital, ShoppingBag, Factory, Truck, GraduationCap } from 'lucide-react'

const industries = [
  { icon: Hospital, label: 'Salud' },
  { icon: ShoppingBag, label: 'Retail' },
  { icon: Factory, label: 'Manufactura' },
  { icon: Truck, label: 'Logística' },
  { icon: Building2, label: 'Empresas' },
  { icon: GraduationCap, label: 'Educación' },
]

export function TrustBar() {
  return (
    <section className="w-full py-12 bg-muted/30 border-y border-border/50">
      <div className="container-premium">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
          Soluciones para múltiples sectores
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div 
                key={industry.label}
                className="flex items-center gap-2 text-muted-foreground/70 hover:text-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{industry.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
