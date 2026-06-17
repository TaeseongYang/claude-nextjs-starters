'use client'

import { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/shared/logo'
import { NavLink } from '@/components/shared/nav-link'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { MobileNav } from '@/components/layout/mobile-nav'
import { SectionContainer } from '@/components/layout/section-container'
import { MAIN_NAV } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { y } = useWindowScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(y > 10)
  }, [y])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled && 'backdrop-blur-md bg-background/80 border-b border-border shadow-sm'
      )}
    >
      <SectionContainer>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {MAIN_NAV.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/dashboard" className="hidden sm:inline-block">
              <Button size="sm">Dashboard</Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </SectionContainer>
    </header>
  )
}
