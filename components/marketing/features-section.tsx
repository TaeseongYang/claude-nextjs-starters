import {
  Zap,
  Code2,
  Palette,
  Accessibility,
  Smartphone,
  Gauge,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionContainer } from '@/components/layout/section-container'
import { FEATURES } from '@/lib/constants'

const ICON_MAP = {
  Zap,
  Code2,
  Palette,
  Accessibility,
  Smartphone,
  Gauge,
} as const

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <SectionContainer>
        <div className="flex flex-col items-center text-center mb-12">
          <Badge className="mb-4">주요 기능</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            모든 것이 포함되어 있습니다
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            프로덕션 레벨의 웹 애플리케이션 개발을 위한 모든 필수 기능과 최적화가 준비되어 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const IconComponent =
              typeof feature.icon === 'string'
                ? ICON_MAP[feature.icon as keyof typeof ICON_MAP]
                : null

            return (
              <Card key={i} className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-fit rounded-lg bg-primary/10 p-2 mb-4">
                    {IconComponent ? (
                      <IconComponent className="w-6 h-6 text-primary" />
                    ) : (
                      feature.icon
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    {feature.badge && <Badge variant="secondary">{feature.badge}</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </SectionContainer>
    </section>
  )
}
