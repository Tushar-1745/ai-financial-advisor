import React, { useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  root: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    minHeight: "100vh",
    backgroundColor: "#f7f5f0",
    color: "#1a1a2e",
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
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  navUser: {
    fontSize: "12px",
    color: "#b0a89a",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#e8d5a3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "700",
    color: "#1a1a2e",
    cursor: "pointer",
  },

  /* ── Layout ── */
  page: {
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    minHeight: "calc(100vh - 68px)",
  },

  /* ── Sidebar ── */
  sidebar: {
    backgroundColor: "#12121f",
    padding: "32px 0",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  sidebarLabel: {
    fontSize: "10px",
    letterSpacing: "2.5px",
    color: "#3a3a4f",
    textTransform: "uppercase",
    padding: "16px 24px 8px",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 24px",
    fontSize: "13px",
    color: "#6a6a7a",
    letterSpacing: "0.5px",
    cursor: "pointer",
    borderLeft: "2px solid transparent",
    transition: "all 0.15s",
    textDecoration: "none",
  },
  navItemActive: {
    color: "#e8d5a3",
    borderLeftColor: "#e8d5a3",
    backgroundColor: "rgba(232,213,163,0.06)",
  },

  /* ── Main ── */
  main: {
    padding: "36px 40px",
    backgroundColor: "#f7f5f0",
    overflowY: "auto",
  },
  pageHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "28px",
  },
  pageGreeting: {
    fontSize: "13px",
    fontStyle: "italic",
    color: "#9a8e7e",
    letterSpacing: "1px",
    marginBottom: "4px",
    display: "block",
  },
  pageTitle: {
    fontSize: "26px",
    fontWeight: "400",
    color: "#1a1a2e",
    margin: 0,
  },
  addBtn: {
    backgroundColor: "#1a1a2e",
    color: "#e8d5a3",
    border: "none",
    padding: "10px 22px",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontFamily: "'Georgia', serif",
    cursor: "pointer",
    borderRadius: "2px",
  },

  /* ── Stat Cards ── */
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "14px",
    marginBottom: "28px",
  },
  card: {
    backgroundColor: "#fff",
    border: "1px solid #e0dbd2",
    padding: "22px 20px",
    borderRadius: "2px",
  },
  cardLabel: {
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#9a8e7e",
    marginBottom: "10px",
  },
  cardValue: {
    fontSize: "26px",
    fontWeight: "400",
    color: "#1a1a2e",
    marginBottom: "6px",
  },
  cardValueGreen: { color: "#2d7a4f" },
  cardValueRed: { color: "#a03020" },
  cardDelta: {
    fontSize: "11px",
    color: "#9a8e7e",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  badgeUp: {
    fontSize: "11px",
    padding: "2px 6px",
    borderRadius: "2px",
    backgroundColor: "#eaf5ec",
    color: "#2d7a4f",
  },
  badgeDn: {
    fontSize: "11px",
    padding: "2px 6px",
    borderRadius: "2px",
    backgroundColor: "#faeaea",
    color: "#a03020",
  },

  /* ── AI Card ── */
  aiCard: {
    backgroundColor: "#1a1a2e",
    borderRadius: "2px",
    padding: "22px 28px",
    marginBottom: "14px",
    display: "flex",
    alignItems: "center",
    gap: "28px",
    flexWrap: "wrap",
  },
  aiBadge: {
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#e8d5a3",
    borderBottom: "1px solid rgba(232,213,163,0.3)",
    paddingBottom: "3px",
    display: "inline-block",
    marginBottom: "10px",
  },
  aiText: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#8a8097",
    fontStyle: "italic",
    margin: "0 0 14px",
    flex: 1,
  },
  aiBtn: {
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#e8d5a3",
    border: "1px solid rgba(232,213,163,0.3)",
    backgroundColor: "transparent",
    padding: "8px 18px",
    fontFamily: "'Georgia', serif",
    cursor: "pointer",
    borderRadius: "2px",
    whiteSpace: "nowrap",
  },

  /* ── Two col ── */
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 340px",
    gap: "14px",
    marginBottom: "14px",
  },
  panel: {
    backgroundColor: "#fff",
    border: "1px solid #e0dbd2",
    borderRadius: "2px",
    padding: "24px",
  },
  panelHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  panelTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#1a1a2e",
  },
  panelSub: {
    fontSize: "11px",
    color: "#9a8e7e",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  /* ── Bar Chart ── */
  chartArea: {
    height: "160px",
    display: "flex",
    alignItems: "flex-end",
    gap: "8px",
  },
  barGroup: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    gap: "3px",
  },
  barIncome: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    borderRadius: "2px 2px 0 0",
  },
  barExpense: {
    flex: 1,
    backgroundColor: "#c9b99a",
    borderRadius: "2px 2px 0 0",
  },
  barLabels: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "8px",
  },
  barLabel: {
    fontSize: "10px",
    color: "#9a8e7e",
    letterSpacing: "1px",
    flex: 1,
    textAlign: "center",
  },
  legend: { display: "flex", gap: "16px" },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "11px",
    color: "#6b6259",
  },
  legendDot: { width: "8px", height: "8px", borderRadius: "1px" },

  /* ── Budget ── */
  budgetList: { display: "flex", flexDirection: "column", gap: "14px" },
  budgetRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "6px",
  },
  budgetName: { fontSize: "13px", color: "#1a1a2e" },
  budgetVals: { fontSize: "12px", color: "#9a8e7e" },
  progressBg: { height: "4px", backgroundColor: "#f0ece4", borderRadius: "2px" },

  /* ── Transactions ── */
  txItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "12px 0",
    borderBottom: "1px solid #f0ece4",
  },
  txIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#f7f5f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    flexShrink: 0,
  },
  txInfo: { flex: 1 },
  txName: { fontSize: "13px", color: "#1a1a2e", marginBottom: "2px" },
  txDate: { fontSize: "11px", color: "#9a8e7e" },
  txAmountPos: { fontSize: "14px", fontWeight: "700", color: "#2d7a4f" },
  txAmountNeg: { fontSize: "14px", fontWeight: "700", color: "#a03020" },
};

