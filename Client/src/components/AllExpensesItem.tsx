import { expense } from "../types/expense";
import CustomCard from "./CustomCard";

type props = expense & {
  Percent: number;
  Color: string;
};

export default function AllExpensesItem({
  Name,
  Percent,
  Price,
  Color,
}: props) {
  return (
    <CustomCard className="flex items-center w-full p-2 h-[42px]">
      <div className="w-full mr-10 flex gap-2 items-center">
        <span className=" h-4 w-4 block " style={{ backgroundColor: Color }} />
        <span className="font-semibold w-[130px]  truncate ">{Name}</span>
      </div>
      <div className="flex items-center justify-between w-full ">
        <span className="  align-middle">{Percent + "%"}</span>
        <span className=" text-right ">{Price}</span>
      </div>
    </CustomCard>
  );
}
