import { createBrowserRouter } from "react-router-dom";
import { AuthGuard, ProtectedRoute } from "../guards/Authguard";


import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Quizz from "../pages/Quizz";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Account from "../pages/Account";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <AuthGuard>
        <Home />
      </AuthGuard>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    ),
  },
  {
    path: "/projects",
    element: (
      <AuthGuard>
        <Projects />
      </AuthGuard>
    ),
  },
  {
    path: "/account",
    element: (
      <AuthGuard>
        <Account />
      </AuthGuard>
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
    path: "/quizz",
    element: (
      <AuthGuard>
        <Quizz />
      </AuthGuard>
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
