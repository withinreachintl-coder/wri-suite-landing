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
    </main>
  )
}
