import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/layout/section-container'

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <SectionContainer>
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            지금 시작해보세요
          </h2>
          <p className="text-lg opacity-90 max-w-2xl">
            완벽한 기반을 가지고 여러분의 다음 프로젝트를 시작하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/dashboard">
              <Button size="lg" variant="secondary">
                대시보드 접속
              </Button>
            </Link>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="border-primary-foreground text-black dark:text-primary-foreground hover:bg-primary-foreground/10">
                GitHub에서 보기
              </Button>
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
