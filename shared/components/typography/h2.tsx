import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

export function H2({
  children,
  className,
}: Pick<ComponentProps<'h2'>, 'children' | 'className'>) {
  return (
    <h2
      className={cn(
        'first:mt-0 pb-2 border-b font-semibold text-3xl tracking-tight scroll-m-20',
        className,
      )}>
      {children}
    </h2>
  )
}
