import React from "react";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Terms & Conditions</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
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
              Welcome to Leepi ("we," "our," or "us"). These Terms and
              Conditions ("Terms") govern your use of our website and services.
              By accessing or using our platform, you agree to be bound by these
              Terms. If you disagree with any part of these terms, then you may
              not access our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement. Additionally,
              when using this website's particular services, you shall be
              subject to any posted guidelines or rules applicable to such
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Use License
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Permission is granted to temporarily download one copy of the
                materials on Leepi's website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>modify or copy the materials</li>
                <li>
                  use the materials for any commercial purpose or for any public
                  display (commercial or non-commercial)
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by Leepi at any time.
                Upon terminating your viewing of these materials or upon the
                termination of this license, you must destroy any downloaded
                materials in your possession whether in electronic or printed
                format.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Account Registration
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                To access certain features of our service, you may be required
                to register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  Provide accurate, current, and complete information during the
                  registration process
                </li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>
                  Accept all responsibility for all activities that occur under
                  your account
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Product Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We strive to provide accurate product descriptions, pricing, and
              availability information. However, we do not warrant that product
              descriptions or other content is accurate, complete, reliable,
              current, or error-free. We reserve the right to correct any
              errors, inaccuracies, or omissions and to change or update
              information at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Pricing and Payment
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                All prices are subject to change without notice. We reserve the
                right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Modify or discontinue any product or service</li>
                <li>Refuse or cancel orders at our discretion</li>
                <li>Limit order quantities</li>
                <li>Require additional verification for certain orders</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Shipping and Delivery
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Delivery times are estimates and not guaranteed. We are not
              responsible for delays caused by shipping carriers, customs, or
              other factors beyond our control. Risk of loss and title for
              products pass to you upon delivery to the carrier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Returns and Refunds
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our return and refund policy is outlined separately and forms part
              of these Terms. Please review our Return Policy for detailed
              information about returns, exchanges, and refunds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Prohibited Uses
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                You may not use our service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  For any unlawful purpose or to solicit others to take unlawful
                  actions
                </li>
                <li>
                  To violate any international, federal, provincial, or state
                  regulations, rules, laws, or local ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights
                  or the intellectual property rights of others
                </li>
                <li>
                  To harass, abuse, insult, harm, defame, slander, disparage,
                  intimidate, or discriminate
                </li>
                <li>To submit false or misleading information</li>
                <li>
                  To upload or transmit viruses or any other type of malicious
                  code
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The information on this website is provided on an "as is" basis.
              To the fullest extent permitted by law, this Company excludes all
              representations, warranties, conditions and terms whether express
              or implied (including by operation of law) which, but for this
              exclusion, would or might have effect in relation to this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Limitations
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Leepi or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use the materials on Leepi's website, even if Leepi
              or an authorized representative has been notified orally or in
              writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Accuracy of Materials
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The materials appearing on Leepi's website could include
              technical, typographical, or photographic errors. Leepi does not
              warrant that any of the materials on its website are accurate,
              complete, or current. Leepi may make changes to the materials
              contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Leepi has not reviewed all of the sites linked to our website and
              is not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by Leepi of the
              site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. Modifications
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Leepi may revise these terms of service for its website at any
              time without notice. By using this website, you are agreeing to be
              bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              15. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in
              accordance with the laws and you irrevocably submit to the
              exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          {/* <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              16. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms & Conditions, please
              contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Email: leepi@leepi.com</p>
              <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-700">
                Address: 123 Business Street, City, State 12345
              </p>
            </div>
          </section> */}
        </div>

        {/* Back to Top */}
        {/* <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ↑ Back to Top
          </button>
        </div> */}
      </div>
    </div>
  );
}
