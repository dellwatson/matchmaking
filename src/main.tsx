import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "uno.css";
import "@unocss/reset/tailwind.css";
// main.ts
// import 'virtual:uno.css'
import "./i18n.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Web3HubProvider from "./_core/providers/hub.tsx";
import { insertCoin } from "playroomkit";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Web3HubProvider>
      <ToastContainer />
      <App />
    </Web3HubProvider>
  </React.StrictMode>
);
