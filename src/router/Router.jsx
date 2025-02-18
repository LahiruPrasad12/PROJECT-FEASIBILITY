import { createBrowserRouter } from "react-router-dom";
import { AuthGuard, ProtectedRoute } from "../guards/Authguard";


import Login from "../pages/Login";
import Register from "../pages/Register";
import Landing from "../pages/LandingPage";
import Quizz from "../pages/Quizz";


const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <Landing />
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
