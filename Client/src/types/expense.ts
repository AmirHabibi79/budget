import { Dayjs } from "dayjs";

export type expense = {
  Id: number;
  Name: string;
  Type: expenseType;
  Date: Dayjs;
  Price: number;
};
export type expenseWithPercentage = expense & {
  Percent: number;
};
export enum expenseType {
  Eating,
  Clothing,
  Debt,
  Insurance,
}
export type percentages = {
  Type: string;
  Amount: number;
  Percent: number;
};
