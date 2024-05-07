import { Button } from "@mui/material";
import { useState } from "react";
import EditBudgetModal from "./EditBudgetModal";
import useBudget from "../hooks/useBudget";
import useNetWorth from "../hooks/useNetWorth";

export default function Budget() {
  const [budget] = useBudget();
  const [open, setOpen] = useState(false);
  //   const netWorth =
  //     budget -
  //     expenses.map((e) => e.Price).reduce((next, current) => next + current, 0);
  const netWorth = useNetWorth();
  return (
    <div className="flex flex-col gap-2">
      <span>budget: {budget}</span>
      <span>net worth: {netWorth}</span>
      <Button onClick={() => setOpen(true)} variant="outlined" size="small">
        edit budget
      </Button>
      <EditBudgetModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
}
