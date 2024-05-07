import { expenseType } from "../types/expense";

const getType = (type: expenseType): string => {
  let exType = "";
  switch (type) {
    case expenseType.Eating:
      exType = "eating";
      break;
    case expenseType.Clothing:
      exType = "clothing";
      break;
    case expenseType.Debt:
      exType = "debt";
      break;
    case expenseType.Insurance:
      exType = "insurance";
      break;
    default:
      break;
  }
  return exType;
};

export default getType;
