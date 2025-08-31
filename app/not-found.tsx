import 'server-only'
import { Container } from '@/shared/components/container'
import { Section } from '@/shared/components/section'
import { Link } from '@/shared/components/link'
import { H2 } from '@/shared/components/typography/h2'
import { H1 } from '@/shared/components/typography/h1'

export default async function NotFound() {
  return (
    <Section
      id='not-found'
      className='relative flex justify-center items-center min-h-screen text-white'>
      <Container>
        <div className='mx-auto px-4 max-w-4xl text-center'>
          <H1>404</H1>
          <H2>Страница не найдена</H2>
          {/* Button */}
          <div className='flex justify-center'>
            <Link href='/'>
              <span className='inline-block bg-white/10 hover:bg-white/20 px-8 py-3 border border-white/30 rounded-full font-light text-white text-sm tracking-wider transition-all duration-300 cursor-pointer'>
                Перейти на главную
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
