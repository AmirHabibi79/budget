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
      <div className="bg-white flex flex-col p-2">
        <h1 className="self-center">Edit Budget</h1>
        <div className="flex flex-col gap-2">
          <TextField
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value) as number)}
            label="Budget"
            variant="standard"
            size="small"
          />

          <Button variant="contained" color="success" onClick={edit}>
            Edit
          </Button>
        </div>
      </div>
    </Modal>
  );
}
