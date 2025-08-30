import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const paragraphVariants = cva('', {
  variants: {
    variant: {
      default:
        'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
      lead: 'text-muted-foreground text-xl',
      large: 'text-lg font-semibold',
      muted: 'text-muted-foreground text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export function P({
  children,
  className,
  variant,
}: Pick<ComponentProps<'p'>, 'children' | 'className'> &
  VariantProps<typeof paragraphVariants>) {
  return (
    <p className={cn(paragraphVariants({ variant, className }))}>{children}</p>
  )
}
