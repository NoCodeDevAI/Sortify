'use client';
import Image from 'next/image'
import Link from 'next/link'
import { trackDownload, trackFeatureView } from './components/Analytics'
import { DownloadButton } from './components/DownloadButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-20" aria-label="Hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image src="/assets/logo.png" alt="Sortify Logo" width={96} height={96} className="animate-bounce" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Organize Your Files with <span className="text-indigo-600">Sortify</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A smart file organizer by NoCodeDevAI that automatically sorts files into categorized folders. Simple, fast, and efficient.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#download" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Download Now
              </Link>
              <Link href="#features" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium border border-indigo-600 hover:bg-indigo-50 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        className="py-20 bg-white" 
        onClick={() => trackFeatureView('features_section')}
        aria-label="Features"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8" role="list">
            {[
              { icon: '/file.svg', title: 'Normal Mode', description: 'Quick and simple organization by file types like documents, images, videos, and more.' },
              { icon: '/window.svg', title: 'Advanced Mode', description: 'Detailed categorization with subcategories for more specific organization needs.' },
              { icon: '/globe.svg', title: 'Smart Detection', description: 'Automatically detects and categorizes files based on their types and extensions.' }
            ].map((feature) => (
              <div 
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                role="listitem"
                tabIndex={0}
              >
                <Image src={feature.icon} alt={`${feature.title} icon`} width={48} height={48} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-50" aria-label="Download">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Download Sortify</h2>
            <p className="text-xl text-gray-600 mb-8">Available for Windows. Simple installation, no configuration needed.</p>
            <div onClick={() => trackDownload()}>
              <DownloadButton />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">Version 1.0.0 | Portable Executable</p>
              <Link 
                href="/requirements" 
                className="text-sm text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View System Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" aria-label="About">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Sortify</h2>
            <p className="text-gray-600 mb-6">
              Created by NoCodeDevAI, Sortify is designed to make file organization effortless. Whether you&apos;re dealing with downloads, documents, or media files,
              Sortify helps you maintain a clean and organized file system.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Why Choose Sortify?</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>✓ Simple and intuitive interface</li>
                  <li>✓ Fast and efficient organization</li>
                  <li>✓ Portable - no installation needed</li>
                  <li>✓ Free and open source</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Supported File Types</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>✓ Documents (PDF, Word, Excel, etc.)</li>
                  <li>✓ Images (JPG, PNG, SVG, etc.)</li>
                  <li>✓ Videos (MP4, AVI, MKV, etc.)</li>
                  <li>✓ And many more...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
