import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { initGTM } from "./utils/gtm.js";

// Avoid a flash of the wrong theme on first paint.
const storedTheme = localStorage.getItem("theme");
const prefersDarkByDefault = storedTheme ? storedTheme === "dark" : true;
document.documentElement.dataset.theme = prefersDarkByDefault
  ? "dark"
  : "light";

// Initialize GTM/GA if a VITE_GTM_ID is present in the environment
initGTM();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
