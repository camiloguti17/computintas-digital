const STATS = [
  {
    value: '15+',
    label: 'Años de experiencia',
    description: 'Acompañando empresas colombianas desde 2009',
  },
  {
    value: '300+',
    label: 'Soluciones implementadas',
    description: 'En comercio, salud, logística e industria',
  },
  {
    value: '12',
    label: 'Sectores atendidos',
    description: 'Talleres, farmacias, ferreterías y más',
  },
  {
    value: '98%',
    label: 'Clientes satisfechos',
    description: 'Basado en encuestas post-implementación',
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/40" aria-label="Indicadores de confianza">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <dl className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 md:gap-x-8">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:items-start md:text-left gap-1"
            >
              <dt className="sr-only">{stat.label}</dt>

              {/* Divider line — hidden on first item, visible on rest (desktop) */}
              {index > 0 && (
                <div className="hidden md:block absolute" aria-hidden="true" />
              )}

              <span
                className="text-3xl font-bold tracking-tight text-foreground tabular-nums"
                aria-label={stat.value}
              >
                {stat.value}
              </span>

              <span className="text-sm font-semibold text-foreground/80">
                {stat.label}
              </span>

              <span className="text-xs text-muted-foreground leading-relaxed">
                {stat.description}
              </span>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
