import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Root from "./pages/Root";
import Spending from "./pages/Spending";
import useExpense from "./hooks/useExpense";
import { expenseType } from "./types/expense";
import dayjs from "dayjs";

export default function App() {
  useExpense([
    {
      Id: 1,
      Name: "food for diner",
      Type: expenseType.Eating,
      Date: dayjs(new Date("2024/6/22")),
      Price: 180000,
    },
    {
      Id: 2,
      Name: "food for lunch",
      Type: expenseType.Eating,
      Date: dayjs(new Date("2024/6/22")),

      Price: 150000,
    },
    {
      Id: 3,
      Name: "shirt",
      Type: expenseType.Clothing,
      Date: dayjs(new Date("2024/6/22")),

      Price: 320000,
    },
    {
      Id: 4,
      Name: "bedehi be mammad",
      Type: expenseType.Debt,
      Date: dayjs(new Date("2024/6/22")),

      Price: 1000,
    },
    {
      Id: 5,
      Name: "bimeh",
      Type: expenseType.Insurance,
      Date: dayjs(new Date("2024/7/22")),

      Price: 120000,
    },
  ]);
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
