'use client'

import { useState } from 'react'
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import {
  Sheet,
  SheetContent,
  SheetHeader,
} from '@/components/ui/sheet'
import { Logo } from '@/components/shared/logo'
import { NavLink } from '@/components/shared/nav-link'
import { Separator } from '@/components/ui/separator'
import { SIDEBAR_NAV } from '@/lib/constants'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />

      <div className="flex flex-1 flex-col">
        <DashboardHeader onMobileMenuOpen={() => setMobileMenuOpen(true)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>

      {/* 모바일 사이드바 */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <SheetHeader>
            <Logo asLink={false} />
          </SheetHeader>
          <Separator className="my-4" />
          <nav className="flex flex-col gap-2">
            {SIDEBAR_NAV.map((item) => (
              <NavLink
                key={item.href}
                {...item}
                className="px-3 py-2 rounded-md text-sm"
                activeClassName="bg-accent text-foreground font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
