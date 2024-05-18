import Expense from "../components/Expense";
import Budget from "../components/Budget";
import UpcomingExpensesList from "../components/UpcomingExpensesList";
function Root() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold py-2 ">Summary</h1>
        <div className=" flex  gap-2   ">
          <Expense />
          <Budget />
        </div>
      </div>

      <h1 className="py-4 font-bold">Upcoming Expenses</h1>

      <UpcomingExpensesList />
    </div>
  );
}

export default Root;
