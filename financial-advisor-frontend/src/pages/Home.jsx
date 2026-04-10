import React from "react";
import { Link } from "react-router-dom";

const styles = {
  root: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    minHeight: "100vh",
    backgroundColor: "#f7f5f0",
    color: "#1a1a2e",
    margin: 0,
    padding: 0,
  },

  /* ── Navbar ── */
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 48px",
    height: "68px",
    backgroundColor: "#1a1a2e",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navLogo: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#e8d5a3",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textDecoration: "none",
  },
  navLinks: {
    display: "flex",
    gap: "32px",
    alignItems: "center",
  },
  navLink: {
    color: "#b0a89a",
    textDecoration: "none",
    fontSize: "13px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    transition: "color 0.2s",
  },
  navLinkCta: {
    color: "#1a1a2e",
    backgroundColor: "#e8d5a3",
    padding: "8px 20px",
    borderRadius: "2px",
    textDecoration: "none",
    fontSize: "12px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    fontWeight: "700",
    transition: "background 0.2s",
  },

  /* ── Hero ── */
  hero: {
    minHeight: "88vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "80px 48px 80px 10vw",
    background: "linear-gradient(135deg, #1a1a2e 55%, #2d2d4e 100%)",
    position: "relative",
    overflow: "hidden",
  },
  heroAccent: {
    position: "absolute",
    top: "-80px",
    right: "-80px",
    width: "480px",
    height: "480px",
    borderRadius: "50%",
    border: "1px solid rgba(232,213,163,0.12)",
    pointerEvents: "none",
  },
  heroAccent2: {
    position: "absolute",
    top: "-20px",
    right: "-20px",
    width: "360px",
    height: "360px",
    borderRadius: "50%",
    border: "1px solid rgba(232,213,163,0.06)",
    pointerEvents: "none",
  },
  heroBadge: {
    display: "inline-block",
    fontSize: "11px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "#e8d5a3",
    borderBottom: "1px solid rgba(232,213,163,0.4)",
    paddingBottom: "4px",
    marginBottom: "32px",
  },
  heroTitle: {
    fontSize: "clamp(36px, 6vw, 72px)",
    fontWeight: "400",
    lineHeight: "1.1",
    color: "#f7f5f0",
    margin: "0 0 12px",
    maxWidth: "700px",
  },
  heroTitleEm: {
    fontStyle: "italic",
    color: "#e8d5a3",
  },
  heroSub: {
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#8a8097",
    maxWidth: "480px",
    margin: "0 0 48px",
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
  },
  heroBtn: {
    display: "inline-block",
    backgroundColor: "#e8d5a3",
    color: "#1a1a2e",
    padding: "16px 40px",
    fontSize: "13px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "'Georgia', serif",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    borderRadius: "2px",
    transition: "transform 0.15s, box-shadow 0.15s",
  },

  /* ── Divider ── */
  divider: {
    height: "1px",
    background: "linear-gradient(to right, transparent, #c9b99a, transparent)",
    margin: "0 48px",
    border: "none",
  },

  /* ── Features ── */
  features: {
    padding: "96px 48px",
    backgroundColor: "#f7f5f0",
  },
  featuresLabel: {
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#9a8e7e",
    textAlign: "center",
    marginBottom: "12px",
  },
  featuresTitle: {
    fontSize: "32px",
    fontWeight: "400",
    textAlign: "center",
    color: "#1a1a2e",
    margin: "0 0 64px",
    fontStyle: "italic",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2px",
    backgroundColor: "#e0dbd2",
    border: "1px solid #e0dbd2",
  },
  featureCard: {
    backgroundColor: "#f7f5f0",
    padding: "40px 32px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    transition: "background 0.2s",
  },
  featureIcon: {
    fontSize: "28px",
    lineHeight: 1,
  },
  featureNum: {
    fontSize: "11px",
    letterSpacing: "2px",
    color: "#c9b99a",
    fontFamily: "'Georgia', serif",
  },
  featureTitle: {
    fontSize: "17px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: 0,
    fontFamily: "'Georgia', serif",
  },
  featureText: {
    fontSize: "14px",
    lineHeight: "1.65",
    color: "#6b6259",
    margin: 0,
  },

  /* ── CTA ── */
  cta: {
    backgroundColor: "#1a1a2e",
    padding: "96px 48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "32px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  ctaLine: {
    width: "40px",
    height: "1px",
    backgroundColor: "#e8d5a3",
    margin: "0 auto",
  },
  ctaTitle: {
    fontSize: "clamp(24px, 4vw, 42px)",
    fontWeight: "400",
    color: "#f7f5f0",
    margin: 0,
    maxWidth: "580px",
    lineHeight: "1.25",
  },
  ctaTitleEm: {
    fontStyle: "italic",
    color: "#e8d5a3",
  },
  ctaSub: {
    fontSize: "15px",
    color: "#6b6a7a",
    margin: 0,
    maxWidth: "400px",
    lineHeight: "1.7",
    fontStyle: "italic",
  },
  ctaBtn: {
    display: "inline-block",
    border: "1px solid #e8d5a3",
    color: "#e8d5a3",
    padding: "16px 44px",
    fontSize: "12px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "'Georgia', serif",
    textDecoration: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    borderRadius: "2px",
    transition: "background 0.2s, color 0.2s",
  },

  /* ── Footer ── */
  footer: {
    backgroundColor: "#12121f",
    padding: "28px 48px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },
  footerLogo: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#e8d5a3",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  footerCopy: {
    fontSize: "12px",
    color: "#4a4a5a",
    letterSpacing: "0.5px",
  },
};

