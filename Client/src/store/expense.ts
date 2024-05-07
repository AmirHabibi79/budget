import { atom, selector } from "recoil";
import { expense } from "../types/expense";
import moment from "moment";
const expense = atom<expense[]>({
  key: "expense",
  default: [],
});

const upcomingExpenses = selector({
  key: "upcommingexpense",
  get: ({ get }) => {
    const expenses = get(expense);
    const upEx = expenses.filter((e) => {
      const diff = moment(e.Date).diff(new Date());

      if (diff > 0) {
        return e;
      }
    });
    return upEx;
  },
});

export { expense, upcomingExpenses };
