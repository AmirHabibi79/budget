import { expense, expenseType, percentages } from "../types/expense";
import getType from "../helper/getExpenseTypeAsString";
import { atom, selector } from "recoil";
import lodash from "lodash";
import dayjs, { Dayjs } from "dayjs";
const expense = atom<expense[]>({
  key: "expense",
  default: [],
});

const expenseDuration = atom<Dayjs>({
  key: "expenseDuration",
  default: dayjs(new Date()),
});

const totalSpending = selector({
  key: "totalSpending",
  get: ({ get }) => {
    const expenses = get(expense);
    const total = expenses
      .map((e) => e.Price)
      .reduce((next, current) => next + current, 0);
    return total;
  },
});

const expensesWithPercentage = selector({
  key: "expensesWithPercentage",
  get: ({ get }) => {
    const expenses = get(expense);
    const duration = get(expenseDuration);
    const exInThisDuration = expenses.filter((e) => {
      const expenseDate = dayjs(e.Date);

      if (
        duration?.year() === expenseDate.year() &&
        duration?.month() === expenseDate.month()
      ) {
        return e;
      }
    });
    const totalSpendingInThisDuration = exInThisDuration
      .map((e) => e.Price)
      .reduce((next, current) => next + current, 0);
    // Percent: parseFloat(((e.Price / total) * 100).toFixed(2)),

    const exWithPercent = exInThisDuration.map((e) => {
      return {
        ...e,
        Percent: Math.round((e.Price / totalSpendingInThisDuration) * 100),
      };
    });

    return {
      expenses: exWithPercent,
      totalSpending: totalSpendingInThisDuration,
    };
  },
});

const upcomingExpenses = selector({
  key: "upcommingexpense",
  get: ({ get }) => {
    const expenses = get(expense);
    const upEx = expenses.filter((e) => {
      const diff = dayjs(e.Date).diff(new Date());

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

const percentagePerType = selector({
  key: "percentagePerType",
  get: ({ get }) => {
    const expenses = get(expense);
    const groups = lodash.groupBy(expenses, "Type") as groups;
    const percentages: percentages[] = Object.keys(groups).map((key) => {
      const parsedInt = parseInt(key);
      const Amount = groups[parsedInt].length;
      const percentage: percentages = {
        Type: getType(parsedInt as expenseType),
        Amount,
        Percent: Math.round((Amount / expenses.length) * 100),
      };
      return percentage;
    });
    // return the largest to smallest

    return lodash.orderBy(percentages, "percent", "desc");
  },
});

export {
  expense,
  upcomingExpenses,
  percentagePerType,
  expensesWithPercentage,
  totalSpending,
  expenseDuration,
};
