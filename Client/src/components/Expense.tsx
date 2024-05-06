import { useState } from "react";
import AddExpenceModal from "./AddExpenceModal";
import { Button } from "@mui/material";
import useExpense from "../hooks/useExpense";

export default function Expense() {
  const [expenses] = useExpense();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <span>expenses: {expenses.length}</span>

      <AddExpenceModal open={open} handleClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)} variant="outlined" size="small">
        add expense
      </Button>
    </div>
  );
}
