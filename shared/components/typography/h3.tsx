import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

export function H3({
  children,
  className,
}: Pick<ComponentProps<'h3'>, 'children' | 'className'>) {
  return (
    <h3
      className={cn(
        'font-semibold text-2xl tracking-tight scroll-m-20',
        className,
      )}>
      {children}
    </h3>
  )
}
