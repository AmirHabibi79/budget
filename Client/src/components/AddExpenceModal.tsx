import { Button, Modal, TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { expenseType } from "../types/expense";
import { Moment } from "moment";
import { DatePicker } from "@mui/x-date-pickers";
import useExpense from "../hooks/useExpense";

type props = {
  open: boolean;
  handleClose: () => void;
};

export default function AddExpenceModal({ open, handleClose }: props) {
  const [expenses, setExpenses] = useExpense();

  const [date, setDate] = useState<Moment | null>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [type, setType] = useState<expenseType>();

  const addToExpense = () => {
    setExpenses([
      ...expenses,
      {
        Id: expenses.length + 1,
        Date: date?.toDate() as Date,
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
      <div className="bg-white flex flex-col p-2">
        <h1 className="self-center">New Expense</h1>
        <div className="flex flex-col gap-2">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="standard"
            size="small"
          />

          {/* {
        TODO:fix the color of select lable
      } */}
          <Select
            labelId="expense-type"
            className="text-black"
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value as expenseType)}
          >
            <MenuItem value={0}>Eating</MenuItem>
            <MenuItem value={1}>Clothing</MenuItem>
            <MenuItem value={2}>Debt</MenuItem>
            <MenuItem value={3}>Insurance</MenuItem>
          </Select>
          <TextField
            label="Price"
            variant="standard"
            size="small"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
          <DatePicker
            format="YYYY / MM / DD"
            views={["year", "month", "day"]}
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
          <Button variant="contained" color="success" onClick={addToExpense}>
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
}
