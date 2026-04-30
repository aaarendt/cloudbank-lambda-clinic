// UW Website UI Kit — Shared Components
// Load with <script type="text/babel" src="Components.jsx"></script>

const UW = {
  huskyPurple: '#32006e',
  spiritPurple: '#4b2e83',
  huskyGold: '#b7a57a',
  huskyGoldWeb: '#e8e3d3',
  heritageGold: '#85754d',
  spiritGold: '#ffc700',
  gray90: '#1a1a1a',
  gray70: '#4d4d4d',
  gray30: '#b3b3b3',
  gray10: '#e6e6e6',
  cream: '#e8d3a2',
  white: '#ffffff',
};

// ── Navigation Header ──────────────────────────────────────────────────────
function SiteHeader({ activePage = 'Home', onNav }) {
  const navItems = ['About', 'Academics', 'Research', 'Campus Life', 'Admissions', 'Give'];
  const headerStyles = {
    wrapper: { borderBottom: `1px solid ${UW.gray10}`, background: UW.white, position: 'sticky', top: 0, zIndex: 100 },
    topBar: { background: UW.huskyPurple, height: 4 },
    inner: { maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 },
    logo: { display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', cursor: 'pointer' },
    logoImg: { height: 42 },
    wordmark: { display: 'flex', flexDirection: 'column' },
    wordmarkMain: { fontFamily: "'Encode Sans', sans-serif", fontWeight: 900, fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', color: UW.huskyPurple },
    wordmarkSub: { fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: 11, color: UW.gray70, letterSpacing: '0.04em' },
    nav: { display: 'flex', alignItems: 'center', gap: 4 },
    navLink: (active) => ({ fontFamily: "'Open Sans', sans-serif", fontWeight: active ? 700 : 600, fontSize: 13, letterSpacing: '0.04em', color: active ? UW.spiritPurple : UW.gray70, padding: '8px 14px', borderBottom: active ? `3px solid ${UW.spiritGold}` : '3px solid transparent', textDecoration: 'none', cursor: 'pointer', background: 'none', border: 'none', borderBottom: active ? `3px solid ${UW.spiritGold}` : '3px solid transparent', transition: 'color 150ms' }),
    actions: { display: 'flex', gap: 8, alignItems: 'center' },
    btnSearch: { background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: UW.gray70 },
    btnApply: { background: UW.spiritPurple, color: UW.white, border: 'none', borderRadius: 2, padding: '8px 18px', fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' },
  };
  return (
    <div style={headerStyles.wrapper}>
      <div style={headerStyles.topBar}></div>
      <div style={headerStyles.inner}>
        <div style={headerStyles.logo} onClick={() => onNav && onNav('Home')}>
          <img src="../assets/W-Logo_Purple_RGB.png" style={headerStyles.logoImg} alt="UW" />
          <div style={headerStyles.wordmark}>
            <span style={headerStyles.wordmarkMain}>University of Washington</span>
            <span style={headerStyles.wordmarkSub}>Seattle · Bothell · Tacoma</span>
          </div>
        </div>
        <nav style={headerStyles.nav}>
          {navItems.map(item => (
            <button key={item} style={headerStyles.navLink(activePage === item)} onClick={() => onNav && onNav(item)}>{item}</button>
          ))}
        </nav>
        <div style={headerStyles.actions}>
          <button style={headerStyles.btnSearch}>🔍</button>
          <button style={headerStyles.btnApply} onClick={() => onNav && onNav('Admissions')}>Apply</button>
        </div>
      </div>
    </div>
  );
}

// ── Hero Unit ──────────────────────────────────────────────────────────────
function Hero({ title = 'Be Boundless', subtitle = 'Explore world-class programs at one of the world's top public universities.', cta = 'Explore Programs', onCta }) {
  const s = {
    hero: { position: 'relative', height: 520, overflow: 'hidden', background: UW.spiritPurple },
    photo: { position: 'absolute', inset: 0, backgroundImage: "url('../assets/pptx_image1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 60%', opacity: 0.22, filter: 'sepia(30%) saturate(70%)' },
    overlay: { position: 'absolute', inset: 0, background: `linear-gradient(105deg, ${UW.huskyPurple} 0%, rgba(75,46,131,0.85) 50%, rgba(75,46,131,0.4) 100%)` },
    content: { position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
    overline: { fontFamily: "'Open Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: UW.spiritGold, marginBottom: 16 },
    h1: { fontFamily: "'Encode Sans', sans-serif", fontWeight: 900, fontSize: 64, letterSpacing: '0.05em', textTransform: 'uppercase', color: UW.white, lineHeight: 1.0, maxWidth: 700, textWrap: 'balance' },
    sub: { fontFamily: "'Open Sans', sans-serif", fontSize: 20, fontWeight: 300, color: UW.huskyGoldWeb, marginTop: 20, maxWidth: 560, lineHeight: 1.6 },
    ctaRow: { display: 'flex', gap: 12, marginTop: 36 },
    btnPrimary: { background: UW.spiritGold, color: UW.huskyPurple, border: 'none', borderRadius: 2, padding: '14px 32px', fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' },
    btnOutline: { background: 'transparent', color: UW.white, border: `2px solid ${UW.white}`, borderRadius: 2, padding: '14px 32px', fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' },
    goldBar: { position: 'absolute', right: 0, top: 0, bottom: 0, width: 6, background: UW.spiritGold },
  };
  return (
    <div style={s.hero}>
      <div style={s.photo}></div>
      <div style={s.overlay}></div>
      <div style={s.goldBar}></div>
      <div style={s.content}>
        <div style={s.overline}>University of Washington</div>
        <h1 style={s.h1}>{title}</h1>
        <p style={s.sub}>{subtitle}</p>
        <div style={s.ctaRow}>
          <button style={s.btnPrimary} onClick={onCta}>{cta}</button>
          <button style={s.btnOutline}>Take a Virtual Tour</button>
        </div>
      </div>
    </div>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { num: '56K+', label: 'Students Enrolled' },
    { num: '#9', label: 'Public University' },
    { num: '$1.8B', label: 'Research Funding' },
    { num: '25', label: 'Nobel Laureates' },
  ];
  const s = {
    bar: { background: UW.huskyPurple, padding: '32px 0' },
    inner: { maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 },
    item: { textAlign: 'center', borderRight: `1px solid rgba(255,255,255,0.15)`, padding: '0 20px' },
    num: { fontFamily: "'Encode Sans', sans-serif", fontWeight: 900, fontSize: 44, color: UW.spiritGold, lineHeight: 1 },
    label: { fontFamily: "'Open Sans', sans-serif", fontSize: 12, fontWeight: 600, color: UW.huskyGoldWeb, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 8 },
  };
  return (
    <div style={s.bar}>
      <div style={s.inner}>
        {stats.map((st, i) => (
          <div key={i} style={{ ...s.item, borderRight: i < stats.length - 1 ? s.item.borderRight : 'none' }}>
            <div style={s.num}>{st.num}</div>
            <div style={s.label}>{st.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Program Card ──────────────────────────────────────────────────────────
function ProgramCard({ college, title, description, onClick }) {
  const [hovered, setHovered] = React.useState(false);
  const s = {
    card: { background: UW.white, borderRadius: 2, boxShadow: hovered ? `0 8px 28px rgba(50,0,110,0.16)` : `0 2px 10px rgba(50,0,110,0.08)`, overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 200ms, transform 200ms', transform: hovered ? 'translateY(-2px)' : 'none' },
    top: { background: UW.spiritPurple, height: 6 },
    body: { padding: '20px 22px 24px' },
    overline: { fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: UW.heritageGold, marginBottom: 8 },
    title: { fontFamily: "'Encode Sans', sans-serif", fontWeight: 900, fontSize: 17, letterSpacing: '0.04em', textTransform: 'uppercase', color: UW.huskyPurple, lineHeight: 1.2, marginBottom: 10 },
    desc: { fontSize: 13, color: UW.gray70, lineHeight: 1.6 },
    link: { display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 16, fontSize: 12, fontWeight: 700, color: UW.spiritPurple, letterSpacing: '0.06em', textTransform: 'uppercase' },
  };
  return (
    <div style={s.card} onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={s.top}></div>
      <div style={s.body}>
        <div style={s.overline}>{college}</div>
        <div style={s.title}>{title}</div>
        <p style={s.desc}>{description}</p>
        <div style={s.link}>Learn More →</div>
      </div>
    </div>
  );
}

// ── Site Footer ───────────────────────────────────────────────────────────
function SiteFooter() {
  const cols = [
    { heading: 'Academics', links: ['Find a Program', 'Schools & Colleges', 'Graduate Programs', 'Online Programs', 'Continuing Education'] },
    { heading: 'Research', links: ['Research Centers', 'Funding & Awards', 'CoMotion', 'Graduate Research', 'Publications'] },
    { heading: 'Campus Life', links: ['Housing & Dining', 'Student Activities', 'Athletics', 'Health & Wellness', 'Diversity & Inclusion'] },
    { heading: 'About UW', links: ['Leadership', 'History', 'Rankings', 'Sustainability', 'Newsroom'] },
  ];
  const s = {
    footer: { background: UW.huskyPurple, color: UW.white },
    goldBar: { height: 4, background: UW.spiritGold },
    main: { maxWidth: 1200, margin: '0 auto', padding: '52px 32px 40px', display: 'grid', gridTemplateColumns: '240px repeat(4,1fr)', gap: 40 },
    brand: { display: 'flex', flexDirection: 'column', gap: 14 },
    wMark: { height: 48, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 },
    wordmark: { fontFamily: "'Encode Sans', sans-serif", fontWeight: 900, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: UW.huskyGoldWeb, lineHeight: 1.4 },
    tagline: { fontSize: 12, color: 'rgba(232,227,211,0.65)', lineHeight: 1.6, marginTop: 4 },
    colHeading: { fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: UW.spiritGold, marginBottom: 14, paddingBottom: 8, borderBottom: `1px solid rgba(255,255,255,0.15)` },
    colLinks: { display: 'flex', flexDirection: 'column', gap: 9 },
    colLink: { fontSize: 12, color: 'rgba(232,227,211,0.75)', cursor: 'pointer', textDecoration: 'none' },
    bottom: { borderTop: '1px solid rgba(255,255,255,0.12)', padding: '20px 32px', maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    copy: { fontSize: 11, color: 'rgba(232,227,211,0.5)' },
  };
  return (
    <footer style={s.footer}>
      <div style={s.goldBar}></div>
      <div style={s.main}>
        <div style={s.brand}>
          <img src="../assets/W-Logo_Purple_RGB.png" style={s.wMark} alt="UW" />
          <div style={s.wordmark}>University of Washington</div>
          <div style={s.tagline}>Seattle · Bothell · Tacoma<br/>Est. 1861 · Be Boundless</div>
        </div>
        {cols.map(col => (
          <div key={col.heading}>
            <div style={s.colHeading}>{col.heading}</div>
            <div style={s.colLinks}>
              {col.links.map(l => <a key={l} style={s.colLink} href="#">{l}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={s.bottom}>
        <div style={s.copy}>© 2026 University of Washington · Seattle, WA 98195 · 206-543-2100</div>
        <div style={{ display: 'flex', gap: 16 }}>
          {['Privacy', 'Accessibility', 'Terms', 'Contact'].map(l => <a key={l} href="#" style={{ ...s.copy, textDecoration: 'underline', cursor: 'pointer' }}>{l}</a>)}
        </div>
      </div>
    </footer>
  );
}

// ── Breadcrumb ────────────────────────────────────────────────────────────
function Breadcrumb({ items = ['Home', 'Academics', 'Computer Science'] }) {
  const s = {
    nav: { background: UW.huskyGoldWeb, borderBottom: `1px solid ${UW.gray10}`, padding: '10px 0' },
    inner: { maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 6, alignItems: 'center', fontSize: 12, color: UW.gray70 },
    sep: { color: UW.gray30 },
    last: { color: UW.spiritPurple, fontWeight: 600 },
  };
  return (
    <div style={s.nav}>
      <div style={s.inner}>
        {items.map((item, i) => (
          <React.Fragment key={item}>
            {i > 0 && <span style={s.sep}>/</span>}
            <span style={i === items.length - 1 ? s.last : { cursor: 'pointer' }}>{item}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── News Card ─────────────────────────────────────────────────────────────
function NewsCard({ date, tag, title, excerpt }) {
  const [hovered, setHovered] = React.useState(false);
  const s = {
    card: { background: UW.white, borderRadius: 2, boxShadow: hovered ? `0 6px 24px rgba(50,0,110,0.12)` : `0 1px 6px rgba(50,0,110,0.07)`, padding: '20px 22px', cursor: 'pointer', transition: 'box-shadow 200ms', borderTop: `3px solid ${UW.spiritPurple}` },
    meta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    date: { fontSize: 11, color: UW.gray70, letterSpacing: '0.04em' },
    tag: { fontSize: 10, fontWeight: 700, padding: '3px 8px', background: UW.huskyGoldWeb, color: UW.heritageGold, borderRadius: 2, letterSpacing: '0.06em', textTransform: 'uppercase' },
    title: { fontFamily: "'Encode Sans', sans-serif", fontWeight: 900, fontSize: 15, color: UW.huskyPurple, letterSpacing: '0.02em', lineHeight: 1.3, marginBottom: 8 },
    excerpt: { fontSize: 13, color: UW.gray70, lineHeight: 1.6 },
  };
  return (
    <div style={s.card} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={s.meta}>
        <span style={s.date}>{date}</span>
        <span style={s.tag}>{tag}</span>
      </div>
      <div style={s.title}>{title}</div>
      <p style={s.excerpt}>{excerpt}</p>
    </div>
  );
}

Object.assign(window, { SiteHeader, Hero, StatsBar, ProgramCard, SiteFooter, Breadcrumb, NewsCard, UW });
