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
    <div className="w-full flex flex-col justify-between p-2 shadow-[2px_4px_20px_-4px_rgba(0,0,0,0.1)] rounded-md">
      <span className="font-thin capitalize">
        budget: <span className="font-bold">{budget}</span>
      </span>
      <span className="font-thin capitalize">
        net worth:{" "}
        <span
          className={`font-bold ${
            netWorth >= 0 ? "text-green-600" : "text-red-400"
          }`}
        >
          {netWorth}
        </span>
      </span>
      <Button
        sx={{ color: "#A91D3A", borderColor: "#A91D3A" }}
        onClick={() => setOpen(true)}
        variant="outlined"
        size="small"
      >
        edit budget
      </Button>
      <EditBudgetModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
}
