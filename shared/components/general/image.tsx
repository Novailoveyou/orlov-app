import NextImage from 'next/image'
import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

const BLUR_DATA_URL =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

interface ImageProps extends ComponentProps<typeof NextImage> {
  desiredWidth?: number
}

export const Image = ({
  className,
  placeholder = 'blur',
  blurDataURL = BLUR_DATA_URL,
  ...props
}: ImageProps) => {
  // TODO: finish width calculation
  // const calculatedWidth = toNumber(desiredWidth)

  // const calculatedHeight = props.height || 0

  return (
    <NextImage
      {...props}
      quality={100}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={cn('w-full max-w-full h-auto max-h-full', className)}
    />
  )
}
