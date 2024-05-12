import AllExpensesList from "../components/AllExpensesList";
import useExpensesWithPercentage from "../hooks/useExpensesWithPercentage";
import useGenerateRandomColor from "../hooks/useGenerateRandomColor";
import { useState, useEffect } from "react";
import PieChart from "../components/PieChart";
import { CalendarIcon, DatePicker } from "@mui/x-date-pickers";
import useExpenseDuration from "../hooks/useExpenseDuration";
import { Dayjs } from "dayjs";

export default function Spending() {
  const [date, setDate] = useExpenseDuration();
  const [open, setOpen] = useState(false);

  const { expenses, totalSpending } = useExpensesWithPercentage();
  const [, generateColor] = useGenerateRandomColor();
  const [colors, setColors] = useState<string[]>([]);
  useEffect(() => {
    const co = new Array(expenses.length);
    for (let i = 0; i < co.length; i++) {
      co[i] = generateColor();
    }

    setColors(co);
  }, [expenses]);
  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <CalendarIcon />
      </button>
      <span>
        {date.startOf("M").format("YYYY-MMMM-DD")} to{" "}
        {date.endOf("M").format("YYYY-MMMM-DD")}
      </span>
      <DatePicker
        open={open}
        className="!hidden"
        onClose={() => setOpen(false)}
        label="Date"
        format="YYYY / MM"
        views={["year", "month"]}
        value={date}
        onAccept={(newValue) => {
          setDate(newValue as Dayjs);
        }}
      />
      {expenses.length === 0 ? (
        <>
          <span className="capitalize w-full block text-center">
            there is no expenses
          </span>
        </>
      ) : (
        <>
          <PieChart
            Data={expenses}
            LabelOn="Name"
            DataOn="Percent"
            Colors={colors}
            Label="percentage of spending"
          />
          <span className="w-full block text-center">
            total spending :{" " + totalSpending}
          </span>
          <AllExpensesList Colors={colors} Expenses={expenses} />
        </>
      )}
    </div>
  );
}
