import type { SectionProps } from '@/types'
import { cn } from '@/lib/utils'

export function SectionContainer({
  children,
  className,
  id,
}: SectionProps & { children: React.ReactNode }) {
  return (
    <div
      id={id}
      className={cn(
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  )
}
