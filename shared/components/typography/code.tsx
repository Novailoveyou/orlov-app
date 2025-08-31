import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

export function Code({
  children,
  className,
}: Pick<ComponentProps<'code'>, 'children' | 'className'>) {
  return (
    <code
      className={cn(
        'relative bg-muted px-[0.3rem] py-[0.2rem] rounded font-mono font-semibold text-sm',
        className,
      )}>
      {children}
    </code>
  )
}
