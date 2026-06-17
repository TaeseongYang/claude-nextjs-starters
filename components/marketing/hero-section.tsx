import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionContainer } from '@/components/layout/section-container'

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-16">
      <SectionContainer className="w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <Badge className="w-fit">NEW - v1.0 출시</Badge>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              모던 Next.js 스타터킷
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              TypeScript, Tailwind CSS, shadcn/ui로 만들어진 프로덕션 레디 스타터.
              몇 분 안에 완벽한 웹 앱을 시작하세요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#features">
              <Button size="lg" className="gap-2">
                특징 보기 <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline">
                대시보드 둘러보기
              </Button>
            </Link>
          </div>

          <div className="w-full max-w-4xl mt-12">
            <div className="bg-slate-900 rounded-lg border border-border overflow-hidden">
              <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6 font-mono text-sm text-slate-300 space-y-2">
                <div className="text-slate-500">1 <span className="text-blue-400">import</span> {'{'}Button{'}'} <span className="text-blue-400">from</span> <span className="text-green-400">'@/components/ui/button'</span></div>
                <div className="text-slate-500">2 <span className="text-blue-400">import</span> {'{'}Zap{'}'} <span className="text-blue-400">from</span> <span className="text-green-400">'lucide-react'</span></div>
                <div className="text-slate-500">3</div>
                <div className="text-slate-500">4 <span className="text-blue-400">export function</span> <span className="text-yellow-300">MyComponent</span>() {'{'}</div>
                <div className="text-slate-500">5   <span className="text-blue-400">return</span> (</div>
                <div className="text-slate-500">6     <span className="text-red-400">&lt;div&gt;</span></div>
                <div className="text-slate-500">7       <span className="text-red-400">&lt;Button&gt;</span><span className="text-slate-300">클릭하세요</span><span className="text-red-400">&lt;/Button&gt;</span></div>
                <div className="text-slate-500">8     <span className="text-red-400">&lt;/div&gt;</span></div>
                <div className="text-slate-500">9   )</div>
                <div className="text-slate-500">10 {'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
