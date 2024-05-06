import { useRecoilState } from "recoil";
import { budgetAtom } from "../store";
import { useEffect } from "react";

export default function useBudget(defaultValue?: number) {
  const [budget, setBudget] = useRecoilState(budgetAtom);
  useEffect(() => {
    if (defaultValue != null) {
      setBudget(defaultValue);
    }
  }, []);
  return [budget, setBudget] as const;
}
