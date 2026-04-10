import React, { useState } from "react";

const styles = {
  page: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#f7f5f0",
    margin: 0,
    padding: 0,
  },

  /* ── Left Panel ── */
  left: {
    width: "45%",
    backgroundColor: "#1a1a2e",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "48px",
    position: "relative",
    overflow: "hidden",
  },
  leftOrb1: {
    position: "absolute",
    width: "420px",
    height: "420px",
    borderRadius: "50%",
    border: "1px solid rgba(232,213,163,0.07)",
    bottom: "-120px",
    right: "-120px",
    pointerEvents: "none",
  },
  leftOrb2: {
    position: "absolute",
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    border: "1px solid rgba(232,213,163,0.05)",
    top: "80px",
    left: "-60px",
    pointerEvents: "none",
  },
  leftLogo: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#e8d5a3",
    letterSpacing: "3px",
    textTransform: "uppercase",
    textDecoration: "none",
    zIndex: 1,
  },
  leftContent: {
    zIndex: 1,
  },
  leftTag: {
    fontSize: "11px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "rgba(232,213,163,0.5)",
    borderBottom: "1px solid rgba(232,213,163,0.2)",
    paddingBottom: "6px",
    display: "inline-block",
    marginBottom: "28px",
  },
  leftTitle: {
    fontSize: "clamp(26px, 3vw, 42px)",
    fontWeight: "400",
    color: "#f7f5f0",
    lineHeight: "1.2",
    margin: "0 0 20px",
  },
  leftTitleEm: {
    fontStyle: "italic",
    color: "#e8d5a3",
  },
  leftDesc: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#6b6a7a",
    margin: 0,
    maxWidth: "340px",
    fontStyle: "italic",
  },
  leftSteps: {
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    borderTop: "1px solid rgba(232,213,163,0.1)",
    paddingTop: "28px",
  },
  stepItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
  },
  stepNum: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    border: "1px solid rgba(232,213,163,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color: "#e8d5a3",
    flexShrink: 0,
    letterSpacing: "0.5px",
  },
  stepText: {
    fontSize: "13px",
    color: "#6b6a7a",
    lineHeight: "1.5",
    fontStyle: "italic",
    margin: 0,
    paddingTop: "2px",
  },

  /* ── Right Panel ── */
  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "48px 40px",
    overflowY: "auto",
  },
  formBox: {
    width: "100%",
    maxWidth: "420px",
  },
  formHeader: {
    marginBottom: "36px",
  },
  formTitle: {
    fontSize: "28px",
    fontWeight: "400",
    color: "#1a1a2e",
    margin: "0 0 8px",
  },
  formTitleEm: {
    fontStyle: "italic",
    color: "#9a6e3a",
  },
  formSub: {
    fontSize: "14px",
    color: "#9a8e7e",
    margin: 0,
    lineHeight: "1.6",
    fontStyle: "italic",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "11px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#6b6259",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "13px 16px",
    fontSize: "15px",
    fontFamily: "'Georgia', serif",
    border: "1px solid #ddd8d0",
    borderRadius: "2px",
    backgroundColor: "#fdfcfa",
    color: "#1a1a2e",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  },
  passwordHint: {
    fontSize: "11px",
    color: "#b0a89a",
    marginTop: "6px",
    letterSpacing: "0.3px",
    fontStyle: "italic",
  },
  checkRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "28px",
  },
  checkbox: {
    marginTop: "2px",
    accentColor: "#1a1a2e",
    width: "14px",
    height: "14px",
    flexShrink: 0,
    cursor: "pointer",
  },
  checkLabel: {
    fontSize: "13px",
    color: "#9a8e7e",
    lineHeight: "1.5",
    fontStyle: "italic",
  },
  checkLink: {
    color: "#1a1a2e",
    textDecoration: "underline",
    fontStyle: "normal",
  },
  submitBtn: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#1a1a2e",
    color: "#e8d5a3",
    border: "none",
    borderRadius: "2px",
    fontSize: "12px",
    fontFamily: "'Georgia', serif",
    fontWeight: "700",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "opacity 0.2s",
    marginBottom: "28px",
  },
  dividerRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    backgroundColor: "#e0dbd2",
  },
  dividerText: {
    fontSize: "11px",
    color: "#b0a89a",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  loginRow: {
    textAlign: "center",
    fontSize: "13px",
    color: "#9a8e7e",
    fontStyle: "italic",
  },
  loginLink: {
    color: "#1a1a2e",
    fontWeight: "700",
    textDecoration: "none",
    fontStyle: "normal",
    letterSpacing: "0.5px",
    borderBottom: "1px solid #1a1a2e",
    paddingBottom: "1px",
  },
  footerNote: {
    marginTop: "40px",
    textAlign: "center",
    fontSize: "11px",
    color: "#c9c0b5",
    letterSpacing: "0.5px",
  },
};

