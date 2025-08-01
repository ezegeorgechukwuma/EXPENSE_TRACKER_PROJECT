# 💸 Personal Finance Manager & Expense Tracker

A full-stack web application to track income, expenses, and budgets — inspired by tools like  Emma, and YNAB — built as a real-life portfolio project.

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

✅ Mobile-friendly & responsive design

✅ Dockerized backend & frontend

✅ Auto-deployment on Render when changes are pushed to main branch on GitHub

---
🐳 Deployment & CI/CD
The app is fully dockerized: backend & frontend containers.

Hosted on Render. please find the link here : https://expense-tracker-dm63.onrender.com

CI/CD: pushing to the main branch in GitHub(if passed) automatically triggers a new Docker build & deploy on Render.

Zero-downtime deployment to keep the app always live.

---
🧭 Future Improvements
✨ Plaid Integration (planned):

Connect real bank accounts

Auto-sync live transactions

Reduce manual entry

Other plans:

Auto-detect categories

Monthly/weekly summaries

Push notifications

CSV imports

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
> Docker & CI/CD pipelines for real-world deployment
> Debugging API shape vs frontend expectations

This project taught me real debugging, testing APIs, and aligning backend response shape with frontend logic.

---

## 📊 Screenshots

| Dashboard | Charts | Transaction List | Add Transaction | Login | Register | Landing Page |
| --------- | ----- | ---------------- | --------------- | ----- | -------- | ------------ |
| ![Dashboard](expense-tracker-frontend/public/screenshots/Dashboard.png) | ![Charts](expense-tracker-frontend/public/screenshots/Dashboard_2.png) | ![Transactions](expense-tracker-frontend/public/screenshots/Transactionlist_2.png) | ![Add Transaction](expense-tracker-frontend/public/screenshots/Add_transactions.png) | ![Login](expense-tracker-frontend/public/screenshots/Login.png) | ![Register](expense-tracker-frontend/public/screenshots/Register.png) | ![Landing](expense-tracker-frontend/public/screenshots/Landing_page.png) |
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

<<<<<<< HEAD
# Frontend (runs on http://localhost:3000)
cd ../expense-tracker-frontend
npm start
📊 Key Features & How They Work
Dashboard
Displays a friendly welcome message, a pie chart summarizing income vs expense, and a dynamic category bar chart.

Transaction List
Shows recent transactions, allows pagination, sorting by amount/date, and edit/delete per transaction.

Add Transaction
Add income or expense, specifying category, description, amount, and date..

Data Visualization

Pie chart: total income vs total expense.

Bar chart: category breakdown, automatically colors green (income) or red (expense).

Export
Export all transactions to CSV for backup or analysis.

Responsive & Clean UI
Designed to look great on desktop and mobile.

🧑‍💻 For Developers
Modular React components: Dashboard, TransactionList, CategoryChart

Backend REST API: CRUD endpoints for transactions & auth

JWT-based auth: secure protected routes

Global CSS styles to avoid conflicts and support responsiveness

Clear separation of frontend (expense-tracker-frontend) and backend (expense-tracker-backend)

Backend + frontend fully dockerized

Chart.js custom configs

json2csv for export

📦 Folder Structure
plaintext
=======
bash
>>>>>>> b34cff4f3f8cddc2607c27fccd561a35666f9255
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
│   ├── Dockerfile
│   └── package.json
├── expense_tracker_backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
|   ├── Dockerfile
│   ├── .env
│   └── package.json
└── README.md
└── Future.md

📃 License
This project is for portfolio & learning purposes.

🌱 Author
Built with 💚 by George Eze

🙏 Special thanks
Everyone who contributed, chat gpt, claude, stackoverflow tips and debugging helped

The open source community whose tools made this possible Mongodb ATlas, Docker, Render

