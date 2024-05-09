import { Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import useBudget from "../hooks/useBudget";

type props = {
  open: boolean;
  handleClose: () => void;
};

export default function EditBudgetModal({ open, handleClose }: props) {
  const [, setBudget] = useBudget();
  const [value, setValue] = useState<number>();

  const edit = () => {
    setBudget(value as number);
    handleClose();
    setValue(undefined);
  };

  return (
    <Modal
      className="flex items-center justify-center "
      open={open}
      onClose={() => {
        handleClose();
      }}
    >
      <div className="bg-white flex flex-col w-[300px] p-2 rounded-md">
        <h1 className="self-center font-bold">Edit Budget</h1>
        <div className="flex flex-col gap-7">
          <TextField
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value) as number)}
            label="Budget"
            variant="standard"
            size="small"
          />

          <Button
            sx={{ backgroundColor: "#A91D3A" }}
            variant="contained"
            color="success"
            onClick={edit}
          >
            Edit
          </Button>
        </div>
      </div>
    </Modal>
  );
}