const monthData = [
  { month: "Nov", income: 110, expense: 72 },
  { month: "Dec", income: 100, expense: 66 },
  { month: "Jan", income: 118, expense: 80 },
  { month: "Feb", income: 105, expense: 74 },
  { month: "Mar", income: 122, expense: 90 },
  { month: "Apr", income: 115, expense: 95 },
];

const budgets = [
  { name: "Housing",       spent: 14000, limit: 15000, pct: 93,  color: "#1a1a2e" },
  { name: "Dining",        spent: 8200,  limit: 6000,  pct: 100, color: "#a03020" },
  { name: "Transport",     spent: 3100,  limit: 5000,  pct: 62,  color: "#2d7a4f" },
  { name: "Shopping",      spent: 5800,  limit: 8000,  pct: 72,  color: "#c9b99a" },
  { name: "Entertainment", spent: 2200,  limit: 3000,  pct: 73,  color: "#c9b99a" },
];

const transactions = [
  { icon: "🛒", name: "DMart Groceries",  date: "Apr 12, 2026", amount: "−₹1,840", pos: false },
  { icon: "💼", name: "Salary — April",    date: "Apr 10, 2026", amount: "+₹72,000", pos: true  },
  { icon: "🍽️", name: "Zomato Order",      date: "Apr 9, 2026",  amount: "−₹640",   pos: false },
  { icon: "⛽", name: "Petrol — BPCL",     date: "Apr 8, 2026",  amount: "−₹2,200", pos: false },
  { icon: "📱", name: "Jio Recharge",      date: "Apr 7, 2026",  amount: "−₹299",   pos: false },
];

