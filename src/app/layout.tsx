import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import '@/styles/prism-dracula.css'
import '@/styles/prism-plus.css'
import Head from 'next/head'
import { siteConfigs } from '@/configs/siteConfigs'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: siteConfigs.title,
  description: siteConfigs.description,
  applicationName: '',
  openGraph: {
    title: siteConfigs.title,
    description: siteConfigs.description,
    images: [
      {
        // TODO: Add coverImage to contentlayer
        url: 'https://og-image.vercel.app/**Ted**%27s%20Blog.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fog-image.vercel.app%2F%2A%2ATed%2A%2A%2527s%2520Blog.png%3Ftheme%3Ddark%26md%3D1%26fontSize%3D100px',
        width: 800,
        height: 600,
        alt: siteConfigs.title,
      },
    ],
    locale: siteConfigs.locale,
  },
  //TODO Add Twitter/Facebook... Card
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-tw">
      <Head>
        <GoogleAnalytics gaId="G-P9E6SSPQ5Q" />{' '}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/rss.xml"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Atom"
          href="/atom.xml"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
