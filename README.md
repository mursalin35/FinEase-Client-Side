# FinEase - Personal Finance Management

![FinEase Logo](https://i.ibb.co/0yDRJgjJ/finans-logo.png)

## Project Overview
FinEase is a modern, responsive web application designed to help users track, manage, and analyze their personal finances. Users can add income and expense transactions, view reports by type, category, and month, and monitor their overall financial health.

The application features user authentication via Firebase, secure transaction management using MongoDB, and an elegant UI powered by React, Tailwind CSS, and DaisyUI.

---

## Features

- **User Authentication:** Email/password login and Google Sign-In.
- **Secure Transactions:** CRUD operations on user-specific transactions.
- **Reports:**
  - Type-based report (Income vs Expense)
  - Category-based report
  - Monthly summary
- **Overview Dashboard:** Shows total income, expenses, and balance.
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop.
- **Dark/Light Mode:** Follows system preferences and allows manual toggle.
- **Forgot Password:** Reset password via email.
- **Professional UI:** Smooth animations and glassmorphism effects.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth
- **Other Libraries:** react-hot-toast, react-icons

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <YOUR_REPO_URL>
cd your-project-folder
```

### 2. Install Dependencies
#### Frontend
```bash
cd client
npm install
```

#### Backend
```bash
cd server
npm install
```

### 3. Environment Variables
Create a `.env` file in the server folder with the following:
```
PORT=3000
USER_DB=<Your MongoDB Username>
PASS_DB=<Your MongoDB Password>
FIREBASE_PROJECT_ID=<Your Firebase Project ID>
FIREBASE_CLIENT_EMAIL=<Firebase Client Email>
FIREBASE_PRIVATE_KEY=<Firebase Private Key>
```

### 4. Run the Project
#### Backend
```bash
cd server
npm run dev
```
#### Frontend
```bash
cd client
npm start
```

Visit `http://localhost:3000` to access the frontend.

---

## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|---------|-------------|---------------|
| POST   | /transactions | Add a transaction | ✅ |
| GET    | /my-transactions?email= | Get all transactions of user | ✅ |
| GET    | /reports/type?email=&month= | Report by type | ✅ |
| GET    | /reports/category?email=&month= | Report by category | ✅ |
| GET    | /reports/monthly?email= | Monthly report | ✅ |
| GET    | /overview?email= | Total income, expense, balance | ✅ |
| GET    | /transactions/category-total?email=&category= | Total by category | ✅ |
| GET    | /transactions/:id | Get transaction details | ✅ |
| PUT    | /transactions/:id | Update transaction | ✅ |
| DELETE | /transactions/:id | Delete transaction | ✅ |

**Note:** All endpoints with ✅ require Firebase token in `Authorization: Bearer <token>` header.

---

## Dark/Light Mode
- Detects system preference automatically.
- Users can toggle manually via Navbar.
- State persists in `localStorage`.

---

## License
MIT License

---

## Contact
For any queries or support, reach out at [hello@finease.app](mailto:hello@finease.app)

---

**FinEase** - Personal Finance Made Simple.