const navItems = [
  { label: "Overview",     icon: "▪", section: "main"  },
  { label: "Transactions", icon: "◈", section: "main"  },
  { label: "Budget",       icon: "◉", section: "main"  },
  { label: "Reports",      icon: "◎", section: "main"  },
  { label: "AI Advisor",   icon: "✦", section: "tools" },
  { label: "Goals",        icon: "◇", section: "tools" },
  { label: "Settings",     icon: "◻", section: "tools" },
];

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <div style={styles.root}>

      {/* Navbar */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLogo}>FinAI</Link>
        <div style={styles.navRight}>
          <span style={styles.navUser}>Arjun S.</span>
          <div style={styles.avatar}>AS</div>
        </div>
      </nav>

      <div style={styles.page}>

        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <span style={styles.sidebarLabel}>Main</span>
          {navItems.filter(n => n.section === "main").map(n => (
            <div
              key={n.label}
              style={{ ...styles.navItem, ...(activeNav === n.label ? styles.navItemActive : {}) }}
              onClick={() => setActiveNav(n.label)}
            >
              <span style={{ fontSize: "14px", width: "18px", textAlign: "center" }}>{n.icon}</span>
              {n.label}
            </div>
          ))}
          <span style={{ ...styles.sidebarLabel, marginTop: "12px" }}>Tools</span>
          {navItems.filter(n => n.section === "tools").map(n => (
            <div
              key={n.label}
              style={{ ...styles.navItem, ...(activeNav === n.label ? styles.navItemActive : {}) }}
              onClick={() => setActiveNav(n.label)}
            >
              <span style={{ fontSize: "14px", width: "18px", textAlign: "center" }}>{n.icon}</span>
              {n.label}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main style={styles.main}>

          {/* Page Header */}
          <div style={styles.pageHead}>
            <div>
              <em style={styles.pageGreeting}>Good morning</em>
              <h1 style={styles.pageTitle}>Overview</h1>
            </div>
            <button style={styles.addBtn}>+ Add Transaction</button>
          </div>

          {/* Stat Cards */}
          <div style={styles.cards}>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Total Balance</div>
              <div style={styles.cardValue}>₹1,84,230</div>
              <div style={styles.cardDelta}><span style={styles.badgeUp}>+4.2%</span> vs last month</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Monthly Income</div>
              <div style={{ ...styles.cardValue, ...styles.cardValueGreen }}>₹72,000</div>
              <div style={styles.cardDelta}><span style={styles.badgeUp}>+2.1%</span> vs last month</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Monthly Expenses</div>
              <div style={{ ...styles.cardValue, ...styles.cardValueRed }}>₹41,580</div>
              <div style={styles.cardDelta}><span style={styles.badgeDn}>+8.4%</span> vs last month</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Savings Rate</div>
              <div style={styles.cardValue}>42.2%</div>
              <div style={styles.cardDelta}><span style={styles.badgeUp}>+1.3%</span> vs last month</div>
            </div>
          </div>

          {/* AI Insight */}
          <div style={styles.aiCard}>
            <div style={{ flex: 1 }}>
              <span style={styles.aiBadge}>AI Insight</span>
              <p style={styles.aiText}>
                Your <strong style={{ color: "#e8d5a3", fontStyle: "normal", fontWeight: "400" }}>dining expenses rose 28%</strong> this
                month — ₹3,200 above your usual average. Trimming weekend orders could recover that in under
                3 weeks and push your savings rate above <strong style={{ color: "#e8d5a3", fontStyle: "normal", fontWeight: "400" }}>46%</strong>.
              </p>
            </div>
            <button style={styles.aiBtn}>Ask AI Advisor →</button>
          </div>

          {/* Chart + Budget */}
          <div style={styles.twoCol}>

            {/* Bar Chart */}
            <div style={styles.panel}>
              <div style={styles.panelHead}>
                <span style={styles.panelTitle}>Income vs Expenses</span>
                <div style={styles.legend}>
                  <div style={styles.legendItem}>
                    <div style={{ ...styles.legendDot, backgroundColor: "#1a1a2e" }} /> Income
                  </div>
                  <div style={styles.legendItem}>
                    <div style={{ ...styles.legendDot, backgroundColor: "#c9b99a" }} /> Expenses
                  </div>
                </div>
              </div>
              <div style={styles.chartArea}>
                {monthData.map((d) => (
                  <div key={d.month} style={styles.barGroup}>
                    <div style={{ ...styles.barIncome, height: `${d.income}px` }} />
                    <div style={{ ...styles.barExpense, height: `${d.expense}px` }} />
                  </div>
                ))}
              </div>
              <div style={styles.barLabels}>
                {monthData.map((d) => (
                  <span key={d.month} style={styles.barLabel}>{d.month}</span>
                ))}
              </div>
            </div>

            {/* Budget Status */}
            <div style={styles.panel}>
              <div style={styles.panelHead}>
                <span style={styles.panelTitle}>Budget Status</span>
                <span style={styles.panelSub}>April 2026</span>
              </div>
              <div style={styles.budgetList}>
                {budgets.map((b) => (
                  <div key={b.name}>
                    <div style={styles.budgetRow}>
                      <span style={styles.budgetName}>{b.name}</span>
                      <span style={styles.budgetVals}>₹{b.spent.toLocaleString()} / ₹{b.limit.toLocaleString()}</span>
                    </div>
                    <div style={styles.progressBg}>
                      <div style={{ height: "4px", borderRadius: "2px", width: `${Math.min(b.pct, 100)}%`, backgroundColor: b.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div style={styles.panel}>
            <div style={styles.panelHead}>
              <span style={styles.panelTitle}>Recent Transactions</span>
              <span style={{ ...styles.panelSub, cursor: "pointer" }}>View all →</span>
            </div>
            {transactions.map((tx, i) => (
              <div key={i} style={{ ...styles.txItem, ...(i === transactions.length - 1 ? { borderBottom: "none" } : {}) }}>
                <div style={styles.txIcon}>{tx.icon}</div>
                <div style={styles.txInfo}>
                  <div style={styles.txName}>{tx.name}</div>
                  <div style={styles.txDate}>{tx.date}</div>
                </div>
                <div style={tx.pos ? styles.txAmountPos : styles.txAmountNeg}>{tx.amount}</div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;