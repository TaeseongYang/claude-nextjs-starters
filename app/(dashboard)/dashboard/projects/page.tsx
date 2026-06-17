import type { Metadata } from 'next'
import { FolderOpen, CheckCircle, Play } from 'lucide-react'
import { StatsCard } from '@/components/dashboard/stats-card'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '프로젝트',
  description: '프로젝트 관리',
}

type ProjectStatus = 'active' | 'completed' | 'paused'

type Project = {
  id: string
  name: string
  description: string
  status: ProjectStatus
  memberCount: number
  updatedAt: string
}

const STATUS_CONFIG: Record<ProjectStatus, { label: string; variant: 'default' | 'secondary' | 'outline' }> = {
  active: { label: '진행 중', variant: 'default' },
  paused: { label: '일시중지', variant: 'secondary' },
  completed: { label: '완료', variant: 'outline' },
}

const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Web App 리뉴얼',
    description: '기존 웹 애플리케이션의 UI/UX를 개선하고 성능을 최적화하는 프로젝트입니다.',
    status: 'active',
    memberCount: 4,
    updatedAt: '2일 전',
  },
  {
    id: '2',
    name: '모바일 앱 개발',
    description: 'React Native를 사용한 iOS/Android 크로스플랫폼 모바일 애플리케이션 개발',
    status: 'active',
    memberCount: 3,
    updatedAt: '5일 전',
  },
  {
    id: '3',
    name: '데이터 파이프라인 구축',
    description: 'ETL 프로세스를 통한 데이터 수집 및 분석 파이프라인 구축',
    status: 'paused',
    memberCount: 2,
    updatedAt: '1주 전',
  },
  {
    id: '4',
    name: 'API 서버 v2',
    description: 'RESTful API를 GraphQL로 마이그레이션하고 성능을 개선',
    status: 'completed',
    memberCount: 5,
    updatedAt: '2주 전',
  },
]

export default function ProjectsPage() {
  const totalProjects = SAMPLE_PROJECTS.length
  const activeProjects = SAMPLE_PROJECTS.filter((p) => p.status === 'active').length
  const completedProjects = SAMPLE_PROJECTS.filter((p) => p.status === 'completed').length

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">프로젝트</h1>
          <p className="text-muted-foreground mt-2">
            팀의 모든 프로젝트를 한눈에 확인하고 관리합니다.
          </p>
        </div>
        <Button>새 프로젝트</Button>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <StatsCard
          title="총 프로젝트"
          value={totalProjects}
          description="모든 프로젝트"
          icon={<FolderOpen className="h-4 w-4" />}
        />
        <StatsCard
          title="활성 프로젝트"
          value={activeProjects}
          description="진행 중인 프로젝트"
          icon={<Play className="h-4 w-4" />}
          trend="up"
          trendValue="+2"
        />
        <StatsCard
          title="완료된 프로젝트"
          value={completedProjects}
          description="완료된 프로젝트"
          icon={<CheckCircle className="h-4 w-4" />}
          trend="up"
          trendValue="+1"
        />
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        {SAMPLE_PROJECTS.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <Badge variant={STATUS_CONFIG[project.status].variant}>
                  {STATUS_CONFIG[project.status].label}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>팀원 {project.memberCount}명</span>
                <span>{project.updatedAt} 수정</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                자세히 보기
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
