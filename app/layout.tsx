import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Fit by Nika — персональні тренування та відеокурс',
  description: 'Ефективні тренування для жінок: жироспалення, тонус і здорові звички. Купуйте відеокурс онлайн.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <Header />
        {children}
        <footer style={{borderTop:'1px solid var(--border)', marginTop: '64px'}}>
          <div className="container" style={{padding:'24px 16px', color:'var(--muted)', fontSize: '14px'}}>
            © {new Date().getFullYear()} Fit by Nika. Всі права захищені.
          </div>
        </footer>
      </body>
    </html>
  )
}