import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import MyProfile from "../pages/Profile/MyProfile";
import AddTransaction from "../pages/Transactions/AddTransaction";
import MyTransactions from "../pages/Transactions/MyTransactions";
import TransactionDetails from "../pages/Transactions/TransactionDetails";
import UpdateTransaction from "../pages/Transactions/UpdateTransaction";
import Reports from "../pages/Reports/Reports";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../layout/AuthLayout";
import { createBrowserRouter } from "react-router";

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
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      // Private pages
      {
        path: "/add-transaction",
        element: (
          <PrivateRoute>
            <AddTransaction />
          </PrivateRoute>
        ),
      },
     

      {
        path: "/my-transactions",
        element: (
          <PrivateRoute>
            <MyTransactions />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-transactions/:id",
        element: (
          <PrivateRoute>
            <TransactionDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateTransaction />
          </PrivateRoute>
        ),
      },
      {
        path: "/reports",
        element: (
          <PrivateRoute>
            <Reports />
          </PrivateRoute>
        ),
      },
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
