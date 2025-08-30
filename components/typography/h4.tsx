import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function H4({
  children,
  className,
}: Pick<ComponentProps<'h4'>, 'children' | 'className'>) {
  return (
    <h4
      className={cn(
        'font-semibold text-xl tracking-tight scroll-m-20',
        className,
      )}>
      {children}
    </h4>
  )
}
