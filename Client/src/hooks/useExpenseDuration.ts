import { useRecoilState } from "recoil";
import { expenseDurationAtom } from "../store";
export default function useExpenseDuration() {
  const [date, setDate] = useRecoilState(expenseDurationAtom);

  return [date, setDate] as const;
}
