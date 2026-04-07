export default function Home() {
  return (
    <main style={{ background: '#FAFAF9', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: '#1C1917', color: '#F5F0E8', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>
            WRI Suite
          </h1>
          <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '20px', color: '#F5F0E8', marginBottom: '32px' }}>
            Everything restaurant managers need. All in one platform.
          </p>
          <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '16px', color: '#A89880', maxWidth: '600px', margin: '0 auto' }}>
            Daily checklists, team communication, loss prevention audits, repair tracking, shift handoffs, and more. Pick your plan.
          </p>
        </div>
      </section>

      {/* Products Overview */}
      <section style={{ padding: '80px 24px', background: '#FAFAF9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: 600, color: '#1C1917', textAlign: 'center', marginBottom: '60px' }}>
            What's Included
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            {/* Daily Ops */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E5E0D8', borderRadius: '12px', padding: '40px 32px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontWeight: 600, color: '#1C1917', marginBottom: '12px' }}>
                Daily Ops
              </h3>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '14px', color: '#6B5B4E', marginBottom: '32px', minHeight: '80px' }}>
                Digital checklists with photo documentation, sign-off tracking, and 30-day history.
              </p>
              <a href="https://ops.wireach.tools" style={{ fontFamily: 'var(--font-dmsans)', fontSize: '14px', color: '#D97706', textDecoration: 'none', fontWeight: 500 }}>
                View Product →
              </a>
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #E5E0D8' }}>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 600, color: '#D97706' }}>
                  $19/mo
                </p>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '12px', color: '#6B5B4E' }}>
                  14-day free trial
                </p>
              </div>
            </div>

            {/* Staff Communications */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E5E0D8', borderRadius: '12px', padding: '40px 32px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontWeight: 600, color: '#1C1917', marginBottom: '12px' }}>
                Staff Communications
              </h3>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '14px', color: '#6B5B4E', marginBottom: '32px', minHeight: '80px' }}>
                Announcements, shift swaps, read receipts. Keep your team informed and connected.
              </p>
              <a href="https://staff.wireach.tools" style={{ fontFamily: 'var(--font-dmsans)', fontSize: '14px', color: '#D97706', textDecoration: 'none', fontWeight: 500 }}>
                View Product →
              </a>
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #E5E0D8' }}>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 600, color: '#D97706' }}>
                  $29/mo
                </p>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '12px', color: '#6B5B4E' }}>
                  14-day free trial
                </p>
              </div>
            </div>

            {/* Restaurant Toolkit */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E5E0D8', borderRadius: '12px', padding: '40px 32px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontWeight: 600, color: '#1C1917', marginBottom: '12px' }}>
                Restaurant Toolkit
              </h3>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '14px', color: '#6B5B4E', marginBottom: '32px', minHeight: '80px' }}>
                LP audits, repair requests, shift handoffs, daily summaries. Complete ops management.
              </p>
              <a href="https://toolkit.wireach.tools" style={{ fontFamily: 'var(--font-dmsans)', fontSize: '14px', color: '#D97706', textDecoration: 'none', fontWeight: 500 }}>
                View Product →
              </a>
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #E5E0D8' }}>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 600, color: '#D97706' }}>
                  $49/mo
                </p>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '12px', color: '#6B5B4E' }}>
                  14-day free trial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF', borderTop: '1px solid #E5E0D8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: 600, color: '#1C1917', textAlign: 'center', marginBottom: '60px' }}>
            Choose Your Plan
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {/* Starter */}
            <div style={{ background: '#FAFAF9', border: '2px solid #E5E0D8', borderRadius: '12px', padding: '40px 32px' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 600, color: '#1C1917', marginBottom: '12px' }}>
                Starter
              </h3>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '13px', color: '#6B5B4E', marginBottom: '32px' }}>
                Get started with daily operations
              </p>

              <div style={{ background: '#FFFFFF', borderRadius: '8px', padding: '20px', marginBottom: '32px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', fontWeight: 600, color: '#D97706', margin: 0 }}>
                  $19<span style={{ fontSize: '18px', fontWeight: 400 }}>/mo</span>
                </p>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '12px', color: '#6B5B4E', marginTop: '8px' }}>
                  14-day free trial
                </p>
              </div>

              <ul style={{ fontFamily: 'var(--font-dmsans)', fontSize: '14px', color: '#1C1917', marginBottom: '32px', listStyle: 'none' }}>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  Daily Ops Checklist
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  Photo Documentation
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  30-day History
                </li>
              </ul>

              <a href="https://buy.stripe.com/test_PLACEHOLDER_STARTER" style={{
                display: 'block',
                fontFamily: 'var(--font-dmsans)',
                fontSize: '14px',
                fontWeight: 500,
                color: '#1C1917',
                background: '#D97706',
                padding: '12px 24px',
                borderRadius: '6px',
                textAlign: 'center',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
              }}>
                Start Free Trial
              </a>
            </div>

            {/* Standard */}
            <div style={{ background: '#FAFAF9', border: '2px solid #D97706', borderRadius: '12px', padding: '40px 32px', position: 'relative', transform: 'scale(1.05)' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#D97706', color: '#1C1917', fontFamily: 'var(--font-dmsans)', fontSize: '12px', fontWeight: 600, padding: '4px 16px', borderRadius: '4px', textTransform: 'uppercase' }}>
                Most Popular
              </div>

              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 600, color: '#1C1917', marginBottom: '12px' }}>
                Standard
              </h3>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '13px', color: '#6B5B4E', marginBottom: '32px' }}>
                Daily ops + team communication
              </p>

              <div style={{ background: '#FFFFFF', borderRadius: '8px', padding: '20px', marginBottom: '32px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', fontWeight: 600, color: '#D97706', margin: 0 }}>
                  $39<span style={{ fontSize: '18px', fontWeight: 400 }}>/mo</span>
                </p>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '12px', color: '#6B5B4E', marginTop: '8px' }}>
                  14-day free trial
                </p>
              </div>

              <ul style={{ fontFamily: 'var(--font-dmsans)', fontSize: '14px', color: '#1C1917', marginBottom: '32px', listStyle: 'none' }}>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  Everything in Starter
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  Announcements
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  Shift Swaps
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  Read Receipts
                </li>
              </ul>

              <a href="https://buy.stripe.com/test_PLACEHOLDER_STANDARD_NEW" style={{
                display: 'block',
                fontFamily: 'var(--font-dmsans)',
                fontSize: '14px',
                fontWeight: 500,
                color: '#1C1917',
                background: '#D97706',
                padding: '12px 24px',
                borderRadius: '6px',
                textAlign: 'center',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
              }}>
                Start Free Trial
              </a>
            </div>

            {/* Pro */}
            <div style={{ background: '#FAFAF9', border: '2px solid #E5E0D8', borderRadius: '12px', padding: '40px 32px' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 600, color: '#1C1917', marginBottom: '12px' }}>
                Pro
              </h3>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '13px', color: '#6B5B4E', marginBottom: '32px' }}>
                Complete restaurant operations
              </p>

              <div style={{ background: '#FFFFFF', borderRadius: '8px', padding: '20px', marginBottom: '32px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', fontWeight: 600, color: '#D97706', margin: 0 }}>
                  $99<span style={{ fontSize: '18px', fontWeight: 400 }}>/mo</span>
                </p>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '12px', color: '#6B5B4E', marginTop: '8px' }}>
                  14-day free trial
                </p>
              </div>

              <ul style={{ fontFamily: 'var(--font-dmsans)', fontSize: '14px', color: '#1C1917', marginBottom: '32px', listStyle: 'none' }}>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  Everything in Standard
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  LP Audits
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  Repair Tracking
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  Shift Handoffs
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  Daily Summaries
                </li>
              </ul>

              <a href="https://buy.stripe.com/test_PLACEHOLDER_PRO_NEW" style={{
                display: 'block',
                fontFamily: 'var(--font-dmsans)',
                fontSize: '14px',
                fontWeight: 500,
                color: '#1C1917',
                background: '#D97706',
                padding: '12px 24px',
                borderRadius: '6px',
                textAlign: 'center',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
              }}>
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1C1917', color: '#F5F0E8', padding: '40px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '13px', margin: 0 }}>
          © 2026 Within Reach International. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
