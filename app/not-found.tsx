import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-2xl font-semibold text-muted-foreground">페이지를 찾을 수 없습니다</p>
        </div>
        <p className="text-muted-foreground">요청하신 페이지가 존재하지 않습니다.</p>
        <Link href="/">
          <Button>홈으로 돌아가기</Button>
        </Link>
      </div>
    </div>
  )
}
