import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'
import { cva } from 'class-variance-authority'

export const sectionVariants = cva('', {
  variants: {
    variant: {
      default: 'py-6 md:py-32',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

/**
 * @description Specifies the section of a document
 */
export function Section({
  id,
  className,
  children,
}: Pick<ComponentProps<'section'>, 'className' | 'children'> &
  Required<Pick<ComponentProps<'section'>, 'id'>>) {
  return (
    <section
      id={id}
      className={cn(
        sectionVariants({
          className,
        }),
      )}>
      {children}
    </section>
  )
}
