import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function Footer({
  children,
  className,
}: Pick<ComponentProps<'footer'>, 'children' | 'className'>) {
  return <footer className={cn('', className)}>{children}</footer>
}
