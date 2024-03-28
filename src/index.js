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
import MapPage from "./pages/map-page";
import RegistrationPage from "./pages/registration-page";
import AnalysPage from "./pages/analys-page"


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
  {
    path: "/map",
    element: <MapPage/>,
  },
  {
    path: "/analytics",
    element: <AnalysPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);