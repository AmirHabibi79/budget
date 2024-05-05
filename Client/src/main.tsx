import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "moment/locale/en-gb";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-gb">
      <App />
    </LocalizationProvider>
  </React.StrictMode>
);
