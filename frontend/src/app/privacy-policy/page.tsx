import React from "react";
import Link from "next/link";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link  prefetch={true} href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Leepi ("we," "our," or "us"), we are committed to protecting
              your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website and use our services. Please read this privacy policy
              carefully. If you do not agree with the terms of this privacy
              policy, please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Personal Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Register for an account</li>
                  <li>Make a purchase</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for customer support</li>
                  <li>Participate in surveys or promotions</li>
                  <li>Leave reviews or comments</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  This information may include: name, email address, phone
                  number, billing and shipping addresses, payment information,
                  and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When you visit our website, we automatically collect certain
                  information about your device and usage:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>IP address and location information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website</li>
                  <li>Pages viewed and time spent on our site</li>
                  <li>Date and time of visits</li>
                  <li>Device identifiers and mobile network information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Cookies and Tracking Technologies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies, web beacons, and similar tracking technologies
                  to enhance your experience on our website. These technologies
                  help us remember your preferences, understand how you use our
                  site, and improve our services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Processing and fulfilling your orders</li>
                <li>Communicating with you about your account and orders</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>
                  Sending promotional emails and marketing communications (with
                  your consent)
                </li>
                <li>Improving our website, products, and services</li>
                <li>Personalizing your shopping experience</li>
                <li>Analyzing website usage and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                We may share your information in the following situations:
              </p>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Service Providers
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share your information with third-party service
                  providers who help us operate our business, including payment
                  processors, shipping companies, email service providers, and
                  analytics providers. These providers are contractually
                  obligated to protect your information and use it only for the
                  services they provide to us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Legal Requirements
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may disclose your information if required to do so by law
                  or in response to valid requests by public authorities, such
                  as a court or government agency.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Business Transfers
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of the transaction. We
                  will notify you of any such change in ownership or control of
                  your personal information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Consent
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share your information with your explicit consent for
                  purposes not covered in this policy.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include encryption, secure servers, firewalls, and access
              controls. However, no method of transmission over the internet or
              electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only as long as necessary to
              fulfill the purposes outlined in this privacy policy, unless a
              longer retention period is required or permitted by law. When we
              no longer need your information, we will securely delete or
              anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Your Rights and Choices
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request access to your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your
                  information in a portable format
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of
                  processing your information
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain types of
                  processing
                </li>
                <li>
                  <strong>Withdraw consent:</strong> Withdraw consent for
                  marketing communications
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise any of these rights, please contact us using the
                information provided in the "Contact Us" section.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Cookies Policy
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use different types of cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Essential cookies:</strong> Necessary for the website
                  to function properly
                </li>
                <li>
                  <strong>Performance cookies:</strong> Help us understand how
                  visitors interact with our website
                </li>
                <li>
                  <strong>Functional cookies:</strong> Remember your preferences
                  and settings
                </li>
                <li>
                  <strong>Marketing cookies:</strong> Used to deliver
                  personalized advertisements
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control and manage cookies through your browser
                settings. However, disabling certain cookies may affect the
                functionality of our website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review the privacy policies of any
              third-party websites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If we become aware that we have collected personal information
              from a child under 13, we will take steps to delete such
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. We ensure that such transfers are made in
              accordance with applicable data protection laws and that
              appropriate safeguards are in place to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time to reflect
              changes in our practices or applicable laws. We will notify you of
              any material changes by posting the updated policy on our website
              and updating the "Last updated" date. Your continued use of our
              services after any changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this
              privacy policy or our data practices, please contact us:
            </p>
            <div className="p-4 bg-gray-50 rounded-lg space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@leepi.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Business Street, City, State 12345
              </p>
              <p className="text-gray-700">
                <strong>Data Protection Officer:</strong> dpo@leepi.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. Consent
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By using our website and services, you consent to the collection,
              use, and disclosure of your information as described in this
              privacy policy. If you do not agree with any part of this policy,
              please do not use our services.
            </p>
          </section>
        </div>

        {/* Back to Top */}
        <ScrollToTop />
      </div>
    </div>
  );
}
