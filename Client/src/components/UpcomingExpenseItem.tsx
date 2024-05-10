import { expense } from "../types/expense";
import getType from "../helper/getExpenseTypeAsString";
export default function ExpenceItem({ Name, Date, Price, Type }: expense) {
  let exType = getType(Type);
  return (
    <div className="flex justify-between shadow-[2px_4px_20px_-4px_rgba(0,0,0,0.1)] rounded-md p-2 h-[70px]">
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{Name}</span>
          <span className="font-thin">{exType}</span>
        </div>
        <span>
          {Date.getUTCFullYear() +
            "/" +
            Date.getUTCMonth() +
            "/" +
            Date.getUTCDate()}
        </span>
      </div>
      <span className="font-semibold">{Price}</span>
    </div>
  );
}
