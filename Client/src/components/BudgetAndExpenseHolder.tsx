import { useState } from "react";
import { expense, expenseType } from "../types/expense";
import { Button } from "@mui/material";
import AddExpenceModal from "./AddExpenceModal";

type props = {
  expenses: expense[];
  setExpenses: React.Dispatch<React.SetStateAction<expense[]>>;
};

export default function BudgetAndExpenseHolder({
  expenses,
  setExpenses,
}: props) {
  const [open, setOpen] = useState(false);
  const addToExpense = (
    date: Date,
    name: string,
    price: number,
    type: expenseType
  ) => {
    const newExpense = {
      Id: expenses.length + 1,
      Name: name,
      Price: price,
      Type: type,
      Date: date,
    } as expense;
    setExpenses((pre) => [...pre, newExpense]);
    setOpen(false);
  };
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span>expense</span>
          <Button onClick={() => setOpen(true)} variant="outlined" size="small">
            add expense
          </Button>
          <AddExpenceModal
            open={open}
            handleClose={() => setOpen(false)}
            addExpense={addToExpense}
          />
        </div>
        <span>total: {expenses.length}</span>
      </div>
      <div className="flex flex-col">
        <span>budget</span>
        <span>net worth: 0</span>
      </div>
    </div>
  );
}
