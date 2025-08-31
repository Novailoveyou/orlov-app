import 'server-only'

import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/shared/components/providers/theme-provider'
import { Toaster } from '@/shared/components/ui/sonner'
import { Header } from '@/shared/components/header'
import { Footer } from '@/shared/components/footer'
import './globals.css'
import { Analytics } from '@/shared/components/analytics'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  NAME,
  ROOT_URL,
} from '@/shared/constants'
import { Suspense } from 'react'
import { StoreProvider } from '@/app/_store'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: '#FF00D6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
}

export async function generateMetadata({
  params,
}: {
  // params: Promise<{ locale: Locale }>
  params: Promise<unknown>
}): Promise<Metadata> {
  // const { locale = 'ru' } = (await params) || { locale: 'ru' }

  return {
    title: {
      template: `%s | ${NAME}`,
      default: 'orlov app',
    },
    description: 'description',
    manifest: '/site.webmanifest',
    creator: 'contact@orlov.app',
    applicationName: NAME,
    generator: 'Next.js',
    publisher: 'contact@orlov.app',
    category: 'production',
    referrer: 'origin-when-cross-origin',
    robots: {
      follow: false,
      index: false,
      nocache: false,
      googleBot: {
        follow: false,
        index: false,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
      indexifembedded: false,
    },
    openGraph: {
      title: 'title',
      description: 'description',
      url: ROOT_URL,
      siteName: 'siteName',
      emails: [CONTACT_EMAIL],
      phoneNumbers: [CONTACT_PHONE],
      countryName: 'countryName',
      alternateLocale: ['en', 'ru', 'fr'],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'image alt',
        },
      ],
      // locale,
      type: 'website',
    },
    icons: {
      icon: [
        { url: '/icon.png' },
        new URL('/icon.png', ROOT_URL),
        { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
      ],
      apple: '/apple-touch-icon.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: 'title',
      description: 'description',
      images: ['/og-image.png'],
    },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
      other: {
        me: ['my-email', 'my-link'],
      },
    },
    pinterest: {
      richPin: true,
    },
    keywords: 'keywords',
    authors: [
      {
        name: 'Alt-Net',
        url: 'https://alt-net.ru',
      },
      {
        name: 'Ilia',
        url: 'https://github.com/novailoveyou',
      },
      {
        name: 'Alex',
        url: 'https://github.com/neba-glubina',
      },
    ],
    formatDetection: {
      date: false,
      telephone: false,
      address: false,
      email: false,
    },
    metadataBase: new URL(ROOT_URL),
    alternates: {
      canonical: ROOT_URL,
      languages: {
        'en-US': `${ROOT_URL}/en`,
        'ru-RU': ROOT_URL,
      },
      types: {
        'application/rss+xml': `${ROOT_URL}/rss`,
      },
    },
    assets: [`${ROOT_URL}/assets`],
    bookmarks: [ROOT_URL],
    appLinks: {
      web: {
        url: ROOT_URL,
      },
    },
    appleWebApp: {
      title: NAME,
      statusBarStyle: 'black-translucent',
      startupImage: [
        '/assets/startup/apple-touch-startup-image-768x1004.png',
        {
          url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
          media: '(device-width: 768px) and (device-height: 1024px)',
        },
      ],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StoreProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
          <Suspense>
            <Analytics />
          </Suspense>
        </StoreProvider>
      </body>
    </html>
  )
}
