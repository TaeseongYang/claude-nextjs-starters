'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/shared/logo'
import { NavLink } from '@/components/shared/nav-link'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { MAIN_NAV } from '@/lib/constants'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <SheetHeader className="flex-row items-center justify-between">
          <Logo asLink={false} />
        </SheetHeader>
        <Separator className="my-4" />
        <nav className="flex flex-col gap-4">
          {MAIN_NAV.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              className="text-base px-2 py-1 rounded-md"
              activeClassName="text-foreground font-semibold bg-accent"
              onClick={() => setOpen(false)}
            />
          ))}
        </nav>
        <Separator className="my-4" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">테마</span>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
