import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Endris Zeynu Mohammed | Full-Stack Developer',
  description:
    'Full-Stack Web Developer specializing in React, Node.js, and MongoDB. Building modern, responsive, and high-performance web applications.',
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'Node.js Developer',
    'MERN Stack',
    'Web Developer',
    'JavaScript',
    'MongoDB',
    'Express.js',
    'Endris Zeynu',
    'Portfolio',
  ],
  authors: [{ name: 'Endris Zeynu Mohammed' }],
  creator: 'Endris Zeynu Mohammed',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Endris Zeynu Mohammed | Full-Stack Developer',
    description:
      'Full-Stack Web Developer specializing in React, Node.js, and MongoDB. Building modern, responsive, and high-performance web applications.',
    siteName: 'Endris Zeynu Portfolio',
    images: [
      {
        url: '/images/hero-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Endris Zeynu Mohammed - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Endris Zeynu Mohammed | Full-Stack Developer',
    description:
      'Full-Stack Web Developer specializing in React, Node.js, and MongoDB.',
    images: ['/images/hero-profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2332',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Endris Zeynu Mohammed',
    jobTitle: 'Full-Stack Developer',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    sameAs: [
      'https://github.com/edriszeynu',
      'https://linkedin.com/in/yourusername',
    ],
    knowsAbout: [
      'React',
      'Node.js',
      'MongoDB',
      'Express.js',
      'JavaScript',
      'Full-Stack Development',
      'MERN Stack',
    ],
    email: 'endriszeynu173@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Ethiopia',
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
