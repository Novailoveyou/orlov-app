import 'server-only'
import { Section } from '@/shared/components/general/section'
import { Container } from '@/shared/components/general/container'
import { P } from '@/shared/components/typography/p'
import { Image } from '@/shared/components/general/image'
import { MyName } from '@/shared/components/general/my-name'
import { HireMeButton } from '@/shared/components/general/hire-me-button'

export function HomeView() {
  return (
    <Section id='hero'>
      <Container>
        <div>
          <MyName />
          <P>Full Stack Web Developer specializing in TypeScript</P>
          <HireMeButton />
        </div>
        <div>
          <Image src='/' width={0} height={0} alt='Ilia Orlov' />
        </div>
      </Container>
    </Section>
  )
}
