// pages/privacy-policy.js
'use client'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">


      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-gray-600 text-center mb-8">Last Updated: [Date]</p>

      <div className="prose prose-lg">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Welcome to Discover Deoria ("we," "our," or "us"). We operate the website [yourwebsite.com] 
            which showcases Deoria's history, popular places, shops, and promotes local businesses. 
            We are committed to protecting your personal information and your right to privacy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p>We collect information when you:</p>
          <ul className="list-disc pl-5">
            <li>Register for an account</li>
            <li>Submit business listings or reviews</li>
            <li>Contact us through forms</li>
            <li>Subscribe to our promotions</li>
            <li>Browse our content (via cookies and analytics)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5">
            <li>Provide and improve our services</li>
            <li>Promote local businesses and events in Deoria</li>
            <li>Respond to your inquiries</li>
            <li>Send marketing communications (if opted-in)</li>
            <li>Analyze website usage patterns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Cookies and Tracking</h2>
          <p>
            We use cookies to enhance your experience, analyze traffic, and serve targeted ads for 
            Deoria businesses. You can control cookies through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Third-Party Services</h2>
          <p>
            We use Google Analytics to understand visitor behavior and payment processors for 
            promotional services. These third parties have their own privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
          <p>
            We implement security measures to protect your information but cannot guarantee 
            absolute security. We store data on secure servers and retain it only as long as necessary.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5">
            <li>Access and update your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">8. Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect 
            personal information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this policy periodically. We'll notify you of changes by posting the new 
            policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
          <p>
            For questions about this privacy policy, contact us at:<br />
            Email: [your@email.com]<br />
            Address: [Your Address in Deoria, if applicable]
          </p>
        </section>
      </div>
    </div>
  );
}