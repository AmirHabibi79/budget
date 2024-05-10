import useUpcomingExpenses from "../hooks/useUpcomingExpenses";
import UpcomingExpenseItem from "./UpcomingExpenseItem";

export default function UpcomingExpensesList() {
  const up = useUpcomingExpenses();
  return (
    <div className="flex flex-col gap-3 overflow-auto h-[calc(100vh-calc(calc(70px+12px)*5))] pb-1">
      {up.length === 0 && (
        <span className="self-center">There is no expenses</span>
      )}
      {up.map((e) => (
        <UpcomingExpenseItem {...e} key={e.Id} />
      ))}
    </div>
  );
}
