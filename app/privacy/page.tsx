import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - LokIn',
  description: 'LokIn Privacy Policy - Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#1a1d2e] to-[#292c3c] text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p>
                Welcome to LokIn. We respect your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard your information when you use
                our productivity application and website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Account Information</h3>
              <p className="mb-4">
                When you create an account with LokIn, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Email address</li>
                <li>Account credentials (encrypted)</li>
                <li>Profile information you provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-2">Usage Data</h3>
              <p className="mb-4">
                To help you stay productive, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Apps and websites you choose to block</li>
                <li>Your productivity settings and preferences</li>
                <li>App usage statistics to improve your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your data to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain the LokIn service</li>
                <li>Sync your block lists and settings across devices</li>
                <li>Improve and personalize your productivity experience</li>
                <li>Communicate with you about updates, features, and support</li>
                <li>Ensure the security and integrity of our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Storage and Security</h2>
              <p className="mb-4">
                Your data is stored securely using industry-standard encryption. We use trusted cloud
                hosting providers and authentication services to ensure your information remains safe
                and accessible only to you.
              </p>
              <p>
                We implement appropriate technical and organizational measures to protect your personal
                data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p className="mb-4">
                We use select third-party services to operate LokIn:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cloud Hosting:</strong> For reliable service delivery and data storage</li>
                <li><strong>Authentication Services:</strong> For secure account management</li>
              </ul>
              <p className="mt-4">
                These services are chosen for their strong privacy practices and compliance standards.
                We do not sell, rent, or share your personal data with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Privacy Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt out of marketing communications</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Retention and Deletion</h2>
              <p className="mb-4">
                We retain your data for as long as your account is active or as needed to provide you
                services. If you wish to delete your account and data, please contact us at{' '}
                <a
                  href="mailto:support@lokin.app"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  support@lokin.app
                </a>
                {' '}and we will process your request promptly.
              </p>
              <p>
                Note: Some data may be retained for a limited period to comply with legal obligations
                or resolve disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar technologies to improve your browsing experience.
                These are used solely for essential functionality and analytics to understand how users
                interact with our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Children&apos;s Privacy</h2>
              <p>
                LokIn is not intended for users under the age of 13. We do not knowingly collect personal
                information from children under 13. If you believe we have inadvertently collected such
                information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices
                or legal requirements. We will notify you of any material changes by posting the new
                policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">International Users</h2>
              <p>
                LokIn operates in the United States. If you are accessing our service from outside the US,
                please be aware that your information may be transferred to, stored, and processed in the
                United States where our servers are located and our central database is operated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this privacy policy or your
                personal data, please contact us at:
              </p>
              <div className="bg-[#1a1d2e] border border-purple-500/30 rounded-lg p-6">
                <p className="font-semibold mb-2">Email:</p>
                <a
                  href="mailto:support@lokin.app"
                  className="text-purple-400 hover:text-purple-300 underline text-lg"
                >
                  support@lokin.app
                </a>
              </div>
            </section>

            <section className="border-t border-gray-700 pt-8">
              <p className="text-sm text-gray-500 italic">
                By using LokIn, you acknowledge that you have read and understood this privacy policy
                and agree to its terms. If you do not agree with this policy, please do not use our services.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
