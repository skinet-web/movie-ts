import './globals.css'

export const metadata = {
  title: 'Ecommerce - TS/Sanity',
  description: 'Ecommerce - TS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
