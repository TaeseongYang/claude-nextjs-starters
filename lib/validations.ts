import { z } from 'zod'

// 연락처 폼 검증 스키마
export const contactFormSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상이어야 합니다').max(100),
  email: z.string().email('유효한 이메일을 입력해주세요'),
  message: z.string().min(10, '메시지는 10자 이상이어야 합니다').max(500),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

// 구독 폼 검증 스키마
export const subscribeFormSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요'),
})

export type SubscribeFormValues = z.infer<typeof subscribeFormSchema>

// 로그인 폼 검증 스키마
export const loginFormSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요'),
  password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다').max(128),
})

export type LoginFormValues = z.infer<typeof loginFormSchema>
