import Link from 'next/link';

export default function SystemRequirements() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">System Requirements</h1>
      
      <div className="prose prose-indigo max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Minimum Requirements</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="font-semibold w-32">OS:</span>
                <span>Windows 10 (64-bit, 32-bit, or ARM) or later</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Processor:</span>
                <span>1.5 GHz dual-core processor (Intel, AMD, or ARM)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Memory:</span>
                <span>2 GB RAM</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Storage:</span>
                <span>200 MB available disk space</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Display:</span>
                <span>1024×768 screen resolution</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recommended Requirements</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="font-semibold w-32">OS:</span>
                <span>Windows 11 (64-bit)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Processor:</span>
                <span>2.0 GHz quad-core processor or better (Intel Core i3/i5/i7, AMD Ryzen 3/5/7, or ARM64)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Memory:</span>
                <span>4 GB RAM or more</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Storage:</span>
                <span>500 MB available disk space (for better performance and file handling)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Display:</span>
                <span>1920×1080 (Full HD) or higher resolution</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Requirements</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="font-semibold w-32">Framework:</span>
                <span>No additional frameworks required (all dependencies bundled with application)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Permissions:</span>
                <span>Administrator rights required for organizing files in protected directories</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Internet:</span>
                <span>Not required for core functionality. Optional for automatic updates and enhanced features</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Graphics:</span>
                <span>DirectX 9 compatible graphics card with WDDM 1.0 driver</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Drive Types:</span>
                <span>Compatible with HDD, SSD, USB drives, and network storage</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Supported File Systems</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="font-semibold w-32">Windows:</span>
                <span>NTFS, FAT32, exFAT</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-32">Network:</span>
                <span>SMB/CIFS shares, mapped network drives</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Notes</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-800">
            <li>Performance may vary based on the number and size of files being organized</li>
            <li>SSD storage is recommended for faster file operations</li>
            <li>For network drives, performance depends on network speed and latency</li>
            <li>Regular updates are recommended for optimal performance and security</li>
          </ul>
        </section>

        <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            ← Back to Home
          </Link>
          <Link
            href="/#download"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Download Now
          </Link>
        </div>
      </div>
    </div>
  );
}