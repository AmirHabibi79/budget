import { expenseType } from "../types/expense";
import Navbar from "../components/Navbar";
import useExpense from "../hooks/useExpense";
import Expense from "../components/Expense";
import Budget from "../components/Budget";
import UpcomingExpensesList from "../components/UpcomingExpensesList";
function Root() {
  useExpense([
    {
      Id: 1,
      Name: "food for diner",
      Type: expenseType.Eating,
      Date: new Date("2024/7/7"),
      Price: 100000,
    },
    {
      Id: 2,
      Name: "food for lunch",
      Type: expenseType.Eating,
      Date: new Date("2024/7/7"),
      Price: 100000,
    },
    {
      Id: 1,
      Name: "food for diner",
      Type: expenseType.Eating,
      Date: new Date("2024/7/7"),
      Price: 100000,
    },
    {
      Id: 2,
      Name: "food for lunch",
      Type: expenseType.Eating,
      Date: new Date("2024/7/7"),
      Price: 100000,
    },
    {
      Id: 1,
      Name: "food for diner",
      Type: expenseType.Eating,
      Date: new Date("2024/7/7"),
      Price: 100000,
    },
    {
      Id: 2,
      Name: "food for lunch",
      Type: expenseType.Eating,
      Date: new Date("2024/7/7"),
      Price: 100000,
    },
    {
      Id: 1,
      Name: "food for diner",
      Type: expenseType.Clothing,
      Date: new Date("2024/7/7"),
      Price: 100000,
    },
    {
      Id: 2,
      Name: "food for lunch",
      Type: expenseType.Clothing,
      Date: new Date("2024/7/7"),
      Price: 100000,
    },
  ]);
  return (
    <div className="relative h-[100dvh] w-full  flex flex-col gap-2 ">
      <Navbar />

      <div className="p-2">
        <h1 className="font-bold py-2 ">Summary</h1>
        <div className=" flex  gap-2   ">
          <Expense />
          <Budget />
        </div>

        <h1 className="py-2 font-bold">Upcoming Expenses</h1>

        <UpcomingExpensesList />
      </div>
    </div>
  );
}

export default Root;
