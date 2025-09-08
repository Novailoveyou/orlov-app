import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const containerVariants = cva('', {
  variants: {
    variant: {
      default: 'relative z-20 w-full px-5 max-w-[90rem] mx-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

/**
 * @description Defines a div container
 */
export function Container({
  className,
  children,
  variant,
}: Pick<ComponentProps<'div'>, 'className' | 'children'> &
  VariantProps<typeof containerVariants>) {
  return (
    <div className={cn(containerVariants({ variant, className }))}>
      {children}
    </div>
  )
}
