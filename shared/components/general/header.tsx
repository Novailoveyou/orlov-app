import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'
import { NavMenu } from './nav-menu'
import { Logo } from './logo'

export function Header({
  className,
}: Pick<ComponentProps<'header'>, 'className'>) {
  return (
    <header className={cn('', className)}>
      <Logo />
      <NavMenu />
    </header>
  )
}
