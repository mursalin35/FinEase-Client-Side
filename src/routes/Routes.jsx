import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import MyProfile from "../pages/Profile/MyProfile";
import AddTransaction from "../pages/Transactions/AddTransaction";
import MyTransactions from "../pages/Transactions/MyTransactions";
import TransactionDetails from "../pages/Transactions/TransactionDetails";
import UpdateTransaction from "../pages/Transactions/UpdateTransaction";
import Reports from "../pages/Reports/Reports";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Auth pages (public)
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/myProfile",
        element: <MyProfile />,
      },
      // Private pages
      {
        path: "/add-transaction",
        element: <AddTransaction />,
      },
      {
        path: "/my-transactions",
        element: <MyTransactions />,
      },
      {
        path: "/transaction/:id",
        element: <TransactionDetails />,
      },
      {
        path: "/update/:id",
        element: <UpdateTransaction />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
     

      // 404 Not Found
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
