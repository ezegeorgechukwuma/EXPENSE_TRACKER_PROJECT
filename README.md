# 💸 Personal Finance Manager & Expense Tracker

A full-stack web application to track income, expenses, and budgets — inspired by tools like Mint, Emma, and YNAB — built as a real-life portfolio project.

Users can add, edit, delete transactions, view category-based charts, export to CSV, and manage their personal finance easily, with secure authentication.

---

## 🚀 Features

✅ **User authentication** (JWT)  
✅ **Dashboard summary** of spending & income  
✅ **Add / Edit / Delete** transactions  
✅ **Filter & sort** transactions  
✅ **Category-based charts** (pie & bar, red for expenses, green for income)  
✅ **Export transactions to CSV**  
✅ Mobile-friendly & responsive design  
✅ Clean landing page & protected routes

---

## 📦 Tech Stack

| Frontend | Backend | Database | Auth | Charts | Export | Styling |
|--------|---------|---------|------|-------|--------|--------|
| React, React Router, Axios | Node.js, Express.js | MongoDB (Mongoose) | JWT | Chart.js | json2csv | Pure CSS modules + React Bootstrap |

---

## 🧠 What I learned

> “Sometimes fallback methods fail. Manual config is better.”  
> “Always test backend APIs before connecting frontend.”  
> “Global CSS resets can fix unexpected layout inheritance.”  
> “Switching tools mid-project (Tailwind → CSS) can save time if blocked.”

This project taught me real debugging, testing APIs, and aligning backend response shape with frontend logic.

---

## 📊 Screenshots

| Dashboard | Charts | Transaction List | Add Transaction | Login | Register | Landing Page |
| --------- | ----- | ---------------- | --------------- | ----- | -------- | ------------ |
| ![Dashboard](expense-tracker-frontend/public/screenshots/dashboard.png) | ![Charts](public/screenshots/dashboard_2.png) | ![Transactions](public/screenshots/Transactionlist_2.png) | ![Add Transaction](public/screenshots/Add_transactions.png) | ![Login](public/screenshots/Login.png) | ![Register](public/screenshots/Register.png) | ![Landing](public/screenshots/landing_page.png) |

Make sure your screenshots are placed under `public/screenshots/`.

---

## 🛠 Setup & Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
Install backend dependencies:

bash
Copy
Edit
cd expense_tracker_backend
npm install
Create .env file in expense_tracker_backend/ with:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
Start backend:

bash
Copy
Edit
npm run dev
Install frontend dependencies:

bash
Copy
Edit
cd ../expense-tracker-frontend
npm install
Start frontend:

bash
Copy
Edit
npm run dev
Visit:

Frontend: http://localhost:5173

Backend API: http://localhost:5000

✏️ Developer notes
This app includes:

Protected routes with AuthContext & JWT

Separate CSS modules for each page

Global CSS reset to avoid style conflicts

Custom Chart.js configuration for colors & tooltips

CSV export button using json2csv

📦 Folder structure (simplified)
bash
Copy
Edit
expense-tracker/
├── expense-tracker-frontend/
│   ├── public/screenshots/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── api/axios.js
│   ├── README.md
│   └── package.json
├── expense_tracker_backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
📃 License
This project is for portfolio & learning purposes.

🌱 Author
Built with 💚 by George Eze

🙏 Special thanks
Everyone who contributed, chat gpt, claude tips and debugging help

The open source community whose tools made this possible

