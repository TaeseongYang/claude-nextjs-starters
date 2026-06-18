# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**StarterKit**은 Next.js 16, React 19, TypeScript, shadcn/ui, Tailwind CSS 4를 기반으로 한 프로덕션 준비 완료 스타터 템플릿입니다.

- **Next.js 버전**: 16.2.9 (App Router, Turbopack)
- **React 버전**: 19.2.4
- **TypeScript**: 5.x (strict mode 활성화)
- **스타일링**: Tailwind CSS 4 (CSS-only 설정, tailwind.config.ts 없음), shadcn/ui, class-variance-authority
- **폰트**: Geist Sans + Geist Mono (`next/font/google`)
- **애니메이션**: tw-animate-css
- **폼 관리**: React Hook Form + Zod
- **아이콘**: Lucide React
- **테마**: next-themes (다크모드 지원)
- **유틸리티 훅**: react-use (useWindowScroll 등)

## 아키텍처 및 디렉토리 구조

### 레이아웃 그룹 (Route Groups)

```
app/
├── (marketing)/        # 마케팅 페이지 그룹
│   ├── layout.tsx      # SiteHeader + SiteFooter
│   └── page.tsx        # 홈페이지 (/)
│
├── (dashboard)/        # 대시보드 그룹
│   ├── layout.tsx      # DashboardSidebar + DashboardHeader (Client Component)
│   └── dashboard/
│       ├── page.tsx    # /dashboard
│       ├── projects/
│       │   └── page.tsx # /dashboard/projects
│       └── settings/
│           └── page.tsx # /dashboard/settings
│
├── layout.tsx          # 루트 레이아웃 (ThemeProvider, TooltipProvider)
├── globals.css         # 전역 스타일
├── error.tsx           # 전역 에러 페이지
└── not-found.tsx       # 404 페이지
```

### 컴포넌트 디렉토리

```
components/
├── ui/                 # shadcn/ui 컴포넌트 (재사용 가능한 기본 요소)
│   ├── button.tsx, card.tsx, badge.tsx, input.tsx, label.tsx, 
│   ├── avatar.tsx, skeleton.tsx, separator.tsx, tooltip.tsx, 
│   ├── dropdown-menu.tsx, sheet.tsx
│
├── layout/             # 레이아웃 컴포넌트
│   ├── site-header.tsx        # 마케팅 헤더
│   ├── site-footer.tsx        # 마케팅 푸터
│   ├── dashboard-sidebar.tsx  # 대시보드 사이드바
│   ├── dashboard-header.tsx   # 대시보드 헤더
│   ├── section-container.tsx  # 섹션 래퍼
│   └── mobile-nav.tsx         # 모바일 네비게이션
│
├── shared/             # 공유 컴포넌트
│   ├── logo.tsx
│   ├── nav-link.tsx
│   └── theme-toggle.tsx
│
├── marketing/          # 마케팅 페이지 섹션
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── stats-section.tsx
│   └── cta-section.tsx
│
├── dashboard/          # 대시보드 섹션
│   ├── stats-card.tsx  # 통계 카드 컴포넌트
│   └── recent-activity.tsx
│
└── providers/          # 컨텍스트 프로바이더
    └── theme-provider.tsx
```

### 공유 리소스

```
lib/
├── constants.ts        # SITE_CONFIG, MAIN_NAV, FOOTER_NAV, SIDEBAR_NAV, FEATURES, STATS
├── utils.ts            # cn() - Tailwind merge 유틸리티
└── validations.ts      # Zod 스키마 (미포함)

types/
└── index.ts            # SiteConfig, NavItem, FeatureItem, StatsItem, SectionProps 등 공유 타입
```

## 핵심 기술 스택 및 패턴

### Tailwind CSS + shadcn/ui

- **구성**: Tailwind 4는 `tailwind.config.ts` 없이 `app/globals.css`에서 CSS-only 설정
  ```css
  @import "tailwindcss";
  @import "tw-animate-css";
  @import "shadcn/tailwind.css";
  ```
- **shadcn/ui**: `shadcn` npm 패키지로 설치, 컴포넌트는 `components/ui/`에 소스로 포함됨
- **클래스 병합**: `lib/utils.ts`의 `cn()` 함수로 Tailwind 클래스 충돌 해결
- **테마 커스터마이징**: CSS 변수 기반 (`@theme inline` 구문), `globals.css`에서 정의
- **다크모드 변형**: `@custom-variant dark (&:is(.dark *))`로 선언

### 라우팅

- **App Router**: 파일 기반 라우팅 (`app/` 디렉토리)
- **레이아웃 그룹**: 라우트 구조를 영향주지 않으면서 레이아웃 분리
  - `(marketing)`: 마케팅 페이지용 레이아웃 (헤더, 푸터)
  - `(dashboard)`: 대시보드 페이지용 레이아웃 (사이드바, 헤더)
- **메타데이터**: Next.js 13+ `Metadata` API 사용 (각 page.tsx에서 export)

### 다크모드

- **라이브러리**: next-themes
- **구성**: `app/layout.tsx`의 `ThemeProvider`에서 `attribute="class"`, `defaultTheme="system"` 설정
- **토글**: `components/shared/theme-toggle.tsx`로 theme 전환

### 상태 관리 및 폼

- **상태**: React Hook (useState, useEffect) - 간단한 로컬 상태용
- **폼**: React Hook Form + Zod (검증)
  - Input, Label, Button 등 shadcn/ui 컴포넌트와 함께 사용

### TypeScript

