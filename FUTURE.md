# 🧭 Future Roadmap & Planned Enhancements

This document outlines planned improvements and features for the **Personal Finance Manager & Expense Tracker** app.  
Some have partial backend scaffolding; others are ideas for next iterations.

---

## ✨ Plaid Integration (planned)
- Connect real user bank accounts (via Plaid sandbox & production)
- Automatically fetch and store real transactions
- Replace manual transaction entry (or complement it)
- Planned workflow:
  - User clicks "Connect Bank"
  - App retrieves link_token from backend
  - Opens Plaid Link modal
  - Exchanges public_token → access_token
  - Stores securely in DB under user ID
- Challenges & notes:
  - Plaid requires careful environment & secret management
  - Requires UI feedback (spinner, status, error handling)
  - Deferred to keep MVP stable and focus on manual entry first

---

## 📊 Data Visualization Enhancements
- Line chart: show spending over time (weekly/monthly)
- Stacked bar chart: category breakdown across months
- Custom Chart.js themes & tooltips

---

## 📝 Transaction Import & Export
- Already support CSV export (json2csv)
- Planned: CSV **import** for existing financial data
- Potential: OFX / QIF formats for wider compatibility

---

## 🛡 Security & UX
- Email verification after registration
- Password reset via email
- Improve mobile UI for small screens
- Progressive Web App (PWA) support

---

## 🔔 Notifications & Automation
- Monthly email summary (income, expenses, balance)
- Push notifications (e.g., "You've spent £200 this week")
- Budget thresholds: alert when close to monthly limit

---

## ☁️ Deployment & DevOps
- Move MongoDB to managed cluster (Atlas)
- Enable multi-stage Docker builds for smaller images
- Add tests & CI for pull requests

---

## ✅ Why we deferred Plaid now
- Integration complexity vs. project timeline
- Plaid SDK requires real keys & secure storage
- Decided to keep scaffolding in code, document plan, and revisit after core manual features are stable

---

_This list is a living document.  
Contributions & suggestions welcome!_
