import type { Metadata } from 'next'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export const metadata: Metadata = {
  title: '설정',
  description: '계정 및 알림 설정',
}

type NotificationSetting = {
  id: string
  label: string
  description: string
  defaultEnabled: boolean
}

const NOTIFICATION_SETTINGS: NotificationSetting[] = [
  {
    id: 'email',
    label: '이메일 알림',
    description: '중요 업데이트를 이메일로 받습니다',
    defaultEnabled: true,
  },
  {
    id: 'project',
    label: '프로젝트 알림',
    description: '프로젝트 변경사항을 알립니다',
    defaultEnabled: true,
  },
  {
    id: 'team',
    label: '팀 알림',
    description: '팀원 활동을 알립니다',
    defaultEnabled: false,
  },
  {
    id: 'marketing',
    label: '마케팅 알림',
    description: '새로운 기능 및 프로모션',
    defaultEnabled: false,
  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground mt-2">
          계정, 알림, 보안 설정을 관리합니다.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>프로필 설정</CardTitle>
          <CardDescription>공개 프로필 정보를 수정합니다</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <Avatar size="lg">
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">사진 변경</Button>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" defaultValue="사용자" placeholder="이름을 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                defaultValue="user@example.com"
                placeholder="이메일을 입력하세요"
              />
            </div>
          </div>
          <div className="mt-4">
            <Button>변경사항 저장</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>알림 수신 방식을 설정합니다</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {NOTIFICATION_SETTINGS.map((setting) => (
              <div key={setting.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{setting.label}</p>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                </div>
                <Badge variant={setting.defaultEnabled ? 'default' : 'outline'}>
                  {setting.defaultEnabled ? '활성' : '비활성'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>계정 설정</CardTitle>
          <CardDescription>계정 보안 및 관리 옵션</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div>
                <p className="text-sm font-medium">비밀번호 변경</p>
                <p className="text-sm text-muted-foreground">마지막 변경: 30일 전</p>
              </div>
              <Button variant="outline" size="sm">변경</Button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20">
              <div>
                <p className="text-sm font-medium text-destructive">계정 삭제</p>
                <p className="text-sm text-muted-foreground">이 작업은 되돌릴 수 없습니다</p>
              </div>
              <Button variant="destructive" size="sm">삭제</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
