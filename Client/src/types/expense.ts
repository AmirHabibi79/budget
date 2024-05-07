export type expense = {
  Id: number;
  Name: string;
  Type: expenseType;
  Date: Date;
  Price: number;
};

export enum expenseType {
  Eating,
  Clothing,
  Debt,
  Insurance,
}
export type percentages = {
  type: string;
  amount: number;
  percent: number;
};
