import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

export function Blockquote({
  children,
  className,
}: Pick<ComponentProps<'blockquote'>, 'children' | 'className'>) {
  return (
    <blockquote className={cn('mt-6 pl-6 border-l-2 italic', className)}>
      {children}
    </blockquote>
  )
}
