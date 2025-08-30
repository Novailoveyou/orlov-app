import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function H1({
  children,
  className,
}: Pick<ComponentProps<'h1'>, 'children' | 'className'>) {
  return (
    <h1
      className={cn(
        'font-extrabold text-4xl text-center text-balance tracking-tight scroll-m-20',
        className,
      )}>
      {children}
    </h1>
  )
}
