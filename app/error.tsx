'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold">500</h1>
          <p className="text-2xl font-semibold text-muted-foreground">문제가 발생했습니다</p>
        </div>
        <p className="text-muted-foreground max-w-md">
          죄송합니다. 예상치 못한 오류가 발생했습니다. 다시 시도해주세요.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => reset()}>다시 시도</Button>
          <Button variant="outline" onClick={() => (window.location.href = '/')}>
            홈으로
          </Button>
        </div>
      </div>
    </div>
  )
}
