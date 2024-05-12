import { atom, selector } from "recoil";
import { totalSpendingSelector } from "./index";
const budget = atom({
  key: "budget",
  default: 0,
});

const netWorth = selector({
  key: "netWorth",
  get: ({ get }) => {
    const bud = get(budget);
    const totalspend = get(totalSpendingSelector);
    return bud - totalspend;
  },
});

export { budget, netWorth };
