import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-indigo max-w-none">
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By downloading and using Sortify, you agree to be bound by these Terms of Service. If you
            disagree with any part of these terms, you must not use our software.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to use Sortify for personal or commercial purposes under the following
            restrictions:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>You may not modify, copy, or redistribute the software</li>
            <li>You may not attempt to decompile or reverse engineer the software</li>
            <li>You may not use the software for any illegal purposes</li>
            <li>The software is provided "as is" with no warranties</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            Sortify is provided "as is" without warranty of any kind, either express or implied. While
            we strive to provide a reliable service, we are not responsible for any data loss or damage
            that may occur while using our software.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
          <p className="mb-4">
            In no event shall NoCodeDevAI or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use Sortify.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Governing Law</h2>
          <p className="mb-4">
            These terms shall be governed by and construed in accordance with the laws of your country
            of residence, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify or replace these terms at any time. We will provide notice
            of any changes by posting the new terms on this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact</h2>
          <p className="mb-4">
            For any questions regarding these Terms of Service, please contact us at:{' '}
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