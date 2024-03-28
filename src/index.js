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
import CompaniesPage from "./pages/companies-page";
import CompanyPage from "./pages/company-page";
import './index.scss'
import AccountsPage from "./pages/accounts-page"


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
    element: <MapPage />,
  },
  {
    path: "/companies",
    element: <CompaniesPage />
  },
  {
    path: "/accounts",
    element: <AccountsPage />
  },
  {
    path: "/company/:companyId",
    element: <CompanyPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);