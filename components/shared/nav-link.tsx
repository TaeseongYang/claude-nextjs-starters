'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavItem } from '@/types'
import { cn } from '@/lib/utils'

type NavLinkProps = NavItem & {
  className?: string
  activeClassName?: string
  onClick?: () => void
}

export function NavLink({
  label,
  href,
  icon,
  external,
  className,
  activeClassName = 'text-foreground font-semibold',
  onClick,
}: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(href + '/')

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('transition-colors hover:text-foreground text-muted-foreground', className)}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-foreground text-muted-foreground',
        isActive && activeClassName,
        className
      )}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </Link>
  )
}
