import { expense } from "../types/expense";
import getType from "../helper/getExpenseTypeAsString";
import CustomCard from "./CustomCard";
export default function ExpenceItem({ Name, Date, Price, Type }: expense) {
  let exType = getType(Type);
  return (
    <CustomCard className="flex justify-between w-full h-[70px] p-2">
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{Name}</span>
          <span className="font-thin">{exType}</span>
        </div>
        <span>{Date.format("YYYY/MM/DD").toString()}</span>
      </div>
      <span className="font-semibold">{Price}</span>
    </CustomCard>
  );
}
