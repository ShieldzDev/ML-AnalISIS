import {ReactNode, ReactElement} from 'react'
import "@/styles/globals.css"

import {Inter} from 'next/font/google'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const inter = Inter({subsets:['cyrillic-ext','greek','latin','vietnamese']})

export default function AuthLayout({children}: {children: ReactNode}): ReactElement {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}