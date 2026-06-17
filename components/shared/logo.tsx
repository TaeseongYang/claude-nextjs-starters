import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

type LogoProps = {
  asLink?: boolean
  className?: string
}

export function Logo({ asLink = true, className = '' }: LogoProps) {
  const content = (
    <div className={`flex items-center gap-2 font-bold text-lg ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-sm font-bold">
        S
      </div>
      <span className="hidden sm:inline">{SITE_CONFIG.name}</span>
    </div>
  )

  if (asLink) {
    return <Link href="/">{content}</Link>
  }

  return content
}
