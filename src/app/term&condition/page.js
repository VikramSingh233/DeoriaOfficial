'use client';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">


      <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
      <p className="text-gray-600 text-center mb-8">Effective Date: [Date]</p>

      <div className="prose prose-lg">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing Discover Deoria ("the Site"), you agree to be bound by these Terms. 
            If you disagree, please do not use our services showcasing Deoria's history, 
            popular places, shops, and promotions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-5">
            <li>Provide accurate information for business listings</li>
            <li>Not post illegal, defamatory, or harmful content</li>
            <li>Not engage in unauthorized commercial activities</li>
            <li>Not attempt to hack or disrupt the service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Content Ownership</h2>
          <p>
            All historical content, place descriptions, and curated shop information remain 
            our intellectual property. User-submitted content grants us a non-exclusive license 
            for display and promotion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Business Listings & Promotions</h2>
          <p>
            Local businesses featured on our Site:
            <ul className="list-disc pl-5">
              <li>Must provide accurate information</li>
              <li>Are responsible for their promotional claims</li>
              <li>May be removed for policy violations</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
          <p>
            We are not responsible for:
            <ul className="list-disc pl-5">
              <li>Accuracy of historical information</li>
              <li>Business practices of listed establishments</li>
              <li>Service interruptions or technical issues</li>
              <li>User-generated content</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
          <p>
            We may terminate access for violations of these Terms. Businesses may remove their 
            listings with 30 days notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">7. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be resolved in 
            courts located in Deoria, Uttar Pradesh.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">8. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use after changes 
            constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">9. Contact Information</h2>
          <p>
            For questions regarding these Terms:<br />
            Email: [your@email.com]<br />
            Phone: [Your Phone Number, if applicable]
          </p>
        </section>
      </div>
    </div>
  );
}