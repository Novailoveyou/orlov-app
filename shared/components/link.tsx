'use client'
import 'client-only'

import { cn } from '@/shared/lib/utils'
import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { ym } from '@/shared/components/analytics'
import { paragraphVariants } from './typography/p'

const HTTPS = 'https://'

export const Link = ({
  href,
  target,
  rel,
  children,
  className,
  onClick,
  isExternalLink = false,
  ...nextLink
}: ComponentProps<typeof NextLink> & { isExternalLink?: boolean }) => {
  const transformedChildren = transformChildren({ href, children })

  const transformedRel = transformRel({ rel, target })

  const hrefString =
    (typeof href === 'string'
      ? href
      : typeof href.href === 'string' && href.href) || null

  const _onClick = (
    ...props: Parameters<Exclude<typeof onClick, undefined>>
  ) => {
    if (hrefString) {
      if (isExternalLink)
        ym.extLink(hrefString, {
          title: document.title,
          params: {
            currency: 'RUB',
            order_price: 0,
          },
        })
    }

    return onClick?.(...props) || true
  }

  return (
    <NextLink
      href={href}
      target={target}
      rel={transformedRel}
      className={cn(paragraphVariants({ variant: 'default', className }))}
      onClick={_onClick}
      {...nextLink}>
      {transformedChildren}
    </NextLink>
  )
}

function transformChildren({
  href,
  children,
}: Pick<ComponentProps<typeof Link>, 'href' | 'children'>) {
  if (children) return children
  if (typeof href !== 'string') return href.hostname

  return (href.includes(HTTPS) ? href.split(HTTPS)[1] : href) || href
}

function transformRel({
  target,
  rel: _rel,
}: Pick<ComponentProps<typeof Link>, 'target' | 'rel'>) {
  let rel = _rel || ''

  if (target === '_blank') {
    if (!rel.includes('noopener')) {
      rel += rel ? ' noopener' : 'noopener'
    }

    if (!rel.includes('noreferrer')) {
      rel += rel ? ' noreferrer' : 'noreferrer'
    }
  }

  return rel
}
