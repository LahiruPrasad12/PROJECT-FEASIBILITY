import { createBrowserRouter } from "react-router-dom";
import { AuthGuard, ProtectedRoute } from "../guards/Authguard";


import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Quizz from "../pages/Quizz";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Account from "../pages/Account";
import History from "../pages/History";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/projects",
    element: (
      <ProtectedRoute>
        <Projects />
      </ProtectedRoute>
    ),
  },
  {
    path: "/account",
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
  },
  {
    path: "/history",
    element: (
      <ProtectedRoute>
        <History />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <Login />
      </AuthGuard>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthGuard>
        <Register />
      </AuthGuard>
    ),
  },
  {
    path: "/quiz",
    element: (
      <ProtectedRoute>
        <Quizz />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <ProtectedRoute>
  //       <Dashboard />
  //     </ProtectedRoute>
  //   ),
  // },
]);

export default router;
