import type { Metadata } from 'next'
import { Users, Activity, TrendingUp, Clock } from 'lucide-react'
import { StatsCard } from '@/components/dashboard/stats-card'
import { RecentActivity } from '@/components/dashboard/recent-activity'

export const metadata: Metadata = {
  title: '대시보드',
  description: '대시보드 개요',
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground mt-2">
          환영합니다! 여기서 모든 주요 지표를 확인할 수 있습니다.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="총 사용자"
          value="12,543"
          description="월 순증가"
          icon={<Users className="h-4 w-4" />}
          trend="up"
          trendValue="+2.5%"
        />
        <StatsCard
          title="활성 세션"
          value="2,873"
          description="현재 진행 중"
          icon={<Activity className="h-4 w-4" />}
          trend="up"
          trendValue="+12.1%"
        />
        <StatsCard
          title="매출"
          value="$45,321"
          description="이번 달"
          icon={<TrendingUp className="h-4 w-4" />}
          trend="up"
          trendValue="+8.2%"
        />
        <StatsCard
          title="평균 응답시간"
          value="234ms"
          description="API 응답"
          icon={<Clock className="h-4 w-4" />}
          trend="down"
          trendValue="-3.2%"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-semibold mb-4">빠른 팁</h3>
            <p className="text-sm text-muted-foreground">
              이 대시보드는 프로덕션 레벨의 구성 요소로 만들어진 예시입니다. 자유롭게 커스터마이징하세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
