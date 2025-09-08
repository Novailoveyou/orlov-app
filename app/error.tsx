'use client'

import { Container } from '@/shared/components/general/container'
import { Section } from '@/shared/components/general/section'
import { Link } from '@/shared/components/general/link'

export default function Error({}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <Section
      id='error'
      className='relative flex justify-center items-center min-h-screen text-white'>
      <Container>
        <div className='mx-auto px-4 max-w-4xl text-center'>
          {/* Error text */}
          <h1 className='mb-8 font-light text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none'>
            Ошибка
          </h1>

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
