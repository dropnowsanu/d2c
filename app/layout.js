import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Headers from './components/Headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dollar Buy/Sell',
  description: 'Dollar Buy & Sell In Bangladesh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Headers />
          {children}
        </Providers>
      </body>
    </html>
  )
}
