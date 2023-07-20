import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary"; // Importa el ErrorBoundary
import reportWebVitals from "./reportWebVitals";

// this creates a root for rendering the app
createRoot(document.getElementById("root")).render(
  // strict mode catch potential problems
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename="/login">
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
