# 💸 FinEase – Personal Finance Management Web App

![FinEase Logo](https://i.ibb.co.com/0yDRJgjJ/finans-logo.png)

**FinEase** is a modern, responsive web application designed to help users track, manage, and analyze their personal finances. Users can add income and expense transactions, view reports by type, category, and month, and monitor their overall financial health.

It allows users to record daily transactions, set financial goals, and analyze their budget with beautiful charts and reports.

---

## 🚀 Live Demo
🔗 [FinEase Live Website](https://finease-db.web.app/)  
🔗 [Server Repository](https://github.com/mursalin35/FinEase-Server-Side.git)

---

## 🧠 Project Overview

| Feature | Description |
|----------|--------------|
| 🔐 **Authentication** | Secure email/password & Google login using Firebase, includes forgot password functionality |
| 💰 **Transaction Management** | Add, update, view & delete user-specific income/expense records with secure CRUD operations |
| 📊 **Reports Dashboard** | Type-based, category-based, and monthly summaries with interactive charts |
| 👤 **User Profile** | View and manage personal account details, dark/light mode preference |
| 📁 **Data Storage** | MongoDB database with secure access via JWT |
| 🌙 **UI Theme** | Elegant Fintech-style gradient theme with Tailwind CSS, DaisyUI, and smooth animations |
| 🧾 **Responsive Design** | Works seamlessly on mobile, tablet, and desktop |

---

## 🧩 Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🧭 React Router DOM
- 🪄 Tailwind CSS & DaisyUI
- 📦 TanStack Query (React Query)
- 🎨 Recharts (Data Visualization)
- 🔥 Firebase Authentication
- 🍞 React Hot Toast
- 🎭 Framer Motion
- ⚙️ Axios (with JWT-secure instance)

### Backend
- 🟢 Node.js + Express.js
- 🍃 MongoDB (Mongoose)
- 🔐 Firebase Admin for token verification
- 🌐 Deployed on **Vercel**

---

## 📁 Folder Structure

```
FinEase-client-side/
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/           # Auth provider (Firebase + custom logic)
│   ├── hooks/             # Custom hooks (e.g. useAuth, useAxiosSecure)
│   ├── layout/            # Root layout (Navbar, Footer, etc.)
│   ├── pages/             # Page-level components
│   │   ├── Home/          # Banner, features, hero section
│   │   ├── Transactions/  # MyTransactions, UpdateTransaction
│   │   ├── Reports/       # Financial summary charts
│   │   ├── Profile/       # MyProfile page
│   │   └── Auth/          # Login, Register, Forget Password
│   ├── routes/            # React Router setup
│   ├── assets/            # Images, logos, icons
│   └── index.css
│
├── .env                   # Environment variables (Firebase, API keys)
├── .gitignore
├── package.json
└── vite.config.js
```

---

## 🎨 Theme Palette (FinEase Design System)

| Purpose | Color |
|----------|--------|
| Primary Gradient | `from-[#632EE3] to-[#4CB5AE]` |
| Accent Gradient | `from-[#E14D2A] to-[#EEA83E]` |
| Background | `#F9FAFF` – `#F4F6FB` |
| Text (Primary) | `#1F1F2E` |
| Text (Secondary) | `#6B6B82` |
| Border | `#E5E7EB` |

> ✨ Theme inspired by modern fintech dashboards — clean, minimal, and trustworthy.

---

## 🔧 Environment Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/mursalin35/FinEase-Client-Side.git
cd FinEase-Client-Side
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Create `.env` File
```env
VITE_API_URL=https://your-finease-server.vercel.app
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

### 4️⃣ Start Development Server
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## 📈 Core Features Preview

### 🏠 Home Page
> Motivational banner, smooth gradient hero section, and feature overview.

### 🔐 Login & Register
> Email/password + Google login with toast notifications & validation, includes forgot password.

### 💳 My Transactions
> View, update, or delete transactions — modern gradient cards and responsive grid layout.

### 📊 Reports Dashboard
> Type-based, category-based, and monthly summary charts using **Recharts**.

### 👤 Profile
> Manage user info, email, preferences, and theme (dark/light) settings.

### 🌐 Overview Dashboard
> Displays total income, expenses, and balance.

---

## 🧱 Backend API Endpoints

| Method | Endpoint | Description | Auth Required |
|---------|-----------|-------------|---------------|
| POST   | `/auth/register` | Register new user | ✅ |
| POST   | `/auth/login` | User login | ✅ |
| GET    | `/my-transactions?email=user@example.com` | Fetch user transactions | ✅ |
| POST   | `/transactions` | Add new transaction | ✅ |
| PATCH  | `/transactions/:id` | Update transaction | ✅ |
| PUT    | `/transactions/:id` | Update transaction details | ✅ |
| DELETE | `/transactions/:id` | Delete transaction | ✅ |
| GET    | `/reports/type?email=&month=` | Report by type | ✅ |
| GET    | `/reports/category?email=&month=` | Report by category | ✅ |
| GET    | `/reports/monthly?email=` | Monthly summary report | ✅ |
| GET    | `/overview?email=` | Total income, expense, balance | ✅ |
| GET    | `/transactions/category-total?email=&category=` | Total by category | ✅ |
| GET    | `/transactions/:id` | Get transaction details | ✅ |

**Note:** All endpoints with ✅ require Firebase token in `Authorization: Bearer <token>` header.

---

## 🛡️ Security

- JWT-secured API requests via custom `useAxiosSecure()` hook  
- Firebase authentication token validation  
- Password-protected routes via React Router  

---


## 👨‍💻 Author

**Developed by:** [M.S Mursalin](https://www.facebook.com/mursalin07)  
📧 Email: example@example.com  
📍 Bangladesh  
🌐 Portfolio: [your-portfolio-link.com](https://www.linkedin.com/in/mursalin07/)

---


> 💬 *"Take control of your money, and your future will thank you."*  
> — **FinEase Team**

