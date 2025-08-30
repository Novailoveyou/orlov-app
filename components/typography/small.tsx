import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function Small({
  children,
  className,
}: Pick<ComponentProps<'small'>, 'children' | 'className'>) {
  return (
    <small className={cn('font-medium text-sm leading-none', className)}>
      {children}
    </small>
  )
}
