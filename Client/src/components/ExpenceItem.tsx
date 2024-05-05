import { expense, expenseType } from "../types/expense";

export default function ExpenceItem({ Id, Name, Date, Price, Type }: expense) {
  let exType;
  switch (Type) {
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
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <span>{Name}</span>
          <span>{exType}</span>
        </div>
        <span>
          {Date.getUTCFullYear() +
            "/" +
            Date.getUTCMonth() +
            "/" +
            Date.getUTCDate()}
        </span>
      </div>
      <span>{Price}</span>
    </div>
  );
}
