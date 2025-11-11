# 💸 FinEase – Personal Finance Management Web App

**FinEase** is a modern fintech web application that helps users track income, expenses, and savings with visual insights.  
It allows users to record daily transactions, set financial goals, and analyze their budget with beautiful charts and reports.

---

## 🚀 Live Demo
🔗 [FinEase Live Website](https://your-finease.vercel.app)  
🔗 [Server Repository](https://github.com/your-username/finease-server)

---

## 🧠 Project Overview

| Feature | Description |
|----------|--------------|
| 🔐 **Authentication** | Secure email/password & Google login using Firebase |
| 💰 **Transaction Management** | Add, update, view & delete income/expense records |
| 📊 **Reports Dashboard** | Interactive charts for monthly summaries, categories, and income vs expense |
| 👤 **User Profile** | View and manage personal account details |
| 📁 **Data Storage** | MongoDB database with secure access via JWT |
| 🌙 **UI Theme** | Elegant Fintech-style gradient theme with Tailwind CSS |
| 🧾 **Responsive Design** | Mobile-friendly layout using modern CSS grid & flexbox |

---

## 🧩 Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🧭 React Router DOM
- 🪄 Tailwind CSS
- 📦 TanStack Query (React Query)
- 🎨 Recharts (Data Visualization)
- 🔥 Firebase Authentication
- 🍞 React Hot Toast
- ⚙️ Axios (with JWT-secure instance)

### Backend
- 🟢 Node.js + Express.js
- 🍃 MongoDB (Mongoose)
- 🔐 Firebase Admin for token verification
- 🌐 Deployed on **Vercel / Render**

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
git clone https://github.com/your-username/finease-client-side.git
cd finease-client-side
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
> Email/password + Google login with toast notifications & validation.

### 💳 My Transactions
> View, update, or delete transactions — modern gradient cards and responsive grid layout.

### 📊 Reports Dashboard
> Interactive **PieChart** and **BarChart** (Recharts) to visualize monthly summaries.

### 👤 Profile
> Manage user info, email, and preferences.

---

## 🧱 Backend API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| `POST` | `/auth/register` | Register new user |
| `POST` | `/auth/login` | User login |
| `GET` | `/my-transactions?email=user@example.com` | Fetch user transactions |
| `POST` | `/transactions` | Add new transaction |
| `PATCH` | `/transactions/:id` | Update transaction |
| `DELETE` | `/transactions/:id` | Delete transaction |
| `GET` | `/reports/monthly` | Get monthly summary report |

---

## 🛡️ Security

- JWT-secured API requests via custom `useAxiosSecure()` hook  
- Firebase authentication token validation  
- Password-protected routes via React Router  

---

## 📷 UI Preview

| Section | Screenshot |
|----------|-------------|
| Login | ![Login UI](https://i.ibb.co/8PfQFQf/login-ui.png) |
| Transactions | ![Transactions UI](https://i.ibb.co/FYXgk0z/transactions-ui.png) |
| Reports | ![Reports Dashboard](https://i.ibb.co/kKV4kR6/reports-ui.png) |

---

## 👨‍💻 Author

**Developed by:** [M.S. Mursalin](https://github.com/ms-mursalin)  
📧 Email: yourname@example.com  
📍 Bangladesh  
🌐 Portfolio: [your-portfolio-link.com](https://your-portfolio-link.com)

---

## 🏁 License
This project is licensed under the **MIT License** — feel free to use, modify, and distribute with proper attribution.

---

> 💬 *"Take control of your money, and your future will thank you."*  
> — **FinEase Team**
