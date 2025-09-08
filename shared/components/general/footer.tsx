import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'
import { NavMenu } from '@/shared/components/general/nav-menu'
import { LegalLinks } from '@/shared/components/general/legal-links'
import { LocaleToggle } from '@/shared/components/general/locale-toggle'
import { SMLinks } from '@/shared/components/general/sm-links'
import { Copyright } from '@/shared/components/general/copyright'

export function Footer({
  className,
}: Pick<ComponentProps<'footer'>, 'className'>) {
  return (
    <footer className={cn('', className)}>
      <div>
        <NavMenu />
        <div>
          <LegalLinks />
          <LocaleToggle />
        </div>
      </div>
      <div>
        <SMLinks />
        <Copyright />
      </div>
    </footer>
  )
}
