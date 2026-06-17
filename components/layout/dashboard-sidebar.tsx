'use client'

import { Logo } from '@/components/shared/logo'
import { NavLink } from '@/components/shared/nav-link'
import { Separator } from '@/components/ui/separator'
import { SIDEBAR_NAV } from '@/lib/constants'

export function DashboardSidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-background/50 backdrop-blur-sm">
      <div className="p-6">
        <Logo asLink={true} />
      </div>

      <Separator />

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {SIDEBAR_NAV.map((item) => (
          <NavLink
            key={item.href}
            {...item}
            className="px-3 py-2 rounded-md text-sm"
            activeClassName="bg-accent text-foreground font-semibold"
          />
        ))}
      </nav>

      <Separator />

      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          © 2024 StarterKit
        </div>
      </div>
    </aside>
  )
}
