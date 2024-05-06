import React from "react";
import ReactDOM from "react-dom/client";
import appRouter from "./router";
import { RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { RecoilRoot } from "recoil";
import "moment/locale/en-gb";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-gb">
      <RecoilRoot>
        <RouterProvider router={appRouter} />
      </RecoilRoot>
    </LocalizationProvider>
  </React.StrictMode>
);
