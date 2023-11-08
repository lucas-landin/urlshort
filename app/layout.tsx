import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from "./components/Header"
import './globals.css'

const poppins = Poppins({ weight: ['500', '700'], subsets: ["latin"], })

export const metadata: Metadata = {
  title: 'Shortly',
  description: 'More than just shorter links',
}

export default function RootLayout({children,}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
