import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f6fa",
  },

  /* Sidebar */
  sidebar: {
    width: "220px",
    backgroundColor: "#1a1a2e",
    color: "#fff",
    padding: "20px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  navItem: {
    display: "block",
    margin: "15px 0",
    color: "#ccc",
    textDecoration: "none",
  },

  /* Main */
  main: {
    flex: 1,
    padding: "20px",
  },

  header: {
    fontSize: "24px",
    marginBottom: "20px",
  },

  /* Cards */
  cards: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  /* Transactions */
  table: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
  },

  btn: {
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginBottom: "20px",
  },
};

const Dashboard = () => {
  // Temporary static data
  const income = 25000;
  const expenses = 12000;
  const balance = income - expenses;

  const transactions = [
    { id: 1, type: "Expense", category: "Food", amount: 200 },
    { id: 2, type: "Expense", category: "Travel", amount: 500 },
    { id: 3, type: "Income", category: "Salary", amount: 25000 },
  ];

  return (
    <div style={styles.container}>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>FinAI 💳</h2>

        <Link to="/dashboard" style={styles.navItem}>Dashboard</Link>
        <Link to="/add" style={styles.navItem}>Add Transaction</Link>
        <Link to="/ai" style={styles.navItem}>AI Advice</Link>
        <Link to="/" style={styles.navItem}>Logout</Link>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        <h1 style={styles.header}>Dashboard</h1>

        {/* Cards */}
        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Income</h3>
            <p>₹{income}</p>
          </div>

          <div style={styles.card}>
            <h3>Expenses</h3>
            <p>₹{expenses}</p>
          </div>

          <div style={styles.card}>
            <h3>Balance</h3>
            <p>₹{balance}</p>
          </div>
        </div>

        {/* Add Button */}
        <Link to="/add">
          <button style={styles.btn}>+ Add Transaction</button>
        </Link>

        {/* Transactions Table */}
        <div style={styles.table}>
          <h3>Recent Transactions</h3>

          <table width="100%">
            <thead>
              <tr>
                <th>Type</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.type}</td>
                  <td>{t.category}</td>
                  <td>₹{t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI Advice Section */}
        <div style={{ ...styles.card, marginTop: "20px" }}>
          <h3>AI Advice 🤖</h3>
          <p>
            You are spending a large portion on food. Try reducing it to improve savings.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;