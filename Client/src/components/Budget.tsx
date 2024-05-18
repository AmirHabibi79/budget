import { Button } from "@mui/material";
import { useState } from "react";
import EditBudgetModal from "./EditBudgetModal";
import useBudget from "../hooks/useBudget";
import useNetWorth from "../hooks/useNetWorth";
import CustomCard from "./CustomCard";

export default function Budget() {
  const [budget] = useBudget();
  const [open, setOpen] = useState(false);
  //   const netWorth =
  //     budget -
  //     expenses.map((e) => e.Price).reduce((next, current) => next + current, 0);
  const netWorth = useNetWorth();
  return (
    <CustomCard className="w-full flex flex-col justify-between p-2">
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
    </CustomCard>
  );
}
