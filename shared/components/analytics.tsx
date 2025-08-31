'use client'
import 'client-only'

import { createYandexMetrika } from '@/shared/lib/yandex-metrika'

export const { ym, YandexMetrika } = createYandexMetrika<'lead' | 'cta-click'>({
  yaCounterId: 102741412,
})

/**
 * @description Defines a client container for analytics
 */
export function Analytics() {
  return (
    <>
      <YandexMetrika visitParams={{ currency: 'RUB', order_price: 100 }} />
    </>
  )
}
