import useUpcomingExpenses from "../hooks/useUpcomingExpenses";
import UpcomingExpenseItem from "./UpcomingExpenseItem";

export default function UpcomingExpensesList() {
  const up = useUpcomingExpenses();
  return (
    <div className="flex flex-col gap-2 overflow-auto h-[calc(100dvh-calc(175px+41px+56px+10px))] pb-1">
      {up.length === 0 && (
        <span className="self-center">There is no expenses</span>
      )}
      {up.map((e) => (
        <UpcomingExpenseItem {...e} key={e.Id} />
      ))}
    </div>
  );
}
