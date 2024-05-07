import useUpcomingExpenses from "../hooks/useUpcomingExpenses";
import ExpenceItem from "./ExpenceItem";

export default function UpcomingExpensesList() {
  const up = useUpcomingExpenses();
  console.log(up);
  return (
    <div className="flex flex-col gap-2">
      {up.length === 0 && (
        <span className="self-center">There is no expenses</span>
      )}
      {up.map((e) => (
        <ExpenceItem {...e} key={e.Id} />
      ))}
    </div>
  );
}
