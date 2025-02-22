import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sortify by NoCodeDevAI - Smart File Organization',
  description: 'Sortify by NoCodeDevAI – A smart file organizer that automatically sorts files into categorized folders. Supports normal and advanced organization with custom rules for better file management.',
  icons: {
    icon: '/assets/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center gap-2">
                <Image src="/assets/logo.png" alt="Sortify Logo" width={32} height={32} />
                <Link href="/" className="text-2xl font-bold text-indigo-600">Sortify</Link>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <Link href="/#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</Link>
                <Link href="/#download" className="text-gray-700 hover:text-indigo-600 transition-colors">Download</Link>
                <Link href="/#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
                <Link 
                  href="https://github.com/yourusername/sortify" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">NoCodeDevAI</h3>
                <p className="text-gray-400">Smart file organization made simple.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="/#download" className="text-gray-400 hover:text-white transition-colors">Download</Link></li>
                  <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><Link href="https://github.com/yourusername/sortify" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© {new Date().getFullYear()} NoCodeDevAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
