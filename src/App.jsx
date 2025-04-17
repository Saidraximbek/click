import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Overview from "./pages/overview/Overview";
import Budgets from "./pages/budgets/Budgets";
import Posts from "./pages/posts/Posts";
import RecurringBills from "./pages/recurringBills/RecurringBills";
import Tarnsactions from "./pages/transactions/Transactions";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useSelector } from "react-redux";
const App = () => {
  const { user } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "/budgets",
          element: <Budgets />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/recurringbills",
          element: <RecurringBills />,
        },
        {
          path: "/transactions",
          element: <Tarnsactions />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
