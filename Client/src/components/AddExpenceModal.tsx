import {
  Button,
  Modal,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { expenseType } from "../types/expense";
import { DatePicker } from "@mui/x-date-pickers";
import useExpense from "../hooks/useExpense";
import { Dayjs } from "dayjs";

type props = {
  open: boolean;
  handleClose: () => void;
};

export default function AddExpenceModal({ open, handleClose }: props) {
  const [expenses, setExpenses] = useExpense();

  const [date, setDate] = useState<Dayjs | null>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [type, setType] = useState<expenseType>();

  const addToExpense = () => {
    setExpenses([
      ...expenses,
      {
        Id: expenses.length + 1,
        Date: date as Dayjs,
        Name: name,
        Price: price as number,
        Type: type as expenseType,
      },
    ]);
    handleClose();
  };

  return (
    <Modal
      className="flex items-center justify-center "
      open={open}
      onClose={() => {
        handleClose();
      }}
    >
      <div className="bg-white flex flex-col p-2 rounded-md">
        <h1 className="self-center font-bold">New Expense</h1>
        <div className="flex flex-col gap-7 w-[300px]">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="standard"
            size="small"
          />

          <FormControl>
            <InputLabel>Type</InputLabel>
            <Select
              labelId="expense-type"
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value as expenseType)}
            >
              <MenuItem value={0}>Eating</MenuItem>
              <MenuItem value={1}>Clothing</MenuItem>
              <MenuItem value={2}>Debt</MenuItem>
              <MenuItem value={3}>Insurance</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Price"
            variant="standard"
            size="small"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
          <DatePicker
            label="Date"
            format="YYYY / MM / DD"
            views={["year", "month", "day"]}
            value={date}
            onChange={(newValue) => {
              const format = newValue;
              format?.hour(23);
              format?.minute(59);
              format?.second(59);
              setDate(format);
            }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#A91D3A" }}
            onClick={addToExpense}
          >
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
}
