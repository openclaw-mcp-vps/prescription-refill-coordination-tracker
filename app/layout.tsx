import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RxFamily — Coordinate Family Prescription Refills',
  description: 'Track prescription refill dates for your entire family, coordinate pharmacy trips, get automated reminders, and find cost-saving opportunities.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="99e0c789-d754-41ad-958d-54c8872d01ec"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
