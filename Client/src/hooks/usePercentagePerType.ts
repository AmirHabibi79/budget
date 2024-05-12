import { useRecoilValue } from "recoil";
import { percentagePerTypeSelector } from "../store";

export default function usePercentagePerType() {
  const percent = useRecoilValue(percentagePerTypeSelector);

  return percent;
}
