import { expense, expenseType, percentages } from "../types/expense";
import getType from "../helper/getExpenseTypeAsString";
import { atom, selector } from "recoil";
import moment from "moment";
import lodash from "lodash";
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

type groups = {
  [x: number]: [];
};

const expensesPercentage = selector({
  key: "expensesPercentage",
  get: ({ get }) => {
    const expenses = get(expense);
    const groups = lodash.groupBy(expenses, "Type") as groups;
    const percentages: percentages[] = Object.keys(groups).map((key) => {
      const parsedInt = parseInt(key);
      const amount = groups[parsedInt].length;
      const percentage: percentages = {
        type: getType(parsedInt as expenseType),
        amount,
        percent: parseInt(((amount / expenses.length) * 100).toString()),
      };
      return percentage;
    });
    // return the largest to smallest

    return lodash.orderBy(percentages, "percent", "desc");
  },
});

export { expense, upcomingExpenses, expensesPercentage };
