import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Organize Your Files with <span className="text-indigo-600">Sortify</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A smart file organizer that automatically sorts files into categorized folders. Simple, fast, and efficient.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#download" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Download Now
              </a>
              <a href="#features" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium border border-indigo-600 hover:bg-indigo-50 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image src="/file.svg" alt="Normal Mode" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Normal Mode</h3>
              <p className="text-gray-600">Quick and simple organization by file types like documents, images, videos, and more.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image src="/window.svg" alt="Advanced Mode" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Mode</h3>
              <p className="text-gray-600">Detailed categorization with subcategories for more specific organization needs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image src="/globe.svg" alt="Smart Detection" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Detection</h3>
              <p className="text-gray-600">Automatically detects and categorizes files based on their types and extensions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Download Sortify</h2>
            <p className="text-xl text-gray-600 mb-8">Available for Windows. Simple installation, no configuration needed.</p>
            <a 
              href="/downloads/Sortify.exe" 
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              download
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download for Windows
            </a>
            <p className="mt-4 text-sm text-gray-500">Version 1.0.0 | Portable Executable</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Sortify</h2>
            <p className="text-gray-600 mb-6">
              Sortify is designed to make file organization effortless. Whether you're dealing with downloads, documents, or media files,
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
