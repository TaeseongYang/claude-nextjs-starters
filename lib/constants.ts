import type { SiteConfig, NavItem, FeatureItem, StatsItem } from '@/types'

// 사이트 설정
export const SITE_CONFIG: SiteConfig = {
  name: 'StarterKit',
  description: 'Modern Next.js 15+ starter template with shadcn/ui, TypeScript, and Tailwind CSS',
  url: 'https://starterkit.example.com',
  ogImage: '/og.png',
  links: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
}

// 메인 네비게이션
export const MAIN_NAV: NavItem[] = [
  {
    label: 'Features',
    href: '/#features',
  },
  {
    label: 'Docs',
    href: 'https://nextjs.org',
    external: true,
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
]

// 푸터 네비게이션
export const FOOTER_NAV: NavItem[] = [
  {
    label: 'Product',
    href: '#',
    children: [
      { label: 'Features', href: '/#features' },
      { label: 'Security', href: '#' },
    ],
  },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    label: 'Legal',
    href: '#',
    children: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

// 대시보드 사이드바 네비게이션
export const SIDEBAR_NAV: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: 'Projects',
    href: '/dashboard/projects',
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
  },
]

// 기능 소개 (아이콘은 컴포넌트에서 직접 임포트)
export const FEATURES: FeatureItem[] = [
  {
    icon: 'Zap',
    title: 'Lightning Fast',
    description: 'Built with Next.js 16 and optimized for performance. Zero configuration needed.',
    badge: 'Performance',
  },
  {
    icon: 'Code2',
    title: 'Developer Friendly',
    description: 'TypeScript first with strict mode enabled. Excellent developer experience out of the box.',
    badge: 'Developer',
  },
  {
    icon: 'Palette',
    title: 'Beautiful Components',
    description: 'Built with shadcn/ui and Tailwind CSS. Fully customizable and production-ready.',
    badge: 'Design',
  },
  {
    icon: 'Accessibility',
    title: 'Accessible',
    description: 'WCAG compliant components. Built on Radix UI primitives for maximum accessibility.',
    badge: 'A11y',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Ready',
    description: 'Fully responsive design. Looks great on all devices from mobile to desktop.',
    badge: 'Responsive',
  },
  {
    icon: 'Gauge',
    title: 'Production Ready',
    description: 'Dark mode support, SEO optimized, and best practices built-in.',
    badge: 'Ready',
  },
]

// 통계
export const STATS: StatsItem[] = [
  {
    value: '99.9%',
    label: 'Uptime',
    description: 'Enterprise-grade reliability',
  },
  {
    value: '<100ms',
    label: 'Response Time',
    description: 'Lightning-fast performance',
  },
  {
    value: '50K+',
    label: 'Monthly Active Users',
    description: 'Growing community',
  },
  {
    value: '4.9/5',
    label: 'Average Rating',
    description: 'Trusted by developers',
  },
]
