import { useRecoilState } from "recoil";
import { expenseAtom } from "../store";
import { expense } from "../types/expense";
import { useEffect } from "react";

export default function useExpense(defaultValue?: expense[]) {
  const [expenses, setExpenses] = useRecoilState(expenseAtom);
  useEffect(() => {
    if (defaultValue != null) {
      setExpenses(defaultValue);
    }
  }, []);
  return [expenses, setExpenses] as const;
}
