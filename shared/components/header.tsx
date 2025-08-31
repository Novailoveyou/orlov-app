import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

export function Header({
  children,
  className,
}: Pick<ComponentProps<'header'>, 'children' | 'className'>) {
  return <header className={cn('', className)}>{children}</header>
}
