import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

type ListItem = Pick<ComponentProps<'li'>, 'children' | 'className'> &
  Required<Pick<ComponentProps<'li'>, 'id'>>

export function List({
  className,
  items,
}: Pick<ComponentProps<'ul'>, 'className'> & { items: ListItem[] }) {
  return (
    <ul className={cn('mt-6 pl-6 border-l-2 italic', className)}>
      {items.map(({ id, children, className }) => (
        <li key={id} className={cn(className)}>
          {children}
        </li>
      ))}
    </ul>
  )
}
