import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Logo } from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'
import { SectionContainer } from '@/components/layout/section-container'
import { SITE_CONFIG, FOOTER_NAV } from '@/lib/constants'

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-background/50 backdrop-blur-sm">
      <SectionContainer className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Logo asLink={false} className="mb-4" />
            <p className="text-sm text-muted-foreground">{SITE_CONFIG.description}</p>
          </div>
          {FOOTER_NAV.map((group) => (
            <div key={group.label}>
              <h4 className="font-semibold text-sm mb-4">{group.label}</h4>
              <ul className="space-y-3">
                {group.children?.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {SITE_CONFIG.links?.twitter && (
              <Link
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                𝕏
              </Link>
            )}
            {SITE_CONFIG.links?.github && (
              <Link
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
            )}
            {SITE_CONFIG.links?.linkedin && (
              <Link
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
            )}
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
