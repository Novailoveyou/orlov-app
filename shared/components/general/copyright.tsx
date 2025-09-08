'use client'
import { P } from '@/shared/components/typography/p'
import { NAME } from '@/shared/constants'

export function Copyright() {
  return (
    <P>
      &copy; {new Date().getFullYear()} {NAME}
    </P>
  )
}
