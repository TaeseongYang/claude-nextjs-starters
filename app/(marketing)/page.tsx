import type { Metadata } from 'next'
import { HeroSection } from '@/components/marketing/hero-section'
import { StatsSection } from '@/components/marketing/stats-section'
import { FeaturesSection } from '@/components/marketing/features-section'
import { CtaSection } from '@/components/marketing/cta-section'

export const metadata: Metadata = {
  title: '홈',
  description: '모던 Next.js 스타터킷으로 시작하세요',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CtaSection />
    </>
  )
}
