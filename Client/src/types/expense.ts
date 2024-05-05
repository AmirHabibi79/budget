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
