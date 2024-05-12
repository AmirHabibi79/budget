import { expense } from "../types/expense";

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
    <div className="flex items-center w-full">
      <div className="w-full mr-10 flex gap-2 items-center">
        <span className=" h-4 w-4 block " style={{ backgroundColor: Color }} />
        <span>{Name}</span>
      </div>
      <div className="flex items-center justify-between w-full">
        <span className="  align-middle">{Percent + "%"}</span>
        <span className=" text-right ">{Price}</span>
      </div>
    </div>
  );
}
