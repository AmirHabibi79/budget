import { useRecoilValue } from "recoil";
import { netWorthAtom } from "../store";

export default function useNetWorth() {
  return useRecoilValue(netWorthAtom);
}
