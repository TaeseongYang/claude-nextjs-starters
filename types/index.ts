import type { ReactNode } from 'react'

// 사이트 설정
export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage?: string
  links?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

// 네비게이션 항목
export type NavItem = {
  label: string
  href: string
  icon?: ReactNode
  external?: boolean
  badge?: string
  children?: NavItem[]
}

// 기능 소개 항목
export type FeatureItem = {
  icon: string | ReactNode
  title: string
  description: string
  badge?: string
}

// 섹션 공통 Props
export type SectionProps = {
  className?: string
  id?: string
}

// 통계 항목
export type StatsItem = {
  value: string
  label: string
  description?: string
}
