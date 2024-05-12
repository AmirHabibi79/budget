import { expenseWithPercentage } from "../types/expense";
import AllExpensesItem from "./AllExpensesItem";
type props = {
  Colors: string[];
  Expenses: expenseWithPercentage[];
};
export default function AllExpensesList({ Colors, Expenses }: props) {
  return (
    <div>
      {Expenses.map((p, i) => (
        <AllExpensesItem {...p} Color={Colors[i]} key={i} />
      ))}
    </div>
  );
}
