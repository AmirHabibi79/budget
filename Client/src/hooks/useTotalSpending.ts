import { useRecoilValue } from "recoil";
import { totalSpendingSelector } from "../store";

export default function useTotalSpending() {
  return useRecoilValue(totalSpendingSelector);
}
