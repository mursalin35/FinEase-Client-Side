import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import MyProfile from "../pages/Profile/MyProfile";
import AddTransaction from "../pages/Dashboard/Transactions/AddTransaction";
import MyTransactions from "../pages/Dashboard/Transactions/MyTransactions";
import TransactionDetails from "../pages/Dashboard/Transactions/TransactionDetails";
import UpdateTransaction from "../pages/Dashboard/Transactions/UpdateTransaction";
import Reports from "../pages/Reports/Reports";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../layout/AuthLayout";
import { createBrowserRouter } from "react-router";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import UserGuide from "../pages/UserGuide/UserGuide";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../pages/Dashboard/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/user-guide",
        element: <UserGuide />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // DashboardLayout
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Overview /> },
      { path: "add-transaction", element: <AddTransaction /> },
      { path: "my-transactions", element: <MyTransactions /> },
      { path: "reports", element: <Reports /> },
      { path: "my-profile", element: <MyProfile /> },
      { path: "my-transactions/:id", element: <TransactionDetails /> },
      { path: "update/:id", element: <UpdateTransaction /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      // Auth pages (public)
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },

      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);
