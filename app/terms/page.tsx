import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | WRI Suite',
  description: 'Terms of service for WRI Suite — Within Reach International LLC.',
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ color: '#A8A29E', fontSize: '14px', marginBottom: '40px' }}>Effective date: May 1, 2026</p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>1. Agreement</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            By using WRI Suite (&ldquo;the Service&rdquo;) operated by Within Reach International LLC (&ldquo;WRI&rdquo;), you agree to these terms. If you don&rsquo;t agree, don&rsquo;t use the Service.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>2. Accounts</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            You&rsquo;re responsible for keeping your login credentials secure and for activity under your account. Notify us promptly if you suspect unauthorized access.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>3. Subscriptions and billing</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            Plans renew automatically until cancelled. The 14-day free trial converts to a paid subscription unless cancelled before the trial ends. You can cancel at any time from your account; cancellation stops future billing and is effective at the end of the current billing period.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>4. Acceptable use</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            Don&rsquo;t use the Service to break the law, infringe rights, or interfere with other customers. We may suspend accounts that do.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>5. Your data</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            You own the operational data you put into the Service. We process it on your behalf as described in the <a href="/privacy" style={{ color: '#D97706', textDecoration: 'none' }}>Privacy Policy</a>.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>6. Warranty and liability</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            The Service is provided as-is. To the maximum extent permitted by law, WRI&rsquo;s liability for any claim arising from the Service is limited to the amount you paid us in the 12 months before the claim.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>7. Changes</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            We may update these terms; material changes will be announced via email or in-product notice. Continued use after the effective date constitutes acceptance.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>8. Contact</h2>
          <p style={{ color: '#F5F0E8', fontSize: '15px', lineHeight: 1.7 }}>
            Questions: <a href="mailto:support@wireach.tools" style={{ color: '#D97706', textDecoration: 'none' }}>support@wireach.tools</a>.
          </p>
        </section>

        <p style={{ marginTop: '48px', color: '#78716C', fontSize: '13px' }}>
          <a href="/" style={{ color: '#D97706', textDecoration: 'none' }}>← Back to wireach.tools</a>
        </p>
      </div>
    </main>
  );
}
