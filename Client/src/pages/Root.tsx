import { expenseType } from "../types/expense";
import Navbar from "../components/Navbar";
import ExpenceItem from "../components/ExpenceItem";
import useExpense from "../hooks/useExpense";
import Expense from "../components/Expense";
import Budget from "../components/Budget";
function Root() {
  const [expenses] = useExpense([
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
        <h1>Expenses</h1>

        <div className="flex flex-col gap-2">
          {expenses.length === 0 && (
            <span className="self-center">There is no expenses</span>
          )}
          {expenses.map((e) => (
            <ExpenceItem {...e} key={e.Id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Root;
