import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | WRI Suite',
  description: 'Privacy policy for WRI Suite — Within Reach International LLC.',
};

export default function PrivacyPage() {
  return (
    <main style={{
      background: '#1C1917', color: '#F5F0E8', fontFamily: 'DM Sans, sans-serif',
      minHeight: '100vh', padding: '80px 24px',
    }}>
      <div style={{ maxWidth: '768px', margin: '0 auto' }}>

        <div style={{
          background: '#3B2D1B', border: '1px solid #D97706',
          borderRadius: '8px', padding: '16px 20px', marginBottom: '40px',
          color: '#F5F0E8', fontSize: '14px',
        }}>
          Placeholder — will be updated. Last updated: May 2026
        </div>

        <p style={{ color: '#D97706', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Legal
        </p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#A8A29E', fontSize: '14px', marginBottom: '40px' }}>Effective date: May 1, 2026</p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>1. Who we are</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            WRI Suite is operated by Within Reach International LLC (&ldquo;WRI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), based in Memphis, TN. This policy explains what data we collect when you use wireach.tools and the WRI Suite products, and what we do with it.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>2. Information we collect</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            Account information you provide (name, email, restaurant), operational data you create inside the products (checklists, shift data, par counts), billing details processed through our payment provider, and basic usage telemetry needed to operate the service.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>3. How we use it</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            To deliver the products you signed up for, send service-related communications, process payments, prevent abuse, and improve the products. We do not sell personal data.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>4. Sharing</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            We share data with vendors that help us run the service (hosting, payments, email delivery) and when required by law. Vendors are bound to use data only to provide their service to us.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>5. Your choices</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            You can request a copy of your data, correct it, or ask us to delete it by emailing the contact below. Cancelling a subscription stops billing immediately; data is retained for a short window in case you reactivate.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>6. Contact</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            Questions about this policy: <a href="mailto:support@wireach.tools" style={{ color: '#D97706', textDecoration: 'none' }}>support@wireach.tools</a>.
          </p>
        </section>

        <p style={{ marginTop: '48px', color: '#78716C', fontSize: '13px' }}>
          <a href="/" style={{ color: '#D97706', textDecoration: 'none' }}>← Back to wireach.tools</a>
        </p>
      </div>
    </main>
  );
}
