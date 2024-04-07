import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/login";
import Onboarding from "./pages/onboarding";
import Bids from "./pages/bids";
import History from "./pages/history"
import Charge from "./pages/charge";
import User from "./pages/user"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "onboarding",
    element: <Onboarding />,
  },
  {
    path: "bids",
    element: <Bids />,
  },
  {
    path: "history",
    element: <History />,
  },
  {
    path: "charge",
    element: <Charge />,
  },
  {
    path: "user",
    element: <User />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <RouterProvider router={router} />
  </div>
);

reportWebVitals();