const features = [
  {
    icon: "📊",
    num: "01",
    title: "Expense Tracking",
    text: "Monitor your daily income and expenses with effortless clarity.",
  },
  {
    icon: "🤖",
    num: "02",
    title: "AI Advice",
    text: "Receive intelligent, personalised suggestions to grow your savings.",
  },
  {
    icon: "🚨",
    num: "03",
    title: "Budget Alerts",
    text: "Stay within budget with real-time notifications before you overspend.",
  },
  {
    icon: "📈",
    num: "04",
    title: "Reports",
    text: "Visualise your financial health through beautifully crafted charts.",
  },
];

const Home = () => {
  return (
    <div style={styles.root}>

      {/* Navbar */}
      {/* Navbar */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLogo}>FinAI</Link>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          {/* <Link to="/login" style={styles.navLinkCta}>Get Started</Link> */}
          <Link to="/dashboard" style={styles.navLinkCta}>Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroAccent} />
        <div style={styles.heroAccent2} />
        <span style={styles.heroBadge}>AI-Powered Finance</span>
        <h1 style={styles.heroTitle}>
          Your money,<br />
          <em style={styles.heroTitleEm}>intelligently</em><br />
          managed.
        </h1>
        <p style={styles.heroSub}>
          Track expenses, control spending, and grow your savings — guided by insights that actually understand your goals.
        </p>
        <a href="/login" style={styles.heroBtn}>Begin Your Journey</a>
      </section>

      <hr style={styles.divider} />

      {/* Features */}
      <section style={styles.features}>
        <p style={styles.featuresLabel}>What we offer</p>
        <h2 style={styles.featuresTitle}>Everything you need to thrive financially</h2>
        <div style={styles.featuresGrid}>
          {features.map((f) => (
            <div key={f.num} style={styles.featureCard}>
              <span style={styles.featureIcon}>{f.icon}</span>
              <span style={styles.featureNum}>{f.num}</span>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureText}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaLine} />
        <h2 style={styles.ctaTitle}>
          Start managing your money <em style={styles.ctaTitleEm}>smarter</em> today
        </h2>
        <p style={styles.ctaSub}>
          Join thousands building better financial habits with the help of AI.
        </p>
        <a href="/login" style={styles.ctaBtn}>Get Started — It's Free</a>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <span style={styles.footerLogo}>FinAI</span>
        <span style={styles.footerCopy}>© 2026 FinAI. All rights reserved.</span>
      </footer>

    </div>
  );
};

export default Home;