import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TelegramInfoProvider } from "./context/TelegramContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TelegramInfoProvider>
        <App />
      </TelegramInfoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
