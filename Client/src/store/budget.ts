import { atom, selector } from "recoil";
import { expenseAtom } from "./index";
const budget = atom({
  key: "budget",
  default: 0,
});

const netWorth = selector({
  key: "netWorth",
  get: ({ get }) => {
    const expenses = get(expenseAtom);
    const bud = get(budget);
    return (
      bud -
      expenses.map((e) => e.Price).reduce((next, current) => next + current, 0)
    );
  },
});

export { budget, netWorth };
