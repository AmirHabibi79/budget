import { expensesWithPercentageSelector } from "../store";
import { useRecoilValue } from "recoil";
export default function useExpensesWithPercentage() {
  const allExpenses = useRecoilValue(expensesWithPercentageSelector);

  return allExpenses;
}
