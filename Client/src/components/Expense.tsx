import { useState } from "react";
import AddExpenceModal from "./AddExpenceModal";
import { Button } from "@mui/material";
import useExpense from "../hooks/useExpense";
import useExpensesPercentage from "../hooks/useExpensesPercentage";

export default function Expense() {
  const [expenses] = useExpense();
  const [open, setOpen] = useState(false);
  const percent = useExpensesPercentage();
  return (
    <div className="w-full flex flex-col justify-between p-2 shadow-[2px_4px_20px_-4px_rgba(0,0,0,0.1)] rounded-md">
      <span className="font-thin capitalize">
        expenses: <span className="font-bold">{expenses.length}</span>
      </span>
      {percent.length > 0 && (
        <span className="font-thin capitalize pb-2">
          largest expense is :{" "}
          <span className="font-bold">
            {percent[0].type} {percent[0].percent + "%"}
          </span>
        </span>
      )}

      <AddExpenceModal open={open} handleClose={() => setOpen(false)} />
      <Button
        sx={{ color: "#A91D3A", borderColor: "#A91D3A" }}
        onClick={() => setOpen(true)}
        variant="outlined"
        size="small"
      >
        add expense
      </Button>
    </div>
  );
}
