import './globals.css'
import Providers from '@/components/auth/Providers'
import { Toaster } from 'react-hot-toast'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  )
}