- **strict mode**: tsconfig.json에서 `"strict": true`
- **경로 별칭**: `@/*` = 프로젝트 루트 (`tsconfig.json`의 paths)
- **any 금지**: `any` 타입 사용 금지 (프로젝트 규칙)

## 자주 사용하는 명령어

```bash
# 개발 서버 시작 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm build

# 프로덕션 서버 시작 (빌드 후)
npm start

# ESLint 검사
npm run lint
```

## 새로운 페이지 추가 방법

1. **경로 생성**: `app/(group)/section/page.tsx` 파일 생성
2. **메타데이터**: `export const metadata: Metadata = { title: '...', description: '...' }`
3. **기본 구조**:
   ```tsx
   import type { Metadata } from 'next'
   
   export const metadata: Metadata = {
     title: '페이지 이름',
     description: '페이지 설명',
   }
   
   export default function PageName() {
     return <div>...</div>
   }
   ```
4. **네비게이션**: `lib/constants.ts`의 MAIN_NAV 또는 SIDEBAR_NAV에 항목 추가

## 새로운 컴포넌트 추가 방법

### UI 컴포넌트 (재사용 가능)

`components/ui/` 에 추가. shadcn/ui 패턴 따르기:
- TypeScript로 props 타입 명시
- `cn()` 함수로 클래스 병합
- Radix UI 또는 headless로 구현

### 특정 영역 컴포넌트

`components/marketing/`, `components/dashboard/`, `components/layout/` 등에 배치. 해당 영역에서만 사용.

## 스타일 규칙

- **들여쓰기**: 2칸 (전체 프로젝트)
- **Tailwind 클래스**: `className="..."` 사용, 긴 클래스는 줄바꿈
- **CSS 변수**: Tailwind 4의 `@theme` 또는 CSS 변수로 커스텀 값 정의
- **다크모드**: `dark:` 프리픽스로 다크모드 스타일 명시

## 주요 설정 파일

| 파일 | 목적 |
|------|------|
| `next.config.ts` | Next.js 설정 (현재 기본값) |
| `tsconfig.json` | TypeScript 설정 (strict mode, 경로 별칭 `@/*`) |
| `app/globals.css` | Tailwind 4 CSS 설정 + 테마 CSS 변수 (tailwind.config.ts 없음) |
| `.mcp.json` | MCP 서버 설정 (playwright, context7, sequential-thinking) |
| `package.json` | 프로젝트 의존성 및 스크립트 |
| `lib/constants.ts` | 사이트 설정, 네비게이션, 기능 목록, 통계 |

## 성능 최적화 및 Best Practices

- **Server Components**: 기본값으로 사용, 필요할 때만 `'use client'` 선언
- **이미지 최적화**: Next.js `next/image` 사용 권장
- **동적 import**: 큰 컴포넌트는 `next/dynamic` 사용
- **코드 분할**: 자동으로 page와 route 단위로 분할
- **캐싱**: App Router의 기본 캐싱 메커니즘 활용

## 주요 의존성 용도

| 패키지 | 용도 |
|--------|------|
| `next-themes` | 다크모드/라이트모드 전환 |
| `react-hook-form` | 폼 상태 관리 및 성능 |
| `zod` | 런타임 타입 검증 |
| `lucide-react` | SVG 아이콘 라이브러리 |
| `class-variance-authority` | 컴포넌트 스타일 변형 관리 |
| `tailwind-merge` | Tailwind 클래스 충돌 해결 |
| `radix-ui` | 접근성 높은 UI 프리미티브 |
| `react-use` | 유틸리티 훅 모음 (useWindowScroll 등, SiteHeader 스크롤 감지에 활용) |
| `tw-animate-css` | Tailwind 4 전용 애니메이션 유틸리티 |
| `shadcn` | shadcn/ui CLI 패키지 (컴포넌트 추가/관리) |

## 네비게이션 구조

- **MAIN_NAV** (`lib/constants.ts`): 마케팅 헤더 + `MobileNav` (Sheet 기반)에 표시
- **FOOTER_NAV** (`lib/constants.ts`): 마케팅 푸터에 표시 (children 중첩 구조 지원)
- **SIDEBAR_NAV** (`lib/constants.ts`): 대시보드 사이드바 (`DashboardSidebar`) + 모바일 Sheet에 표시
- **활성 링크**: `NavLink` 컴포넌트가 `usePathname()`으로 현재 경로와 비교, `activeClassName` prop으로 커스터마이징
- **외부 링크**: `NavItem`의 `external: true` 설정 시 `<a target="_blank" rel="noopener noreferrer">` 렌더링

## MCP 서버 구성 (`.mcp.json`)

| 서버 | 용도 |
|------|------|
| `playwright` | 브라우저 자동화 및 UI 테스트 |
| `context7` | 라이브러리 최신 문서 조회 |
| `sequential-thinking` | 복잡한 문제 단계적 분석 |

## 주의사항

1. **메타데이터**: 모든 page.tsx에서 metadata export 필수 (SEO, 브라우저 탭 제목)
2. **경로 별칭**: 상대 경로 대신 `@/` 사용 (가독성, 리팩토링 용이)
3. **타입 안정성**: `any` 타입 금지, 항상 명시적 타입 정의
4. **클라이언트/서버**: 필요한 컴포넌트만 `'use client'` 표시 (레이아웃 최소화)
5. **모바일 반응성**: 모든 UI는 모바일-퍼스트로 설계, Tailwind의 `md:`, `lg:` 프리픽스 활용
