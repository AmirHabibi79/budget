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
      Date: new Date(),
      Price: 100000,
    },
    {
      Id: 2,
      Name: "food for lunch",
      Type: expenseType.Eating,
      Date: new Date(),
      Price: 100000,
    },
  ]);
  return (
    <div className="h-full w-full flex flex-col">
      <Navbar />
      <div className="p-2">
        <div className="flex justify-between ">
          <Expense />
          <Budget />
        </div>
        <h1>Upcoming Expenses</h1>

        <UpcomingExpensesList />
      </div>
    </div>
  );
}

export default Root;
