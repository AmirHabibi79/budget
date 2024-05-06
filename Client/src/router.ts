import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
]);
export default router;