const steps = [
  "Create your free account in under a minute",
  "Connect your accounts or enter data manually",
  "Let AI analyse and guide your financial journey",
];

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const inputStyle = (name) => ({
    ...styles.input,
    borderColor: focused === name ? "#1a1a2e" : "#ddd8d0",
  });

  return (
    <div style={styles.page}>

      {/* Left decorative panel */}
      <div style={styles.left}>
        <div style={styles.leftOrb1} />
        <div style={styles.leftOrb2} />

        <a href="/" style={styles.leftLogo}>FinAI</a>

        <div style={styles.leftContent}>
          <span style={styles.leftTag}>Get started</span>
          <h2 style={styles.leftTitle}>
            Begin your<br />
            <em style={styles.leftTitleEm}>financial</em><br />
            journey.
          </h2>
          <p style={styles.leftDesc}>
            Join thousands who have transformed how they manage, save, and grow their money with AI.
          </p>
        </div>

        <div style={styles.leftSteps}>
          {steps.map((s, i) => (
            <div key={i} style={styles.stepItem}>
              <div style={styles.stepNum}>{String(i + 1).padStart(2, "0")}</div>
              <p style={styles.stepText}>{s}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right form panel */}
      <div style={styles.right}>
        <div style={styles.formBox}>

          <div style={styles.formHeader}>
            <h1 style={styles.formTitle}>
              Create <em style={styles.formTitleEm}>account</em>
            </h1>
            <p style={styles.formSub}>
              Fill in the details below to get started for free.
            </p>
          </div>

          {/* Name row */}
          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="firstName">First name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Arjun"
                value={form.firstName}
                onChange={handleChange}
                onFocus={() => setFocused("firstName")}
                onBlur={() => setFocused("")}
                style={inputStyle("firstName")}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Sharma"
                value={form.lastName}
                onChange={handleChange}
                onFocus={() => setFocused("lastName")}
                onBlur={() => setFocused("")}
                style={inputStyle("lastName")}
              />
            </div>
          </div>

          {/* Email */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused("")}
              style={inputStyle("email")}
            />
          </div>

          {/* Phone */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={handleChange}
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused("")}
              style={inputStyle("phone")}
            />
          </div>

          {/* Password row */}
          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused("")}
                style={inputStyle("password")}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="confirm">Confirm</label>
              <input
                id="confirm"
                name="confirm"
                type="password"
                placeholder="••••••••"
                value={form.confirm}
                onChange={handleChange}
                onFocus={() => setFocused("confirm")}
                onBlur={() => setFocused("")}
                style={{
                  ...inputStyle("confirm"),
                  borderColor:
                    form.confirm && form.confirm !== form.password
                      ? "#c0392b"
                      : focused === "confirm"
                      ? "#1a1a2e"
                      : "#ddd8d0",
                }}
              />
            </div>
          </div>
          {form.confirm && form.confirm !== form.password && (
            <p style={{ ...styles.passwordHint, color: "#c0392b", marginTop: "-12px", marginBottom: "16px" }}>
              Passwords do not match.
            </p>
          )}

          {/* Terms */}
          <div style={styles.checkRow}>
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={styles.checkbox}
            />
            <label htmlFor="terms" style={styles.checkLabel}>
              I agree to the{" "}
              <a href="/terms" style={styles.checkLink}>Terms of Service</a>{" "}
              and{" "}
              <a href="/privacy" style={styles.checkLink}>Privacy Policy</a>
            </label>
          </div>

          <button
            style={{
              ...styles.submitBtn,
              opacity: agreed ? 1 : 0.45,
              cursor: agreed ? "pointer" : "not-allowed",
            }}
            disabled={!agreed}
            onClick={() => agreed && alert("Account created!")}
            onMouseOver={(e) => { if (agreed) e.target.style.opacity = "0.85"; }}
            onMouseOut={(e) => { if (agreed) e.target.style.opacity = "1"; }}
          >
            Create Account
          </button>

          <div style={styles.dividerRow}>
            <div style={styles.dividerLine} />
            <span style={styles.dividerText}>or</span>
            <div style={styles.dividerLine} />
          </div>

          <p style={styles.loginRow}>
            Already have an account?{" "}
            <a href="/login" style={styles.loginLink}>Sign in</a>
          </p>

        </div>

        <p style={styles.footerNote}>
          © 2026 FinAI · Your data is always encrypted and private
        </p>
      </div>

    </div>
  );
};

export default Register;