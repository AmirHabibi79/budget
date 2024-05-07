import { useRecoilValue } from "recoil";
import { upcomingExpensesSelector } from "../store";
export default function useUpcomingExpenses() {
  const up = useRecoilValue(upcomingExpensesSelector);
  return up;
}
