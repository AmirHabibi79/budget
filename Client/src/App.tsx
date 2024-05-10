import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Root from "./pages/Root";
import Spending from "./pages/Spending";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-2 h-[100dvh] w-full">
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/spending" element={<Spending />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
