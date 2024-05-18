import { expenseWithPercentage } from "../types/expense";
import AllExpensesItem from "./AllExpensesItem";
type props = {
  Colors: string[];
  Expenses: expenseWithPercentage[];
};
export default function AllExpensesList({ Colors, Expenses }: props) {
  return (
    <div className="h-[calc(100dvh-calc(58px+370px+41px+12px+12px))] flex flex-col gap-1 overflow-auto px-2">
      {Expenses.map((p, i) => (
        <AllExpensesItem {...p} Color={Colors[i]} key={i} />
      ))}
    </div>
  );
}
