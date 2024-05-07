import { useRecoilValue } from "recoil";
import { netWorthSelector } from "../store";

export default function useNetWorth() {
  return useRecoilValue(netWorthSelector);
}
