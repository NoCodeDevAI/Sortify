import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-indigo max-w-none">
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="mb-4">Sortify collects minimal information to provide its file organization services:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>File names and extensions (for organization purposes only)</li>
            <li>Basic usage analytics (if you opt-in)</li>
          </ul>
          <p>We do not collect, store, or transmit the actual contents of your files.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">The information collected is used solely for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Organizing files according to your preferences</li>
            <li>Improving our service through anonymous usage statistics</li>
            <li>Troubleshooting technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
          <p className="mb-4">
            Sortify operates entirely on your local machine. No files or file information is transmitted
            to our servers or third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by
            posting the new privacy policy on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:nocodedevai.official@gmail.com" className="text-indigo-600 hover:text-indigo-800">
              nocodedevai.official@gmail.com
            </a>
          </p>
        </section>

        <div className="mt-8">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}