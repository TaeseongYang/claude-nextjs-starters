'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/shared/logo'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { Separator } from '@/components/ui/separator'

type DashboardHeaderProps = {
  onMobileMenuOpen?: () => void
}

export function DashboardHeader({ onMobileMenuOpen }: DashboardHeaderProps) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm lg:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <Logo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={onMobileMenuOpen}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">모바일 메뉴 열기</span>
            </Button>
          </div>
        </div>
      </header>
      <Separator className="hidden lg:block" />
    </>
  )
}
