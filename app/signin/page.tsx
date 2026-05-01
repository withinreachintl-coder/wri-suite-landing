export default function SignInPage() {
  return (
    <main style={{ background: '#1C1917', color: '#F5F0E8', fontFamily: 'DM Sans, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <p style={{ color: '#D97706', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>WRI Tools</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, marginBottom: '12px' }}>
          Sign in to your product
        </h1>
        <p style={{ color: '#A8A29E', fontSize: '16px' }}>Choose the tool you want to access.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '1000px', width: '100%' }}>
        {[
          { name: 'Daily Ops', desc: 'Opening & closing checklists', url: 'https://ops.wireach.tools/auth/login' },
          { name: 'Staff Comms', desc: 'Announcements & shift swaps', url: 'https://staff.wireach.tools/login' },
          { name: 'Toolkit', desc: 'LP audits, R&M, shift handoffs', url: 'https://toolkit.wireach.tools/login' },
          { name: 'Par Level Tracker', desc: 'Daily par counts and shortfall alerts', url: 'https://par.wireach.tools/login' },
        ].map(p => (
          <a
            key={p.name}
            href={p.url}
            style={{
              background: '#292524', borderRadius: '12px', padding: '32px',
              textDecoration: 'none', color: '#F5F0E8', display: 'block',
              border: '1px solid #3D3832',
            }}
          >
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>{p.name}</h2>
            <p style={{ color: '#A8A29E', fontSize: '14px', marginBottom: '24px' }}>{p.desc}</p>
            <span style={{ color: '#D97706', fontSize: '14px' }}>Sign in →</span>
          </a>
        ))}
      </div>

      <p style={{ marginTop: '48px', color: '#78716C', fontSize: '13px' }}>
        Not a customer yet?{' '}
        <a href="https://wireach.tools" style={{ color: '#D97706', textDecoration: 'none' }}>See all products →</a>
      </p>
    </main>
  );
}
