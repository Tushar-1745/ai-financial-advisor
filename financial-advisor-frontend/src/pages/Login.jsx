import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        border: "1px solid rgba(232,213,163,0.08)",
        top: "-100px",
        right: "-100px",
        pointerEvents: "none",
    },
    leftOrb2: {
        position: "absolute",
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        border: "1px solid rgba(232,213,163,0.05)",
        top: "-30px",
        right: "-30px",
        pointerEvents: "none",
    },
    leftOrb3: {
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        border: "1px solid rgba(232,213,163,0.06)",
        bottom: "60px",
        left: "-80px",
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
        fontSize: "clamp(28px, 3vw, 44px)",
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
    leftStats: {
        display: "flex",
        gap: "40px",
        zIndex: 1,
        borderTop: "1px solid rgba(232,213,163,0.1)",
        paddingTop: "28px",
    },
    statItem: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
    },
    statNum: {
        fontSize: "22px",
        fontWeight: "700",
        color: "#e8d5a3",
    },
    statLabel: {
        fontSize: "11px",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: "#4a4a5a",
    },

    /* ── Right Panel ── */
    right: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "48px 40px",
    },
    formBox: {
        width: "100%",
        maxWidth: "400px",
    },
    formHeader: {
        marginBottom: "40px",
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
    formGroup: {
        marginBottom: "22px",
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
    forgotRow: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "-14px",
        marginBottom: "28px",
    },
    forgotLink: {
        fontSize: "12px",
        color: "#9a8e7e",
        textDecoration: "none",
        letterSpacing: "0.5px",
        fontStyle: "italic",
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
        marginBottom: "28px",
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
    registerRow: {
        textAlign: "center",
        fontSize: "13px",
        color: "#9a8e7e",
        fontStyle: "italic",
    },
    registerLink: {
        color: "#1a1a2e",
        fontWeight: "700",
        textDecoration: "none",
        fontStyle: "normal",
        letterSpacing: "0.5px",
        borderBottom: "1px solid #1a1a2e",
        paddingBottom: "1px",
    },
    footerNote: {
        marginTop: "48px",
        textAlign: "center",
        fontSize: "11px",
        color: "#c9c0b5",
        letterSpacing: "0.5px",
    },
};

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
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
                <div style={styles.leftOrb3} />

                <a href="/" style={styles.leftLogo}>FinAI</a>

                <div style={styles.leftContent}>
                    <span style={styles.leftTag}>Welcome back</span>
                    <h2 style={styles.leftTitle}>
                        Your wealth,<br />
                        <em style={styles.leftTitleEm}>always</em><br />
                        in focus.
                    </h2>
                    <p style={styles.leftDesc}>
                        Sign in to access your personalised dashboard, spending insights, and AI-driven financial guidance.
                    </p>
                </div>

                <div style={styles.leftStats}>
                    <div style={styles.statItem}>
                        <span style={styles.statNum}>12k+</span>
                        <span style={styles.statLabel}>Active users</span>
                    </div>
                    <div style={styles.statItem}>
                        <span style={styles.statNum}>₹4.2Cr</span>
                        <span style={styles.statLabel}>Savings tracked</span>
                    </div>
                    <div style={styles.statItem}>
                        <span style={styles.statNum}>98%</span>
                        <span style={styles.statLabel}>Satisfaction</span>
                    </div>
                </div>
            </div>

            {/* Right form panel */}
            <div style={styles.right}>
                <div style={styles.formBox}>

                    <div style={styles.formHeader}>
                        <h1 style={styles.formTitle}>
                            Sign <em style={styles.formTitleEm}>in</em>
                        </h1>
                        <p style={styles.formSub}>
                            Enter your credentials to continue to your dashboard.
                        </p>
                    </div>

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

                    <div style={styles.forgotRow}>
                        <a href="/forgot-password" style={styles.forgotLink}>
                            Forgot password?
                        </a>
                    </div>

                    <button
                        style={styles.submitBtn}
                        onClick={() => alert("Login submitted")}
                        onMouseOver={(e) => (e.target.style.opacity = "0.85")}
                        onMouseOut={(e) => (e.target.style.opacity = "1")}
                    >
                        Sign In
                    </button>

                    <div style={styles.dividerRow}>
                        <div style={styles.dividerLine} />
                        <span style={styles.dividerText}>or</span>
                        <div style={styles.dividerLine} />
                    </div>

                    <p style={styles.registerRow}>
                        Don't have an account?{" "}
                        <Link to="/register" style={styles.registerLink}>
                            Create one
                        </Link>
                    </p>

                </div>

                <p style={styles.footerNote}>
                    © 2026 FinAI · Secured with 256-bit encryption
                </p>
            </div>

        </div>
    );
};

export default Login;