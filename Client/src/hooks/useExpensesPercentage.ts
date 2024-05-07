import { useRecoilValue } from "recoil";
import { expensesPercentageSelector } from "../store";

export default function useExpensesPercentage() {
  const percent = useRecoilValue(expensesPercentageSelector);

  return percent;
}
