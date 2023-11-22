import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "uno.css";
import "@unocss/reset/tailwind.css";
// main.ts
// import 'virtual:uno.css'
import "./i18n.ts";
import { WagmiConfig } from "wagmi";
import { config } from "./web3";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <div />
    </WagmiConfig>
  </React.StrictMode>
);
