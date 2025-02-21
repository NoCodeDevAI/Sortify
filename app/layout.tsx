import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sortify - Smart File Organization',
  description: 'Sortify – A smart file organizer that automatically sorts files into categorized folders. Supports normal and advanced organization with custom rules for better file management.',
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
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-indigo-600">Sortify</a>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <a href="/#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
                <a href="/#download" className="text-gray-700 hover:text-indigo-600 transition-colors">Download</a>
                <a href="/#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
                <a 
                  href="https://github.com/yourusername/sortify" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  GitHub
                </a>
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
                <h3 className="text-xl font-bold mb-4">Sortify</h3>
                <p className="text-gray-400">Smart file organization made simple.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Links</h3>
                <ul className="space-y-2">
                  <li><a href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="/#download" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
                  <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="https://github.com/yourusername/sortify" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Sortify. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
