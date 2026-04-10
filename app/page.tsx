"use client";

export default function SuitePage() {
  return (
    <main style={{ background: '#1C1917', color: '#F5F0E8', fontFamily: 'DM Sans, sans-serif' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(28,25,23,0.95)', backdropFilter: 'blur(10px)',
        height: '64px', display: 'flex', alignItems: 'center',
        padding: '0 24px', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', background: '#D97706',
            borderRadius: '6px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '16px', color: '#fff'
          }}>✓</div>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700 }}>WRI Tools</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#pricing" style={{ color: '#F5F0E8', textDecoration: 'none', fontSize: '15px' }}>Pricing</a>
          <a href="https://ops.wireach.tools" style={{ color: '#F5F0E8', textDecoration: 'none', fontSize: '15px' }}>Sign In</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', maxWidth: '768px', margin: '0 auto' }}>
        <p style={{ color: '#D97706', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '24px' }}>
          For Independent Restaurants
        </p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '52px', lineHeight: 1.1, fontWeight: 700, marginBottom: '24px' }}>
          One suite. Every tool your restaurant needs to{' '}
          <span style={{ color: '#D97706' }}>run like clockwork.</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#A8A29E', lineHeight: 1.6, marginBottom: '40px', maxWidth: '560px' }}>
          Daily ops checklists, staff communication, LP audits, repair tracking, and shift handoffs — all under one roof, built for independent operators.
        </p>
        <a href="#pricing" style={{
          background: '#D97706', color: '#fff', padding: '14px 28px',
          borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '16px'
        }}>See Plans</a>
      </section>

      {/* Products */}
      <section style={{ padding: '80px 24px', maxWidth: '768px', margin: '0 auto' }}>
        <p style={{ color: '#D97706', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
          What's Included
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, marginBottom: '48px' }}>
          Three tools. One system.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
          {[
            { name: 'Daily Ops', url: 'https://ops.wireach.tools', desc: 'Opening and closing checklists with photo proof, timestamps, and staff sign-off.' },
            { name: 'Staff Comms', url: 'https://staff.wireach.tools', desc: 'Announcements, shift swaps, and read receipts so your team stays on the same page.' },
            { name: 'Restaurant Toolkit', url: 'https://toolkit.wireach.tools', desc: 'LP audits, R&M tracking, shift handoffs, and daily summaries for managers.' },
          ].map((p) => (
            <div key={p.name} style={{ background: '#292524', borderRadius: '12px', padding: '28px' }}>
              <div style={{
                width: '40px', height: '40px', background: '#1C1917', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', color: '#D97706', marginBottom: '20px'
              }}>✓</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>{p.name}</h3>
              <p style={{ color: '#A8A29E', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>{p.desc}</p>
              <a href={p.url} style={{ color: '#D97706', fontSize: '14px', textDecoration: 'none' }}>Learn more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ color: '#D97706', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Pricing
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, marginBottom: '48px' }}>
          Choose your plan.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', alignItems: 'start' }}>

          {/* Starter */}
          <div style={{ background: '#292524', borderRadius: '12px', padding: '32px' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A8A29E', marginBottom: '8px' }}>Starter</p>
            <p style={{ color: '#A8A29E', fontSize: '13px', marginBottom: '20px' }}>Get started with daily operations</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 700, marginBottom: '4px' }}>
              $19<span style={{ fontSize: '16px', color: '#A8A29E', fontFamily: 'DM Sans, sans-serif' }}>/mo</span>
            </p>
            <p style={{ color: '#78716C', fontSize: '13px', marginBottom: '28px' }}>14-day free trial</p>
            {['Daily Ops Checklist', 'Photo Documentation', '30-day History'].map(item => (
              <p key={item} style={{ color: '#A8A29E', fontSize: '14px', marginBottom: '10px' }}>✓ {item}</p>
            ))}
            <a href="https://buy.stripe.com/28E5kC8lr0gJaYLcqZ9k403" style={{
              display: 'block', textAlign: 'center', marginTop: '28px',
              border: '1px solid #57534E', padding: '12px', borderRadius: '8px',
              color: '#F5F0E8', textDecoration: 'none', fontSize: '15px'
            }}>Start Free Trial</a>
          </div>

          {/* Standard */}
          <div style={{ background: '#292524', borderRadius: '12px', padding: '32px', border: '1px solid #D97706', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
              background: '#D97706', color: '#fff', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: '20px'
            }}>Most Popular</div>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D97706', marginBottom: '8px' }}>Standard</p>
            <p style={{ color: '#A8A29E', fontSize: '13px', marginBottom: '20px' }}>Daily ops + team communication</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 700, marginBottom: '4px' }}>
              $39<span style={{ fontSize: '16px', color: '#A8A29E', fontFamily: 'DM Sans, sans-serif' }}>/mo</span>
            </p>
            <p style={{ color: '#78716C', fontSize: '13px', marginBottom: '28px' }}>14-day free trial</p>
            {['Everything in Starter', 'Announcements', 'Shift Swaps', 'Read Receipts'].map(item => (
              <p key={item} style={{ color: '#A8A29E', fontSize: '14px', marginBottom: '10px' }}>✓ {item}</p>
            ))}
            <a href="https://buy.stripe.com/7sY8wO1X3e7zgj58aJ9k409" style={{
              display: 'block', textAlign: 'center', marginTop: '28px',
              background: '#D97706', padding: '12px', borderRadius: '8px',
              color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 600
            }}>Start Free Trial</a>
          </div>

          {/* Pro */}
          <div style={{ background: '#292524', borderRadius: '12px', padding: '32px' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A8A29E', marginBottom: '8px' }}>Pro</p>
            <p style={{ color: '#A8A29E', fontSize: '13px', marginBottom: '20px' }}>Complete restaurant operations</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 700, marginBottom: '4px' }}>
              $99<span style={{ fontSize: '16px', color: '#A8A29E', fontFamily: 'DM Sans, sans-serif' }}>/mo</span>
            </p>
            <p style={{ color: '#78716C', fontSize: '13px', marginBottom: '28px' }}>14-day free trial</p>
            {['Everything in Standard', 'LP Audits', 'Repair Tracking', 'Shift Handoffs', 'Daily Summaries'].map(item => (
              <p key={item} style={{ color: '#A8A29E', fontSize: '14px', marginBottom: '10px' }}>✓ {item}</p>
            ))}
            <a href="https://buy.stripe.com/5kQ6oG1X3fbD7Mz3Ut9k408" style={{
              display: 'block', textAlign: 'center', marginTop: '28px',
              border: '1px solid #57534E', padding: '12px', borderRadius: '8px',
              color: '#F5F0E8', textDecoration: 'none', fontSize: '15px'
            }}>Start Free Trial</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
          Ready to run a tighter operation?
        </h2>
        <p style={{ color: '#A8A29E', fontSize: '16px', marginBottom: '32px' }}>
          Start your free trial. No credit card. Cancel anytime.
        </p>
        <a href="#pricing" style={{
          background: '#D97706', color: '#fff', padding: '16px 36px',
          borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '16px'
        }}>See Plans</a>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #292524', padding: '24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        maxWidth: '768px', margin: '0 auto', flexWrap: 'wrap', gap: '12px'
      }}>
        <span style={{ color: '#78716C', fontSize: '13px' }}>Built for independent restaurants, by an independent restaurant owner.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#pricing" style={{ color: '#78716C', fontSize: '13px', textDecoration: 'none' }}>Pricing</a>
          <a href="mailto:support@wireach.tools" style={{ color: '#78716C', fontSize: '13px', textDecoration: 'none' }}>support@wireach.tools</a>
        </div>
      </footer>
    </main>
  )
}