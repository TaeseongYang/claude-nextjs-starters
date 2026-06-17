import { SectionContainer } from '@/components/layout/section-container'
import { STATS } from '@/lib/constants'

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/50 border-y border-border">
      <SectionContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
