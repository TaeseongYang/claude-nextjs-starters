import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

type ActivityItem = {
  id: string
  action: string
  description: string
  timestamp: string
}

const SAMPLE_ACTIVITIES: ActivityItem[] = [
  {
    id: '1',
    action: '프로젝트 생성',
    description: '새로운 프로젝트 "Web App"이 생성되었습니다',
    timestamp: '2시간 전',
  },
  {
    id: '2',
    action: '파일 업로드',
    description: 'avatar.png 파일이 업로드되었습니다',
    timestamp: '4시간 전',
  },
  {
    id: '3',
    action: '설정 변경',
    description: '알림 설정이 변경되었습니다',
    timestamp: '1일 전',
  },
  {
    id: '4',
    action: '팀 초대',
    description: '3명의 팀원이 추가되었습니다',
    timestamp: '3일 전',
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 활동</CardTitle>
        <CardDescription>최근 업데이트된 활동 목록</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {SAMPLE_ACTIVITIES.map((activity) => (
            <div key={activity.id}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-sm">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                  {activity.timestamp}
                </span>
              </div>
              <Separator className="mt-4" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
