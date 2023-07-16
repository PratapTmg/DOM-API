import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./Components/context";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Register from "./Components/Form1";
// import LogIn from "./Components/Form";
// import Navigation from "./Bootstarp/NavBar";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LogIn />,
//   },
//   {
//     path: "/signIn",
//     element: <Register />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
    {/* <Navigation />
    <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
