import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";
import Root from "./pages/root";
import ErrorPage from "./pages/error-page";
import LoginPage from "./pages/login-page";
import UserPage from "./pages/user-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/profile",
    element: <UserPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);